const fs = require('node:fs')
const path = require('node:path')
const vm = require('node:vm')

const ROOT = path.resolve(__dirname, '..')

// 执行原始 ES 模块和 UX 脚本，只替换手环系统接口及定时器。
function createRuntime(options = {}) {
  let now = 0
  let timerId = 0
  const timers = new Map()
  const toasts = []
  const routes = []
  let deviceRequest
  const context = vm.createContext({
    console,
    Date: class extends Date { static now() { return now } },
    setTimeout(fn, delay) {
      timers.set(++timerId, { fn, at: now + delay })
      return timerId
    },
    clearTimeout(id) { timers.delete(id) }
  })
  const system = {
    '@system.prompt': { showToast(value) { toasts.push(value) } },
    '@system.router': {
      replace(value) { routes.push({ method: 'replace', ...value }) },
      push(value) { routes.push({ method: 'push', ...value }) }
    },
    '@system.device': {
      getInfo(request) {
        deviceRequest = request
        if (options.deviceMode === 'throw') throw new Error('Device unavailable')
        if (options.deviceMode === 'deferred') return
        if (options.deviceMode === 'fail') return request.fail()
        request.success(options.deviceInfo || { screenWidth: 192, screenHeight: 490 })
      }
    }
  }
  const modules = new Map()
  function moduleFor(file) {
    if (modules.has(file)) return modules.get(file)
    let module
    if (system[file]) {
      module = new vm.SyntheticModule(['default'], function () {
        this.setExport('default', system[file])
      }, { context, identifier: file })
    } else {
      let code = fs.readFileSync(file, 'utf8')
      if (file.endsWith('.ux')) code = code.match(/<script>([\s\S]*?)<\/script>/)[1]
      module = new vm.SourceTextModule(code, { context, identifier: file })
    }
    modules.set(file, module)
    return module
  }
  async function load(relativePath) {
    const module = moduleFor(path.resolve(ROOT, relativePath))
    if (module.status === 'unlinked') {
      await module.link((specifier, parent) => {
        if (system[specifier]) return moduleFor(specifier)
        let target = path.resolve(path.dirname(parent.identifier), specifier)
        if (!path.extname(target)) target += '.js'
        return moduleFor(target)
      })
    }
    if (module.status !== 'evaluated') await module.evaluate()
    return module.namespace
  }
  async function page(relativePath = 'src/pages/levels/level01/level01.ux', params = {}) {
    const definition = (await load(relativePath)).default
    const instance = {
      ...definition,
      ...JSON.parse(JSON.stringify({ ...definition.private, ...definition.protected })),
      ...params
    }
    for (const [name, getter] of Object.entries(definition.computed || {})) {
      Object.defineProperty(instance, name, { get: getter.bind(instance) })
    }
    if (instance.onInit) instance.onInit()
    return instance
  }
  function advance(milliseconds) {
    const until = now + milliseconds
    let calls = 0
    while (timers.size) {
      const next = [...timers].sort((a, b) => a[1].at - b[1].at)[0]
      if (next[1].at > until) break
      if (++calls > 10000) throw new Error('Timer loop did not settle')
      now = next[1].at
      timers.delete(next[0])
      next[1].fn()
    }
    now = until
  }
  return { load, page, advance, timers, toasts, routes, get deviceRequest() { return deviceRequest } }
}

function snapshot(game) {
  const s = game.state
  return JSON.parse(JSON.stringify({
    whiteX: s.whiteX, whiteY: s.whiteY, blackX: s.blackX, blackY: s.blackY,
    whiteBoxes: s.whiteBoxes, blackBoxes: s.blackBoxes,
    currentPlayer: s.currentPlayer, stepCount: s.stepCount, lastPlayerAt: s.lastPlayerAt
  }))
}

module.exports = { createRuntime, snapshot, ROOT }
