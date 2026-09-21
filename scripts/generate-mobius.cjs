// Render lightweight, deterministic 2D projections for Vela's image component.
const fs = require('node:fs/promises')
const path = require('node:path')
const sharp = require('sharp')

async function main() {
  const root = path.resolve(__dirname, '..')
  const source = await fs.readFile(path.join(root, 'src/demos/mobiusGeometry.js'), 'utf8')
  const { getBandTiles, VIEW_FRAMES } = await import('data:text/javascript;base64,' + Buffer.from(source).toString('base64'))
  const levels = await fs.readFile(path.join(root, 'src/game/challenges/levels.js'), 'utf8')
  const { MOBIUS_LEVEL } = await import('data:text/javascript;base64,' + Buffer.from(levels).toString('base64'))
  const output = path.join(root, 'src/common/image/mobius')
  await fs.mkdir(output, { recursive: true })
  for (let frame = 0; frame < VIEW_FRAMES; frame++) {
    const parts = ['<svg xmlns="http://www.w3.org/2000/svg" width="168" height="168">']
    for (const tile of getBandTiles(frame)) {
      const key = `${tile.y},${tile.x}`
      const wall = MOBIUS_LEVEL.walls.includes(key)
      const light = MOBIUS_LEVEL.mapRules[key] === 0
      const shade = wall ? '#15191F' : tile.depth > 0 ? (light ? '#F8F9FA' : '#45556C') : (light ? '#AAB4C2' : '#253142')
      parts.push(`<polygon points="${tile.points.map(p => `${p.x.toFixed(2)},${p.y.toFixed(2)}`).join(' ')}" fill="${shade}" stroke="${tile.seam ? '#9B59B6' : '#252C35'}" stroke-width="0.5"/>`)
    }
    parts.push('</svg>')
    await sharp(Buffer.from(parts.join(''))).png({ compressionLevel: 9 }).toFile(path.join(output, `ring-${frame}.png`))
  }
  console.log(`Generated ${VIEW_FRAMES} Möbius views.`)
}

main().catch(error => { console.error(error); process.exitCode = 1 })
