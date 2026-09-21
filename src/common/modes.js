export const SELECT_PATH = '/pages/select'
export const MODES = [
  { id: 'classic', number: '01', title: '经典', description: '黑白切换 · 推箱归位', tag: '第 1 关', color: '#2ECC71', path: '/pages/levels/level01' },
  { id: 'timed', number: '02', title: '定时变化', description: '倒计时 · 地形翻色', tag: '第 1 关 · 双拍归位', color: '#3498DB', path: '/pages/timed' },
  { id: 'mobius', number: '03', title: '莫比乌斯环', description: '扭转环带 · 越界翻转', tag: '第 1 关 · 翻面归位', color: '#9B59B6', path: '/pages/mobius' }
]

export function getMode(id) {
  return MODES.find(mode => mode.id === id)
}
