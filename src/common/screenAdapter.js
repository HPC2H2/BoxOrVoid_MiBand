/**
 * 屏幕适配工具 - 以 Mi Band 9 (192x490) 为基准
 * Mi Band 9: 192x490
 * Mi Band 10: 212x520
 */

// 基准设备尺寸（Mi Band 9）
const BASE_WIDTH = 192
const BASE_HEIGHT = 490

/**
 * 获取屏幕缩放比例
 * @param {number} screenWidth 当前屏幕宽度
 * @returns {number} 缩放比例
 */
export function getScale(screenWidth) {
  return screenWidth / BASE_WIDTH
}

/**
 * 适配尺寸
 * @param {number} baseSize 基准尺寸（Mi Band 9上的尺寸）
 * @param {number} scale 缩放比例
 * @returns {number} 适配后的尺寸
 */
export function adaptSize(baseSize, scale) {
  return Math.floor(baseSize * scale)
}

/**
 * 适配间距
 * @param {number} baseGap 基准间距
 * @param {number} scale 缩放比例
 * @returns {number} 适配后的间距
 */
export function adaptGap(baseGap, scale) {
  return Math.floor(baseGap * scale)
}

/**
 * 适配字体大小
 * @param {number} baseFontSize 基准字体大小
 * @param {number} scale 缩放比例
 * @returns {number} 适配后的字体大小
 */
export function adaptFontSize(baseFontSize, scale) {
  return Math.floor(baseFontSize * scale)
}

// 预定义的基准尺寸（Mi Band 9）
export const BASE_SIZES = {
  // 游戏格子
  cellSize: 34,
  cellIconSize: 20,
  cellIconSmallSize: 16,
  cellBorder: 1,

  // 按钮
  switchBtnWidth: 50,
  switchBtnHeight: 60,
  arrowBtnSize: 30,
  undoBtnWidth: 50,
  undoBtnHeight: 40,
  resetBtnWidth: 50,
  resetBtnHeight: 40,
  btnIconSize: 20,

  // 间距
  controlAreaGap: 40,
  cellGap: 0,
  btnMargin: 4,
  btnRowMargin: 4,

  // 布局
  titleHeight: 30,
  titleWidth: '70%',
  infoHeight: 40,
  padding: 8,
  margin: 8,
  marginTop: 4,
  marginBottom: 10,
  gridPadding: 2,
  controlPanelMargin: 4,
}

/**
 * 获取所有适配后的尺寸
 * @param {number} screenWidth 当前屏幕宽度
 * @returns {object} 适配后的尺寸对象
 */
export function getAdaptedSizes(screenWidth) {
  const scale = getScale(screenWidth)

  return {
    scale,
    cellSize: adaptSize(BASE_SIZES.cellSize, scale),
    cellIconSize: adaptSize(BASE_SIZES.cellIconSize, scale),
    cellIconSmallSize: adaptSize(BASE_SIZES.cellIconSmallSize, scale),
    cellBorder: adaptSize(BASE_SIZES.cellBorder, scale),

    switchBtnWidth: adaptSize(BASE_SIZES.switchBtnWidth, scale),
    switchBtnHeight: adaptSize(BASE_SIZES.switchBtnHeight, scale),
    arrowBtnSize: adaptSize(BASE_SIZES.arrowBtnSize, scale),
    undoBtnWidth: adaptSize(BASE_SIZES.undoBtnWidth, scale),
    undoBtnHeight: adaptSize(BASE_SIZES.undoBtnHeight, scale),
    resetBtnWidth: adaptSize(BASE_SIZES.resetBtnWidth, scale),
    resetBtnHeight: adaptSize(BASE_SIZES.resetBtnHeight, scale),
    btnIconSize: adaptSize(BASE_SIZES.btnIconSize, scale),

    controlAreaGap: adaptSize(BASE_SIZES.controlAreaGap, scale),
    cellGap: adaptSize(BASE_SIZES.cellGap, scale),
    btnMargin: adaptSize(BASE_SIZES.btnMargin, scale),
    btnRowMargin: adaptSize(BASE_SIZES.btnRowMargin, scale),

    titleHeight: adaptSize(BASE_SIZES.titleHeight, scale),
    titleWidth: '70%',
    infoHeight: adaptSize(BASE_SIZES.infoHeight, scale),
    padding: adaptSize(BASE_SIZES.padding, scale),
    margin: adaptSize(BASE_SIZES.margin, scale),
    marginTop: adaptSize(BASE_SIZES.marginTop, scale),
    marginBottom: adaptSize(BASE_SIZES.marginBottom, scale),
    gridPadding: adaptSize(BASE_SIZES.gridPadding, scale),
    controlPanelMargin: adaptSize(BASE_SIZES.controlPanelMargin, scale),
  }
}

/**
 * 获取样式对象字符串
 * @param {object} sizes 适配后的尺寸对象
 * @returns {object} 样式对象
 */
export function getStyles(sizes) {
  return {
    // 格子样式
    cell: {
      width: `${sizes.cellSize}px`,
      height: `${sizes.cellSize}px`,
      border: `${sizes.cellBorder}px solid #333333`
    },
    cellIcon: {
      width: `${sizes.cellIconSize}px`,
      height: `${sizes.cellIconSize}px`
    },
    cellIconSmall: {
      width: `${sizes.cellIconSmallSize}px`,
      height: `${sizes.cellIconSmallSize}px`
    },

    // 按钮样式
    switchBtn: {
      width: `${sizes.switchBtnWidth}px`,
      height: `${sizes.switchBtnHeight}px`,
      margin: `${sizes.btnMargin}px`
    },
    arrowBtn: {
      width: `${sizes.arrowBtnSize}px`,
      height: `${sizes.arrowBtnSize}px`,
      margin: '1px'
    },
    undoBtn: {
      width: `${sizes.undoBtnWidth}px`,
      height: `${sizes.undoBtnHeight}px`,
      margin: `${sizes.btnMargin}px`
    },
    resetBtn: {
      width: `${sizes.resetBtnWidth}px`,
      height: `${sizes.resetBtnHeight}px`,
      margin: `${sizes.btnMargin}px`
    },
    btnIcon: {
      width: `${sizes.btnIconSize}px`,
      height: `${sizes.btnIconSize}px`
    },

    // 间距样式
    controlArea2: {
      gap: `${sizes.controlAreaGap}px`
    },
    controlPanel: {
      margin: `${sizes.controlPanelMargin}px`
    },
    btnRow1: {
      marginBottom: `${sizes.btnRowMargin}px`
    },

    // 布局样式
    container: {
      padding: `${sizes.padding}px`
    },
    title: {
      height: `${sizes.titleHeight}px`,
      width: sizes.titleWidth,
      margin: `${sizes.marginTop}px 0 3px 0`
    },
    info: {
      height: `${sizes.infoHeight}px`,
      margin: '2px'
    },
    gameGrid: {
      padding: `${sizes.gridPadding}px`,
      margin: `${sizes.margin}px 0`
    },
    controlArea: {
      marginTop: `${sizes.marginTop}px`
    },
    switchArea: {
      marginBottom: `${sizes.marginBottom}px`
    }
  }
}
