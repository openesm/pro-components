import type { PropType } from 'vue';
import type { SdJqxgridReportTypes } from '../../types';
declare const _default: import("vue").DefineComponent<{
    rpt: {
        type: PropType<Required<SdJqxgridReportTypes.ReportData>>;
        required: true;
    };
}, {
    temp_index: import("vue").Ref<number>;
    rpt_props$: import("vue").ComputedRef<any>;
    onPagePrev: () => void;
    onPageNext: () => void;
    onPageIndexInputChange: (index: string) => void;
    rpt_ref: import("vue").Ref<any>;
    refresh: () => void;
    getRows: () => any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("refresh" | "index-changed" | "cell-click")[], "refresh" | "index-changed" | "cell-click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    rpt: {
        type: PropType<Required<SdJqxgridReportTypes.ReportData>>;
        required: true;
    };
}>> & {
    onRefresh?: ((...args: any[]) => any) | undefined;
    "onIndex-changed"?: ((...args: any[]) => any) | undefined;
    "onCell-click"?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _default;
