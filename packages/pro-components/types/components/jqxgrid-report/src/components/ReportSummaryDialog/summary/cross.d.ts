/**
 * 交叉汇总
 */
import type { SummaryListItem } from '../types';
declare const _default: {
    show: typeof show;
    load: typeof load;
};
export default _default;
declare function show(cols: any[], def_values: any[]): {
    dialog_props: {
        title: string;
        width: number;
        showFooter: boolean;
    };
    list: SummaryListItem[];
};
declare function load(rpt: {
    cols: any[];
    rows: any[];
}, { group_cols, cross_col_idx, number_col_idx }: {
    group_cols: number[];
    cross_col_idx: number;
    number_col_idx: number;
}): {
    cols: any[];
    rows: any[];
};
