import { GAME_CONSTANTS } from './constants'

export class MoveValidator {
  constructor(gameState) {
    this.state = gameState
  }
  
  // 验证移动合法性
  validateMove(dx, dy, isWhite) {
    const [x, y] = isWhite ? [this.state.whiteX, this.state.whiteY] : [this.state.blackX, this.state.blackY]
    const [nx, ny] = [x + dx, y + dy]
    
    // 1. 边界检查
    if (!this.checkBoundary(nx, ny)) {
      return { valid: false, message: "不能越界！" }
    }
    
    // 2. 地形合法性检查
    if (!this.checkTerrain(nx, ny, isWhite)) {
      const message = isWhite ? "白角色只能走黑色地形或白位！" : "黑角色只能走白色地形或黑位！"
      return { valid: false, message }
    }
    
    // 3. 检查目标格是否有箱子
    const whiteBoxIndex = this.state.whiteBoxes.findIndex(b => b.x === nx && b.y === ny)
    const blackBoxIndex = this.state.blackBoxes.findIndex(b => b.x === nx && b.y === ny)
    
    // 处理箱子推动
    if (whiteBoxIndex !== -1) {
      return this.validateWhiteBoxPush(dx, dy, isWhite, whiteBoxIndex, nx, ny)
    }
    
    if (blackBoxIndex !== -1) {
      return this.validateBlackBoxPush(dx, dy, isWhite, blackBoxIndex, nx, ny)
    }
    
    // 无箱子，直接移动
    return { 
      valid: true, 
      action: 'move', 
      data: { isWhite, nx, ny }
    }
  }
  
  // 检查边界
  checkBoundary(x, y) {
    return x >= 0 && x < this.state.mapWidth && y >= 0 && y < this.state.mapHeight
  }
  
  // 检查地形
  checkTerrain(x, y, isWhite) {
    const targetValue = this.state.getMapValue(y, x)
    const otherX = isWhite ? this.state.blackX : this.state.whiteX
    const otherY = isWhite ? this.state.blackY : this.state.whiteY
    const isTargetOppositePlayer = x === otherX && y === otherY
    
    const hasWhiteBox = this.state.hasWhiteBox(x, y)
    const hasBlackBox = this.state.hasBlackBox(x, y)
    const isWhiteBoxTarget = this.state.isWhiteBoxTarget(x, y)
    const isBlackBoxTarget = this.state.isBlackBoxTarget(x, y)
    const isWhitePlayerTarget = this.state.isWhitePlayerTarget(x, y)
    const isBlackPlayerTarget = this.state.isBlackPlayerTarget(x, y)
    
    if (isWhite) {
      // 白角色可以走：黑地、黑箱子、黑箱子目标点、白角色目标点、对方角色位置
      return targetValue === GAME_CONSTANTS.CELL_TYPES.BLACK_WALL || 
             hasBlackBox || 
             isBlackBoxTarget || 
             isWhitePlayerTarget || 
             isTargetOppositePlayer
    } else {
      // 黑角色可以走：白地、白箱子、白箱子目标点、黑角色目标点、对方角色位置
      return targetValue === GAME_CONSTANTS.CELL_TYPES.WHITE_FLOOR || 
             hasWhiteBox || 
             isWhiteBoxTarget || 
             isBlackPlayerTarget || 
             isTargetOppositePlayer
    }
  }
  
  // 验证白箱子推动
  validateWhiteBoxPush(dx, dy, isWhite, boxIndex, nx, ny) {
    if (!isWhite) {
      // 黑角色走上白箱子（允许）
      return { 
        valid: true, 
        action: 'move', 
        data: { isWhite: false, nx, ny }
      }
    }
    
    // 白角色推白箱子
    const boxNextX = nx + dx
    const boxNextY = ny + dy
    
    // 箱子边界检查
    if (!this.checkBoundary(boxNextX, boxNextY)) {
      return { valid: false, message: "箱子不能越界！" }
    }
    
    // 检查箱子前方是否被阻挡
    if (this.isBlocked(boxNextX, boxNextY, boxIndex, 'white')) {
      return { valid: false, message: "箱子前方被阻挡！" }
    }
    
    // 检查箱子目标地形
    const boxNextValue = this.state.getMapValue(boxNextY, boxNextX)
    const onBlackTarget = this.state.isBlackBoxTarget(boxNextX, boxNextY)
    
    if (boxNextValue !== GAME_CONSTANTS.CELL_TYPES.BLACK_WALL && !onBlackTarget) {
      return { valid: false, message: "白箱子只能在黑色地形上移动！" }
    }
    
    return { 
      valid: true, 
      action: 'push', 
      data: { 
        isWhite: true, 
        playerPos: { nx, ny },
        boxPos: { x: boxNextX, y: boxNextY },
        boxIndex,
        boxType: 'white'
      }
    }
  }
  
  // 验证黑箱子推动
  validateBlackBoxPush(dx, dy, isWhite, boxIndex, nx, ny) {
    if (isWhite) {
      // 白角色走上黑箱子（允许）
      return { 
        valid: true, 
        action: 'move', 
        data: { isWhite: true, nx, ny }
      }
    }
    
    // 黑角色推黑箱子
    const boxNextX = nx + dx
    const boxNextY = ny + dy
    
    if (!this.checkBoundary(boxNextX, boxNextY)) {
      return { valid: false, message: "箱子不能越界！" }
    }
    
    if (this.isBlocked(boxNextX, boxNextY, boxIndex, 'black')) {
      return { valid: false, message: "箱子前方被阻挡！" }
    }
    
    const boxNextValue = this.state.getMapValue(boxNextY, boxNextX)
    const onWhiteTarget = this.state.isWhiteBoxTarget(boxNextX, boxNextY)
    
    if (boxNextValue !== GAME_CONSTANTS.CELL_TYPES.WHITE_FLOOR && !onWhiteTarget) {
      return { valid: false, message: "黑箱子只能在白色地形上移动！" }
    }
    
    return { 
      valid: true, 
      action: 'push', 
      data: { 
        isWhite: false, 
        playerPos: { nx, ny },
        boxPos: { x: boxNextX, y: boxNextY },
        boxIndex,
        boxType: 'black'
      }
    }
  }
  
  // 检查是否被阻挡
  isBlocked(x, y, excludeIndex, boxType) {
    // 检查其他箱子
    if (boxType === 'white') {
      const blockedByWhite = this.state.whiteBoxes.some(
        (b, i) => i !== excludeIndex && b.x === x && b.y === y
      )
      const blockedByBlack = this.state.blackBoxes.some(b => b.x === x && b.y === y)
      if (blockedByWhite || blockedByBlack) return true
    } else {
      const blockedByBlack = this.state.blackBoxes.some(
        (b, i) => i !== excludeIndex && b.x === x && b.y === y
      )
      const blockedByWhite = this.state.whiteBoxes.some(b => b.x === x && b.y === y)
      if (blockedByWhite || blockedByBlack) return true
    }
    
    // 检查角色
    const blockedByPlayer = (x === this.state.whiteX && y === this.state.whiteY) ||
                          (x === this.state.blackX && y === this.state.blackY)
    
    return blockedByPlayer
  }
}