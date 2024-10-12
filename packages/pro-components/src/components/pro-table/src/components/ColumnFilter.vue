<script lang="ts">
/** 列筛选器 */

import type { VxeColumnSlotTypes } from 'vxe-table'
import type { PropType } from 'vue'
import type { SdProTableDefineTypes, SdProTableFilterDefineTypes } from '../types'

import { defineComponent, reactive, watch, inject } from 'vue'
import { ElInput, ElCheckbox, ElCheckboxGroup, ElButton, ElMessageBox } from 'element-plus'
import { Search as IconSearch } from '@element-plus/icons-vue'
import { SdVirtualList        } from '../../../virtual-list'
import { sdProTableKey        } from '../token'
import {
    NUMBER_FILTER_OPTIONS,
    TEXT_FILTER_OPTIONS,
    DATE_FILTER_OPTIONS,
    JOIN_FILTER_OPTIONS,
    FILTER_EMPTY_TEXT,
} from '../config'

export default defineComponent({
    name      : 'ColumnFilter',
    components: {
        ElInput,
        ElCheckbox,
        ElCheckboxGroup,
        ElButton,
        SdVirtualList,
    },
    props: {
        params: { type: Object as PropType<VxeColumnSlotTypes.FilterSlotParams> },
    },
    setup(props) {
        // 组件注入
        const sdProTableCtx = inject(sdProTableKey)!

        // 搜索过滤 timer
        let timer: ReturnType<typeof setTimeout>

        // 筛选器数据
        const state = reactive({
            filter_data       : [] as SdProTableFilterDefineTypes.FilterItemData[], // 当前显示的筛选
            content_filter_map: {} as Record<string, any[]>, // 映射检索列表
        })

        // 监听变化，初始化筛选数据
        // TODO: 待优化，暂时解决升级版本过滤组件未销毁兼容问题
        watch(() => sdProTableCtx.$state.show_filter_panel, (visible: boolean) => {
            visible && init()
        }, { immediate: true })

        watch(() => props.params?.column, () => {
            init()
        })

        // 初始化数据
        function init() {
            // 取得当前列
            const column = props.params?.column
            if ( !column ) return

            // 扩展属性
            const params = column.params as SdProTableDefineTypes.ColumnInfoParmas

            // 取得需要筛选的自定义列
            const resolve_columns = (params.resolveColumns || []).filter(col => col.filterable !== false)

            // 筛选项
            const filter_data = [] as SdProTableFilterDefineTypes.FilterItemData[]

            // 自定义解析列
            if (resolve_columns.length) {
                resolve_columns.forEach((item) => {
                    filter_data.push(
                        initFilterItemData({
                            id                 : item.id,
                            name               : item.name,
                            filterType         : item.filterType || 'text',
                            conditionFilterable: item.conditionFilterable ?? column.params.conditionFilterable,
                            formatter          : item.formatter,
                        }),
                    )
                })
            } else {
                // 默认列
                filter_data.push(
                    initFilterItemData({
                        id                 : column.field,
                        name               : column.title,
                        filterType         : params.filterType,
                        conditionFilterable: column.params.conditionFilterable,
                        valueEnums         : params.valueEnums,
                        formatter          : params.formatter,
                    }),
                )
            }

            state.filter_data = filter_data
        }

        // 初始化 Filter 数据状态
        function initFilterItemData(
            options: {
                id                   : string
                name                 : string
                filterType           : SdProTableDefineTypes.FilterType
                conditionFilterable  : boolean
                valueEnums          ?: SdProTableDefineTypes.ValueEnumsOptions[]
                formatter           ?: SdProTableDefineTypes.FormatterMethod
            },
        ) {
            // 生成内容筛选列表
            const filters = genderContentFilters(options)

            const column_field = props.params!.column.field
            const filter_item  = getFilterItem(column_field)
            const item         = filter_item?.data.find(item => item.id === options.id)
            const search       = item?.content_data?.search || ''

            // 筛选列表
            state.content_filter_map[options.id] = !search.length
                ? filters
                : filters.filter(item => `${ item.name }`.includes(search))

            // 初始化筛选器数据状态
            const o: SdProTableFilterDefineTypes.FilterItemData = {
                id               : options.id,
                title            : options.name,
                filter_mode      : item?.filter_mode || 'content',
                is_apply         : false,
                can_custom_filter: options.conditionFilterable !== false && !(options.valueEnums || []).length,
                content_data     : {
                    is_all          : false,
                    is_indeterminate: false,
                    search          ,
                    values          : item?.content_data.values || [],
                    valuex          : {},
                    filters         ,
                },
                custom_data: {
                    render_type: item?.custom_data.render_type || options.filterType,
                    join_mode  : item?.custom_data.join_mode   || 'and',
                    type1      : item?.custom_data.type1       || undefined,
                    value1     : item?.custom_data.value1      || undefined,
                    type2      : item?.custom_data.type2       || undefined,
                    value2     : item?.custom_data.value2      || undefined,
                    filters    : options.valueEnums || [],
                },
            }

            // 检查是否全选
            if (o.content_data.values.length) {
                o.content_data.is_all           = o.content_data.values.length === o.content_data.filters.length
                o.content_data.is_indeterminate = !o.content_data.is_all
            }

            return  o
        }

        // 获取筛选模式类型
        function getFilterTypeOptions(item: { can_custom_filter: boolean }) {
            const opts = [{ label: '内容筛选', value: 'content' }]
            if (item.can_custom_filter) opts.push({ label: '条件筛选', value: 'custom' })
            return opts
        }

        // 获取自定义数据渲染类型列表
        function getCustomFilterTypeOptions(type: string) {
            switch (type) {
                case 'date'          :
                case 'datetime'      : return DATE_FILTER_OPTIONS
                case 'number'        : return NUMBER_FILTER_OPTIONS
                default              : return TEXT_FILTER_OPTIONS
            }
        }

        // 生成筛选数据列表
        function genderContentFilters(
            options: {
                id         : string
                name       : string
                filterType : SdProTableDefineTypes.FilterType
                valueEnums?: SdProTableDefineTypes.ValueEnumsOptions[]
                formatter? : SdProTableDefineTypes.FormatterMethod
            },
        ) {
            const data = [{
                id  : FILTER_EMPTY_TEXT,
                name: FILTER_EMPTY_TEXT,
            }] as SdProTableFilterDefineTypes.FilterOptionItem[]

            // 自定义字段值映射
            if (options.valueEnums && options.valueEnums.length) {
                options.valueEnums.forEach((item) => { data.push(item) })
            } else {
                // 读取所有行的数据
                const rows = getFullRows()
                const map  = {} as Record<string, boolean>

                rows.forEach((row) => {
                    let id = row[options.id]
                    let name = `${ id }`
                    if (typeof options.formatter === 'function') {
                        name = `${ options.formatter({ row, column: props.params!.column as any }) }`
                    }

                    // 修正金额类型过滤比较筛选问题 v24.01.24
                    if (options.filterType !== 'number') {
                        if (!(id in row)) id = name // 虚拟列使用格式后的名称作为 ID
                    }

                    if (name === '' || name === '-' || map[name]) return

                    data.push({ id, name: `${ name }` })
                    map[name] = true
                })
            }

            return data
        }

        // 搜索过滤
        function onSearchInput(filter_item: SdProTableFilterDefineTypes.FilterItemData) {
            const search_val = filter_item.content_data.search.trim()
            clearTimeout(timer)
            timer = setTimeout(() => {
                // 搜索条件
                const search_list = search_val.split(' ').filter(str => !!str.trim())
                state.content_filter_map[filter_item.id] = filter_item.content_data.filters.filter((item) => {
                    return search_list.every(str => String(item.name).toLowerCase().includes(String(str).toLowerCase()))
                })
            }, 300)
        }

        // 全选或取消
        function onCheckAllChange(filter_item: SdProTableFilterDefineTypes.FilterItemData) {
            filter_item.content_data.is_indeterminate = false
            if (filter_item.content_data.is_all) {
                filter_item.content_data.values = filter_item.content_data.filters.map(item => item.id)
            } else {
                filter_item.content_data.values = []
            }
        }

        // 单选检查
        function onCheckboxChange(filter_item: SdProTableFilterDefineTypes.FilterItemData) {
            if (filter_item.content_data.values.length) {
                filter_item.content_data.is_all           = filter_item.content_data.values.length === filter_item.content_data.filters.length
                filter_item.content_data.is_indeterminate = !filter_item.content_data.is_all
            } else {
                filter_item.content_data.is_all = false
                filter_item.content_data.is_indeterminate = false
            }
        }

        // 确认筛选前检查
        function checkByConfirm() {
            for (const filter_item of state.filter_data) {
                if (filter_item.filter_mode === 'content') {
                    if (!filter_item.content_data.values.length) {
                        filter_item.is_apply = false
                    } else {
                        filter_item.is_apply = true
                    }
                } else {
                    const { type1, type2 } = filter_item.custom_data
                    if (!type1 && !type2) {
                        filter_item.is_apply = false
                    } else {
                        filter_item.is_apply = true
                    }
                }
            }

            const has_filter = state.filter_data.some(item => item.is_apply)
            if ( !has_filter ) {
                ElMessageBox({
                    type       : 'warning',
                    title      : '提示',
                    message    : '筛选条件设置有误！',
                    customClass: 'sd-pro-table-filter-popup', // 标识点击操作不关闭 Filter 面板
                })
                return false
            }

            return true
        }

        // 确认筛选
        function onConfirm() {
            // 检查填写条件
            const valid = checkByConfirm()
            if ( !valid ) return

            const column = props.params?.column
            const $panel = props.params?.$panel
            if ( !column || !$panel ) return

            // 建立已选数据映射，加快过滤数据的计算
            state.filter_data.forEach((item) => {
                const valuex = {} as Record<string, boolean>
                item.content_data.values.forEach((val) => {
                    valuex[val] = true
                })
                item.content_data.valuex = valuex
            })

            // 保存筛选条件
            setFilterItem({
                id    : column.field,
                column: column as unknown as SdProTableDefineTypes.VxeColumnInfo,
                data  : state.filter_data,
            })

            // 标识当前列处于筛选状态
            $panel.changeAllOption(null, true)

            // 确认筛选
            $panel.confirmFilter()
        }

        // 重置筛选
        function onReset() {
            const column = props.params?.column
            const $panel = props.params?.$panel
            if ( !column || !$panel ) return

            // 删除当前列筛选数据
            delFilterItem(column.field)

            // 重置筛选结果
            $panel.resetFilter()
        }

        // 获取指定筛选条件项
        function getFilterItem(id: string | number) {
            const column_filters = sdProTableCtx.state.column_filters
            return column_filters.find(filter => filter.id === id)
        }

        // 设置筛选条件项
        function setFilterItem(item: SdProTableFilterDefineTypes.FilterItem) {
            const column_filters = sdProTableCtx.state.column_filters
            const idx = column_filters.findIndex(filter => filter.id === item.id)
            if (idx === -1) {
                column_filters.push(item)
            } else {
                column_filters.splice(idx, 1, item)
            }
        }

        // 删除筛选条件项
        function delFilterItem(id: string | number) {
            const column_filters = sdProTableCtx.state.column_filters
            const idx = column_filters.findIndex(filter => filter.id === id)
            if (idx !== -1) column_filters.splice(idx, 1)
        }

        function getFullRows() {
            return sdProTableCtx.state.full_rows
        }

        return {
            state,
            onSearchInput,
            onCheckAllChange,
            onCheckboxChange,
            onConfirm,
            onReset,
            IconSearch,
            getFilterTypeOptions,
            getCustomFilterTypeOptions,
            NUMBER_FILTER_OPTIONS,
            TEXT_FILTER_OPTIONS,
            DATE_FILTER_OPTIONS,
            JOIN_FILTER_OPTIONS,
        }
    },
})
</script>

<template>
    <div class="sd-pro-table-filter-wrap">
        <div class="sd-pro-table-filter-wrap-content">
            <template
                v-for="(filter_item, _filter_item_idx) in state.filter_data"
                :key="_filter_item_idx"
            >
                <div class="sd-pro-table-filter-wrap-content__item">
                    <div class="sd-pro-table-filter-wrap-content__item-header">
                        <ElIcon><Filter /></ElIcon>
                        <span class="sd-pro-table-filter-wrap-content__item-header-title">
                            {{ filter_item.title }}
                        </span>
                        <SdRadioGroup
                            v-model="filter_item.filter_mode"
                            size="small"
                            :options="getFilterTypeOptions(filter_item)"
                        />
                    </div>
                    <!-- 内容筛选 -->
                    <div
                        v-show="filter_item.filter_mode === 'content'"
                        class="sd-pro-table-filter-wrap-content__item-wrap"
                    >
                        <ElInput
                            v-model="filter_item.content_data.search"
                            placeholder="支持多条件过滤(以空格隔离)"
                            :suffix-icon="IconSearch"
                            @input="onSearchInput(filter_item)"
                        />
                        <div class="sd-pro-table-filter-wrap-content__item-wrap-body">
                            <ElCheckbox
                                v-model="filter_item.content_data.is_all"
                                :indeterminate="filter_item.content_data.is_indeterminate"
                                @change="onCheckAllChange(filter_item)"
                            >
                                全选
                            </ElCheckbox>
                            <ElCheckboxGroup v-model="filter_item.content_data.values">
                                <SdVirtualList
                                    :height="160"
                                    :items="state.content_filter_map[filter_item.id] || []"
                                    :item-height="30"
                                >
                                    <template #default="{ item }">
                                        <ElCheckbox :label="item.id" class="search-item" @change="onCheckboxChange(filter_item)">
                                            {{ item.name }}
                                        </ElCheckbox>
                                    </template>
                                </SdVirtualList>
                            </ElCheckboxGroup>
                        </div>
                    </div>
                    <!-- 条件筛选 -->
                    <div
                        v-show="filter_item.filter_mode === 'custom'"
                        class="sd-pro-table-filter-wrap-content__item-wrap-custom"
                    >
                        <ElSpace direction="vertical" alignment="flex-start">
                            <div class="sd-pro-table-filter-wrap-content__item-wrap-custom-row">
                                <SdSelect
                                    v-model="filter_item.custom_data.type1"
                                    clearable
                                    popper-class="sd-pro-table-filter-popup"
                                    :options="getCustomFilterTypeOptions(filter_item.custom_data.render_type)"
                                    :style="{ width: `${ ['date', 'datetime'].includes(filter_item.custom_data.render_type) ? 170 : 116 }px` }"
                                />
                                <SdDatePicker
                                    v-if="filter_item.custom_data.render_type === 'date'"
                                    v-model="filter_item.custom_data.value1"
                                    popper-class="sd-pro-table-filter-popup"
                                    format="YYYY-MM-DD"
                                    :shortcuts="[]"
                                />
                                <SdDatePicker
                                    v-else-if="filter_item.custom_data.render_type === 'datetime'"
                                    v-model="filter_item.custom_data.value1"
                                    popper-class="sd-pro-table-filter-popup"
                                    type="datetime"
                                    :shortcuts="[]"
                                />
                                <ElInputNumber
                                    v-else-if="filter_item.custom_data.render_type === 'number'"
                                    v-model="filter_item.custom_data.value1"
                                    placeholder="请输入"
                                />
                                <ElInput
                                    v-else
                                    v-model="filter_item.custom_data.value1"
                                    placeholder="请输入"
                                />
                            </div>
                            <SdRadioGroup
                                v-model="filter_item.custom_data.join_mode"
                                :button="false"
                                :options="JOIN_FILTER_OPTIONS"
                            />
                            <div class="sd-pro-table-filter-wrap-content__item-wrap-custom-row">
                                <SdSelect
                                    v-model="filter_item.custom_data.type2"
                                    clearable
                                    popper-class="sd-pro-table-filter-popup"
                                    :options="getCustomFilterTypeOptions(filter_item.custom_data.render_type)"
                                    :style="{ width: `${ ['date', 'datetime'].includes(filter_item.custom_data.render_type) ? 170 : 116 }px` }"
                                />
                                <SdDatePicker
                                    v-if="filter_item.custom_data.render_type === 'date'"
                                    v-model="filter_item.custom_data.value2"
                                    popper-class="sd-pro-table-filter-popup"
                                    format="YYYY-MM-DD"
                                    :shortcuts="[]"
                                />
                                <SdDatePicker
                                    v-else-if="filter_item.custom_data.render_type === 'datetime'"
                                    v-model="filter_item.custom_data.value2"
                                    popper-class="sd-pro-table-filter-popup"
                                    type="datetime"
                                    :shortcuts="[]"
                                />
                                <ElInputNumber
                                    v-else-if="filter_item.custom_data.render_type === 'number'"
                                    v-model="filter_item.custom_data.value2"
                                    placeholder="请输入"
                                />
                                <ElInput
                                    v-else
                                    v-model="filter_item.custom_data.value2"
                                    placeholder="请输入"
                                />
                            </div>
                        </ElSpace>
                    </div>
                </div>
            </template>
        </div>
        <div class="sd-pro-table-filter-wrap-footer">
            <ElButton @click="onConfirm">
                筛选
            </ElButton>
            <ElButton @click="onReset">
                重置
            </ElButton>
        </div>
    </div>
</template>
