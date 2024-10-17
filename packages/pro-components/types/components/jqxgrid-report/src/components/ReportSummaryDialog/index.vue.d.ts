import type { PropType } from 'vue';
import type { SdJqxgridReportTypes } from '../../types';
import Summary from './summary';
declare const _default: import("vue").DefineComponent<{
    rpt: {
        type: PropType<Required<SdJqxgridReportTypes.ReportData>>;
        required: true;
    };
}, {
    m: {
        visible: boolean;
        type: string;
        show_echart: boolean;
        dialog_props: {
            title: string;
            width: number;
            showFooter: boolean;
        };
        summary_list: ({
            checkboxes: true;
            value: any[];
            width: string;
            height: string;
            items: {
                label: string;
                value: any;
            }[];
        } | {
            checkboxes: false;
            value: any;
            width: string;
            height: string;
            items: {
                label: string;
                value: any;
            }[];
        })[];
        chart_options: any;
    };
    show: (type: keyof typeof Summary, def_values: any[]) => void;
    hide: () => void;
    handleConifrmSummary: () => void;
    handleResetSummaryChecked: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "confirm-summary")[], "update:modelValue" | "confirm-summary", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    rpt: {
        type: PropType<Required<SdJqxgridReportTypes.ReportData>>;
        required: true;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onConfirm-summary"?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _default;
