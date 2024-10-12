
import type { SdProTableProps } from '../pro-table'

import { computed } from 'vue'
import { isNumber } from 'lodash-es'

export const useTableConfig = (props: SdProTableProps) => {
    // tabs 配置
    const tabs_config$ = computed(() => {
        const conf = props.tabsConfig
        return {
            showAll        : conf?.showAll         ?? false,
            allDefaultText : conf?.allDefaultText  ?? '全部',
            allDefaultValue: conf?.allDefaultValue ?? '',
            allPosition    : conf?.allPosition     ?? 'left',
            filter_id      : conf?.filter_id       ?? '',
            filterMethod   : conf?.filterMethod    ?? undefined,
        }
    })

    // 工具栏配置
    const tools_config$ = computed(() => {
        const conf = props.toolsConfig
        return {
            enableRefresh      : conf?.enableRefresh       ?? false,
            enableExport       : conf?.enableExport        ?? true,
            enableFullscreen   : conf?.enableFullscreen    ?? true,
            enableColumnSetting: conf?.enableColumnSetting ?? true,
        }
    })

    // 分页器配置
    const pager_config$ = computed(() => {
        const conf = props.pagerConfig
        return {
            remote: conf?.remote ?? false,
            sizes : conf?.sizes  ?? [10, 20, 30, 40, 50, 100, 200, 300, 400, 500, 800, 1000],
            layout: conf?.layout ?? 'total, sizes, prev, pager, next, jumper',
        }
    })

    // 快速搜索配置
    const quick_search_config$ = computed(() => {
        const conf = props.quickSearchConfig
        return {
            remote     : conf?.remote ?? false,
            width      : isNumber(conf?.width) ? `${ conf?.width }px` : (conf?.width || '200px'),
            placeholder: conf?.placeholder ?? '快速搜索...',
            emptyText  : conf?.emptyText   ?? '抱歉，未找到您要的数据',
        }
    })

    return {
        tabs_config$,
        tools_config$,
        pager_config$,
        quick_search_config$,
    }
}
