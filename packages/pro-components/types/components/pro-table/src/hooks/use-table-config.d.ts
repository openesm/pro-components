import type { SdProTableProps } from '../pro-table';
export declare const useTableConfig: (props: SdProTableProps) => {
    tabs_config$: import("vue").ComputedRef<{
        showAll: boolean;
        allDefaultText: string;
        allDefaultValue: string | number;
        allPosition: "left" | "right";
        filter_id: string;
        filterMethod: ((params: {
            row: any;
            value: string | number;
        }) => boolean) | undefined;
    }>;
    tools_config$: import("vue").ComputedRef<{
        enableRefresh: boolean;
        enableExport: boolean;
        enableFullscreen: boolean;
        enableColumnSetting: boolean;
    }>;
    pager_config$: import("vue").ComputedRef<{
        remote: boolean;
        sizes: number[];
        layout: string;
    }>;
    quick_search_config$: import("vue").ComputedRef<{
        remote: boolean;
        width: string;
        placeholder: string;
        emptyText: string;
    }>;
};
