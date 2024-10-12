/** 列筛选器 */
import type { VxeColumnSlotTypes } from 'vxe-table';
import type { PropType } from 'vue';
import type { SdProTableFilterDefineTypes } from '../types';
declare const _default: import("vue").DefineComponent<{
    params: {
        type: PropType<VxeColumnSlotTypes.FilterSlotParams<any>>;
    };
}, {
    state: {
        filter_data: {
            id: string;
            title: string;
            filter_mode: "content" | "custom";
            is_apply: boolean;
            can_custom_filter: boolean;
            content_data: {
                is_all: boolean;
                is_indeterminate: boolean;
                search: string;
                values: (string | number)[];
                valuex: Record<string, boolean>;
                filters: {
                    id: string | number;
                    name: string;
                }[];
            };
            custom_data: {
                render_type: "number" | "text" | "date" | "datetime";
                join_mode: "and" | "or";
                type1: SdProTableFilterDefineTypes.FilterconditionType | undefined;
                value1: string | number | undefined;
                type2: SdProTableFilterDefineTypes.FilterconditionType | undefined;
                value2: string | number | undefined;
                filters: {
                    id: string | number;
                    name: string;
                }[];
            };
        }[];
        content_filter_map: Record<string, any[]>;
    };
    onSearchInput: (filter_item: SdProTableFilterDefineTypes.FilterItemData) => void;
    onCheckAllChange: (filter_item: SdProTableFilterDefineTypes.FilterItemData) => void;
    onCheckboxChange: (filter_item: SdProTableFilterDefineTypes.FilterItemData) => void;
    onConfirm: () => void;
    onReset: () => void;
    IconSearch: import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    getFilterTypeOptions: (item: {
        can_custom_filter: boolean;
    }) => {
        label: string;
        value: string;
    }[];
    getCustomFilterTypeOptions: (type: string) => {
        label: string;
        value: string;
    }[];
    NUMBER_FILTER_OPTIONS: {
        label: string;
        value: string;
    }[];
    TEXT_FILTER_OPTIONS: {
        label: string;
        value: string;
    }[];
    DATE_FILTER_OPTIONS: {
        label: string;
        value: string;
    }[];
    JOIN_FILTER_OPTIONS: {
        label: string;
        value: string;
    }[];
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    params: {
        type: PropType<VxeColumnSlotTypes.FilterSlotParams<any>>;
    };
}>>, {}, {}>;
export default _default;
