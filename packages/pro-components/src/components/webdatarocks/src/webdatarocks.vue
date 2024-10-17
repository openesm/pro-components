<script lang="ts">
import type { CSSProperties } from 'vue'

import { defineComponent, watch, computed, ref, onMounted, onUnmounted, onActivated } from 'vue'
import { webdataRocksProps, webdataRocksEmits } from './webdatarocks'
import { globalConfig } from '../../../config'
import { isFunction, isNumber } from 'lodash-es'

export default defineComponent({
    name : 'SdWebdatarocks',
    props: webdataRocksProps,
    emits: webdataRocksEmits,
    setup(props, ctx) {
        let _webdatarocks: any
        let _toolbar     : any

        let $scroll_content   = null as null | HTMLDivElement
        const scroll_info     = ref({ x: 0, y: 0 })
        const container_ref   = ref<HTMLElement>()
        const require_loading = ref(false)

        // 容器样式
        const wrap_style$ = computed(() => {
            const styles: CSSProperties = {}
            if (props.width ) styles.width  = isNumber(props.width)  ? `${ props.width }px`  : props.width
            if (props.height) styles.height = isNumber(props.height) ? `${ props.height }px` : props.height
            return styles
        })

        // 监听 report 更新报表
        watch(() => props.report, (report) => {
            scrollToTop()
            setReport(report)
        })

        let timeout: ReturnType<typeof setTimeout>
        onActivated(() => {
            refresh()
            clearTimeout(timeout)
            timeout = setTimeout(() => {
                const { x: old_x, y: old_y } = scroll_info.value
                scrollTo(old_x, old_y)

                const x = $scroll_content!.scrollLeft
                const y = $scroll_content!.scrollTop

                if (x !== old_x || y !== old_y) {
                    scrollTo(old_x, old_y)
                }
            }, 130)
        })

        // 创建透视表
        onMounted(() => { load() })
        onUnmounted(() => { unbindEvents(_webdatarocks) })

        async function load() {
            const { require } = globalConfig.plugins?.webdatarocks || {}
            if ( !isFunction(require) ) return

            try {
                ctx.emit('require')
                require_loading.value = true
                const result = await require()
                require_loading.value = false
                ctx.emit('require-success', result)
                if ( !result || !('WebDataRocks' in result)) return

                // 本地化语言
                let localization: any
                if ('localization' in result) localization = result.localization

                // 创建组件
                _webdatarocks =  new result.WebDataRocks({
                    container           : container_ref.value,
                    width               : props.width,
                    height              : props.height,
                    toolbar             : props.toolbar,
                    report              : props.report,
                    customizeCell       : props.customizeCell,
                    beforetoolbarcreated: props.toolbar
                        ? (toolbar: any) => { _toolbar = toolbar }
                        : undefined,
                    global: { localization },
                })

                // 监听相关事件
                bindEvents(_webdatarocks)

                ctx.emit('ready', _webdatarocks)
            } catch (error) {
                ctx.emit('require-error', error)
            }
        }

        // 监听相关事件
        function bindEvents(_webdatarocks: any) {
            if (_webdatarocks) {
                _webdatarocks.on('beforetoolbarcreated', onBeforetoolbarcreated)
                _webdatarocks.on('cellclick'           , onCellClick)
                _webdatarocks.on('celldoubleclick'     , onCellDoubleclick)
                _webdatarocks.on('dataloaded'          , onDataLoaded)
                _webdatarocks.on('reportchange'        , onReportchange)
                _webdatarocks.on('reportcomplete'      , onReportcomplete)
                _webdatarocks.on('update'              , onUpdate)
            }
        }

        // 移除相关事件监听
        function unbindEvents(_webdatarocks: any) {
            if (_webdatarocks) {
                _webdatarocks.off('beforetoolbarcreated', onBeforetoolbarcreated)
                _webdatarocks.off('cellclick'           , onCellClick)
                _webdatarocks.off('celldoubleclick'     , onCellDoubleclick)
                _webdatarocks.off('dataloaded'          , onDataLoaded)
                _webdatarocks.off('reportchange'        , onReportchange)
                _webdatarocks.off('reportcomplete'      , onReportcomplete)
                _webdatarocks.off('update'              , onUpdate)
            }
        }

        // 缓存滚动距离
        function initScrollContent() {
            // 仅处理一次
            if ($scroll_content) return

            const panes = [...document.querySelectorAll('.wdr-ui-element .wdr-scroll-pane')]
            const pane  = panes.pop()
            if (pane) {
                $scroll_content = pane as HTMLDivElement
                pane.addEventListener('scroll', () => {
                    const scrollLeft = pane.scrollLeft
                    const scrollTop  = pane.scrollTop
                    ctx.emit('scroll', { scrollTop, scrollLeft })

                    scroll_info.value.x = scrollLeft
                    scroll_info.value.y = scrollTop
                })
            }
        }

        // ---监听相关事件方法------------------------------------------------------------------------
        function onBeforetoolbarcreated(toolbar: any) { ctx.emit('beforetoolbarcreated', toolbar) }
        function onCellClick(cell: any)               { ctx.emit('cellclick', cell)               }
        function onCellDoubleclick(cell: any)         { ctx.emit('celldoubleclick', cell)         }
        function onUpdate()                           { ctx.emit('update')                        }
        function onDataLoaded()                       { ctx.emit('dataloaded')                    }
        function onReportchange()                     { ctx.emit('reportchange')                  }
        function onReportcomplete() {
            initScrollContent()
            ctx.emit('reportcomplete')
        }

        // --- 方法 --------------------------------------------------------------------------------
        // 滚动至指定位置
        function scrollTo(x: number, y: number) {
            $scroll_content && $scroll_content.scrollTo(x, y)
        }

        // 滚动至顶部
        function scrollToTop() {
            scrollTo(0, 0)
        }

        // 选项
        function showOptionsDialog() {
            _toolbar?.showOptionsDialog()
        }

        // 格式化单元格
        function showFormatCellsDialog() {
            _toolbar?.showFormatCellsDialog()
        }

        // 条件格式化
        function showConditionalFormattingDialog() {
            _toolbar?.showConditionalFormattingDialog()
        }

        // 导出
        function exportExcel(name = 'report') {
            // 文件名不能包含下列任一字符： \ / : * ? " < > |
            const filename = `${ (name as any).replaceAll(/[\\\/\:\*\?\"\<\>\|]/g, '')  }.xlsx`

            // Excel电子表名称不能包含下列任一字符： : \ / ? * [ ]
            const excelSheetName = (name as any).replaceAll(/[？：\:\\\/\?\*\[\]]/g, '')

            _webdatarocks?.exportTo('excel', { filename, excelSheetName })
        }

        // 导出至
        // https://www.webdatarocks.com/doc/exportto/
        function exportTo(exportType: 'excel' | 'pdf' | 'html', parameters?: Record<string, any>, cb?: Function) {
            _webdatarocks?.exportTo(exportType, parameters, cb)
        }

        // 字段
        function openFieldsList() {
            _webdatarocks?.openFieldsList()
        }

        // https://www.webdatarocks.com/doc/save/
        // 保存当前配置至本地
        function save(options: any) {
            _webdatarocks?.save(options)
        }

        // 更新界面
        function refresh() {
            _webdatarocks?.refresh()
        }

        // 展开所有数据
        function expandAllData() {
            _webdatarocks?.expandAllData()
        }

        // 折叠所有数据
        function collapseAllData() {
            _webdatarocks?.collapseAllData()
        }

        // 删除已选中数据
        function removeSelection() {
            _webdatarocks?.removeSelection()
        }

        // 获取报表
        function getReport(options: { withDefaults?: boolean; withGlobals?: boolean }) {
            return _webdatarocks?.getReport(options) || {}
        }

        // 设置报表
        // https://www.webdatarocks.com/doc/setreport/
        function setReport(report: any) {
            _webdatarocks?.setReport(report)
        }

        // 获取选项
        function getOptions() {
            return _webdatarocks?.getOptions() || {}
        }

        // 设置报表选项
        // https://www.webdatarocks.com/doc/setoptions/
        function setOptions(options: any) {
            _webdatarocks?.setOptions(options)
        }

        // 获取报表数据
        function getData(options: any = {}) {
            let _data = { data: [], meta: {} }
            _webdatarocks?.getData(options, (data: any) => { _data = data })
            return _data
        }

        // 更新数据
        function updateData(options: { filename?: string; fieldSeparator?: string; data?: string | object[] }) {
            _webdatarocks?.updateData(options)
        }

        // 自定义单元格函数设置
        function setCustomizeCell(cb: Function) {
            _webdatarocks?.updateData(cb)
        }

        return {
            require_loading,
            wrap_style$,
            container_ref,
            exportExcel,
            exportTo,
            save,
            refresh,
            expandAllData,
            collapseAllData,
            removeSelection,
            openFieldsList,
            showOptionsDialog,
            showFormatCellsDialog,
            showConditionalFormattingDialog,
            getReport,
            setReport,
            getOptions,
            setOptions,
            getData,
            updateData,
            setCustomizeCell,
            scrollTo,
            scrollToTop,
        }
    },
})
</script>

<template>
    <div class="sd-webdatarocks" :style="wrap_style$">
        <!-- 解决 wdr-ui-element 样式污染问题 -->
        <div style="display: none;" />
        <div ref="container_ref" class="sd-webdatarocks__content" />
    </div>
</template>
