<script lang="ts">
import type { SdJqxgridReportTypes } from './types'
import { defineComponent, reactive, ref, computed, watch, getCurrentInstance } from 'vue'
import { warningMsg, showLoading, hideLoading } from '../../../services'
import { exportCsv } from './helper'
import { SdJqxgrid } from '../../jqxgrid'
import { jqxgridReportProps, jqxgridReportEmits } from './jqxgrid-report'
import utils from '../../../utils'

// 组件
import { ElButton, ElButtonGroup } from 'element-plus'
import ReportSummaryDialog from './components/ReportSummaryDialog/index.vue'
import ReportDate          from './components/ReportDate/index.vue'
import ReportGrid          from './components/ReportGrid/index.vue'
import FilterForm          from './components/FilterForm/index.vue'

// hooks
import { useFilters    } from './use-filters'
import { useRptSummary } from './use-rpt-summary'

export default defineComponent({
    name      : 'SdJqxgridReport',
    components: {
        FilterForm,
        ReportSummaryDialog,
        ReportDate,
        ReportGrid,
        SdJqxgrid,
        ElButtonGroup,
        ElButton,
    },
    props: jqxgridReportProps,
    emits: jqxgridReportEmits,
    setup(props, ctx) {
        const instance = getCurrentInstance()
        const rpt_ref = ref() // 明细报表引用

        const m = reactive({
            show_pivot: false, // 显示透视表
            rpt       : init(),
            loaded    : false,
        })

        watch(() => props.data, (data) => {
            if (data) m.rpt = init(data)
        }, { immediate: true })


        // 处理条件过滤
        const { form_props, show_report_date$, query_date$, show_filters$, getFilters } = useFilters(m)

        // 数据为空
        const is_empty$ = computed(() => !m.rpt.rows.length)

        function handleRefresh() {
            const filters = getFilters().concat({ name: 'page_index', value: m.rpt.page.index })
            ctx.emit('refresh', filters)
        }

        // 初始化数据
        function init(data?: SdJqxgridReportTypes.ReportData) {
            return {
                name       : '',
                title      : '',
                cols       : [],
                rows       : [],
                pivots     : [],
                filters    : [],
                ...data,
                filterable : data?.filterable !== false,
                row_index  : data?.row_index !== false,
                index_width: (data as any)?.index_width, // v24.02.26 序号宽度
                page       : data?.page ?? {
                    next : false,
                    size : 0,
                    index: 0,
                },
                err: data?.err || '',
            }
        }

        // 处理数据汇总
        const {
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
        } = useRptSummary(m)

        // 下载数据
        async function handleDownload() {
            const $grid = show_summary_rpt.value ? rpt_summary_ref.value : rpt_ref.value
            if ( !$grid ) return

            try {
                const rows = await $grid.getRows()
                if ( !rows.length ) return warningMsg('暂无数据可下载')

                showLoading({ text: '正在下载中...' })

                const cols    = show_summary_rpt.value ? rpt_summary_props.cols : m.rpt.cols
                const columns = cols.map((c, idx) => {
                    return ({ title: c.text as string, field: idx, prop: `f${ idx }` })
                })
                const data = rows.map((r: any) => columns.map((t) => {
                    if (r[t.prop] instanceof Date) {
                        return utils.dt.format(r[t.prop])
                    } else {
                        return r[t.prop]
                    }
                }))

                const ok = exportCsv({ file_name: utils.dt.format(new Date()), columns, data })
                if ( !ok ) return

                hideLoading()
            } catch (error) {
                hideLoading()
            }
        }

        // 监听单元格双击
        function onCellClick({ row, $originCol, $originColMap }: any) {
            const $router: any = instance?.appContext.config.globalProperties.$router

            if ($originCol && $originCol.target && $originCol.target.url) {
                const target = $originCol.target

                const key_map = {} as Record<string, string>
                Object.entries($originColMap).forEach(([key, value]) => {
                    if (value && (value as any).name) {
                        key_map[(value as any).name] = key
                    }
                })

                // 替换路由 params 参数真实数据
                const params = {} as Record<string, any>
                const target_params = target.params ? target.params : target.args
                if (target_params) {
                    Object.keys(target_params).forEach((k) => {
                        const datafield = key_map[target_params[k]!]
                        if (datafield && datafield in row) params[k] = row[datafield]
                    })
                }

                // 替换路由 query 参数真实数据
                const query = {} as Record<string, any>
                if (target.query) {
                    Object.keys(target.query).forEach((k) => {
                        const datafield = key_map[target.query[k]!]
                        if (datafield && datafield in row) query[k] = row[datafield]
                    })
                }

                // 解析跳转目标路由对象
                let path = target.url as string
                if (!path.startsWith('/')) path = `/${ path }`
                let target_route = $router.resolve({ path })
                if ( !target_route.name && !path.endsWith('/')) {
                    target_route = $router.resolve({ path: `${ path }/` })
                }

                // 跳转页面
                if (target_route.name) {
                    $router.push({
                        name  : target_route.name,
                        params: { ...target_route.params, ...params },
                        query : { ...target_route.query , ...query  },
                    })
                }
            }
        }

        return {
            rpt_ref,
            m,
            init,
            handleRefresh,
            is_empty$,
            // ------------------
            form_props,
            show_report_date$,
            query_date$,
            show_filters$,
            // -------------------
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
            handleDownload,
            // -----------------------
            onCellClick,
        }
    },
})
</script>

<template>
    <div v-if="m.rpt.cols.length">
        <div v-show="!m.show_pivot" class="sd-jqxgrid-report">
            <!-- 条件筛选 -->
            <div v-if="show_filters$" class="sd-jqxgrid-report__filter">
                <FilterForm
                    :model="form_props.model"
                    :schema="form_props.schema"
                    :disabled-query-button="show_summary_rpt"
                    :disabled-reset-button="show_summary_rpt"
                    @query="handleRefresh"
                />
            </div>

            <div class="sd-jqxgrid-report__header">
                <div style="display: flex; align-items: center;">
                    <span style="margin-right: 15px;">{{ m.rpt.title }}:</span>
                    <ElButton v-if="!show_filters$" type="primary" style="margin-right: 15px;" @click="handleRefresh">查询</ElButton>
                    <!-- 日期按钮快捷操作 -->
                    <ReportDate
                        v-if="show_report_date$"
                        v-model="query_date$"
                        :disabled="show_summary_rpt"
                        @refresh="handleRefresh"
                    />
                </div>
                <div>
                    <!-- <ElButton v-if="!m.rpt.page.size && !!m.rpt.pivots" :class="{ 'sd-mr-10': show_summary_btns$ }" @click="m.show_pivot = true">
                        透视表
                    </ElButton> -->
                    <ElButtonGroup v-if="show_summary_btns$" style="margin-right: 10px;" :disabled="is_empty$">
                        <ElButton @click="handleGroupSummary">
                            分组汇总
                        </ElButton>
                        <ElButton @click="handleCrossSummary">
                            交叉汇总
                        </ElButton>
                        <ElButton @click="handleChartSummary">
                            图表汇总
                        </ElButton>
                        <ElButton v-if="show_summary_rpt" @click="handleCancelSummary">
                            取消汇总
                        </ElButton>
                    </ElButtonGroup>
                    <ElButton icon="Download" circle :disabled="is_empty$" @click="handleDownload" />
                </div>
            </div>

            <!-- 明细表 -->
            <ReportGrid
                v-show="!show_summary_rpt"
                ref="rpt_ref"
                :rpt="m.rpt"
                @index-changed="(index) => m.rpt.page.index = index"
                @refresh="handleRefresh"
                @cell-click="onCellClick"
            />

            <!-- 汇总表 -->
            <div v-if="show_summary_rpt" class="sd-jqxgrid-report__summary-grid-wrap">
                <SdJqxgrid ref="rpt_summary_ref" v-bind="rpt_summary_props" />
            </div>
        </div>

        <!-- 透视表 -->
        <!-- <AppPivot
            v-if="m.show_pivot"
            :rpt="m.rpt"
            @pivots-changed="(pivots) => m.rpt.pivots = pivots"
            @close="m.show_pivot = false"
        /> -->

        <!-- 汇总表配置弹窗 -->
        <ReportSummaryDialog
            ref="summary_dialog_ref"
            :title="m.rpt.title"
            :rpt="m.rpt"
            @confirm-summary="handleConfirmSummray"
        />
    </div>
</template>
