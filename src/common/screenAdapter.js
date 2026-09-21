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
 * @param {number} screenHeight 当前屏幕高度
 * @returns {number} 缩放比例
 */
export function getScale(screenWidth, screenHeight) {
  const width = Number(screenWidth)
  const height = Number(screenHeight)
  const validWidth = Number.isFinite(width) && width > 0 ? width : BASE_WIDTH
  // 较宽的手环不一定按相同比例变高，不能仅按宽度放大整页。
  const fallbackHeight = validWidth === 212 ? 520 : BASE_HEIGHT
  const validHeight = Number.isFinite(height) && height > 0 ? height : fallbackHeight
  return Math.min(validWidth / BASE_WIDTH, validHeight / BASE_HEIGHT)
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
  cellSize: 32,
  cellIconSize: 20,
  cellIconSmallSize: 15,
  cellBorder: 1,

  // 按钮
  switchBtnWidth: 50,
  switchBtnHeight: 56,
  arrowBtnSize: 30,
  undoBtnWidth: 50,
  undoBtnHeight: 36,
  resetBtnWidth: 50,
  resetBtnHeight: 36,
  btnIconSize: 20,

  // 间距
  cellGap: 0,
  btnMargin: 4,
  btnRowMargin: 2,

  // 布局
  titleHeight: 28,
  titleWidth: 120,
  infoHeight: 36,
  padding: 8,
  // 顶部和底部位于胶囊屏圆弧内，使用独立安全留白。
  paddingTop: 28,
  paddingBottom: 32,
  margin: 4,
  marginTop: 4,
  marginBottom: 4,
  gridPadding: 2,
  controlPanelMargin: 2,
}

/**
 * 获取所有适配后的尺寸
 * @param {number} screenWidth 当前屏幕宽度
 * @param {number} screenHeight 当前屏幕高度
 * @returns {object} 适配后的尺寸对象
 */
export function getAdaptedSizes(screenWidth, screenHeight) {
  const scale = getScale(screenWidth, screenHeight)
  const cellSize = adaptSize(BASE_SIZES.cellSize, scale)
  const cellBorder = Math.max(1, adaptSize(BASE_SIZES.cellBorder, scale))

  return {
    scale,
    cellSize,
    cellIconSize: adaptSize(BASE_SIZES.cellIconSize, scale),
    // 双字目标标签必须放得进扣除边框后的格子。
    cellIconSmallSize: Math.min(adaptSize(BASE_SIZES.cellIconSmallSize, scale), Math.floor((cellSize - 2 * cellBorder) / 2)),
    cellBorder,

    switchBtnWidth: adaptSize(BASE_SIZES.switchBtnWidth, scale),
    switchBtnHeight: adaptSize(BASE_SIZES.switchBtnHeight, scale),
    arrowBtnSize: adaptSize(BASE_SIZES.arrowBtnSize, scale),
    undoBtnWidth: adaptSize(BASE_SIZES.undoBtnWidth, scale),
    undoBtnHeight: adaptSize(BASE_SIZES.undoBtnHeight, scale),
    resetBtnWidth: adaptSize(BASE_SIZES.resetBtnWidth, scale),
    resetBtnHeight: adaptSize(BASE_SIZES.resetBtnHeight, scale),
    btnIconSize: adaptSize(BASE_SIZES.btnIconSize, scale),

    cellGap: adaptSize(BASE_SIZES.cellGap, scale),
    btnMargin: adaptSize(BASE_SIZES.btnMargin, scale),
    btnRowMargin: adaptSize(BASE_SIZES.btnRowMargin, scale),

    titleHeight: adaptSize(BASE_SIZES.titleHeight, scale),
    titleWidth: adaptSize(BASE_SIZES.titleWidth, scale),
    infoHeight: adaptSize(BASE_SIZES.infoHeight, scale),
    padding: adaptSize(BASE_SIZES.padding, scale),
    paddingTop: Math.ceil(BASE_SIZES.paddingTop * scale),
    paddingBottom: Math.ceil(BASE_SIZES.paddingBottom * scale),
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
    controlPanel: {
      margin: `${sizes.controlPanelMargin}px`
    },
    btnRow1: {
      marginBottom: `${sizes.btnRowMargin}px`
    },

    // 布局样式
    container: {
      padding: `${sizes.paddingTop}px ${sizes.padding}px ${sizes.paddingBottom}px`
    },
    title: {
      height: `${sizes.titleHeight}px`,
      width: `${sizes.titleWidth}px`,
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
