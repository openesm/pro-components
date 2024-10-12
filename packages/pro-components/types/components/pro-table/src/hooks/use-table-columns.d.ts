import type { SdProTableContext } from '../types';
export declare const useTableColumns: ($proTable: SdProTableContext) => {
    initColumns: () => void;
    loadSearchColumnIds: (visible_ids: string[]) => void;
};
