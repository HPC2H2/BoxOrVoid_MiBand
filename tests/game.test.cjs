const test = require('node:test')
const assert = require('node:assert/strict')
const { createRuntime, snapshot } = require('./helpers.cjs')

test('invalid moves and empty undo do not mutate game state', async () => {
  const page = await createRuntime().page()
  const game = page._game
  const initial = snapshot(game)
  assert.equal(game.move(0, -1).success, false)
  assert.equal(game.undo().success, false)
  assert.deepEqual(snapshot(game), initial)
  assert.equal(game.state.history.length, 0)
})

test('move, push, undo and reset restore positions, steps and occupancy', async () => {
  const page = await createRuntime().page()
  const game = page._game
  const level = page.getLevel1Data()
  game.initLevel(level)
  const initial = snapshot(game)
  const levelBefore = JSON.stringify(level)
  assert.equal(game.move(1, 0).success, true)
  assert.equal(game.move(0, 1).success, true)
  assert.equal(game.state.stepCount, 2)
  assert.equal(game.state.hasBlackBox(3, 5), true)
  assert.equal(game.state.hasBlackBox(3, 4), false)
  assert.equal(JSON.stringify(level), levelBefore)
  assert.equal(game.undo().success, true)
  assert.equal(game.state.hasBlackBox(3, 4), true)
  assert.equal(game.state.hasBlackBox(3, 5), false)
  assert.equal(game.undo().success, true)
  assert.deepEqual(snapshot(game), initial)
  game.move(1, 0)
  game.move(0, 1)
  game.initLevel(level)
  assert.deepEqual(snapshot(game), initial)
  assert.equal(game.canUndo(), false)
})

test('white player pushes white box onto its target; black player walks on white box', async () => {
  const page = await createRuntime().page()
  const game = page._game
  const level = page.getLevel1Data()
  level.whitePlayer = { x: 3, y: 6 }
  level.currentPlayer = 6
  game.initLevel(level)
  assert.equal(game.move(-1, 0).success, true)
  assert.equal(game.state.hasWhiteBox(1, 6), true)
  assert.equal(game.state.whiteX, 2)
  assert.equal(game.undo().success, true)
  assert.equal(game.state.hasWhiteBox(2, 6), true)
  level.blackPlayer = { x: 2, y: 5 }
  level.currentPlayer = 7
  game.initLevel(level)
  assert.equal(game.move(0, 1).success, true)
  assert.equal(game.state.blackY, 6)
  assert.equal(game.state.hasWhiteBox(2, 6), true)
})

test('white player walks on black box and overlapping players undo correctly', async () => {
  const page = await createRuntime().page()
  const game = page._game
  const level = page.getLevel1Data()
  level.whitePlayer = { x: 4, y: 4 }
  level.currentPlayer = 6
  game.initLevel(level)
  assert.equal(game.move(-1, 0).success, true)
  assert.equal(game.state.hasBlackBox(3, 4), true)
  level.whitePlayer = { x: 3, y: 3 }
  game.initLevel(level)
  const before = snapshot(game)
  assert.equal(game.move(-1, 0).success, true)
  assert.equal(game.iconManager.getIconType(3, 2), 'white-player')
  game.switchPlayer()
  assert.equal(game.state.stepCount, 1)
  assert.equal(game.iconManager.getIconType(3, 2), 'white-player')
  game.undo()
  assert.deepEqual(snapshot(game), before)
})

test('boundary, occupied destinations and wrong terrain reject pushes', async () => {
  const page = await createRuntime().page()
  const game = page._game
  const base = page.getLevel1Data()
  const cases = [
    { whitePlayer: { x: 1, y: 0 }, currentPlayer: 6, whiteBoxes: [{ x: 0, y: 0 }], delta: [-1, 0] },
    { whitePlayer: { x: 0, y: 0 }, currentPlayer: 6, delta: [0, -1] },
    { blackPlayer: { x: 2, y: 4 }, blackBoxes: [{ x: 3, y: 4 }], delta: [1, 0] },
    { blackPlayer: { x: 3, y: 3 }, blackBoxes: [{ x: 3, y: 4 }, { x: 3, y: 5 }], delta: [0, 1] },
    { blackPlayer: { x: 3, y: 3 }, whitePlayer: { x: 3, y: 5 }, delta: [0, 1] }
  ]
  for (const scenario of cases) {
    game.initLevel({ ...base, ...scenario })
    const before = snapshot(game)
    assert.equal(game.move(...scenario.delta).success, false)
    assert.deepEqual(snapshot(game), before)
  }
})

test('history stays bounded at 50 steps, and step count survives truncated history', async () => {
  const game = (await createRuntime().page())._game
  for (let i = 0; i < 60; i++) assert.equal(game.move(i % 2 ? -1 : 1, 0).success, true)
  assert.equal(game.state.history.length, 50)
  assert.equal(game.state.stepCount, 60)
  for (let i = 0; i < 50; i++) assert.equal(game.undo().success, true)
  assert.equal(game.state.stepCount, 10)
  assert.equal(game.undo().success, false)
})

test('stationary target caches survive moves, pushes and undo; reset clears them', async () => {
  const page = await createRuntime().page()
  const game = page._game
  const targets = game.state._whiteBoxTargetSet
  const boxes = game.state._blackBoxSet
  game.move(1, 0)
  assert.equal(game.state._blackBoxSet, boxes)
  game.move(0, 1)
  assert.notEqual(game.state._blackBoxSet, boxes)
  game.undo()
  assert.equal(game.state._whiteBoxTargetSet, targets)
  game.state.reset()
  assert.equal(game.state.hasBlackBox(3, 4), false)
  assert.equal(game.state.isWhiteBoxTarget(1, 6), false)
})

test('win requires both box colors and both players on their targets', async () => {
  const page = await createRuntime().page()
  const game = page._game
  const level = page.getLevel1Data()
  const solved = {
    ...level,
    whitePlayer: { x: 1, y: 5 }, blackPlayer: { x: 4, y: 2 },
    whiteBoxes: [{ x: 1, y: 6 }], blackBoxes: [{ x: 3, y: 3 }]
  }
  game.initLevel(solved)
  assert.equal(game.checkWin(), true)
  for (const field of ['whitePlayer', 'blackPlayer', 'whiteBoxes', 'blackBoxes']) {
    game.initLevel({ ...solved, [field]: level[field] })
    assert.equal(game.checkWin(), false, field)
  }
})
