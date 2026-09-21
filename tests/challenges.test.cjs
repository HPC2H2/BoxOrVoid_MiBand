const test = require('node:test')
const assert = require('node:assert/strict')
const { createRuntime, snapshot } = require('./helpers.cjs')

async function gameFor(id) {
  const runtime = createRuntime()
  const { ChallengeGame } = await runtime.load('src/game/challenges/ChallengeGame.js')
  const { getChallenge } = await runtime.load('src/game/challenges/levels.js')
  return new ChallengeGame(getChallenge(id))
}

for (const id of ['timed', 'mobius']) for (const [width, height] of [[192, 490], [212, 520]]) {
  test(`${id}: real level solution, win once and replay at ${width}x${height}`, async () => {
    const runtime = createRuntime({ deviceInfo: { screenWidth: width, screenHeight: height } })
    const page = await runtime.page(`src/pages/${id}/index.ux`)
    page.onShow()
    const original = snapshot(page._game)
    assert.equal(page._game.checkWin(), false)
    const solution = require(`./fixtures/${id}-solution.json`)
    for (const action of solution) {
      if (action.wait) runtime.advance(action.wait)
      else page[action]()
    }
    assert.equal(page._game.checkWin(), true)
    assert.equal(page.completed, 2)
    assert.equal(page.steps, id === 'timed' ? 6 : 8)
    assert.equal(runtime.routes.length, 1)
    assert.equal(runtime.routes[0].uri, '/pages/win')
    assert.equal(runtime.timers.size, 0)
    page.onUndo(); page.onReset(); page.onRight(); page.togglePause(); page.goBack()
    assert.equal(runtime.routes.length, 1)
    assert.equal(page._game.checkWin(), true)
    const win = await runtime.page('src/pages/win/index.ux', runtime.routes[0].params)
    assert.match(win.levelName, new RegExp(id === 'timed' ? '定时变化' : '莫比乌斯环'))
    win.restartLevel()
    assert.equal(runtime.routes[1].uri, `/pages/${id}`)
    const replay = await runtime.page(`src/pages/${id}/index.ux`)
    assert.deepEqual(snapshot(replay._game), original)
    assert.equal(replay._game.state.history.length, 0)
    const grid = page.layout.grid
    assert.ok(grid.cellSize * page.columns.length + 4 <= page.layout.panel)
    assert.ok(2 * grid.cellIconSmallSize <= grid.cellSize - 2)
  })
}

test('timed gates require B then A; flipping holds pieces and recolors target ground', async () => {
  const game = await gameFor('timed')
  const start = snapshot(game)
  const initialDisplay = game.updateCellDisplay()
  assert.equal(game.move(1, 0).success, false)
  assert.equal(game.canUndo(), false)
  game.advanceTime(7999)
  assert.equal(game.phase, 0)
  assert.equal(game.remainingMs, 1)
  game.advanceTime(1)
  assert.equal(game.phase, 1)
  assert.deepEqual(snapshot(game), start)
  assert.notEqual(game.updateCellDisplay().styles['1,3'].bg, initialDisplay.styles['1,3'].bg)
  assert.notEqual(game.updateCellDisplay().icons['1,3'].src1, initialDisplay.icons['1,3'].src1)
  assert.equal(game.move(1, 0).success, true)
  assert.equal(game.move(1, 0).success, false)
  game.advanceTime(8000)
  assert.equal(game.state.getMapValue(1, 2), 1)
  assert.equal(game.move(1, 0).success, true, 'box can leave a tile that flipped under it')
  assert.equal(game.move(1, 0).success, true)
  assert.equal(game.completedBoxes, 1)
  assert.equal(game.checkWin(), false, 'white side must also finish')
})

test('time catches up after delayed callbacks and preserves partial seconds', async () => {
  const game = await gameFor('timed')
  game.advanceTime(17250)
  assert.equal(game.phase, 0)
  assert.equal(game.remainingMs, 6750)
  game.advanceTime(6750)
  assert.equal(game.phase, 1)
  assert.equal(game.remainingMs, 8000)
  game.advanceTime(-100)
  assert.equal(game.remainingMs, 8000)
})

test('undo restores phase, exact remaining time and turn along with the pushed box', async () => {
  const game = await gameFor('timed')
  game.advanceTime(9250)
  const before = snapshot(game)
  game.move(1, 0)
  game.advanceTime(9000)
  game.switchPlayer()
  game.paused = true
  assert.equal(game.undo().success, true)
  assert.deepEqual(snapshot(game), before)
  assert.equal(game.phase, 1)
  assert.equal(game.remainingMs, 6750)
  assert.equal(game.state.getMapValue(1, 2), 0)
  assert.equal(game.paused, true, 'undo never silently unpauses')
  game.reset()
  assert.equal(game.phase, 0)
  assert.equal(game.remainingMs, 8000)
  assert.equal(game.paused, false)
  assert.equal(game.canUndo(), false)
})

test('paused and hidden pages freeze time; paused movement and turn switching are blocked', async () => {
  const runtime = createRuntime()
  const page = await runtime.page('src/pages/timed/index.ux')
  assert.equal(runtime.timers.size, 0)
  page.onShow(); page.onShow()
  assert.equal(runtime.timers.size, 1)
  runtime.advance(1250)
  page.togglePause()
  assert.equal(page._game.remainingMs, 6750)
  const before = snapshot(page._game)
  page.onRight(); page.onSwitch()
  runtime.advance(20000)
  assert.deepEqual(snapshot(page._game), before)
  assert.equal(page._game.remainingMs, 6750)
  assert.equal(runtime.timers.size, 0)
  page.togglePause()
  runtime.advance(250)
  page.onHide()
  assert.equal(page._game.remainingMs, 6500)
  runtime.advance(25000)
  page.onShow()
  runtime.advance(6500)
  assert.equal(page.phase, 1)
  assert.equal(page.seconds, 8)
  page.onRight()
  page.onReset()
  assert.equal(page.steps, 0)
  assert.equal(page.phase, 0)
  assert.equal(page.seconds, 8)
  assert.equal(runtime.timers.size, 1)
})

test('return/destruction cancel timers and ignore late callbacks/device responses', async () => {
  for (const leave of ['goBack', 'onDestroy']) {
    const runtime = createRuntime({ deviceMode: 'deferred' })
    const page = await runtime.page('src/pages/timed/index.ux')
    page.onShow()
    const timer = [...runtime.timers.values()][0].fn
    const layout = page.layout
    page[leave]()
    timer()
    runtime.deviceRequest.success({ screenWidth: 212, screenHeight: 520 })
    page.onShow(); page.onRight(); page.togglePause(); page.onReset()
    assert.equal(page.layout, layout)
    assert.equal(runtime.timers.size, 0)
    assert.equal(page.steps, 0)
    assert.equal(page.seconds, 8)
  }
})

test('both horizontal seams reflect players and boxes; undo restores crossing counters', async () => {
  const game = await gameFor('mobius')
  game.move(1, 0)
  const before = snapshot(game)
  game.move(1, 0)
  assert.equal(game.state.blackBoxes[0].x, 0)
  assert.equal(game.state.blackBoxes[0].y, 3)
  assert.equal(game.boxCrossings, 1)
  assert.equal(game.crossings, 0)
  game.move(1, 0)
  assert.equal(game.state.blackX, 0)
  assert.equal(game.state.blackY, 3)
  assert.equal(game.crossings, 1)
  game.undo(); game.undo()
  assert.deepEqual(snapshot(game), before)
  assert.equal(game.crossings, 0)
  assert.equal(game.boxCrossings, 0)
  game.reset()
  game.switchPlayer()
  game.move(-1, 0); game.move(-1, 0); game.move(-1, 0)
  assert.equal(game.state.whiteX, 5)
  assert.equal(game.state.whiteY, 3)
  assert.equal(game.state.whiteBoxes[0].x, 4)
  assert.equal(game.state.whiteBoxes[0].y, 3)
  assert.equal(game.crossings, 1)
  assert.equal(game.boxCrossings, 1)
})

test('seam pushes reject occupied/walled destinations and top/bottom do not wrap', async () => {
  const game = await gameFor('mobius')
  assert.equal(game.move(0, -1).success, false)
  assert.equal(game.move(0, 1).success, false)
  game.move(1, 0)
  game.state.whiteX = 0; game.state.whiteY = 3
  const before = snapshot(game)
  assert.equal(game.move(1, 0).success, false)
  assert.deepEqual(snapshot(game), before)
  game.state.whiteX = 2; game.state.whiteY = 1
  game.state.whiteBoxes = [{ x: 0, y: 3 }]
  game.state.buildBoxLookupCache()
  assert.equal(game.move(1, 0).success, false)
  game.state.whiteBoxes = []; game.state.buildBoxLookupCache()
  game.walls.add('3,0')
  assert.equal(game.move(1, 0).success, false)
  const { stepOnMap } = await createRuntime().load('src/game/challenges/levels.js')
  assert.equal(stepOnMap(2, 0, 0, -1, 6, 5, true), null)
  assert.equal(stepOnMap(2, 4, 0, 1, 6, 5, true), null)
})

test('ring, camera rotation and unfolded grid display the same playable state', async () => {
  const runtime = createRuntime()
  const page = await runtime.page('src/pages/mobius/index.ux')
  page.onShow()
  page.onRight(); page.onRight()
  const state = snapshot(page._game)
  const icons = JSON.stringify(page.cellIcons)
  assert.equal(page._game.state.blackBoxes[0].y, 3)
  page.toggleView()
  assert.equal(page.unfolded, false)
  const markers = JSON.stringify(page.markers)
  page.rotateView()
  assert.notEqual(JSON.stringify(page.markers), markers)
  for (let i = 1; i < 12; i++) page.rotateView()
  assert.equal(page.frame, 0)
  assert.equal(JSON.stringify(page.markers), markers)
  page.toggleView()
  assert.deepEqual(snapshot(page._game), state)
  assert.equal(JSON.stringify(page.cellIcons), icons)
  assert.equal(page.unfolded, true)
  page.goBack()
  assert.equal(runtime.timers.size, 0)
})

// Explore all reachable configurations with and without the new mechanic. This
// also catches an accidental ordinary-ground route bypassing the teaching gate.
async function solve(id, mechanic) {
  const game = await gameFor(id)
  if (id === 'mobius' && !mechanic) game.wrap = false
  function save() { return { state: snapshot(game), phase: game.phase } }
  function restore(value) {
    Object.assign(game.state, JSON.parse(JSON.stringify(value.state)))
    game.state.history = []
    game.state.buildBoxLookupCache()
    game.phase = value.phase
    game.remainingMs = game.level.periodMs || 0
    game.won = false
    game.applyPhase()
  }
  function key(value) {
    const s = value.state
    return JSON.stringify([s.whiteX, s.whiteY, s.blackX, s.blackY, s.whiteBoxes, s.blackBoxes, s.currentPlayer, value.phase])
  }
  const queue = [save()], seen = new Set([key(queue[0])])
  for (let head = 0; head < queue.length; head++) {
    assert.ok(head < 20000, 'tutorial search must remain bounded')
    const current = queue[head]
    for (const action of ['right', 'left', 'up', 'down', 'switch', 'wait']) {
      restore(current)
      if (action === 'wait') {
        if (id !== 'timed' || !mechanic) continue
        game.advanceTime(8000)
      } else if (action === 'switch') game.switchPlayer()
      else {
        const delta = { right: [1, 0], left: [-1, 0], up: [0, -1], down: [0, 1] }[action]
        if (!game.move(...delta).success) continue
      }
      if (game.checkWin()) return { solved: true, moves: game.state.stepCount, states: seen.size }
      const next = save(), stateKey = key(next)
      if (!seen.has(stateKey)) { seen.add(stateKey); queue.push(next) }
    }
  }
  return { solved: false, states: seen.size }
}

for (const id of ['timed', 'mobius']) test(`${id} is solvable and cannot bypass its defining mechanic`, async () => {
  const enabled = await solve(id, true)
  const disabled = await solve(id, false)
  assert.equal(enabled.solved, true)
  assert.equal(enabled.moves, id === 'timed' ? 6 : 8)
  assert.equal(disabled.solved, false)
})
