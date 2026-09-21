import device from '@system.device'
import { getScale } from './screenAdapter'

export function getDemoLayout(width, height) {
  const scale = getScale(width, height)
  return {
    width: Math.floor(160 * scale),
    top: Math.ceil(32 * scale),
    cardHeight: Math.floor(86 * scale),
    cell: Math.floor(30 * scale),
    buttonWidth: Math.floor(75 * scale),
    panelSize: Math.floor(168 * scale)
  }
}

export function initDemoLayout(page) {
  try {
    device.getInfo({
      success: data => {
        if (!page._destroyed) page.layout = getDemoLayout(data && data.screenWidth, data && data.screenHeight)
      },
      fail: () => {}
    })
  } catch (error) {
    // The initial 192x490 layout remains usable without device information.
  }
}
