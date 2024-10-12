/** 导出勾选列数据 */
import type { PropType } from 'vue';
import type { VxeTableDefines } from 'vxe-table';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    cols: {
        type: PropType<VxeTableDefines.ColumnOptions<any>[]>;
    };
}, {
    tree_ref: import("vue").Ref<any>;
    form_ref: import("vue").Ref<any>;
    state: {
        checked_all: boolean;
        all_keys: string[];
        tree_data: {
            id: string;
            name: string;
            width?: number | undefined;
            children: any[];
        }[];
        is_expand: boolean;
        valid_export_cols: {
            id: string;
            name: string;
        }[];
        form: {
            file_name: string;
            save_type: string;
            file_type: string;
            data_type: string;
            columns: string[];
        };
    };
    internal_visible$: import("vue").WritableComputedRef<boolean>;
    full_rows$: import("vue").ComputedRef<any[]>;
    filter_rows$: import("vue").ComputedRef<any[]>;
    validColumnsRule: (_rule: any, _value: string[], callback: any) => void;
    onOpen: () => void;
    onCheckedAllClick: () => void;
    onTreeCheckChange: () => void;
    handleConfirm: () => Promise<void>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "confirm")[], "update:modelValue" | "confirm", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    cols: {
        type: PropType<VxeTableDefines.ColumnOptions<any>[]>;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onConfirm?: ((...args: any[]) => any) | undefined;
}, {
    title: string;
    modelValue: boolean;
}, {}>;
export default _default;
