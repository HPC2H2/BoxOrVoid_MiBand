import { GameState } from './GameState'
import { MoveValidator } from './MoveValidator'
import { WinChecker } from './WinChecker'
import { IconManager } from './IconManager'
import { GAME_CONSTANTS } from './constants'

export class Game {
  constructor() {
    this.state = new GameState()
    this.validator = new MoveValidator(this.state)
    this.winChecker = new WinChecker(this.state)
    this.iconManager = new IconManager(this.state)
  }
  
  // 初始化关卡
  initLevel(levelData) {
    this.state.reset()
    
    // 设置地图
    if (levelData.mapRules) {
      this.state.mapRules = { ...levelData.mapRules }
    }
    
    // 设置角色位置
    if (levelData.whitePlayer) {
      this.state.whiteX = levelData.whitePlayer.x
      this.state.whiteY = levelData.whitePlayer.y
      // 初始化时记录白角色位置
      this.state.recordPlayerMove(levelData.whitePlayer.x, levelData.whitePlayer.y, GAME_CONSTANTS.PLAYER_TYPES.WHITE)
    }
    if (levelData.blackPlayer) {
      this.state.blackX = levelData.blackPlayer.x
      this.state.blackY = levelData.blackPlayer.y
      // 初始化时记录黑角色位置
      this.state.recordPlayerMove(levelData.blackPlayer.x, levelData.blackPlayer.y, GAME_CONSTANTS.PLAYER_TYPES.BLACK)
    }
    
    // 设置箱子
    if (levelData.whiteBoxes) {
      this.state.whiteBoxes = levelData.whiteBoxes.map(b => ({ x: b.x, y: b.y }))
    }
    if (levelData.blackBoxes) {
      this.state.blackBoxes = levelData.blackBoxes.map(b => ({ x: b.x, y: b.y }))
    }
    
    // 设置目标点
    if (levelData.whiteBoxTargets) {
      this.state.whiteBoxTargets = levelData.whiteBoxTargets.map(t => ({ x: t.x, y: t.y }))
    }
    if (levelData.blackBoxTargets) {
      this.state.blackBoxTargets = levelData.blackBoxTargets.map(t => ({ x: t.x, y: t.y }))
    }
    if (levelData.whitePlayerTarget) {
      this.state.whitePlayerTarget = levelData.whitePlayerTarget.map(t => ({ x: t.x, y: t.y }))
    }
    if (levelData.blackPlayerTarget) {
      this.state.blackPlayerTarget = levelData.blackPlayerTarget.map(t => ({ x: t.x, y: t.y }))
    }
    
    // 设置当前玩家
    if (levelData.currentPlayer !== undefined) {
      this.state.currentPlayer = levelData.currentPlayer
    }

    // 预构建坐标查找缓存
    this.state.buildCellLookupCache()
  }
  
  // 移动
  move(dx, dy) {
    const isWhite = this.state.currentPlayer === GAME_CONSTANTS.PLAYER_TYPES.WHITE
    const result = this.validator.validateMove(dx, dy, isWhite)

    if (!result.valid) {
      return { success: false, message: result.message }
    }

    // 保存当前状态到历史记录（用于撤销）
    this.state.saveState()

    // 执行移动
    if (result.action === 'move') {
      this.movePlayer(result.data.isWhite, result.data.nx, result.data.ny)
    } else if (result.action === 'push') {
      this.pushBox(
        result.data.isWhite,
        result.data.playerPos,
        result.data.boxPos,
        result.data.boxIndex,
        result.data.boxType
      )
    }

    this.state.stepCount++

    // 检查是否通关
    const isWin = this.winChecker.checkWin()

    return {
      success: true,
      isWin,
      display: this.updateCellDisplay()
    }
  }

  // 撤销上一步
  undo() {
    const result = this.state.undo()
    if (result) {
      return { success: true }
    }
    return { success: false, message: "无法撤销" }
  }

  // 检查是否可以撤销
  canUndo() {
    return this.state.canUndo()
  }
  
  // 移动玩家
  movePlayer(isWhite, x, y) {
    const playerType = isWhite ? GAME_CONSTANTS.PLAYER_TYPES.WHITE : GAME_CONSTANTS.PLAYER_TYPES.BLACK
    
    if (isWhite) {
      this.state.whiteX = x
      this.state.whiteY = y
    } else {
      this.state.blackX = x
      this.state.blackY = y
    }
    
    // 记录这个角色最后到达这个位置
    this.state.recordPlayerMove(x, y, playerType)
  }
  
  // 推动箱子
  pushBox(isWhite, playerPos, boxPos, boxIndex, boxType) {
    // 移动玩家
    this.movePlayer(isWhite, playerPos.nx, playerPos.ny)
    
    // 移动箱子
    if (boxType === 'white') {
      this.state.whiteBoxes[boxIndex].x = boxPos.x
      this.state.whiteBoxes[boxIndex].y = boxPos.y
    } else {
      this.state.blackBoxes[boxIndex].x = boxPos.x
      this.state.blackBoxes[boxIndex].y = boxPos.y
    }
    this.state.buildBoxLookupCache()
  }
  
  // 更新所有单元格图标（仅遍历一次）
  updateCellIcons() {
    return this.updateCellDisplay()
  }

  // 合并图标和样式计算为一次遍历
  updateCellDisplay() {
    const icons = {}
    const styles = {}
    const state = this.state
    for (let y = 0; y < state.mapHeight; y++) {
      for (let x = 0; x < state.mapWidth; x++) {
        const key = `${y},${x}`
        icons[key] = this.iconManager.getIconParts(y, x)
        styles[key] = {
          bg: this.getCellBg(y, x),
          border: this.getCellBorder(y, x)
        }
      }
    }
    return { icons, styles }
  }
  
  // 切换玩家
  switchPlayer() {
    this.state.switchPlayer()
    return this.state.currentPlayer
  }
  
  // 检查是否通关
  checkWin() {
    return this.winChecker.checkWin()
  }
  
    // 获取单元格背景颜色
    getCellBg(y, x) {
        const state = this.state
        
        const isWhiteBoxTarget = state.isWhiteBoxTarget(x, y)
        const isBlackBoxTarget = state.isBlackBoxTarget(x, y)
        const hasWhiteBox = state.hasWhiteBox(x, y)
        const hasBlackBox = state.hasBlackBox(x, y)
        
        // 检查是否有角色
        const hasWhitePlayer = (y === state.whiteY && x === state.whiteX)
        const hasBlackPlayer = (y === state.blackY && x === state.blackX)
        
        // 如果两个角色都在同一位置，根据最后移动的角色显示背景色
        if (hasWhitePlayer && hasBlackPlayer) {
          const lastPlayer = state.lastPlayerAt[`${y},${x}`]
          if (lastPlayer === GAME_CONSTANTS.PLAYER_TYPES.WHITE) {
            return "#FFFFFF"
          } else {
            return "#000000"
          }
        }
    
        // 优先级: 角色 > 箱子 > 箱子目标点 > 地图
        if (hasWhitePlayer) return "#FFFFFF"
        if (hasBlackPlayer) return "#000000"
        if (hasWhiteBox) return "#E0E0E0"
        if (hasBlackBox) return "#1A1A1A"
        if (isWhiteBoxTarget) return "#FCD3D3"
        if (isBlackBoxTarget) return "#333333"
    
        // 角色目标点（使用 Set 缓存）
        const hasWhitePlayerTarget = state.isWhitePlayerTarget(x, y)
        const hasBlackPlayerTarget = state.isBlackPlayerTarget(x, y)
    
        if (hasWhitePlayerTarget) return "#D3D3D3" // 白位背景色
        if (hasBlackPlayerTarget) return "#555555" // 黑位背景色
    
        return state.getMapValue(y, x) === 0 ? "#F8F9FA" : "#2D3748"
    }
    
    // 获取单元格边界颜色
    getCellBorder(y, x) {
        const state = this.state
        const hasWhitePlayer = (y === state.whiteY && x === state.whiteX)
        const hasBlackPlayer = (y === state.blackY && x === state.blackX)
        
        // 如果两个角色都在同一位置，根据最后移动的角色显示边框色
        if (hasWhitePlayer && hasBlackPlayer) {
          const lastPlayer = state.lastPlayerAt[`${y},${x}`]
          if (lastPlayer === GAME_CONSTANTS.PLAYER_TYPES.WHITE) {
            return "#3498DB"
          } else {
            return "#E74C3C"
          }
        }
        
        if (hasWhitePlayer) return "#3498DB"
        if (hasBlackPlayer) return "#E74C3C"
        return "#333333"
    }
}
