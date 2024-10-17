declare const _default: {
    chart: {
        show: (cols: any[], def_values: any[]) => {
            dialog_props: {
                title: string;
                width: number;
                showFooter: boolean;
            };
            list: import("../types").SummaryListItem[];
        };
    };
    cross: {
        show: (cols: any[], def_values: any[]) => {
            dialog_props: {
                title: string;
                width: number;
                showFooter: boolean;
            };
            list: import("../types").SummaryListItem[];
        };
        load: (rpt: {
            cols: any[];
            rows: any[];
        }, { group_cols, cross_col_idx, number_col_idx }: {
            group_cols: number[];
            cross_col_idx: number;
            number_col_idx: number;
        }) => {
            cols: any[];
            rows: any[];
        };
    };
    group: {
        show: (cols: any[], def_values: any[]) => {
            dialog_props: {
                title: string;
                width: number;
                showFooter: boolean;
            };
            list: import("../types").SummaryListItem[];
        };
        load: (rpt: {
            cols: any[];
            rows: any[];
        }, { group_cols, number_cols }: {
            group_cols: number[];
            number_cols: number[];
        }) => {
            cols: any[];
            rows: any[];
        };
    };
};
export default _default;
