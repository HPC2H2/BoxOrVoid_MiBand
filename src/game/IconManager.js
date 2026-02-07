import { GAME_CONSTANTS } from './constants'

export class IconManager {
  constructor(gameState) {
    this.state = gameState
  }
  
  // 获取单元格图标部件
  getIconParts(y, x) {
    const type = this.getIconType(y, x)
    if (!type) {
      return { single: true, src: null }
    }

    const parts = type.split("-")
    
    // 丑陋但合理的计算方法。不知道咋改进
    // 判断是否需要拆分：只有当有 3 个 '-'（即 parts.length === 4）时才拆
    if (parts.length === 4) {
      // 按第2个'-'（从0开始是索引2）拆：前2段 + 后2段
      const firstPart = parts[0] + "-" + parts[1] // e.g. "white-box"
      const secondPart = parts[2] + "-" + parts[3] // e.g. "white-target"
      
      return {
        single: false,
        src1: this.getIconImagePath(firstPart),
        src2: this.getIconImagePath(secondPart)
      }
    } else {
      // 单图标
      return {
        single: true,
        src: this.getIconImagePath(type)
      }
    }
  }
  
  // 获取图标类型
  getIconType(y, x) {
    // 角色：白角色
    if (y === this.state.whiteY && x === this.state.whiteX) {
      return "white-player"
    }
    // 角色：黑角色
    if (y === this.state.blackY && x === this.state.blackX) {
      return "black-player"
    }

    // 白箱子
    const whiteBox = this.state.whiteBoxes.find(b => b.x === x && b.y === y)
    if (whiteBox) {
      return "white-box"
    }

    // 黑箱子
    const blackBox = this.state.blackBoxes.find(b => b.x === x && b.y === y)
    if (blackBox) {
      return "black-box"
    }

    // 箱子目标点（仅当无箱子时才显示）
    const isWhiteBoxTarget = this.state.whiteBoxTargets.some(t => t.x === x && t.y === y)
    if (isWhiteBoxTarget) {
      return "white-box-white-target"
    }

    const isBlackBoxTarget = this.state.blackBoxTargets.some(t => t.x === x && t.y === y)
    if (isBlackBoxTarget) {
      return "black-box-black-target"
    }

    // 角色目标点（仅当无角色时才显示）
    const whitePosition = this.state.whitePlayerTarget.find(t => t.x === x && t.y === y)
    if (whitePosition) {
      return "white-player-white-target"
    }

    const blackPosition = this.state.blackPlayerTarget.find(t => t.x === x && t.y === y)
    if (blackPosition) {
      return "black-player-black-target"
    }

    return null
  }
  
  // 获取图标路径
  getIconImagePath(type) {
    // 图标映射
    const icons = {
      "white-player": "/common/image/icons/grey-white.png",
      "black-player": "/common/image/icons/white-black.png",
      "white-box": "/common/image/icons/grey-box.png",
      "black-box": "/common/image/icons/white-box.png",
      "white-target": "/common/image/icons/grey-target.png",
      "black-target": "/common/image/icons/white-target.png"
    }
    return icons[type] || ""
  }
  
  // 更新所有单元格图标
  updateCellIcons() {
    const icons = {}
    for (let y = 0; y < this.state.mapHeight; y++) {
      for (let x = 0; x < this.state.mapWidth; x++) {
        const parts = this.getIconParts(y, x)
        // 注意：即使 src 为 null，也要存，否则模板可能无法响应变化
        icons[`${y},${x}`] = parts
      }
    }
    return icons
  }
}