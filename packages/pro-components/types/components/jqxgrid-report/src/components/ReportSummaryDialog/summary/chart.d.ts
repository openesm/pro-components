/**
 * 图表汇总
 */
import type { SummaryListItem } from '../types';
declare const _default: {
    show: typeof show;
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
