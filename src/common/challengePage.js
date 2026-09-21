import router from '@system.router'
import device from '@system.device'
import { getAdaptedSizes, getScale } from './screenAdapter'
import { getMode, SELECT_PATH } from './modes'
import { ChallengeGame } from '../game/challenges/ChallengeGame'
import { getChallenge } from '../game/challenges/levels'
import { VIEW_FRAMES, projectMarker } from '../demos/mobiusGeometry'

function layoutFor(width, height, mode) {
  const scale = getScale(width, height)
  const cell = Math.floor((mode === 'timed' ? 30 : 26) * scale)
  return {
    width: Math.floor(160 * scale), top: Math.ceil(32 * scale), panel: Math.floor(164 * scale),
    controls: getAdaptedSizes(width, height),
    grid: { cellSize: cell, cellIconSize: Math.floor(20 * scale),
      cellIconSmallSize: Math.floor((cell - 2) / 2), cellBorder: 1, gridPadding: 2, margin: 0 }
  }
}

// Both routes share controls, lifecycle and replay behavior, but own their game.
export function createChallengePage(mode) {
  const level = getChallenge(mode)
  return {
    private: {
      mode, levelName: level.name, title: getMode(mode).title,
      layout: layoutFor(192, 490, mode), rows: [0, 1, 2, 3, 4],
      columns: Array.from({ length: level.mapWidth }, (_, x) => x),
      cellIcons: {}, cellStyles: {}, currentPlayer: 7, steps: 0, completed: 0,
      phase: 0, seconds: 8, paused: false, crossings: 0,
      frame: 0, unfolded: true, markers: [], feedback: '', pressed: ''
    },
    computed: {
      ringImage() { return '/common/image/mobius/ring-' + this.frame + '.png' },
      statusText() { return (this.currentPlayer === 7 ? '黑' : '白') + ' · ' + this.steps + '步' },
      goalText() { return '箱 ' + this.completed + '/2 · 黑白人、箱各归其位' },
      hintText() {
        if (this.paused) return '已暂停，继续后才能移动'
        if (this.feedback) return this.feedback
        return mode === 'timed' ? '蓝框每8秒翻色，棋子停留安全' : '紫边相连，越界上下翻转 · ' + this.crossings + '次'
      }
    },
    onInit() {
      this._destroyed = false
      this._leaving = false
      this._visible = false
      this._timer = null
      this._feedbackTimer = null
      this._lastTick = Date.now()
      this._game = new ChallengeGame(level)
      this.refresh(true)
      try {
        device.getInfo({ success: data => {
          if (this._destroyed || this._leaving) return
          this.layout = layoutFor(data && data.screenWidth, data && data.screenHeight, mode)
          this.refresh(true)
        }, fail: () => {} })
      } catch (error) { /* The initial layout also works without device info. */ }
    },
    refresh(boardChanged) {
      const g = this._game
      this.currentPlayer = g.state.currentPlayer
      this.steps = g.state.stepCount
      this.completed = g.completedBoxes
      this.phase = g.phase
      this.seconds = Math.ceil(g.remainingMs / 1000)
      this.paused = g.paused
      this.crossings = g.crossings + g.boxCrossings
      if (!boardChanged) return
      const display = g.updateCellDisplay()
      // Keep existing reactive leaves so Vela does not recreate the whole grid.
      if (!Object.keys(this.cellIcons).length) {
        this.cellIcons = display.icons
        this.cellStyles = display.styles
      } else Object.keys(display.icons).forEach(key => {
        Object.keys(display.icons[key]).forEach(field => { this.cellIcons[key][field] = display.icons[key][field] })
        this.cellStyles[key].bg = display.styles[key].bg
        this.cellStyles[key].border = display.styles[key].border
      })
      this.refreshMarkers()
    },
    refreshMarkers() {
      if (mode !== 'mobius') return
      const g = this._game, markers = []
      for (let y = 0; y < level.mapHeight; y++) for (let x = 0; x < level.mapWidth; x++) {
        const icon = g.iconManager.getIconParts(y, x)
        if (!icon.src && !icon.src2) continue
        const point = projectMarker({ x, y }, this.frame, this.layout.panel)
        markers.push({ left: Math.round(point.x - 8), top: Math.round(point.y - 8), depth: point.depth,
          src: icon.single ? icon.src : icon.src2, bg: g.getCellBg(y, x), border: g.getCellBorder(y, x) })
      }
      this.markers = markers.sort((a, b) => a.depth - b.depth)
    },
    syncClock() {
      const now = Date.now()
      let changed = false
      if (this._visible && !this._leaving && !this._destroyed) {
        changed = this._game.advanceTime(Math.max(0, now - this._lastTick))
      }
      this._lastTick = now
      return changed
    },
    scheduleTick() {
      this.stopTimer()
      if (mode !== 'timed' || !this._visible || this._destroyed || this._leaving || this._game.paused) return
      this._timer = setTimeout(() => {
        this._timer = null
        if (this._destroyed || this._leaving || !this._visible) return
        const flipped = this.syncClock()
        if (flipped) this.feedback = ''
        this.refresh(flipped)
        this.scheduleTick()
      }, this._game.remainingMs % 1000 || 1000)
    },
    stopTimer() {
      if (this._timer !== null) clearTimeout(this._timer)
      this._timer = null
    },
    clearFeedback() {
      if (this._feedbackTimer !== null) clearTimeout(this._feedbackTimer)
      this._feedbackTimer = null
      this.pressed = ''
      this.feedback = ''
    },
    flash(action) {
      this.clearFeedback()
      this.pressed = action
      this._feedbackTimer = setTimeout(() => {
        this._feedbackTimer = null
        if (!this._destroyed && !this._leaving) this.pressed = ''
      }, 200)
    },
    move(dx, dy, action) {
      if (this._leaving || this._destroyed || !this._visible) return
      const flipped = this.syncClock()
      this.flash(action)
      const result = this._game.move(dx, dy)
      this.feedback = result.success ? '' : result.message
      this.refresh(result.success || flipped)
      if (result.isWin) {
        this._leaving = true
        this.stopTimer()
        this.clearFeedback()
        router.replace({ uri: '/pages/win', params: { levelId: mode, levelPath: getMode(mode).path } })
      } else this.scheduleTick()
    },
    onUp() { this.move(0, -1, 'up') },
    onDown() { this.move(0, 1, 'down') },
    onLeft() { this.move(-1, 0, 'left') },
    onRight() { this.move(1, 0, 'right') },
    onSwitch() {
      if (this._leaving || this._destroyed || !this._visible) return
      const flipped = this.syncClock()
      this.clearFeedback()
      this._game.switchPlayer()
      this.refresh(flipped)
      this.scheduleTick()
    },
    onUndo() {
      if (this._leaving || this._destroyed || !this._visible) return
      this.syncClock()
      this.clearFeedback()
      const result = this._game.undo()
      this.feedback = result.success ? (mode === 'timed' ? '已撤销，地图和倒计时也已恢复' : '已撤销，角色和箱子已退回') : result.message
      this.refresh(true)
      this.scheduleTick()
    },
    onReset() {
      if (this._leaving || this._destroyed || !this._visible) return
      this.clearFeedback()
      this._game.reset()
      this._lastTick = Date.now()
      this.frame = 0
      this.refresh(true)
      this.scheduleTick()
    },
    togglePause() {
      if (this._leaving || this._destroyed || !this._visible) return
      const flipped = this.syncClock()
      this.clearFeedback()
      this._game.paused = !this._game.paused
      this.refresh(flipped)
      this.scheduleTick()
    },
    toggleView() {
      if (this._leaving || this._destroyed) return
      this.unfolded = !this.unfolded
      this.refreshMarkers()
    },
    rotateView() {
      if (this._leaving || this._destroyed) return
      this.unfolded = false
      this.frame = (this.frame + 1) % VIEW_FRAMES
      this.refreshMarkers()
    },
    goBack() {
      if (this._leaving || this._destroyed) return
      this._leaving = true
      this.stopTimer()
      this.clearFeedback()
      router.replace({ uri: SELECT_PATH })
    },
    onBackPress() { this.goBack(); return true },
    onShow() {
      if (this._visible || this._destroyed || this._leaving) return
      this._visible = true
      this._lastTick = Date.now()
      this.scheduleTick()
    },
    onHide() {
      if (this._destroyed) return
      this.refresh(this.syncClock())
      this._visible = false
      this.stopTimer()
      this.clearFeedback()
    },
    onDestroy() { this._destroyed = true; this._visible = false; this.stopTimer(); this.clearFeedback() }
  }
}
