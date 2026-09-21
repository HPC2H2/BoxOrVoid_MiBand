const test = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const sharp = require('sharp')
const { createRuntime, ROOT } = require('./helpers.cjs')

test('selection is the entry point and opens each registered mode exactly once', async () => {
  const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'src/manifest.json')))
  assert.equal(manifest.router.entry, 'pages/select')
  for (const id of ['classic', 'timed', 'mobius']) {
    const runtime = createRuntime()
    const page = await runtime.page('src/pages/select/index.ux')
    page.openMode('unknown')
    assert.equal(runtime.routes.length, 0)
    page.openMode(id)
    page.openMode(id)
    assert.equal(runtime.routes.length, 1)
    assert.equal(runtime.routes[0].method, 'replace')
    assert.ok(manifest.router.pages[runtime.routes[0].uri.slice(1)])
  }
})

test('classic title/back returns to selection and clears button feedback', async () => {
  const runtime = createRuntime()
  const page = await runtime.page()
  page.onDown()
  assert.ok(runtime.timers.size)
  assert.equal(page.onBackPress(), true)
  page.goToSelection()
  assert.equal(runtime.timers.size, 0)
  assert.equal(runtime.routes.length, 1)
  assert.equal(runtime.routes[0].uri, '/pages/select')
})

test('Mobius geometry matches the playable board and its seam joins the same projected points', async () => {
  const runtime = createRuntime()
  const { advanceOnBand, projectBandPoint, projectMarker, VIEW_FRAMES, BAND_COLUMNS, BAND_ROWS } = await runtime.load('src/demos/mobiusGeometry.js')
  const { MOBIUS_LEVEL } = await runtime.load('src/game/challenges/levels.js')
  assert.equal(BAND_COLUMNS, MOBIUS_LEVEL.mapWidth)
  assert.equal(BAND_ROWS, MOBIUS_LEVEL.mapHeight)
  let position = { x: 0, y: 0, crossings: 0 }
  for (let i = 0; i < BAND_COLUMNS; i++) position = advanceOnBand(position)
  assert.equal(position.x, 0)
  assert.equal(position.y, BAND_ROWS - 1)
  assert.equal(position.crossings, 1)
  for (let i = 0; i < BAND_COLUMNS; i++) position = advanceOnBand(position)
  assert.equal(position.y, 0)
  for (let frame = 0; frame < VIEW_FRAMES; frame++) {
    for (const v of [-0.42, 0, 0.42]) {
      const a = projectBandPoint(0, v, frame)
      const b = projectBandPoint(2 * Math.PI, -v, frame)
      assert.ok(Math.abs(a.x - b.x) < 1e-8 && Math.abs(a.y - b.y) < 1e-8)
    }
    for (let y = 0; y < BAND_ROWS; y++) for (let x = 0; x < BAND_COLUMNS; x++) {
      const p = projectMarker({ x, y }, frame)
      assert.ok(p.x >= 8 && p.x <= 160 && p.y >= 8 && p.y <= 160)
    }
  }
})

test('pixel labels and every ring angle have packaged, decodable images', async () => {
  const runtime = createRuntime()
  for (const value of ['选关', '经典', '定时变化', '莫比乌斯环', '暂停', '继续', '转动', '展开', '环视图', '返回', '重置', '秒', '0123456789']) {
    const label = await runtime.page('src/components/PixelLabel/index.ux', { value })
    assert.equal(label.glyphs.length, value.length)
    for (const file of label.glyphs) {
      const metadata = await sharp(path.join(ROOT, 'src', file)).metadata()
      assert.equal(metadata.width, 56)
      assert.equal(metadata.height, 56)
    }
  }
  for (let frame = 0; frame < 12; frame++) {
    const metadata = await sharp(path.join(ROOT, `src/common/image/mobius/ring-${frame}.png`)).metadata()
    assert.equal(metadata.width, 168)
    assert.equal(metadata.height, 168)
  }
})
