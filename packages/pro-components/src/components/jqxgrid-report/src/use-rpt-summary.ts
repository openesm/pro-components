/**
 * 处理报表数据汇总
 */
import type { SdJqxgridReportTypes } from './types'
import { ref, reactive, computed } from 'vue'

export function useRptSummary(m: { rpt: Required<SdJqxgridReportTypes.ReportData> }) {
    const summary_dialog_ref = ref()      // 汇总表格定义弹窗引用
    const show_summary_rpt   = ref(false) // 是否显示汇总报表

    const rpt_summary_ref    = ref()      // 汇总报表 grid 引用
    const rpt_summary_props  = reactive({ // 汇总报表定义
        cols: [] as any[],
        rows: [] as any[],
    })

    let curr_values: any[] = [] // 当前汇总选中的值
    let curr_type = ''          // 当前汇总类型
    let temp_type = ''          // 未确认前点击的汇总类型

    // 是否显示汇总按钮
    const show_summary_btns$ = computed(() => {
        return !m.rpt.page.size && !!m.rpt.cols.filter(item => item.type === 'number').length
    })

    // 分组汇总
    function handleGroupSummary() {
        const values = curr_type !== 'group' ? [] : curr_values
        temp_type = 'group'
        summary_dialog_ref.value && summary_dialog_ref.value.show(temp_type, values)
    }

    // 交叉汇总
    function handleCrossSummary() {
        const values = curr_type !== 'cross' ? [] : curr_values
        temp_type = 'cross'
        summary_dialog_ref.value && summary_dialog_ref.value.show(temp_type, values)
    }

    // 图表汇总
    function handleChartSummary() {
        const values = curr_type !== 'chart' ? [] : curr_values
        temp_type = 'chart'
        summary_dialog_ref.value && summary_dialog_ref.value.show(temp_type, values)
    }

    // 确认汇总
    function handleConfirmSummray(res: { cols: any[]; rows: any[] }, values: []) {
        if (res) {
            rpt_summary_props.cols = res.cols.map((c) => {
                const width = c.width ? Math.max(150, c.width) : 150
                return { ...c, width }
            })
            rpt_summary_props.rows = res.rows
        }

        curr_values = values
        curr_type   = temp_type

        if (curr_type !== 'chart') {
            summary_dialog_ref.value && summary_dialog_ref.value.hide()
            show_summary_rpt.value = true
        }
    }

    // 取消汇总
    function handleCancelSummary() {
        show_summary_rpt.value = false
        curr_type = ''
        curr_values = []
    }

    return {
        show_summary_btns$,
        summary_dialog_ref,
        rpt_summary_ref,
        rpt_summary_props,
        show_summary_rpt,
        handleGroupSummary,
        handleCrossSummary,
        handleChartSummary,
        handleConfirmSummray,
        handleCancelSummary,
    }
}
