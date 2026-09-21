import { Game } from '../index'
import { MoveValidator } from '../MoveValidator'
import { stepOnMap } from './levels'

class ChallengeValidator extends MoveValidator {
  constructor(game) { super(game.state); this.game = game }

  next(x, y, dx, dy) {
    const g = this.game
    return stepOnMap(x, y, dx, dy, this.state.mapWidth, this.state.mapHeight, g.wrap)
  }

  validateMove(dx, dy, isWhite) {
    if (Math.abs(dx) + Math.abs(dy) !== 1) return { valid: false, message: '请选择一个方向' }
    const s = this.state, g = this.game
    const next = this.next(isWhite ? s.whiteX : s.blackX, isWhite ? s.whiteY : s.blackY, dx, dy)
    if (!next || g.isWall(next.x, next.y)) return { valid: false, message: '前方是边界或墙' }
    const boxes = isWhite ? s.whiteBoxes : s.blackBoxes
    const index = boxes.findIndex(b => b.x === next.x && b.y === next.y)
    // A flip may change the ground under a piece. It stays safe and can leave;
    // pushing checks the new box destination, never traps a box on its old tile.
    if (index === -1 && !this.checkTerrain(next.x, next.y, isWhite)) {
      return { valid: false, message: g.level.id === 'timed' ? '地形不通，等倒计时翻色' : '白走黑，黑走白' }
    }
    if (index === -1) return {
      valid: true, action: 'move', data: { isWhite, nx: next.x, ny: next.y },
      playerCrossed: next.crossed, boxCrossed: false
    }
    const dest = this.next(next.x, next.y, dx, dy)
    if (!dest || g.isWall(dest.x, dest.y) || this.isBlocked(dest.x, dest.y, index, isWhite ? 'white' : 'black')) {
      return { valid: false, message: '箱子前方被阻挡' }
    }
    const specialTarget = isWhite ? s.isBlackBoxTarget(dest.x, dest.y) : s.isWhiteBoxTarget(dest.x, dest.y)
    if (s.getMapValue(dest.y, dest.x) !== (isWhite ? 1 : 0) && !specialTarget) {
      return { valid: false, message: g.level.id === 'timed' ? '等翻色后再推箱' : '箱子前方颜色不通' }
    }
    return {
      valid: true, action: 'push', playerCrossed: next.crossed, boxCrossed: dest.crossed,
      data: { isWhite, playerPos: { nx: next.x, ny: next.y }, boxPos: dest,
        boxIndex: index, boxType: isWhite ? 'white' : 'black' }
    }
  }
}

export class ChallengeGame extends Game {
  constructor(level) {
    super()
    this.level = level
    this.walls = new Set(level.walls)
    this.changing = new Set(level.changing || [])
    this.wrap = level.id === 'mobius'
    this.validator = new ChallengeValidator(this)
    this.reset()
  }

  reset() {
    this.state.mapWidth = this.level.mapWidth
    this.state.mapHeight = this.level.mapHeight
    super.initLevel(this.level)
    this.phase = 0
    this.remainingMs = this.level.periodMs || 0
    this.paused = false
    this.crossings = 0
    this.boxCrossings = 0
    this.won = false
  }

  isWall(x, y) { return this.walls.has(`${y},${x}`) }

  applyPhase() {
    this.changing.forEach(key => { this.state.mapRules[key] = this.level.mapRules[key] ^ this.phase })
  }

  advanceTime(milliseconds) {
    if (this.paused || this.won || !this.level.periodMs || milliseconds <= 0) return false
    const elapsed = this.level.periodMs - this.remainingMs + milliseconds
    const flips = Math.floor(elapsed / this.level.periodMs)
    this.remainingMs = this.level.periodMs - elapsed % this.level.periodMs
    if (flips % 2) this.phase ^= 1
    if (flips) this.applyPhase()
    return flips > 0
  }

  move(dx, dy) {
    if (this.paused || this.won) return { success: false, message: this.paused ? '请先继续游戏' : '已经通关' }
    const validated = this.validator.validateMove(dx, dy, this.state.currentPlayer === 6)
    if (!validated.valid) return { success: false, message: validated.message }
    const extra = { phase: this.phase, remainingMs: this.remainingMs, crossings: this.crossings, boxCrossings: this.boxCrossings }
    const result = super.move(dx, dy)
    this.state.history[this.state.history.length - 1].extra = extra
    if (validated.playerCrossed) this.crossings++
    if (validated.boxCrossed) this.boxCrossings++
    this.won = result.isWin
    return result
  }

  undo() {
    const previous = this.state.history[this.state.history.length - 1]
    const result = super.undo()
    if (result.success) {
      Object.assign(this, previous.extra)
      this.won = false
      this.applyPhase()
    }
    return result
  }

  switchPlayer() {
    return this.paused || this.won ? this.state.currentPlayer : super.switchPlayer()
  }

  getCellBg(y, x) {
    if (this.isWall(x, y)) return '#15191F'
    const s = this.state
    const occupied = s.hasWhiteBox(x, y) || s.hasBlackBox(x, y) ||
      (s.whiteX === x && s.whiteY === y) || (s.blackX === x && s.blackY === y)
    if (this.changing.has(`${y},${x}`) && !occupied) return s.getMapValue(y, x) === 0 ? '#F8F9FA' : '#2D3748'
    return super.getCellBg(y, x)
  }

  updateCellDisplay() {
    const display = super.updateCellDisplay()
    this.changing.forEach(key => {
      const icon = display.icons[key]
      if (icon.single) return
      // Target labels stay readable while their underlying tile changes color.
      const color = this.state.mapRules[key] === 0 ? 'grey-' : 'white-'
      icon.src1 = icon.src1.replace(/(white|grey)-/, color)
      icon.src2 = icon.src2.replace(/(white|grey)-/, color)
    })
    return display
  }

  getCellBorder(y, x) {
    if (this.isWall(x, y)) return '#252C35'
    if (this.changing.has(`${y},${x}`)) return '#3498DB'
    if (this.wrap && (x === 0 || x === this.state.mapWidth - 1)) return '#9B59B6'
    return super.getCellBorder(y, x)
  }

  get completedBoxes() {
    return this.state.whiteBoxes.filter(b => this.state.isWhiteBoxTarget(b.x, b.y)).length +
      this.state.blackBoxes.filter(b => this.state.isBlackBoxTarget(b.x, b.y)).length
  }
}
