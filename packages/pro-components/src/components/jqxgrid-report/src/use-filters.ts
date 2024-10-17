// 报表数据条件查询处理

import type { SdProFormDefine } from '../../pro-form'
import type { SdJqxgridReportTypes } from './types'
import { ref, reactive, computed, watch } from 'vue'

export function useFilters(m: { rpt: Required<SdJqxgridReportTypes.ReportData> }): any {
    // 筛选表单配置条件
    const form_props = reactive({
        model : {} as Record<string ,any>,
        schema: [] as ReturnType<typeof generateFormSchema>,
    })

    // 日期属性
    const date_prop = ref('')
    const show_report_date$ = computed(() => !!date_prop.value)

    // 是否显示过滤区域
    const show_filters$ = computed(() => {
        return m.rpt.filterable !== false && !!m.rpt.filters.length
    })

    // 监听条件定义变化，重新生成
    watch(() => m.rpt, (rpt) => {
        form_props.schema = generateFormSchema(rpt.filters)
    }, { immediate: true })

    const query_date$ = computed({
        get: () => {
            if (date_prop.value === 'begin_date') {
                return form_props.model.query_date || []
            } else {
                return form_props.model.bill_date || ''
            }
        },

        set: (val: string | string[]) => {
            if (date_prop.value === 'begin_date') {
                if (Array.isArray(val )) form_props.model.query_date = val
            } else {
                if (!Array.isArray(val)) form_props.model.bill_date = val
            }
        },
    })

    // 初始化筛选表单
    function generateFormSchema(filters: SdJqxgridReportTypes.FilterDefine[]) {
        let begin_date = ''
        let end_date   = ''

        const form_schema: SdProFormDefine.SchemaConfig[] = []

        filters.forEach((item: any) => {
            switch (item.name) {
                case 'begin_date':
                case 'begindate' : {
                    begin_date = item.value
                    date_prop.value = 'begin_date'
                    return
                }
                case 'end_date':
                case 'enddate': {
                    end_date = item.value
                    date_prop.value = 'begin_date'
                    return
                }
                case 'bill_date': {
                    date_prop.value = 'bill_date'
                }
            }

            const field = {
                tag  : item.type || 'input',
                col  : item.col  || 6,
                key  : item.name ,
                value: item.value,
                label: item.title,
                props: item.props || {},
            }

            // 默认不允许清空数据
            if (item.name === 'bill_date') {
                field.props = { clearable: false, ...field.props }
            }

            // 下拉选项
            if (item.items && item.items.length) {
                const options = item.items.map((item: any) => ({
                    ...item,
                    label: item.name,
                    value: item.id,
                }))
                field.props.options = options

                // 重置默认值
                if (options[0]) field.value = options[0].value
            }

            form_schema.push(field)
        })

        // 补充查询日期
        if (begin_date && end_date) {
            form_schema.unshift({
                tag  : 'daterange',
                col  : 6,
                key  : 'query_date',
                label: '查询日期',
                value: [begin_date, end_date],
                props: { clearable: false },
            })
        }

        return form_schema
    }

    // 获取过滤查询条件
    function getFilters() {
        const model   = form_props.model
        const filters = m.rpt.filters.map((item) => {
            switch (item.name) {
                case 'begin_date':
                case 'begindate' : return { name: item.name, value: model.query_date[0] }
                case 'end_date'  :
                case 'enddate'   : return { name: item.name, value: model.query_date[1] }
                default          : return { name: item.name, value: form_props.model[item.name] }
            }
        })
        return filters
    }

    return {
        form_props,
        show_report_date$,
        show_filters$,
        query_date$,
        getFilters,
    }
}
