<script lang="ts">
import type { PropType } from 'vue'
import type { SdJqxgridReportTypes } from '../../types'

import { defineComponent, ref, computed, nextTick } from 'vue'
import { ElSpace, ElButtonGroup, ElButton, ElInput, ElIcon } from 'element-plus'
import { ArrowRight as IconArrowRight, ArrowLeft as IconArrowLeft } from '@element-plus/icons-vue'
import { warningMsg  } from '../../../../../services'
import { SdJqxgrid   } from '../../../../jqxgrid'
import { isBoolean   } from 'lodash-es'

export default defineComponent({
    name      : 'ReportGrid',
    components: { SdJqxgrid, ElSpace, ElButtonGroup, ElButton, ElInput, ElIcon, IconArrowLeft, IconArrowRight },
    props     : {
        rpt: { type: Object as PropType<Required<SdJqxgridReportTypes.ReportData>>, required: true },
    },
    emits: ['index-changed', 'refresh', 'cell-click'],
    setup(props, { emit }) {
        // 报表明细
        const rpt_props$ = computed(() => {
            const rpt  = props.rpt

            // 后端会多返回一条，用来判断是否有下一页数据
            let rows = rpt.rows
            if (rpt.page.size) {
                rows = rpt.rows.slice(0, rpt.page.size)
            } else {
                rows = rpt.rows
            }

            const opts: any = {
                cols: rpt.cols.map(c => ({ ...c })),
                rows,
            }

            // v24.02.17 补充行号
            if (rpt.row_index !== false) {
                opts.enableSeq = isBoolean(rpt.row_index) ? rpt.row_index : true
                opts.seqConfig = {}

                if (rpt.page.size && (rpt.page.index - 1)) {
                    opts.seqConfig.format = (row_index: number) => {
                        return row_index + ((rpt.page.index - 1) * rpt.page.size)
                    }
                }

                // v24.02.26 设置序号列宽度
                if ((rpt as any).index_width) {
                    opts.seqConfig.width = (rpt as any).index_width
                }
            }

            return opts
        })

        // 临时页数，防止录入不正确的页数
        const temp_index = ref(props.rpt.page.index)

        // 上一页
        function onPagePrev() {
            const rpt   = props.rpt
            const index = Math.max(rpt.page.index - 1, 1)
            temp_index.value = index

            emit('index-changed', index)
            emit('refresh')
        }

        // 下一页
        function onPageNext() {
            const rpt = props.rpt
            if ( !rpt.page.next ) return

            const index = rpt.page.index + 1

            temp_index.value = index

            emit('index-changed', index)
            emit('refresh')
        }

        // 跳转至指定页
        function onPageIndexInputChange(index: string) {
            const rpt        = props.rpt
            const page_index = Number(index)
            if (isNaN(page_index)) {
                temp_index.value = rpt.page.index
                return warningMsg('请输入有效的跳转页数')
            }
            if (page_index <= 0  ) {
                temp_index.value = rpt.page.index
                return warningMsg('请输入大于“1”的页数')
            }

            emit('index-changed', index)
            emit('refresh')
        }

        // 下载报表
        const rpt_ref = ref()

        // 刷新视图
        function refresh() {
            nextTick(() => {
                rpt_ref.value && rpt_ref.value.refresh()
            })
        }

        function getRows() {
            return rpt_ref.value?.getRows() || []
        }

        return {
            temp_index,
            rpt_props$,
            onPagePrev,
            onPageNext,
            onPageIndexInputChange,
            rpt_ref,
            refresh,
            getRows,
        }
    },
})
</script>

<template>
    <div style="flex: 1; display: flex; flex-direction: column;">
        <div class="sd-jqxgrid-report__grid-wrap">
            <div class="sd-jqxgrid-report__grid-wrap-content">
                <SdJqxgrid
                    ref="rpt_ref"
                    v-bind="rpt_props$"
                    @cell-click="$emit('cell-click', $event)"
                />
            </div>
        </div>

        <div v-if="rpt.page.size" class="sd-jqxgrid-report__pager-wrap">
            <ElSpace>
                <ElButtonGroup>
                    <ElButton :disabled="rpt.page.index <= 1" @click="onPagePrev">
                        <ElIcon style="margin-right: 5px;">
                            <IconArrowLeft />
                        </ElIcon>
                        上一页
                    </ElButton>
                    <ElButton>第 {{ rpt.page.index }} 页</ElButton>
                    <ElButton :disabled="!rpt.page.next" @click="onPageNext">
                        下一页
                        <ElIcon style="margin-left: 5px;">
                            <IconArrowRight />
                        </ElIcon>
                    </ElButton>
                </ElButtonGroup>
                <span>跳转至</span>
                <ElInput
                    v-model.number="temp_index"
                    style="width: 50px; display: inline-block;"
                    placeholder="页数"
                    input-style="text-align: center"
                    @change="onPageIndexInputChange"
                />
                <span>页</span>
            </ElSpace>
        </div>
    </div>
</template>
