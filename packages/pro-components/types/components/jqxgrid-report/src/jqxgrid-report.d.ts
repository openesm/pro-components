import type { ExtractPublicPropTypes, PropType } from 'vue';
import type { SdJqxgridReportTypes } from './types';
export declare const jqxgridReportProps: {
    data: {
        type: PropType<SdJqxgridReportTypes.ReportData>;
    };
};
export declare const jqxgridReportEmits: string[];
export type SdJqxgridReportProps = ExtractPublicPropTypes<typeof jqxgridReportProps>;
