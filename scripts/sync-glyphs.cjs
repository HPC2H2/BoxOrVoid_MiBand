// Keep existing icon URLs stable while updating their Ark Pixel glyphs.
const fs = require('node:fs/promises')
const path = require('node:path')
const assert = require('node:assert/strict')
const sharp = require('sharp')

const SOURCE = path.resolve(__dirname, '../docs/assets/ark-pixel-glyphs')
const DESTINATION = path.resolve(__dirname, '../src/common/image/icons')
const CHARACTERS = {
  black: '黑', white: '白', box: '箱', target: '位',
  chong: '重', dao: '到', huan: '换', qie: '切', zhi: '置',
  che: '撤', xiao: '销', wan: '玩'
}
const VARIANTS = {
  white: Object.keys(CHARACTERS),
  grey: ['black', 'white', 'box', 'target', 'chong', 'dao', 'huan', 'qie', 'zhi']
}
const UI_CHARACTERS = Array.from(new Set('选关经典定时变化莫比乌斯环暂停继续翻色转动展开返回视图重置前进秒0123456789'))

async function main() {
  const manifest = JSON.parse(await fs.readFile(path.join(SOURCE, 'manifest.json'), 'utf8'))
  const pending = []
  // Validate the complete selection before writing any application assets.
  const selections = Object.entries(VARIANTS).flatMap(([color, names]) =>
    names.map(name => ({ color, character: CHARACTERS[name], filename: `${color}-${name}.png` })))
  selections.push(...UI_CHARACTERS.map(character => ({
    color: 'white', character,
    filename: `../glyphs/white-u${character.charCodeAt(0).toString(16).padStart(4, '0')}.png`
  })))
  for (const { color, character, filename } of selections) {
    const relative = manifest.glyphs[character]?.[color]
    assert.ok(relative, `Missing ${color} glyph: ${character}`)
    const data = await fs.readFile(path.join(SOURCE, relative))
    const metadata = await sharp(data).metadata()
    assert.equal(metadata.format, 'png')
    assert.equal(metadata.width, 48)
    assert.equal(metadata.height, 48)
    assert.equal(metadata.hasAlpha, true)
    // The 48px source has ink on its last scanline. Vela's downscaling can
    // clip that scanline at 15/20px, so keep a transparent sampling guard.
    // Preserve every source pixel; only the runtime copy gets this padding.
    const padded = await sharp(data).extend({
      top: 0, bottom: 8, left: 4, right: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }).png({ compressionLevel: 9 }).toBuffer()
    const decoded = await sharp(padded).ensureAlpha().raw().toBuffer({ resolveWithObject: true })
    assert.equal(decoded.info.width, 56)
    assert.equal(decoded.info.height, 56)
    for (let y = 48; y < 56; y++) {
      for (let x = 0; x < 56; x++) assert.equal(decoded.data[(y * 56 + x) * 4 + 3], 0)
    }
    assert.deepEqual(
      await sharp(padded).extract({ left: 4, top: 0, width: 48, height: 48 }).raw().toBuffer(),
      await sharp(data).raw().toBuffer()
    )
    pending.push({ filename, data: padded })
  }
  for (const { filename, data } of pending) {
    const destination = path.join(DESTINATION, filename)
    await fs.mkdir(path.dirname(destination), { recursive: true })
    await fs.writeFile(destination, data)
    assert.deepEqual(await fs.readFile(destination), data)
  }
  console.log(`Synced ${pending.length} Ark Pixel glyphs (${pending.reduce((sum, item) => sum + item.data.length, 0)} bytes).`)
}

main().catch(error => {
  console.error(error)
  process.exitCode = 1
})
