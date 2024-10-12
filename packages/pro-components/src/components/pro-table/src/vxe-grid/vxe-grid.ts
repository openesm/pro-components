
import type { App } from 'vue'
import { h } from 'vue'
import { ElInput } from 'element-plus'

import VxeTable from 'vxe-table'
import 'vxe-table/lib/style.css'

export async function setupVxeGrid(app?: App) {
    app = app || (window as any)['$app'] as App
    app?.use(VxeTable)

    VxeTable.renderer.add('input', {
        renderEdit(_renderOpts, params) {
            const { row, column } = params
            return [
                h(ElInput, {
                    'modelValue'         : row[column.field],
                    'onUpdate:modelValue': (value) => {
                        row[column.field] = value
                    },
                    'autofocus': true,
                }),
            ]
        },
    })

    // 拦截 Filter 点击外部关闭筛选器事件
    VxeTable.interceptor.add('event.clearFilter', (params) => {
        /**
         * Event.path 已被删除（被认为是非标准API）
         * https://juejin.cn/post/7177645078146449466
         */
        const path = params?.$event?.composedPath()
        // const path = params?.$event?.path
        if ( !path ) return true

        // 是否内部弹窗元素
        const isInternalPopup = path.some((el: Element) => {
            return [...(el?.classList || [])].includes('sd-pro-table-filter-popup')
        })

        return !isInternalPopup
    })
}
