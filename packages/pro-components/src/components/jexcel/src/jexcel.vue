<script lang="ts">
import type { SdJexcelTypes, Jspreadsheet } from './types'
import type { CSSProperties } from 'vue'

import { defineComponent, ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { jexcelProps, jexcelEmits } from './jexcel'
import { globalConfig } from '../../../config'
import { isFunction, isString, isNumber } from 'lodash-es'

import zhCN from './locale/zh-cn'

export default defineComponent({
    name : 'SdJexcel',
    props: jexcelProps,
    emits: jexcelEmits,
    setup(props, ctx) {
        let createJexcel: Function
        let $jexcel: any
        const loading  = ref(true)
        const wrap_ref = ref<HTMLDivElement | null>()

        const css_var_styles$ = computed(() => {
            const styles: CSSProperties = {}

            const title_height        = getUnitStyleValue(props.titleHeight)
            const row_height          = getUnitStyleValue(props.rowHeight)
            const loading_height      = getUnitStyleValue(props.loadingHeight)
            const readonly_background = props.readonlyBackground
            const readonly_color      = props.readonlyColor

            if (title_height       ) styles['--sd-jexcel-title-height']           = title_height
            if (row_height         ) styles['--sd-jexcel-row-height']             = row_height
            if (loading_height     ) styles['--sd-jexcel-loading-height']         = loading_height
            if (readonly_background) styles['--sd-jexcel-td-readonly-background'] = readonly_background
            if (readonly_color     ) styles['--sd-jexcel-td-readonly-color']      = readonly_color

            return styles
        })

        // const bind_title_height = computed(() => {
        //     const height = props.titleHeight
        //     if (height !== undefined) {
        //         return typeof height === 'number' ? `${ height }px` : height
        //     } else {
        //         return 'var(--sd-pro-jexcel-title-height, auto)'
        //     }
        // })

        // const bind_row_height = computed(() => {
        //     const height = props.rowHeight
        //     if (height !== undefined) {
        //         return typeof height === 'number' ? `${ height }px` : height
        //     } else {
        //         return 'var(--sd-pro-jexcel-row-height, auto)'
        //     }
        // })

        // const bind_readonly_background = computed(() => {
        //     const background = props.readonlyBackground
        //     return background || 'var(--sd-pro-jexcel-td-readonly-background, #f3f3f3)'
        // })

        // const bind_readonly_color = computed(() => {
        //     const color = props.readonlyColor
        //     return color || 'var(--sd-pro-jexcel-td-readonly-color, #303133)'
        // })

        // const bind_loading_height = computed(() => {
        //     const height = props.loadingHeight
        //     if (height !== undefined) {
        //         return typeof height === 'number' ? `${ height }px` : height
        //     } else {
        //         return 'var(--sd-pro-jexcel-loading-height, auto)'
        //     }
        // })

        // 获取单位样式值
        function getUnitStyleValue(value: unknown) {
            if (isString(value)) return value
            if (isNumber(value)) return `${ value }px`
            return undefined
        }

        // 监听列数据变化，重新创建
        watch(() => props.columns, async () => {
            wrap_ref.value && initJexcel(wrap_ref.value)
        })

        // 监听数据变化进行更新
        watch(() => props.data, setData)

        // 监听是否显示行号
        watch(() => props.index, (show) => {
            show ? showIndex() : hideIndex()
        })

        onMounted(() => { load() })
        onUnmounted(() => {
            $jexcel        = null
            wrap_ref.value = null
        })

        async function load() {
            const $el = wrap_ref.value
            if ( !$el ) return

            const { require } = globalConfig.plugins?.jexcel || {}
            if (!isFunction(require)) return

            try {
                ctx.emit('require')
                loading.value = true
                createJexcel = await require()
                loading.value = false
                if (!createJexcel) return new Error('加载 jexcel 失败')
                ctx.emit('require-success', createJexcel)
                initJexcel($el)
                ctx.emit('ready', $jexcel)
            } catch (error) {
                ctx.emit('require-error', error)
            }
        }

        function initJexcel(el: HTMLDivElement) {
            if (createJexcel) {
                el.innerHTML = ''
                const opts = initOptions({
                    ...props.options,
                    columns: props.columns || [],
                    data   : props.data    || [],
                })
                $jexcel = createJexcel(el, opts)
                if (props.index === false) hideIndex() // 隐藏行号
            }
        }

        function initOptions(options: SdJexcelTypes.InitOptions & { columns: SdJexcelTypes.ColumnOptions[]; data: SdJexcelTypes.Data }) {
            const DEF_OPTS: SdJexcelTypes.InitOptions = {
                editable               : true,
                // ----------------------------
                allowInsertColumn      : false, // 允许插入新列     @default true
                allowManualInsertColumn: false, // 允许用户在最后一列上使用制表键插入新列 @default true
                allowDeleteColumn      : false, // 允许删除列       @default true
                allowRenameColumn      : false, // 允许重命名列     @default true
                columnSorting          : false, // 允许列排序。     @default true
                columnDrag             : false, // 允许拖动列。     @default false
                columnResize           : false, // 允许调整列大小。 @default true
                // ----------------------------
                allowInsertRow         : false, // 允许插入新行     @default true
                allowManualInsertRow   : false, // 允许用户在最后一行使用空格键插入新行。@default true
                allowDeleteRow         : false, // 允许删除一行     @default true
                allowDeletingAllRows   : false, // 允许删除所有行。否则，将至少保留一行。@default false
                rowDrag                : false, // 允许行拖动。     @default true
                rowResize              : false, // 允许调整行大小。 @default false
                // ----------------------------
                defaultColWidth        : 120        , // 默认列宽
                defaultColAlign        : 'center'   , // 默认居中排列
                // ----------------------------
                autoCasting            : false      , // 如果为true，Jss将尝试将公式中使用的单元格内容转换为数字 @default true
                about                  : false      , // 在上下文菜单中显示或不显示“关于”项目。                  @default true
                csvFileName            : 'sheet'    , // 下载 csv 文件默认文件名                                 @default "jspreadsheet"
                // allowToolbar           : false      , // 不使用工具栏
                tableOverflow          : false       , // 溢出显示滚动条
                tableWidth             : '100%'     , // 设置表格最大宽度，需开启 tableOverflow 属性
                tableHeight            : '100%'     , // 设置表格最大高度，需开启 tableOverflow 属性，
                // lazyLoading            : true       , // 懒加载
                text                   : zhCN       , // 语言包
                contextMenu            : () => null , // 禁用右键菜单
            }

            // v23.12.26 未设置该数据，含有该属性会导致插入行配置失效
            if (props.mergeCells   ) DEF_OPTS.mergeCells    = props.mergeCells
            if (props.minDimensions) DEF_OPTS.minDimensions = props.minDimensions as [number, number]

            // 数据修改前钩子，可返回值进行覆盖
            let onbeforechange: Jspreadsheet.JSpreadsheetOptions['onbeforechange'] | undefined
            const onbeforechange_fn = props.onBeforeChange
            if (onbeforechange_fn && typeof onbeforechange_fn === 'function') {
                onbeforechange = (element, cell, colIndex, rowIndex, newValue) => {
                    const col = props.columns[Number(colIndex)]!
                    return onbeforechange_fn!({
                        element,
                        cell,
                        col,
                        colIndex: Number(colIndex),
                        rowIndex: Number(rowIndex),
                        newValue,
                    })
                }
            }

            // 数据修改后钩子，可用于检查数据合法性
            let onafterchanges: Jspreadsheet.JSpreadsheetOptions['onafterchanges'] | undefined
            const onafterchanges_fn = props.onAfterChanges
            if (onafterchanges_fn && typeof onafterchanges_fn === 'function') {
                onafterchanges = (element, changes) => {
                    onafterchanges_fn!({ element, changes })
                }
            }

            // 更新表格，可用于修改单元格样式
            let updateTable: Jspreadsheet.JSpreadsheetOptions['updateTable'] | undefined
            const updateTable_fn = props.onUpdateTable
            if (updateTable_fn && typeof updateTable_fn === 'function') {
                updateTable = (instance, cell, colIndex, rowIndex, value, displayedValue, cellName ) => {
                    updateTable_fn!({
                        instance,
                        cell,
                        colIndex: Number(colIndex),
                        rowIndex: Number(rowIndex),
                        value,
                        displayedValue,
                        cellName,
                    })
                }
            }

            // 点击单元格编辑时触发
            let oneditionstart: Jspreadsheet.JSpreadsheetOptions['oneditionstart'] | undefined
            const oneditionstart_fn = props.onEditionStart
            if (oneditionstart_fn && typeof oneditionstart_fn === 'function') {
                oneditionstart = (element, td, colIndex, rowIndex) => {
                    oneditionstart_fn!({
                        element,
                        td,
                        colIndex: Number(colIndex),
                        rowIndex: Number(rowIndex),
                    })
                }
            }

            let oneditionend: Jspreadsheet.JSpreadsheetOptions['oneditionend'] | undefined
            const oneditionend_fn = props.onEditionEnd
            if (oneditionend_fn && typeof oneditionend_fn === 'function') {
                oneditionend = (element, td, colIndex, rowIndex, editorValue, wasSaved) => {
                    oneditionend_fn!({ element, td, colIndex, rowIndex, editorValue, wasSaved })
                }
            }

            let onfocus: Jspreadsheet.JSpreadsheetOptions['onfocus'] | undefined
            const onfocus_fn = props.onFocus
            if (onfocus_fn && typeof onfocus_fn === 'function') {
                onfocus = (element) => {
                    onfocus_fn(element)
                }
            }

            let onblur: Jspreadsheet.JSpreadsheetOptions['onblur'] | undefined
            const onblur_fn = props.onBlur
            if (onblur_fn && typeof onblur_fn === 'function') {
                onblur = (element) => {
                    onblur_fn(element)
                }
            }

            let onselection: Jspreadsheet.JSpreadsheetOptions['onselection'] | undefined
            const onselection_fn = props.onSelection
            if (onselection_fn && typeof onselection_fn === 'function') {
                onselection = (...rest) => {
                    onselection_fn(...rest)
                }
            }

            return {
                ...DEF_OPTS,
                ...options,
                onbeforechange,
                updateTable,
                onafterchanges,
                oneditionstart,
                oneditionend,
                onfocus,
                onblur,
                onselection,
            }
        }

        // 重载
        function reload() {
            wrap_ref.value && initJexcel(wrap_ref.value)
        }

        // 获取录入内容
        function getJson() {
            return $jexcel?.getJson() || []
        }

        // 获取录入内容
        function getData() {
            return $jexcel?.getData() || []
        }

        // 设置整表数据 (不会触发 onafterchanges 事件)
        async function setData(data: any[]) {
            $jexcel?.setData([...data])
        }

        // 设置行数据
        function setRowData(row_index: number, data: any[]) {
            $jexcel?.setRowData(row_index, data)
        }

        // 取得行数据
        function getRowData(row_index: number) {
            return $jexcel?.getRowData(row_index) ?? null
        }

        // 设置单元格数据
        function setValue(cell: any, value: any, force: any) {
            $jexcel?.setValue(cell, value, force)
        }

        // 通过坐标设置单元格数据
        function setValueFromCoords(...rest: any) {
            $jexcel?.setValueFromCoords(...rest)
        }

        // 获取单元格数据
        function getValue(cell: any, processedValue?: boolean) {
            $jexcel?.getValue(cell, processedValue)
        }

        // 显示行号
        function showIndex() {
            $jexcel?.showIndex()
        }

        // 隐藏行号
        function hideIndex() {
            $jexcel?.hideIndex()
        }

        // 获取单元格元素
        function getCell(...rest: any) {
            return $jexcel?.getCell(...rest)
        }

        // 获取选中的行
        function getSelectedRows(...rest: any) {
            return $jexcel?.getSelectedRows(...rest)
        }

        // 获取选中的列
        function getSelectedColumns(...rest: any) {
            return $jexcel?.getSelectedColumns(...rest)
        }

        function resetSelection(...rest: any) {
            $jexcel?.resetSelection(...rest)
        }

        function updateSelection(...rest: any) {
            $jexcel?.updateSelection(...rest)
        }

        function updateSelectionFromCoords(...rest: any) {
            $jexcel?.updateSelectionFromCoords(...rest)
        }

        function openEditor(...args: any) {
            return $jexcel?.openEditor(...args)
        }

        function closeEditor(...args: any) {
            return $jexcel?.closeEditor(...args)
        }

        return {
            loading,
            // bind_title_height,
            // bind_row_height,
            // bind_readonly_background,
            // bind_readonly_color,
            // bind_loading_height,
            css_var_styles$,
            wrap_ref,
            reload,
            getData,
            getJson,
            setData,
            setRowData,
            getRowData,
            setValue,
            setValueFromCoords,
            getValue,
            showIndex,
            hideIndex,
            getCell,
            getSelectedRows,
            getSelectedColumns,
            resetSelection,
            updateSelection,
            updateSelectionFromCoords,
            openEditor,
            closeEditor,
        }
    },
})
</script>

<template>
    <div v-bind="$attrs" ref="wrap_ref" class="sd-jexcel" :style="css_var_styles$" />
    <slot v-if="showLoading" name="loading" :loading="loading">
        <div v-if="loading" class="sd-jexcel__loading-wrap" :style="loadingStyle">
            <div class="sd-jexcel__loading" />
        </div>
    </slot>
</template>
