import { GAME_CONSTANTS } from './constants'

export class GameState {
  constructor() {
    this.mapWidth = 5
    this.mapHeight = 7

    // 初始化状态
    this.reset()
  }

  reset() {
    // 地图规则
    this.mapRules = {}

    // 角色位置
    this.whiteX = 0
    this.whiteY = 0
    this.blackX = 0
    this.blackY = 0

    // 记录每个位置最后到达的角色（用于两个角色重叠时的显示优先级）
    this.lastPlayerAt = {} // key: "y,x", value: PLAYER_TYPES.WHITE or BLACK

    // 箱子
    this.whiteBoxes = []
    this.blackBoxes = []

    // 目标点
    this.whiteBoxTargets = []
    this.blackBoxTargets = []
    this.whitePlayerTarget = []
    this.blackPlayerTarget = []

    // 当前玩家
    this.currentPlayer = GAME_CONSTANTS.PLAYER_TYPES.BLACK
    this.stepCount = 0

    // 历史记录（用于撤销）
    this.history = []
    this.buildCellLookupCache()
  }

  // 保存当前状态到历史记录
  saveState() {
    const stateSnapshot = {
      whiteX: this.whiteX,
      whiteY: this.whiteY,
      blackX: this.blackX,
      blackY: this.blackY,
      whiteBoxes: this.whiteBoxes.map(b => ({ x: b.x, y: b.y })),
      blackBoxes: this.blackBoxes.map(b => ({ x: b.x, y: b.y })),
      currentPlayer: this.currentPlayer,
      stepCount: this.stepCount,
      lastPlayerAt: { ...this.lastPlayerAt }
    }
    this.history.push(stateSnapshot)
    // 最多保存50步历史
    if (this.history.length > 50) {
      this.history.shift()
    }
  }

  // 撤销上一步
  undo() {
    if (this.history.length === 0) {
      return false
    }
    const prevState = this.history.pop()
    this.whiteX = prevState.whiteX
    this.whiteY = prevState.whiteY
    this.blackX = prevState.blackX
    this.blackY = prevState.blackY
    this.whiteBoxes = prevState.whiteBoxes
    this.blackBoxes = prevState.blackBoxes
    this.currentPlayer = prevState.currentPlayer
    this.stepCount = prevState.stepCount
    this.lastPlayerAt = prevState.lastPlayerAt
    this.buildBoxLookupCache()
    return true
  }

  // 检查是否可以撤销
  canUndo() {
    return this.history.length > 0
  }
  
  // 获取地图值
  getMapValue(y, x) {
    return this.mapRules[`${y},${x}`] || GAME_CONSTANTS.CELL_TYPES.WHITE_FLOOR
  }
  
  // 设置地图值
  setMapValue(y, x, value) {
    this.mapRules[`${y},${x}`] = value
  }
  
  // 构建坐标查找缓存（O(1)替代O(n)的.some()/.find()）
  buildCellLookupCache() {
    this.buildBoxLookupCache()
    this._whiteBoxTargetSet = new Set(this.whiteBoxTargets.map(t => `${t.y},${t.x}`))
    this._blackBoxTargetSet = new Set(this.blackBoxTargets.map(t => `${t.y},${t.x}`))
    this._whitePlayerTargetSet = new Set(this.whitePlayerTarget.map(t => `${t.y},${t.x}`))
    this._blackPlayerTargetSet = new Set(this.blackPlayerTarget.map(t => `${t.y},${t.x}`))
  }

  // 普通移动和切换角色不会改变箱子；目标点缓存整关复用。
  buildBoxLookupCache() {
    this._whiteBoxSet = new Set(this.whiteBoxes.map(b => `${b.y},${b.x}`))
    this._blackBoxSet = new Set(this.blackBoxes.map(b => `${b.y},${b.x}`))
  }

  // 检查位置是否有白箱子
  hasWhiteBox(x, y) {
    return this._whiteBoxSet.has(`${y},${x}`)
  }
  
  // 检查位置是否有黑箱子
  hasBlackBox(x, y) {
    return this._blackBoxSet.has(`${y},${x}`)
  }
  
  // 检查是否是白箱子目标点
  isWhiteBoxTarget(x, y) {
    return this._whiteBoxTargetSet.has(`${y},${x}`)
  }
  
  // 检查是否是黑箱子目标点
  isBlackBoxTarget(x, y) {
    return this._blackBoxTargetSet.has(`${y},${x}`)
  }
  
  // 检查是否是白角色目标点
  isWhitePlayerTarget(x, y) {
    return this._whitePlayerTargetSet.has(`${y},${x}`)
  }
  
  // 检查是否是黑角色目标点
  isBlackPlayerTarget(x, y) {
    return this._blackPlayerTargetSet.has(`${y},${x}`)
  }
  
  // 切换当前玩家
  switchPlayer() {
    this.currentPlayer = this.currentPlayer === GAME_CONSTANTS.PLAYER_TYPES.WHITE 
      ? GAME_CONSTANTS.PLAYER_TYPES.BLACK 
      : GAME_CONSTANTS.PLAYER_TYPES.WHITE
    return this.currentPlayer
  }
  
  // 记录角色移动到某位置
  recordPlayerMove(x, y, playerType) {
    this.lastPlayerAt[`${y},${x}`] = playerType
  }
}
