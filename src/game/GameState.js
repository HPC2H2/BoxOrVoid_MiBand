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
    
    // 按钮颜色
    this.switchBtnColor = GAME_CONSTANTS.BUTTON_COLORS.DEFAULT_SWITCH
    this.upBtnColor = GAME_CONSTANTS.BUTTON_COLORS.DEFAULT_ARROW
    this.downBtnColor = GAME_CONSTANTS.BUTTON_COLORS.DEFAULT_ARROW
    this.leftBtnColor = GAME_CONSTANTS.BUTTON_COLORS.DEFAULT_ARROW
    this.rightBtnColor = GAME_CONSTANTS.BUTTON_COLORS.DEFAULT_ARROW
    this.resetBtnColor = GAME_CONSTANTS.BUTTON_COLORS.DEFAULT_RESET
  }
  
  // 获取地图值
  getMapValue(y, x) {
    return this.mapRules[`${y},${x}`] || GAME_CONSTANTS.CELL_TYPES.WHITE_FLOOR
  }
  
  // 设置地图值
  setMapValue(y, x, value) {
    this.mapRules[`${y},${x}`] = value
  }
  
  // 检查位置是否有白箱子
  hasWhiteBox(x, y) {
    return this.whiteBoxes.some(box => box.x === x && box.y === y)
  }
  
  // 检查位置是否有黑箱子
  hasBlackBox(x, y) {
    return this.blackBoxes.some(box => box.x === x && box.y === y)
  }
  
  // 检查是否是白箱子目标点
  isWhiteBoxTarget(x, y) {
    return this.whiteBoxTargets.some(target => target.x === x && target.y === y)
  }
  
  // 检查是否是黑箱子目标点
  isBlackBoxTarget(x, y) {
    return this.blackBoxTargets.some(target => target.x === x && target.y === y)
  }
  
  // 检查是否是白角色目标点
  isWhitePlayerTarget(x, y) {
    return this.whitePlayerTarget.some(target => target.x === x && target.y === y)
  }
  
  // 检查是否是黑角色目标点
  isBlackPlayerTarget(x, y) {
    return this.blackPlayerTarget.some(target => target.x === x && target.y === y)
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