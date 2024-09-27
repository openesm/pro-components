// 含有 options 组件相关类型定义
export namespace OptionComponentTypes {
    export interface PropConfig {
        label? : string
        value? : string
        count? : string
        [key: string]: string | undefined
    }

    export type item = {
        label? : string
        value? : string | number
        count? : string | number
        [key: string]: any
    }
}

// 组件尺寸
export type ComponentSizes = '' | 'default' | 'small' | 'large'

// 组件类型
export type ComponentTypes = 'primary' | 'success' | 'warning' | 'danger' | 'error' | 'info'

// 递归所有属性为可选属性
export type DeepPartial<T> = { [P in keyof T]?: DeepPartial<T[P]> }
