
// 数据组件选项
export type OptionValue = {
    label?       : string
    value?       : string | number
    [key: string]: any
}
export const optionValue: OptionValue = { label: 'label', value: 'value' }

export type OptionWidthCountValue = OptionValue & { count?: number }
export const optionWithCountValue = { label: 'label', value: 'value', count: 'count' }

// 组件尺寸
export const componentSizes = [
    'default',
    'small',
    'large',
] as const
export type ComponentSize = typeof componentSizes[number]

// 组件类型
export const componentTypes = [
    'primary',
    'success',
    'warning',
    'danger',
    'error',
    'info',
] as const
export type ComponentType = typeof componentTypes[number]
