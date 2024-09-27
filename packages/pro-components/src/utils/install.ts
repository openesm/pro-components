import type { App, AppContext, Plugin, Component } from 'vue'
import { isFunction } from 'lodash-es'

type SFCWithInstall<T> = T & Plugin
type SFCInstallWithContext<T> = SFCWithInstall<T> & {
    _context: AppContext | null
}

// 安装全局组件
export const withInstall = <T extends Component, E extends Record<string, any>>(
    main: T,
    extra?: E,
) => {
    (main as SFCWithInstall<T>).install = (app): void => {
        // v23.11.04 补充函数 app 上下文，用于 createVNode 函数类关联当前 app 上下文
        for (const comp of [main, ...Object.values(extra ?? {})]) {
            if (isFunction(comp)) {
                (comp as any)._context = app ? app._context : null
            } else {
                app.component(comp.name, comp)
            }
        }
    }

    // 补充扩展属性至组件
    if (extra) {
        for (const [key, comp] of Object.entries(extra)) {
            (main as any)[key] = comp
        }
    }
    return main as SFCWithInstall<T> & E
}

// 安装 app 全局函数
export const withInstallFunction = <T>(fn: T, name: string) => {
    (fn as SFCWithInstall<T>).install = (app: App) => {
        (fn as SFCInstallWithContext<T>)._context = app._context
        app.config.globalProperties[name] = fn
    }

    return fn as SFCInstallWithContext<T>
}

export const withNoopInstall = <T>(component: T) => {
    (component as SFCWithInstall<T>).install = () => {}

    return component as SFCWithInstall<T>
}
