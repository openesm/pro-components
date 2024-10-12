<script lang="ts">
/** 导出勾选列数据 */

import type { PropType              } from 'vue'
import type { VxeTableDefines       } from 'vxe-table'
import type { SdProTableDefineTypes } from '../types'

import { defineComponent, ref, reactive, getCurrentInstance, computed, inject } from 'vue'
import {
    ElCheckbox,
    ElScrollbar,
    ElIcon,
    ElFormItem,
    ElForm,
    ElTree,
    ElSelect,
    ElOption,
    ElRadioGroup,
    ElRadioButton,
    dayjs,
} from 'element-plus'
import { ArrowDown, ArrowUp  } from '@element-plus/icons-vue'
import { SdDialog } from '../../../dialog'
import { showLoading, hideLoading  } from '../../../../services'
import { sdProTableKey } from '../token'
import { xlsxExport, csvExport, sleep } from '../tools'
import { isFunction, isNumber, isString } from 'lodash-es'

type TreeDataItem = { id: string; name: string; width?: number; children: TreeDataItem[] }
export default defineComponent({
    name      : 'ExportDialog',
    components: {
        SdDialog,
        ElSelect,
        ElOption,
        ElForm,
        ElFormItem,
        ElCheckbox,
        ElScrollbar,
        ElTree,
        ElIcon,
        ArrowDown,
        ArrowUp,
        ElRadioGroup,
        ElRadioButton,
    },
    props: {
        modelValue: { type: Boolean, default: false }, // 弹窗开关
        title     : { type: String , default: ''    }, // 下载文件名
        cols      : { type: Array  as PropType<VxeTableDefines.ColumnOptions[]> }, // 表格列数组形式配置
    },
    emits: [
        'update:modelValue',
        'confirm',
    ],
    setup(props, { emit }) {
        // 内部弹窗开关
        const internal_visible$ = computed({
            get: () => props.modelValue,
            set: (val) => {
                emit('update:modelValue', val)
            },
        })

        // 表格上下文
        const sdProTableCtx = inject(sdProTableKey)!

        // 取得表格数据
        const {
            full_rows$,
            filter_rows$,
        } = sdProTableCtx.getComputedMaps()

        const form_ref  = ref()
        const tree_ref  = ref()
        const $route    = getCurrentInstance()?.appContext.config.globalProperties.$route
        const file_name = ($route && $route?.meta?.title) || props.title || '' // 导出文件名
        const today     = dayjs(new Date()).format('YYYY-MM-DD')               // 导出文件当前日期

        // 组件数据
        const state     = reactive({
            checked_all      : true                                , // 是否全选
            all_keys         : [] as string[]                      , // 可导出的所有列 key
            tree_data        : [] as TreeDataItem[]                , // 勾选列表
            is_expand        : false                               , // 是否展示导出字段
            valid_export_cols: [] as { id: string; name: string }[], // 有效的可导出列
            form             : {
                file_name: `${ file_name } (${ today })`, // 导出文件名称
                save_type: 'all'                        , // 保存类型
                file_type: 'xlsx',
                data_type: 'format'                     , // 数据类型
                columns  : [] as string[]               , // 默认选中
            },
        })

        // 监听弹窗打开：初始化数据
        function onOpen() {
            const all_keys          = [] as string[]
            const tree_data         = [] as TreeDataItem[]
            const cols              = props.cols || []
            const valid_export_cols = [] as { id: string; name: string; width?: number } []

            loadTreeData(cols, tree_data)
            function loadTreeData(columns: VxeTableDefines.ColumnOptions[], data: TreeDataItem[]) {
                columns.forEach((col) => {
                    // 未定义编码,且不是分组列
                    if (!col.field && (!col.children || !col.children.length)) return

                    // Tree 数据
                    let width = col.width || col.minWidth
                    if (isString(width)) width = Number(width)
                    const c: TreeDataItem = {
                        id      : col.field || '',
                        name    : col.title || '',
                        width   : isNumber(width) ? width : undefined,
                        children: [],
                    }

                    // 列扩展参数
                    const parmas = col.params as SdProTableDefineTypes.ColumnInfoParmas | undefined

                    // 含有 resolveColumns 则认为是最底层
                    if (parmas && parmas.resolveColumns && parmas.resolveColumns.length) {
                        parmas.resolveColumns.forEach((item) => {
                            all_keys.push(item.id)
                            c.children.push({ id: item.id, name: item.name, children: [] })

                            // 加入导出列
                            valid_export_cols.push({ id: item.id, name: item.name })
                        })
                        if (c.children.length) data.push(c)
                        return
                    }

                    if (col.children && col.children.length) {
                        loadTreeData(col.children, c.children)

                        if (c.children.length) {
                            c.id = `${ c.id }__group` // 防止重名导致异常
                            data.push(c)
                        }
                    } else {
                        // 未设置不导出，则默认导出
                        if (parmas?.exportable !== false) {
                            valid_export_cols.push({ id: c.id, name: c.name, width: c.width })
                        }

                        all_keys.push(c.id)
                        parmas?.exportable !== false && data.push(c)
                    }
                })
            }

            state.form.columns      = all_keys
            state.all_keys          = all_keys
            state.tree_data         = tree_data
            state.valid_export_cols = valid_export_cols
        }

        // 设置选中值
        function setTreeCheckedKeys(keys: string[]) {
            tree_ref.value && tree_ref.value.setCheckedKeys(keys)
        }

        // 校验导出字段
        function validColumnsRule(_rule: any, _value: string[], callback: any) {
            if (!state.form.columns.length) {
                callback('导出字段不能为空')
            } else {
                callback()
            }
        }

        // 监听全选状态点击
        function onCheckedAllClick() {
            const checked_all = !state.checked_all

            let columns = [] as string[]
            if (!checked_all) {
                columns = []
            } else {
                columns = [...state.all_keys]
            }

            state.checked_all  = checked_all
            state.form.columns = columns
            setTreeCheckedKeys(columns)
        }

        // 监听 tree 节点选中、取消选中更新选择字段及全选状态
        function onTreeCheckChange() {
            const $tree = tree_ref.value
            if ( !$tree ) return

            const keys = $tree.getCheckedKeys(true)
            state.form.columns = keys
            state.checked_all  = state.all_keys.length === state.form.columns.length
        }

        // 处理确认
        async function handleConfirm() {
            const $form = form_ref.value
            if ( !$form ) return

            const valid = await $form.validate()
            if ( !valid ) return

            const $tree = tree_ref.value
            if ( !$tree ) return

            exportData()
            emit('update:modelValue', false)
        }

        // 处理数据导出
        async function exportData() {
            const $tree = tree_ref.value
            if ( !$tree ) return

            // 取得导出列
            const values = $tree.getCheckedKeys(true) as string[]
            const export_columns = state.valid_export_cols.filter(item => values.includes(item.id))
            if ( !export_columns.length ) return

            // 取得导出数据
            const data = !(state.form.save_type === 'all')
                ? filter_rows$.value
                : full_rows$.value
            if ( !data.length ) return

            showLoading({ text: '导出中...' })
            // --------------------------------------------------------
            await sleep(20)
            const opts = {
                file_name : `${ file_name } (${ today })`,
                sheet_name: file_name,
                columns   : export_columns,
                data      : getFormatRows(data),
            }
            switch (state.form.file_type) {
                case 'xlsx': await xlsxExport(opts); break
                case 'csv' : csvExport(opts); break
            }
            // --------------------------------------------------------
            hideLoading()
        }

        // 初始化数据
        function getFormatRows(data: any[]) {
            const map = {} as any

            const column_ids  = sdProTableCtx.state.all_data_column_ids
            const columns_map = sdProTableCtx.state.columns_map
            const columns     = column_ids.map(id => columns_map[id]!)
            columns.forEach((c) => {
                const params = c.params as SdProTableDefineTypes.ColumnInfoParmas

                // 自定义解析列过滤
                if (params.resolveColumns && params.resolveColumns.length) {
                    params.resolveColumns.forEach((item) => {
                        if (item.id && isFunction(item.formatter)) {
                            map[item.id] = (row: any) => item.formatter!({ row, column: c } as any)
                        }
                    })
                }

                // 是否禁用格式化的类型
                const is_disable_format_type = ['price', 'money', 'number'].includes(params.renderType)

                // 当前列非禁止格式化的类型且含有格式化函数，则进行格式化
                if (c.field && !is_disable_format_type && isFunction(params.formatter)) {
                    map[c.field] = (row: any) => params.formatter!({ row, column: c } as any)
                }
            })

            // 格式化数据函数
            const foramtter = (row: any) => {
                const o = Object.assign({}, row)
                Object.keys(map).forEach((k) => {
                    o[k] = map[k](row)
                })
                return o
            }

            return data.map(row => foramtter(row))
        }

        return {
            tree_ref,
            form_ref,
            state,
            internal_visible$,
            full_rows$,
            filter_rows$,
            validColumnsRule,
            onOpen,
            onCheckedAllClick,
            onTreeCheckChange,
            handleConfirm,
        }
    },
})
</script>

<template>
    <SdDialog
        v-model="internal_visible$"
        title="导出数据"
        width="500px"
        @open="onOpen"
        @confirm="handleConfirm"
    >
        <ElForm ref="form_ref" :model="state.form">
            <ElFormItem label="文件名称" :rules="[{ required: true, message: '导出文件名称不能为空' }]" prop="file_name">
                <ElInput v-model="state.form.file_name" placeholder="请输入文件名称" clearable />
            </ElFormItem>
            <ElFormItem label="保存类型" :required="true" prop="file_type">
                <ElRadioGroup v-model="state.form.file_type">
                    <ElRadioButton label="xlsx">XLSX格式</ElRadioButton>
                    <ElRadioButton label="csv">CSV格式</ElRadioButton>
                </ElRadioGroup>
            </ElFormItem>
            <ElFormItem label="选择数据" :required="true" prop="save_type">
                <ElSelect v-model="state.form.save_type" placeholder="请选择保存类型" style="width: 100%;">
                    <ElOption :label="`所有数据（共 ${ full_rows$.length } 条）`" value="all" />
                    <ElOption
                        :label="`筛选结果（共 ${ filter_rows$.length } 条）`" value="filter"
                        :disabled="!filter_rows$.length"
                    />
                </ElSelect>
            </ElFormItem>
            <ElFormItem label="选择字段" prop="columns" :rules="[{ required: true, type: 'array', validator: validColumnsRule }]">
                <div class="sd-pro-table-export-columns-wrap" :class="{ 'is-expanded': state.is_expand }">
                    <div class="sd-pro-table-export-columns-wrap__header">
                        <ElCheckbox
                            v-model="state.checked_all"
                            :indeterminate="!state.checked_all && !!state.form.columns.length"
                            @click.prevent.stop="onCheckedAllClick"
                        >
                            全部字段
                        </ElCheckbox>
                        <div @click="state.is_expand = !state.is_expand ">
                            <ElIcon>
                                <component :is="state.is_expand ? 'ArrowUp' : 'ArrowDown'" />
                            </ElIcon>
                            <span style="margin-left: 5px">{{ state.is_expand ? '收起' : '展开' }}</span>
                        </div>
                    </div>
                    <ElScrollbar style="max-height: 300px; overflow: hidden;">
                        <div
                            :style="{
                                height    : state.is_expand ? '300px' : '0px',
                                transition: 'height 0.3s ease',
                            }"
                        >
                            <ElTree
                                ref="tree_ref"
                                show-checkbox
                                highlight-current
                                node-key="id"
                                default-expand-all
                                :default-checked-keys="state.form.columns"
                                :data="state.tree_data"
                                :props="{ label: 'name', children: 'children' }"
                                @check="onTreeCheckChange"
                            />
                        </div>
                    </ElScrollbar>
                </div>
            </ElFormItem>
        </ElForm>
    </SdDialog>
</template>

