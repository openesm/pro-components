import type { UnwrapNestedRefs } from 'vue'
import type { SdProTableProps } from '../pro-table'
import type { SdProTableDefineTypes, SdProTableContext } from '../types'

import { ref, reactive, isReactive } from 'vue'
import { parseTableCols } from '../tools'

// 定义表格上下文绑定
export function defineProTableContext() {
    return ref<SdProTableContext>()
}

// 定义表格配置
export function defineProTableConfig<T extends object = SdProTableProps>(config: T) {
    return (isReactive(config) ? config : reactive<T>(config)) as UnwrapNestedRefs<T>
}

// 定义表格列配置
export function defineProTableCols(...params: (string | SdProTableDefineTypes.ColumnOptions[])[]) {
    const cols = [] as SdProTableDefineTypes.ColumnOptions[]
    params.forEach((item) => {
        if (typeof item === 'string') {
            cols.push(...parseTableCols(item))
        } else if (Array.isArray(item)) {
            cols.push(...item)
        }
    })
    return cols
}

// 定义表格列配置，映射模式
export function defineProTableColsWithConfig(params: (string | SdProTableDefineTypes.ColumnOptions[]), config: Record<string, SdProTableDefineTypes.ColumnOptions>) {
    const cols = typeof params === 'string' ? parseTableCols(params) : params
    return cols.map((item) => {
        return {
            ...item,
            ...(item.id ? config[item.id] : {}),
        }
    })
}
