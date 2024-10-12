<script lang="ts">
import type { VxeGridInstance } from 'vxe-table'
import type { SdProTableContext, SdProTableState } from './types'
import {
    defineComponent, reactive, computed, watch, provide, getCurrentInstance,
    ref, onBeforeMount, onMounted,
} from 'vue'
import { sdProTableProps, sdProTableEmits } from './pro-table'
import { ElEmpty    } from 'element-plus'
import { isFunction } from 'lodash-es'

import HeaderTabs           from './components/HeaderTabs.vue'          // 顶部 Tabs
import HeaderButtons        from './components/HeaderButtons.vue'       // 顶部按钮
import HeaderTools          from './components/HeaderTools.vue'         // 顶部工具栏
import HeaderQuickSearch    from './components/HeaderQuickSearch.vue'   // 顶部快速搜索
import FooterPager          from './components/FooterPager.vue'         // 底部分页组件
import ExportDialog         from './components/ExportDialog.vue'        // 导出数据弹窗组件
import ColumnSettingDialog  from './components/ColumnSettingDialog.vue' // 列设置数据弹窗组件

import { useVxeGrid          } from './vxe-grid'
import { getfilterDataByColumnFilters } from './tools'
import { sdProTableKey                } from './token'

import {
    useTableConfig,
    useTableMethod,
    useTableSortable,
    useTableColumns,
    useCalcHeight,
} from './hooks'

export default defineComponent({
    name      : 'SdProTable',
    components: {
        HeaderTabs,
        HeaderButtons,
        HeaderQuickSearch,
        HeaderTools,
        FooterPager,
        ExportDialog,
        ColumnSettingDialog,
        // VxeGrid,
        ElEmpty,
    },
    props: sdProTableProps,
    emits: sdProTableEmits,
    setup(props, ctx) {
        const instance = getCurrentInstance()!
        const grid_ref = ref<VxeGridInstance>()! // grid 实例引用

        const {
            tabs_config$,
            tools_config$,
            pager_config$,
            quick_search_config$,
        } = useTableConfig(props)


        // 组件数据
        const state = reactive<SdProTableState>({
            curr_tab                     : props.activeTab ?? getDefaultTab(), // 默认 tab 项
            tab_count_map                : {}       ,
            column_filters               : []       ,
            columns                      : []       , // 列配置
            columns_map                  : {}       , // 列配置映射
            all_data_column_ids          : []       ,
            def_visible_column_ids       : []       ,
            search_column_ids            : []       ,
            search                       : ''       , // 全表搜索值
            search_loading               : false    , // 正在搜索中状态
            full_rows                    : props.rows, // 全部数据
            page_index                   : 1        , // 分页器：当前页数
            page_size                    : 1000     , // 分页器：当前一页行数
            is_fullscreen                : false    , // 是否最大化
            visible_export_dialog        : false    , // 显示导出弹窗
            visible_column_setting_dialog: false    , // 显示列设置弹窗
            show_filter_panel            : false,
        })

        const $proTable = {
            props,
            attrs     : ctx.attrs,
            slots     : ctx.slots,
            emit      : ctx.emit,
            instance,
            state,
            $state    : state,
            getVxeGrid: () => grid_ref.value,
            getComputedMaps,
        } as SdProTableContext

        const { body_ref, body_height } = useCalcHeight($proTable)
        const { grid_opts$ } = useVxeGrid(props, state)
        const {
            initColumns,
            loadSearchColumnIds,
        } = useTableColumns($proTable)
        const {
            initSortable,
            getSortableOption,
            setSortableOption,
            destroySortable,
        } = useTableSortable($proTable)
        const table_methods    = useTableMethod($proTable)
        Object.assign($proTable, table_methods, {
            loadSearchColumnIds,
            initSortable,
            getSortableOption,
            setSortableOption,
            destroySortable,
        })

        // 全部数据
        const full_rows$ = computed(() => {
            const rows = state.full_rows

            // 取得 tabs 配置
            const conf = tabs_config$.value

            // 显示全部
            if (conf.showAll && state.curr_tab === conf.allDefaultValue) return rows

            // 无指定过滤项或者过滤方法
            if (!conf.filter_id && !conf.filterMethod) return rows

            // 自定义筛选或默认跟随 tab 筛选
            return rows.filter((item) => {
                // 自定义过滤函数
                if (isFunction(conf.filterMethod)) {
                    return conf.filterMethod({ row: item, value: state.curr_tab })
                } else {
                    return item[conf.filter_id] === state.curr_tab
                }
            })
        })

        // 当前数据: 快速搜索数据 -》筛选条件之后数据 -》全部数据
        const filter_rows$ = computed(() => {
            let rows = full_rows$.value

            // 处理筛选条件
            if (state.column_filters.length) {
                rows = getfilterDataByColumnFilters(full_rows$.value, state.column_filters) || []
            }

            // 处理搜索条件
            if (!quick_search_config$.value.remote && state.search.trim()) {
                // 未输入合法的值
                const search_val = state.search.trim()
                if ( !search_val ) return rows

                // 可搜索列编码
                const ids = state.search_column_ids

                // 搜索条件
                const search_list = search_val.split(' ').filter(str => !!str.trim())

                // 支持空格分隔作为筛选条件: & 的关系
                rows = rows.filter((row) => {
                    return search_list.every((str) => {
                        return ids.some(id => String(row[id]).toLowerCase().includes(String(str).toLowerCase()))
                    })
                })
            }

            return rows
        })

        // 当前显示数据
        const visible_rows$ = computed(() => {
            const rows = filter_rows$.value

            // 未开启本地分页功能
            if (!props.enablePager || pager_config$.value.remote) return rows.slice(0, rows.length)

            // 数据分页
            const i = (state.page_index - 1) * state.page_size
            const j = i + state.page_size
            return rows.slice(i, j)
        })

        // 为空文本提示
        const empty_text$ = computed(() => {
            if (state.column_filters.length || !!state.search.trim()) {
                return quick_search_config$.value.emptyText
            } else {
                return props.emptyText
            }
        })

        function getComputedMaps() {
            return {
                tabs_config$,
                tools_config$,
                pager_config$,
                quick_search_config$,
                full_rows$,
                filter_rows$,
                visible_rows$,
            }
        }

        // 监听当前激活tab项变化
        watch(() => props.activeTab, (tab) => {
            if (tab !== undefined) { state.curr_tab = tab }
        })

        // 监听表格列配置变化
        watch(() => props.cols, () => initColumns())

        // 监听外部数据变化
        watch(() => props.rows, rows => state.full_rows = rows)

        // 监听过滤数据变化
        watch(filter_rows$, (rows) => {
            ctx.emit('filter-data-change', { rows, $proTable })
        })

        // 监听可视数据变化
        watch(visible_rows$, (rows) => {
            ctx.emit('visible-data-change', { rows, $proTable })
        })

        onBeforeMount(() => { initColumns() })
        onMounted(async () => {
            setTimeout(() => {
                initSortable()      // 初始化拖拽排序
            }, 0)
        })

        // 取得默认 tab 项
        function getDefaultTab() {
            if (!props.tabs || !props.tabs.length) return ''

            const tabs_config = tabs_config$.value
            if (tabs_config.showAll && tabs_config.allPosition === 'left') {
                return tabs_config.allDefaultValue
            }

            return props.tabs[0]?.value ?? ''
        }

        // 处理 vxe-grid 事件
        function handleGridEvent(key: string, params: any) {
            ctx.emit(key, { ...params, $proTable })
        }

        // 依赖注入
        provide(sdProTableKey, $proTable)

        // 外部暴露
        ctx.expose($proTable)
        return {
            state,
            body_ref,
            body_height,
            grid_ref,
            grid_opts$,
            visible_rows$,
            empty_text$,
            tools_config$,
            // ----------------------------
            handleGridEvent,
        }
    },
})
</script>

<template>
    <div
        class="sd-pro-table" :class="{ 'is-fullscreen': state.is_fullscreen }"
        :style="{ height: height ?? '100%', minHeight }"
    >
        <!-- 顶部区域 -->
        <div v-if="showHeader" class="sd-pro-table-header" :style="headerStyle">
            <div class="sd-pro-table-header__left">
                <slot name="header-left">
                    <!-- 顶部左侧标题 -->
                    <slot name="title">
                        <span v-if="title" style="margin-right: 12px;">{{ title }}</span>
                    </slot>

                    <!-- 顶部 Tabs -->
                    <HeaderTabs />

                    <!-- 顶部左侧按钮 -->
                    <slot name="header-buttons-left" />
                    <HeaderButtons v-if="buttons && buttons.length" :data="buttons" />
                    <slot name="header-buttons-right" />
                </slot>
            </div>
            <div class="sd-pro-table-header__right">
                <slot name="header-right" />
                <!-- 顶部右侧快速搜索 -->
                <HeaderQuickSearch />

                <!-- 顶部右侧工具区域 -->
                <HeaderTools />
            </div>
        </div>

        <!-- alert 区域 -->
        <div v-if="$slots.alert" class="sd-pro-table-alert" :style="alertStyle">
            <slot name="alert" />
        </div>

        <!-- Grid 区域 -->
        <div ref="body_ref" class="sd-pro-table-body" :style="bodyStyle">
            <VxeGrid
                ref="grid_ref"
                v-bind="grid_opts$"
                :height="body_height || 'auto'"
                :columns="state.columns"
                :data="visible_rows$"
                @cell-click="(params: any) => handleGridEvent('cell-click', params)"
                @cell-dblclick="(params: any) => handleGridEvent('cell-dblclick', params)"
                @current-change="(params: any) => handleGridEvent('current-change', params)"
                @scroll="(params: any) => handleGridEvent('scroll', params)"
                @radio-change="(params: any) => handleGridEvent('radio-change', params)"
                @checkbox-change="(params: any) => handleGridEvent('checkbox-change', params)"
                @checkbox-all="(params: any) => handleGridEvent('checkbox-all', params)"
                @checkbox-range-start="(params: any) => handleGridEvent('checkbox-range-start', params)"
                @checkbox-range-change="(params: any) => handleGridEvent('checkbox-range-change', params)"
                @checkbox-range-end="(params: any) => handleGridEvent('checkbox-range-end', params)"
                @toggle-row-expand="(params: any) => handleGridEvent('toggle-row-expand', params)"
                @resizable-change="(params: any) => handleGridEvent('resizable-change', params)"
                @header-cell-click="(params: any) => handleGridEvent('header-cell-click', params)"
                @header-cell-dblclick="(params: any) => handleGridEvent('header-cell-dblclick', params)"
                @filter-change="(params: any) => handleGridEvent('filter-change', params)"
                @filter-visible="(params: any) => {
                    state.show_filter_panel = params.visible
                    handleGridEvent('filter-visible', params);
                }"
            >
                <template #empty>
                    <slot name="empty">
                        <ElEmpty :description="empty_text$">
                            <slot name="empty-extra" />
                        </ElEmpty>
                    </slot>
                </template>
            </VxeGrid>
        </div>

        <!-- 底部区域 -->
        <div v-if="showFooter" class="sd-pro-table-footer" :style="footerStyle">
            <!-- 底部左侧区域 -->
            <div class="sd-pro-table-footer__left">
                <slot name="footer-left" />
            </div>
            <div class="sd-pro-table-footer__right">
                <slot name="footer-right" />
                <!-- 底部右侧分页器 -->
                <FooterPager />
            </div>
        </div>

        <!-- 导出表格数据弹窗 -->
        <ExportDialog
            v-if="tools_config$.enableExport"
            v-model="state.visible_export_dialog"
            :title="title"
            :cols="state.columns"
        />

        <!-- 列设置数据弹窗 -->
        <ColumnSettingDialog v-if="tools_config$.enableColumnSetting" v-model="state.visible_column_setting_dialog" />
    </div>
</template>
