<script lang="ts">
/**
 * 顶部区域 tabs 配置
 */
import type { SdProTableDefineTypes } from '../types'
import { defineComponent, h, watch, computed, inject, withModifiers } from 'vue'
import { ElRadioGroup, ElRadioButton, ElBadge } from 'element-plus'
import { sdProTableKey } from '../token'

export default defineComponent({
    name      : 'HeaderTabs',
    components: {
        ElRadioGroup,
        ElRadioButton,
        ElBadge,
    },
    setup() {
        const sdProTableCtx    = inject(sdProTableKey)!
        const { state: proTableState, props: proTableProps } = sdProTableCtx
        const { tabs_config$ } = sdProTableCtx.getComputedMaps()

        const tabs$ = computed(() => {
            return (proTableProps.tabs || []).map((item) => {
                return {
                    ...item,
                    id  : item.id   || item.value,
                    name: item.name || item.label,
                }
            })
        })

        watch(() => proTableState.curr_tab, (value) => {
            sdProTableCtx.scrollToTop()
            sdProTableCtx.emit('header-tabs-change',  { $value: value, $proTable: sdProTableCtx })
        })

        const onTablick = (item: SdProTableDefineTypes.HeaderTabItem) => {
            const value  = item.id
            const params = { $value: value, $item: item, $proTable: sdProTableCtx }
            sdProTableCtx.emit('header-tabs-click', params)
            if (typeof value === 'undefined') return

            const config = tabs_config$.value
            if (config.filter_id || config.filterMethod) {
                sdProTableCtx.setActiveTab(value)
            }
        }

        const renderTabBadge = (key: string | number | undefined) => {
            if (typeof key === 'undefined') return null

            const value = proTableState.tab_count_map[key]
            if ( !value ) return null

            return h(ElBadge, {
                value,
                style: {
                    position : 'absolute',
                    right    : 0,
                    top      : 0,
                    zIndex   : 1000,
                    transform: 'translate(30%, -20%)',
                },
            })
        }

        const renderTabAll = (position: 'left' | 'right') => {
            const config = tabs_config$.value
            if ( !config.showAll || config.allPosition !== position ) return null

            return h(ElRadioButton, {
                label  : config.allDefaultValue,
                onClick: withModifiers(() => {
                    onTablick({
                        label: config.allDefaultText,
                        value: config.allDefaultValue,
                        id   : config.allDefaultValue,
                    })
                }, ['prevent']),
            }, () => [config.allDefaultText, renderTabBadge(config.allDefaultValue)])
        }

        const renderTabs = () => {
            return tabs$.value.map((d) => {
                return h(ElRadioButton, {
                    label  : d.id,
                    onClick: withModifiers(() => { onTablick(d) }, ['prevent']),
                }, () => [d.name, renderTabBadge(d.id)])
            })
        }

        return () => {
            // 无数据不渲染
            if (!tabs$.value.length) return null

            const slot_tabs_left  = sdProTableCtx.slots['header-tabs-left']
            const slot_tabs       = sdProTableCtx.slots['header-tabs']
            const slot_tabs_right = sdProTableCtx.slots['header-tabs-right']
            const curr_tab        = sdProTableCtx.state.curr_tab

            return [
                slot_tabs_left ? slot_tabs_left({ $proTable: sdProTableCtx }) : null,
                slot_tabs
                    ? slot_tabs({
                        tabs      : tabs$.value,
                        tabsConfig: tabs_config$.value,
                        $proTable : sdProTableCtx,
                    })
                    : h(ElRadioGroup, {
                        modelValue: curr_tab,
                        style     : { marginRight: '12px' },
                    }, () => [
                        renderTabAll('left'),
                        renderTabs(),
                        renderTabAll('right'),
                    ]),
                slot_tabs_right ? slot_tabs_right({ $proTable: sdProTableCtx }) : null,
            ]
        }
    },
})
</script>
