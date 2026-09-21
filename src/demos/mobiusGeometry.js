export const BAND_COLUMNS = 6
export const BAND_ROWS = 5
export const VIEW_FRAMES = 12

// One half-twist: the right edge joins the left edge with the row reversed.
export function advanceOnBand(position) {
  if (position.x === BAND_COLUMNS - 1) {
    return { x: 0, y: BAND_ROWS - 1 - position.y, crossings: position.crossings + 1 }
  }
  return { ...position, x: position.x + 1 }
}

export function projectBandPoint(u, v, frame, size = 168) {
  const radius = 1 + v * Math.cos(u / 2)
  const x = radius * Math.cos(u)
  const y = radius * Math.sin(u)
  const z = v * Math.sin(u / 2)
  const angle = frame * 2 * Math.PI / VIEW_FRAMES + 0.35
  const rx = x * Math.cos(angle) - y * Math.sin(angle)
  const ry = x * Math.sin(angle) + y * Math.cos(angle)
  const pitch = 0.95
  const py = ry * Math.cos(pitch) - z * Math.sin(pitch)
  const depth = ry * Math.sin(pitch) + z * Math.cos(pitch)
  const perspective = 3.8 / (3.8 - depth)
  return { x: size / 2 + rx * perspective * size * 0.29, y: size / 2 - py * perspective * size * 0.29, depth }
}

export function getBandTiles(frame, size = 168) {
  const tiles = []
  for (let y = 0; y < BAND_ROWS; y++) {
    for (let x = 0; x < BAND_COLUMNS; x++) {
      const v0 = -0.42 + y * 0.84 / BAND_ROWS
      const v1 = -0.42 + (y + 1) * 0.84 / BAND_ROWS
      // Subdivide each logical cell so a six-column board still curves smoothly.
      for (let part = 0; part < 4; part++) {
        const u0 = (x + part / 4) * 2 * Math.PI / BAND_COLUMNS
        const u1 = (x + (part + 1) / 4) * 2 * Math.PI / BAND_COLUMNS
        const points = [[u0, v0], [u1, v0], [u1, v1], [u0, v1]].map(([u, v]) => projectBandPoint(u, v, frame, size))
        tiles.push({ x, y, seam: x === 0 && part === 0, points, depth: points.reduce((sum, p) => sum + p.depth, 0) / 4 })
      }
    }
  }
  return tiles.sort((a, b) => a.depth - b.depth)
}

export function projectMarker(position, frame, size = 168) {
  const u = (position.x + 0.5) * 2 * Math.PI / BAND_COLUMNS
  const v = -0.42 + (position.y + 0.5) * 0.84 / BAND_ROWS
  return projectBandPoint(u, v, frame, size)
}
