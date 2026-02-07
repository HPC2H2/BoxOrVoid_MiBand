export class WinChecker {
    constructor(gameState) {
      this.state = gameState
    }
    
    // 检查是否通关
    checkWin() {
      const whiteWin = this.checkWhiteBoxes()
      const blackWin = this.checkBlackBoxes()
      const whitePlayerOnTarget = this.checkWhitePlayerTarget()
      const blackPlayerOnTarget = this.checkBlackPlayerTarget()
      
      // 所有条件都满足才通关
      return whiteWin && blackWin && whitePlayerOnTarget && blackPlayerOnTarget &&
             (this.state.whiteBoxes.length > 0 || this.state.blackBoxes.length > 0)
    }
    
    // 检查白箱子
    checkWhiteBoxes() {
      return this.state.whiteBoxes.every(box =>
        this.state.whiteBoxTargets.some(target => 
          target.x === box.x && target.y === box.y
        )
      )
    }
    
    // 检查黑箱子
    checkBlackBoxes() {
      return this.state.blackBoxes.every(box =>
        this.state.blackBoxTargets.some(target => 
          target.x === box.x && target.y === box.y
        )
      )
    }
    
    // 检查白角色
    checkWhitePlayerTarget() {
      return this.state.whitePlayerTarget.some(pos =>
        pos.x === this.state.whiteX && pos.y === this.state.whiteY
      )
    }
    
    // 检查黑角色
    checkBlackPlayerTarget() {
      return this.state.blackPlayerTarget.some(pos =>
        pos.x === this.state.blackX && pos.y === this.state.blackY
      )
    }
  }