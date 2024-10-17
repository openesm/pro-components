import type { SdJqxgridReportTypes } from './types';
declare const _default: import("vue").DefineComponent<{
    data: {
        type: import("vue").PropType<SdJqxgridReportTypes.ReportData>;
    };
}, {
    rpt_ref: import("vue").Ref<any>;
    m: {
        show_pivot: boolean;
        rpt: {
            filterable: boolean;
            row_index: boolean;
            index_width: any;
            page: {
                size: number;
                index: number;
                next: boolean;
            };
            err: string;
            name: string;
            title: string;
            cols: {
                name: string;
                alias?: string | undefined;
                text: string;
                type?: string | undefined;
                count?: string | undefined;
                sum?: string | undefined;
                max: string;
                min?: string | undefined;
                hide?: boolean | undefined;
                align?: string | undefined;
                filtertype?: string | undefined;
                aggs?: string[] | undefined;
                width?: number | undefined;
                format?: string | undefined;
                items?: {
                    id: string;
                    name: string;
                }[] | undefined;
                option?: any;
            }[];
            rows: (string | number | boolean)[][];
            filters: {
                name: string;
                title: string;
                type?: string | undefined;
                like?: boolean | undefined;
                value?: string | undefined;
                items?: {
                    id: string;
                    name: string;
                }[] | undefined;
            }[];
            pivots: {
                pivot_id: string;
                pivot_name: string;
                pivot_data: string;
                report_id: string;
                company_id: string;
                user_id: string;
                create_time: string;
                update_time: string;
            }[];
        };
        loaded: boolean;
    };
    init: (data?: SdJqxgridReportTypes.ReportData) => {
        filterable: boolean;
        row_index: boolean;
        index_width: any;
        page: SdJqxgridReportTypes.PageInfo;
        err: string;
        name: string;
        title: string;
        cols: SdJqxgridReportTypes.ColumnDefine[];
        rows: (string | number | boolean)[][];
        filters: SdJqxgridReportTypes.FilterDefine[];
        pivots: SdJqxgridReportTypes.$stu_rpt_pivot[];
    };
    handleRefresh: () => void;
    is_empty$: import("vue").ComputedRef<boolean>;
    form_props: any;
    show_report_date$: any;
    query_date$: any;
    show_filters$: any;
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
    handleDownload: () => Promise<void>;
    onCellClick: ({ row, $originCol, $originColMap }: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: import("vue").PropType<SdJqxgridReportTypes.ReportData>;
    };
}>> & {
    [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _default;
