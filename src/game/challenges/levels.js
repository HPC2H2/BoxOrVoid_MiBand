// 0: white ground, 1: black ground, #: solid wall (neither player can enter).
function terrain(rows) {
  const mapRules = {}, walls = []
  rows.forEach((row, y) => row.split('').forEach((tile, x) => {
    if (tile === '#') walls.push(`${y},${x}`)
    else mapRules[`${y},${x}`] = Number(tile)
  }))
  return { mapWidth: rows[0].length, mapHeight: rows.length, mapRules, walls }
}

export const TIMED_LEVEL = {
  id: 'timed', name: '双拍归位', periodMs: 8000,
  ...terrain(['#####', '00100', '#####', '11011', '#####']),
  changing: ['1,2', '1,3', '3,1', '3,2'],
  blackPlayer: { x: 0, y: 1 }, blackBoxes: [{ x: 1, y: 1 }],
  blackBoxTargets: [{ x: 4, y: 1 }], blackPlayerTarget: [{ x: 3, y: 1 }],
  whitePlayer: { x: 4, y: 3 }, whiteBoxes: [{ x: 3, y: 3 }],
  whiteBoxTargets: [{ x: 0, y: 3 }], whitePlayerTarget: [{ x: 1, y: 3 }],
  currentPlayer: 7
}

export const MOBIUS_LEVEL = {
  id: 'mobius', name: '翻面归位',
  ...terrain(['######', '111000', '######', '000111', '######']),
  blackPlayer: { x: 3, y: 1 }, blackBoxes: [{ x: 4, y: 1 }],
  blackBoxTargets: [{ x: 2, y: 3 }], blackPlayerTarget: [{ x: 1, y: 3 }],
  whitePlayer: { x: 2, y: 1 }, whiteBoxes: [{ x: 1, y: 1 }],
  whiteBoxTargets: [{ x: 3, y: 3 }], whitePlayerTarget: [{ x: 4, y: 3 }],
  currentPlayer: 7
}

export function getChallenge(id) { return id === 'timed' ? TIMED_LEVEL : MOBIUS_LEVEL }

// Horizontal travel crosses the half twist; top/bottom edges remain boundaries.
export function stepOnMap(x, y, dx, dy, width, height, wrap) {
  let nx = x + dx, ny = y + dy
  const crossed = wrap && (nx < 0 || nx >= width)
  if (crossed) {
    nx = (nx + width) % width
    ny = height - 1 - ny
  }
  if (nx < 0 || nx >= width || ny < 0 || ny >= height) return null
  return { x: nx, y: ny, crossed }
}
