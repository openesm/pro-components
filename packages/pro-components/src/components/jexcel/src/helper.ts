import type { Ref          } from 'vue'
import type { SdJexcelTypes    } from './types'
import type { SdJexcelProps } from './jexcel'

import { shallowReactive, ref } from 'vue'

interface DefineProJexcelOptions<T extends object = any> extends SdJexcelProps {
    data?: T[]
}

export function defineJexcel<T extends object = any>(options: DefineProJexcelOptions<T>) {
    const jexcel_ref     = ref<SdJexcelTypes.PublicMethod>()
    const jexcel_options = shallowReactive({
        ...options,
        columns: initColumns(options?.columns),
        data   : options?.data    || [],
        options: options?.options,
    })
    return [jexcel_ref, jexcel_options] as [Ref<SdJexcelTypes.PublicMethod<T>>, Required<DefineProJexcelOptions<T>>]
}

// 初始化列
function initColumns(columns?: SdJexcelTypes.ColumnOptions[]) {
    if (!columns) return []
    return columns.map((item) => {
        return {
            ...item,
            type: item.type || 'text',
        }
    })
}
