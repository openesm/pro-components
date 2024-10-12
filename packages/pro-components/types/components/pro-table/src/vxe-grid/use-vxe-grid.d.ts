/**
 * VxeGird 配置
 * https://vxetable.cn/#/grid/api
 */
import type { SdProTableState } from '../types';
import type { SdProTableProps } from '../pro-table';
export declare function useVxeGrid(props: SdProTableProps, state: SdProTableState): {
    grid_opts$: import("vue").ComputedRef<VxeGridProps>;
};
