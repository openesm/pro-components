import type { SdProTableContext } from '../types'

import Sortable from 'sortablejs'
import { isFunction } from 'lodash-es'

export const useTableSortable = ($proTable: SdProTableContext) => {
    let $sortable: Sortable | undefined
    let inited_sortable = false

    // 初始化拖拽排序
    async function initSortable() {
        const props = $proTable.props
        const state = $proTable.state

        // 未开启拖拽排序或者开启分页不处理
        if (!props.enableDargSort || props.enablePager || inited_sortable) return

        const el = document.querySelector('.sd-pro-table-body .vxe-grid .vxe-table--body-wrapper table tbody')
        if ( !el ) return

        $sortable = new Sortable(el as HTMLElement, {
            animation: 150,
            handle   : '.vxe-cell .drag',
            filter   : ((event, target, $sortable) =>  {
                if (isFunction(props.beforeDargSort)) {
                    return !props.beforeDargSort({ event, target, $sortable, $proTable })
                } else {
                    return false
                }
            }) as Sortable.Options['filter'],
            onStart: () => {
                $proTable.emit('sort-start', { $proTable })
            },
            onEnd: async (event: any) => {
                const newIndex = event.newIndex as number
                const oldIndex = event.oldIndex as number

                // 未移动位置不处理
                if (newIndex === oldIndex) return

                const new_rows = state.full_rows.concat()
                const drag_row = new_rows.splice(oldIndex, 1)[0]
                drag_row && new_rows.splice(newIndex, 0, drag_row)

                // v24.01.10 处理还原上一次排序
                const target_item = event.item
                const old_item    = event.from.children[oldIndex]
                const revoke = () => {
                    if (newIndex > oldIndex) {
                        event.from.insertBefore(target_item, old_item)
                    } else {
                        event.from.insertBefore(target_item, old_item ? old_item.nextElementSibling : old_item)
                    }
                }

                const emit_parmas = {
                    newIndex,
                    oldIndex,
                    changedRows: new_rows,
                    revoke,
                    $proTable,
                }

                $proTable.emit('sort-end', emit_parmas)
            },
            ...props.sortableOptions,
        })

        inited_sortable = true
    }

    // 设置排序属性
    function setSortableOption(key: keyof Sortable.Options, value: any) {
        $sortable && $sortable.option(key, value)
    }

    // 设置排序属性
    function getSortableOption(key: keyof Sortable.Options) {
        return $sortable && $sortable.option(key)
    }

    // 清空排序
    function destroySortable() {
        $sortable?.destroy()
        $sortable = undefined
        inited_sortable = false
    }

    return {
        $sortable,
        initSortable,
        setSortableOption,
        getSortableOption,
        destroySortable,
    }
}
