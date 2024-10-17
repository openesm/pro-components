import type { ExtractPublicPropTypes, PropType } from 'vue'
import type { SdJqxgridReportTypes } from './types'

export const jqxgridReportProps = {
    data: { type: Object as PropType<SdJqxgridReportTypes.ReportData> },
}

export const jqxgridReportEmits = [
    'require',
    'require-success',
    'require-error',
    'ready',
    // -----------
    'refresh',
]

export type SdJqxgridReportProps = ExtractPublicPropTypes<typeof jqxgridReportProps>
