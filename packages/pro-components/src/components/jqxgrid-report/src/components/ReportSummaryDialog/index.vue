
<script lang="ts">
import type { PropType } from 'vue'
import type { SummaryListItem } from './types'
import type { SdJqxgridReportTypes } from '../../types'

import { defineComponent, reactive } from 'vue'
import { ElScrollbar, ElCheckboxGroup, ElCheckbox, ElRadioGroup, ElRadio, ElSpace, ElButton, ElEmpty } from 'element-plus'
import { warningMsg         } from '../../../../../services'
import { SdEchart           } from '../../../../echart'
import { SdDialog           } from '../../../../dialog'
import { isNumber, isString } from 'lodash-es'

import { getChartOptions } from './echart-options'
import Summary             from './summary'

export default defineComponent({
    name      : 'ReportSummaryDialog',
    components: {
        SdDialog,
        SdEchart,
        ElScrollbar,
        ElCheckboxGroup,
        ElCheckbox,
        ElRadioGroup,
        ElRadio,
        ElSpace,
        ElButton,
        ElEmpty,
    },
    props: {
        rpt: { type: Object as PropType<Required<SdJqxgridReportTypes.ReportData>>, required: true },
    },
    emits: ['update:modelValue','confirm-summary'],
    setup(props, { emit }) {
        const m = reactive({
            visible     : false,
            type        : '',
            show_echart : false,
            dialog_props: {
                title     : '',
                width     : 460,
                showFooter: false,
            },
            summary_list : [] as SummaryListItem[],
            chart_options: undefined as any,
        })

        function show(type: keyof typeof Summary, def_values: any[]) {
            const cols = props.rpt.cols
            const { dialog_props, list } = Summary[type].show(cols, def_values)
            m.dialog_props = dialog_props
            m.summary_list = list
            m.show_echart  = type === 'chart'
            m.type         = type

            if (type === 'chart' && !def_values.length) m.chart_options = undefined // 无数据则清空上次的图表
            m.visible      = true
        }

        function hide() {
            m.visible = false
        }

        // 确认汇总
        function handleConifrmSummary() {
            const cols = props.rpt.cols
            const rows = props.rpt.rows

            switch (m.type) {
                case 'group': {
                    const group_opt  = m.summary_list[0]!
                    const number_opt = m.summary_list[1]!

                    const group_cols  = group_opt.items.filter(item  => group_opt.value.includes(item.value as number )).map(item => item.value) as number[] // 分组列
                    const number_cols = number_opt.items.filter(item => number_opt.value.includes(item.value as number)).map(item => item.value) as number[] // 数据列

                    if (!group_cols.length ) return warningMsg('请选择分组列')
                    if (!number_cols.length) return warningMsg('请选择汇总列')

                    emit('confirm-summary', Summary.group.load({ cols, rows }, { group_cols, number_cols }), [group_cols, number_cols])
                    break
                }
                case 'cross': {
                    const group_opt      = m.summary_list[0]!
                    const group_cols     = group_opt.items.filter(item  => group_opt.value.includes(item.value as number )).map(item => item.value) as number[] // 分组列
                    const cross_col_idx  = m.summary_list[1]!.value as number // 交叉列下标
                    const number_col_idx = m.summary_list[2]!.value as number // 数据列下标

                    if (!group_cols.length       ) return warningMsg('请选择分组列')
                    if (!isNumber(cross_col_idx) ) return warningMsg('请选择交叉列')
                    if (!isNumber(number_col_idx)) return warningMsg('请选择汇总列')

                    emit('confirm-summary', Summary.cross.load({ cols, rows }, { group_cols, cross_col_idx, number_col_idx }), [group_cols, cross_col_idx, number_col_idx])
                    break
                }
                case 'chart': {
                    const group_col_idx  = m.summary_list[0]!.value as number
                    const number_col_idx = m.summary_list[1]!.value as number
                    const chart_type     = m.summary_list[2]?.value

                    if (!isNumber(group_col_idx )) return warningMsg('请选择分组列')
                    if (!isNumber(number_col_idx)) return warningMsg('请选择汇总列')
                    if (!isString(chart_type    )) return warningMsg('请选择图表类型')

                    const res = Summary.group.load({ cols, rows }, { group_cols: [group_col_idx], number_cols: [number_col_idx] })
                    m.chart_options = getChartOptions(chart_type, { ...res, title: props.rpt.title })

                    emit('confirm-summary', undefined, [group_col_idx, number_col_idx, chart_type])
                }
            }
        }

        // 重置选择
        function handleResetSummaryChecked() {
            m.summary_list = m.summary_list.map((list_opt) => {
                if (list_opt.checkboxes) {
                    return { ...list_opt, value: [] }
                } else {
                    return { ...list_opt, value: '' }
                }
            })
        }

        return {
            m,
            show,
            hide,
            handleConifrmSummary,
            handleResetSummaryChecked,
        }
    },
})
</script>

<template>
    <SdDialog v-model="m.visible" v-bind="m.dialog_props">
        <div style="display: flex;">
            <template v-for="(list_opt, _idx) in m.summary_list" :key="_idx">
                <div class="sd-jqxgrid-report-summary-dialog__list-wrap" :style="{ width: list_opt.width, height: list_opt.height }">
                    <ElScrollbar>
                        <ElCheckboxGroup v-if="list_opt.checkboxes" v-model="list_opt.value" class="sd-p-12">
                            <template v-for="item in list_opt.items" :key="item.value">
                                <div>
                                    <ElCheckbox :label="item.value">
                                        {{ item.label }}
                                    </ElCheckbox>
                                </div>
                            </template>
                        </ElCheckboxGroup>
                        <ElRadioGroup v-else v-model="list_opt.value" class="sd-p-12">
                            <template v-for="item in list_opt.items" :key="item.value">
                                <div class="sd-w100">
                                    <ElRadio :label="item.value">
                                        {{ item.label }}
                                    </ElRadio>
                                </div>
                            </template>
                        </ElRadioGroup>
                    </ElScrollbar>
                </div>
            </template>
            <ElSpace direction="vertical" :size="15">
                <ElButton large @click="handleConifrmSummary">
                    汇总
                </ElButton>
                <ElButton large @click="handleResetSummaryChecked">
                    重置
                </ElButton>
                <ElButton large @click="m.visible = false">
                    取消
                </ElButton>
            </ElSpace>
        </div>
        <div v-if="m.show_echart" class="sd-jqxgrid-report-summary-dialog__chart-wrap">
            <SdEchart v-if="m.chart_options" style="width: 620px; height: 350px;" :options="m.chart_options" />
            <ElEmpty v-else description="请选择汇总的列" />
        </div>
    </SdDialog>
</template>
