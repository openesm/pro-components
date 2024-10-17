/**
 * 处理报表数据汇总
 */
import type { SdJqxgridReportTypes } from './types';
export declare function useRptSummary(m: {
    rpt: Required<SdJqxgridReportTypes.ReportData>;
}): {
    show_summary_btns$: import("vue").ComputedRef<boolean>;
    summary_dialog_ref: import("vue").Ref<any>;
    rpt_summary_ref: import("vue").Ref<any>;
    rpt_summary_props: {
        cols: any[];
        rows: any[];
    };
    show_summary_rpt: import("vue").Ref<boolean>;
    handleGroupSummary: () => void;
    handleCrossSummary: () => void;
    handleChartSummary: () => void;
    handleConfirmSummray: (res: {
        cols: any[];
        rows: any[];
    }, values: []) => void;
    handleCancelSummary: () => void;
};
