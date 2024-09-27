import type { App } from 'vue'
import components from './component'

import { type DeepPartialGlobalConfig , setConfig, globalConfig } from './config'
export * from './hooks'
export * from './directives'
export * from './services'
export * from './components' // 公开单个组件的使用
export { getModalCount, hasVisibleModal } from './utils/modal'

export default {
    install: (app: App, config?: DeepPartialGlobalConfig) => {
        setConfig(config)      // 保存当前配置
        globalConfig.app = app // 保存当前应用
        components.forEach(c => app.use(c))
    },
}
