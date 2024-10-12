<script lang="ts">
import { defineComponent, h, inject } from 'vue'
import { ElInput, ElIcon } from 'element-plus'
import { sdProTableKey   } from '../token'

import { Search as IconSearch } from '@element-plus/icons-vue'

export default defineComponent({
    name: 'HeaderQuickSearch',
    setup() {
        const sdProTableCtx = inject(sdProTableKey)!
        const { state: proTableState, props: proTableProps } = sdProTableCtx
        const { quick_search_config$ } = sdProTableCtx.getComputedMaps()

        const renderSearch = () => {
            if (proTableProps.enableQuickSearch) {
                const config = quick_search_config$.value
                return h(ElInput, {
                    'clearable'          : true,
                    'placeholder'        : config.placeholder,
                    'style'              : { width: config.width },
                    'modelValue'         : proTableState.search,
                    'onUpdate:modelValue': (val) => {
                        sdProTableCtx.scrollToTop()
                        proTableState.search = val
                    },
                    'onChange': (value) => {
                        sdProTableCtx.emit('search-change', { value, $proTable: sdProTableCtx })
                    },
                    'onKeyup': (event: any) => {
                        if (event.key !== 'Enter') return
                        sdProTableCtx.emit('search-enter', { value: proTableState.search, $proTable: sdProTableCtx })
                    },
                    'onFocus': () => { sdProTableCtx.emit('search-focus', { $proTable: sdProTableCtx }) },
                    'onBlur' : () => { sdProTableCtx.emit('search-blur' , { $proTable: sdProTableCtx }) },
                    'onClear': () => { sdProTableCtx.emit('search-clear', { $proTable: sdProTableCtx }) },
                }, {
                    prefix: () => h(ElIcon, { class: 'sd-pro-table-header__right-search-icon' }, () => h(IconSearch)),
                })
            } else {
                return null
            }
        }
        return () => {
            const slot_search_left  = sdProTableCtx.slots['header-quick-search-left']
            const slot_search_right = sdProTableCtx.slots['header-quick-search-right']
            return [
                slot_search_left ? slot_search_left({ $proTable: sdProTableCtx }) : null,
                renderSearch(),
                slot_search_right ? slot_search_right({ $proTable: sdProTableCtx }) : null,
            ]
        }
    },
})
</script>
