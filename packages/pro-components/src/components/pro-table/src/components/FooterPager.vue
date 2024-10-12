<script lang="ts">
import { defineComponent, h, inject } from 'vue'
import { ElPagination  } from 'element-plus'
import { sdProTableKey } from '../token'

export default defineComponent({
    name      : 'FooterPager',
    components: { ElPagination },
    setup() {
        const sdProTableCtx = inject(sdProTableKey)!
        const { state: proTableState, props: proTableProps } = sdProTableCtx
        const { pager_config$, filter_rows$ } = sdProTableCtx.getComputedMaps()

        const renderPager = () => {
            const { layout, sizes } = pager_config$.value
            return h(ElPagination, {
                'total'                : filter_rows$.value.length,
                'pageSizes'            : sizes,
                'background'           : true,
                'layout'               : proTableProps.enablePager ? layout : 'total',
                'currentPage'          : proTableState.page_index,
                'pageSize'             : proTableState.page_size,
                'pagerCount'           : 5, // 默认值：7
                'onUpdate:current-page': (val) => { proTableState.page_index = val },
                'onUpdate:page-size'   : (val) => { proTableState.page_size = val  },
                'onSizeChange'         : () => {
                    sdProTableCtx.emit('page-size-change', { $index: proTableState.page_index, $proTable: sdProTableCtx })
                },
                'onCurrentChange': () => {
                    sdProTableCtx.scrollToTop()
                    sdProTableCtx.emit('page-index-change', { $index: proTableState.page_index, $proTable: sdProTableCtx })
                },
                'onPrevClick': () => { sdProTableCtx.emit('prev-click', { $proTable: sdProTableCtx } ) },
                'onNextClick': () => { sdProTableCtx.emit('next-click', { $proTable: sdProTableCtx } ) },
            })
        }

        return () => {
            const slot_pager_left  = sdProTableCtx.slots['pager-left']
            const slot_pager_right = sdProTableCtx.slots['pager-right']

            return h('div', { class: 'sd-pro-table-header__tools' }, [
                slot_pager_left  ? slot_pager_left({ $proTable: sdProTableCtx }) : null,
                renderPager(),
                slot_pager_right ? slot_pager_right({ $proTable: sdProTableCtx }) : null,
            ])
        }
    },
})
</script>
