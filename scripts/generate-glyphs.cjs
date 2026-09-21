// Export exact Ark Pixel bitmap glyphs; no installed fonts or network required.
const fs = require('node:fs/promises')
const path = require('node:path')
const assert = require('node:assert/strict')
const sharp = require('sharp')

const OUTPUT = path.resolve(__dirname, '../docs/assets/ark-pixel-glyphs')
const SIZE = 48
const COLORS = { white: '#FFFFFF', grey: '#4B4B4B' }

function renderGlyph(source, glyph, hexColor) {
  const scale = SIZE / source.emSize
  assert.ok(Number.isInteger(scale), 'Glyphs require integer scaling')
  const [width, height, bearingX, bearingY] = glyph.bounds
  assert.equal(glyph.rows.length, height)
  const inkLeft = Math.floor((source.emSize - glyph.advance) / 2) + bearingX
  const inkTop = source.ascent - bearingY - height
  const rgb = hexColor.slice(1).match(/../g).map(value => parseInt(value, 16))
  const pixels = Buffer.alloc(SIZE * SIZE * 4)

  for (let row = 0; row < height; row++) {
    const bytes = Buffer.from(glyph.rows[row], 'hex')
    for (let column = 0; column < width; column++) {
      if (!(bytes[column >> 3] & (0x80 >> (column & 7)))) continue
      const left = (inkLeft + column) * scale
      const top = (inkTop + row) * scale
      assert.ok(left >= 0 && top >= 0 && left + scale <= SIZE && top + scale <= SIZE,
        `Clipped glyph: ${glyph.character}`)
      for (let dy = 0; dy < scale; dy++) {
        for (let dx = 0; dx < scale; dx++) {
          const index = ((top + dy) * SIZE + left + dx) * 4
          pixels[index] = rgb[0]
          pixels[index + 1] = rgb[1]
          pixels[index + 2] = rgb[2]
          pixels[index + 3] = 255
        }
      }
    }
  }
  return pixels
}

async function verifyPng(filename, pixels) {
  const result = await sharp(filename).ensureAlpha().raw().toBuffer({ resolveWithObject: true })
  assert.equal(result.info.width, SIZE)
  assert.equal(result.info.height, SIZE)
  // Assert exact colors and alpha after PNG encoding, including transparent pixels.
  assert.deepEqual(result.data, pixels)
  assert.ok(pixels.some((value, index) => index % 4 === 3 && value === 255))
  assert.ok(pixels.some((value, index) => index % 4 === 3 && value === 0))
}

async function createPreview(source, files) {
  const columns = 8, cellWidth = 62, cellHeight = 76, panelWidth = 520
  const height = 106 + Math.ceil(source.glyphs.length / columns) * cellHeight + 20
  const width = panelWidth * 2 + 40
  const parts = [
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">`,
    `<rect width="${width}" height="${height}" fill="#e9ecef"/>`,
    `<rect x="12" y="12" width="${panelWidth}" height="${height - 24}" rx="12" fill="#1a1a1a"/>`,
    `<rect x="548" y="12" width="${panelWidth}" height="${height - 24}" rx="12" fill="#f8f9fa"/>`,
    '<g font-family="Arial, sans-serif">',
    '<text x="28" y="48" font-size="24" fill="#ffffff">ARK PIXEL / WHITE</text>',
    '<text x="564" y="48" font-size="24" fill="#4b4b4b">ARK PIXEL / GREY</text>',
    `<text x="28" y="76" font-size="14" fill="#aaaaaa">${source.glyphs.length} glyphs · 48 × 48 · transparent PNG</text>`,
    `<text x="564" y="76" font-size="14" fill="#666666">12px bitmap × 4 · #4B4B4B</text>`
  ]
  for (let i = 0; i < source.glyphs.length; i++) {
    const glyph = source.glyphs[i]
    for (const [variant, offset, textColor] of [['white', 28, '#aaaaaa'], ['grey', 564, '#666666']]) {
      const x = offset + (i % columns) * cellWidth
      const y = 102 + Math.floor(i / columns) * cellHeight
      const data = await fs.readFile(path.join(OUTPUT, files[glyph.character][variant]))
      parts.push(`<image x="${x}" y="${y}" width="48" height="48" href="data:image/png;base64,${data.toString('base64')}"/>`)
      parts.push(`<text x="${x + 24}" y="${y + 64}" font-size="10" fill="${textColor}" text-anchor="middle">U+${glyph.codepoint.toString(16).toUpperCase().padStart(4, '0')}</text>`)
    }
  }
  parts.push('</g></svg>')
  await sharp(Buffer.from(parts.join(''))).png().toFile(path.join(OUTPUT, 'preview.png'))
}

async function main() {
  const source = JSON.parse(await fs.readFile(path.join(OUTPUT, 'source/glyphs.json'), 'utf8'))
  const files = {}
  let totalBytes = 0
  for (const variant of Object.keys(COLORS)) await fs.mkdir(path.join(OUTPUT, variant), { recursive: true })
  for (const glyph of source.glyphs) {
    const name = `u${glyph.codepoint.toString(16).padStart(4, '0')}`
    files[glyph.character] = {}
    for (const [variant, color] of Object.entries(COLORS)) {
      const relative = `${variant}/${variant}-${name}.png`
      const filename = path.join(OUTPUT, relative)
      const pixels = renderGlyph(source, glyph, color)
      await sharp(pixels, { raw: { width: SIZE, height: SIZE, channels: 4 } })
        .png({ compressionLevel: 9, adaptiveFiltering: false }).toFile(filename)
      await verifyPng(filename, pixels)
      files[glyph.character][variant] = relative
      totalBytes += (await fs.stat(filename)).size
    }
  }
  const manifest = {
    font: source.font, version: source.version, source: source.source,
    size: SIZE, scale: SIZE / source.emSize, colors: COLORS,
    glyphCount: source.glyphs.length, pngCount: source.glyphs.length * 2,
    totalPngBytes: totalBytes, glyphs: files
  }
  await fs.writeFile(path.join(OUTPUT, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n')
  await createPreview(source, files)
  console.log(`Verified ${manifest.pngCount} PNGs (${manifest.glyphCount} glyphs): ${totalBytes} bytes`)
  console.log(`Output: ${OUTPUT}`)
}

main().catch(error => {
  console.error(error)
  process.exitCode = 1
})
