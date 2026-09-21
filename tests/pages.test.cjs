const test = require('node:test')
const assert = require('node:assert/strict')
const { createRuntime, snapshot } = require('./helpers.cjs')

test('invalid movement and empty undo show a toast without throwing', async () => {
  const runtime = createRuntime()
  const page = await runtime.page()
  page.onUp()
  page.onUndo()
  assert.equal(runtime.toasts.length, 2)
  assert.equal(page._game.state.stepCount, 0)
})

test('one move computes the board and win once; switching leaves board objects unchanged', async () => {
  const page = await createRuntime().page()
  const game = page._game
  let displays = 0, checks = 0
  const display = game.updateCellDisplay.bind(game)
  const check = game.winChecker.checkWin.bind(game.winChecker)
  game.updateCellDisplay = () => { displays++; return display() }
  game.winChecker.checkWin = () => { checks++; return check() }
  const icons = page.cellIcons, styles = page.cellStyles, cell = page.cellIcons['3,2']
  page.onRight()
  assert.equal(displays, 1)
  assert.equal(checks, 1)
  assert.equal(page.cellIcons, icons)
  assert.equal(page.cellStyles, styles)
  assert.equal(page.cellIcons['3,2'], cell)
  assert.equal(page.cellIcons['3,2'].src, '')
  assert.equal(page.cellIcons['3,3'].src, '/common/image/icons/white-black.png')
  const board = JSON.stringify(page.cellIcons)
  page.onSwitch()
  assert.equal(displays, 1)
  assert.equal(page.currentPlayer, 6)
  assert.equal(JSON.stringify(page.cellIcons), board)
})

test('alternating and repeated buttons finish their own feedback timers', async () => {
  const runtime = createRuntime()
  const page = await runtime.page()
  page.onRight()
  runtime.advance(100)
  page.onDown()
  runtime.advance(100)
  assert.equal(page.rightBtnColor, '#2ECC71')
  assert.equal(page.downBtnColor, '#36D1DC')
  runtime.advance(100)
  assert.equal(page.downBtnColor, '#2ECC71')
  page.flashButton('up')
  runtime.advance(100)
  page.flashButton('up')
  runtime.advance(100)
  assert.equal(page.upBtnColor, '#36D1DC')
  runtime.advance(100)
  assert.equal(page.upBtnColor, '#2ECC71')
  assert.equal(runtime.timers.size, 0)
})

test('reset restores board and controls; hiding and destruction clear pending timers', async () => {
  const runtime = createRuntime({ deviceMode: 'deferred' })
  const page = await runtime.page()
  const initial = snapshot(page._game)
  const board = JSON.stringify(page.cellIcons)
  page.onRight()
  page.onDown()
  page.onSwitch()
  page.onReset()
  assert.deepEqual(snapshot(page._game), initial)
  assert.equal(JSON.stringify(page.cellIcons), board)
  assert.equal(page.rightBtnColor, '#2ECC71')
  assert.equal(page.switchBtnColor, '#3498DB')
  page.onHide()
  assert.equal(runtime.timers.size, 0)
  assert.equal(page.resetBtnColor, '#E74C3C')
  page.onSwitch()
  page.onDestroy()
  assert.equal(runtime.timers.size, 0)
  assert.equal(page._game, null)
  const sizes = page.adaptedSizes
  runtime.deviceRequest.success({ screenWidth: 212 })
  assert.equal(page.adaptedSizes, sizes)
  assert.doesNotThrow(() => page.onRight())
})

for (const [width, height] of [[192, 490], [212, 520]]) {
  test(`${width}x${height} keeps the board and paired glyphs inside their containers`, async () => {
    const page = await createRuntime({ deviceInfo: { screenWidth: width, screenHeight: height } }).page()
    const sizes = page.adaptedSizes
    assert.equal(sizes.scale, Math.min(width / 192, height / 490))
    assert.ok(5 * sizes.cellSize + 2 * sizes.gridPadding <= width - 2 * sizes.padding)
    assert.ok(2 * sizes.cellIconSmallSize <= sizes.cellSize - 2 * sizes.cellBorder)
    assert.ok(2 * sizes.btnIconSize + 4 <= sizes.undoBtnWidth)
    assert.ok(2 * sizes.btnIconSize + 4 <= sizes.resetBtnWidth)
    assert.ok(sizes.paddingTop >= 28)
    assert.ok(sizes.paddingBottom >= 32)
  })
}

test('a wider screen with the same height does not enlarge the page vertically', async () => {
  const compact = await createRuntime({ deviceInfo: { screenWidth: 212, screenHeight: 490 } }).page()
  const taller = await createRuntime({ deviceInfo: { screenWidth: 212, screenHeight: 520 } }).page()
  assert.equal(compact.adaptedSizes.scale, 1)
  assert.ok(taller.adaptedSizes.cellSize > compact.adaptedSizes.cellSize)
})

test('device error, pending response and invalid dimensions have usable initial sizes', async () => {
  for (const deviceMode of ['fail', 'throw', 'deferred']) {
    const page = await createRuntime({ deviceMode }).page()
    assert.equal(page.adaptedSizes.cellSize, 32)
  }
  for (const screenWidth of [undefined, 0, -1, 'invalid']) {
    const page = await createRuntime({ deviceInfo: { screenWidth } }).page()
    assert.equal(page.adaptedSizes.cellSize, 32)
  }
  for (const screenHeight of [undefined, 0, -1, 'invalid']) {
    const page = await createRuntime({ deviceInfo: { screenWidth: 212, screenHeight } }).page()
    assert.equal(page.adaptedSizes.scale, 520 / 490)
  }
})

test('winning move routes once; replay and back return to a registered level', async () => {
  const runtime = createRuntime()
  const page = await runtime.page()
  const level = page.getLevel1Data()
  page._game.initLevel({
    ...level,
    whitePlayer: { x: 1, y: 5 }, blackPlayer: { x: 3, y: 2 },
    whiteBoxes: [{ x: 1, y: 6 }], blackBoxes: [{ x: 3, y: 3 }]
  })
  page.updateDisplay()
  page.onRight()
  page.onRight()
  page.onUndo()
  page.onReset()
  assert.equal(runtime.routes.length, 1)
  assert.equal(runtime.routes[0].method, 'replace')
  assert.equal(runtime.routes[0].uri, '/pages/win')
  assert.equal(runtime.timers.size, 0)
  const win = await runtime.page('src/pages/win/index.ux', runtime.routes[0].params)
  win.restartLevel()
  win.restartLevel()
  assert.equal(runtime.routes.length, 2)
  assert.equal(runtime.routes[1].uri, '/pages/levels/level01')
  const restarted = await runtime.page()
  assert.equal(restarted._game.state.stepCount, 0)
  assert.equal(restarted._game.canUndo(), false)
  const winAgain = await runtime.page('src/pages/win/index.ux')
  assert.equal(winAgain.onBackPress(), true)
  assert.equal(runtime.routes[2].uri, '/pages/levels/level01')
})

test('win page handles missing, legacy and invalid route parameters without $page.options', async () => {
  for (const levelPath of [undefined, '', 'pages/levels/level01', '/pages/levels/level01', 'pages/levels/level01/index.ux']) {
    const runtime = createRuntime()
    const page = await runtime.page('src/pages/win/index.ux', { levelPath })
    page.restartLevel()
    assert.equal(runtime.routes[0].uri, '/pages/levels/level01')
  }
})

test('cell size styles preserve the dynamic player border color', async () => {
  const runtime = createRuntime()
  const { getAdaptedSizes } = await runtime.load('src/common/screenAdapter.js')
  const grid = await runtime.page('src/components/GameGrid/index.ux', { sizeConfig: getAdaptedSizes(212) })
  assert.match(grid.cellStyle, /border-width: 1px/)
  assert.doesNotMatch(grid.cellStyle, /border:|#333333/)
})

test('level 1 can be completed from its real starting position and replayed', async () => {
  const solution = require('./fixtures/level01-solution.json')
  const runtime = createRuntime()
  const page = await runtime.page()
  for (const action of solution) {
    page[action]()
    runtime.advance(600)
  }
  assert.equal(runtime.toasts.length, 0)
  assert.equal(page._game.checkWin(), true)
  assert.equal(page._game.state.stepCount, solution.filter(action => action !== 'onSwitch').length)
  assert.equal(runtime.routes.length, 1)
  assert.equal(runtime.routes[0].uri, '/pages/win')
  const win = await runtime.page('src/pages/win/index.ux', runtime.routes[0].params)
  win.restartLevel()
  assert.equal(runtime.routes[1].uri, '/pages/levels/level01')
  const replay = await runtime.page()
  assert.equal(replay._game.checkWin(), false)
  assert.equal(replay._game.state.stepCount, 0)
})
