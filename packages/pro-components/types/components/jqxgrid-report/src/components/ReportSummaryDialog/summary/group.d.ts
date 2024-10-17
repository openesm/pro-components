/**
 * 分组汇总
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
}, { group_cols, number_cols }: {
    group_cols: number[];
    number_cols: number[];
}): {
    cols: any[];
    rows: any[];
};
