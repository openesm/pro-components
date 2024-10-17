import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<string | string[]>;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    more: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    today$: import("vue").ComputedRef<string>;
    yesterday$: import("vue").ComputedRef<string>;
    same_week_day$: import("vue").ComputedRef<string>;
    same_month_day$: import("vue").ComputedRef<string>;
    curr_day$: import("vue").ComputedRef<string>;
    curr_month$: import("vue").ComputedRef<string>;
    setDate: (date: string[] | string) => void;
    handleDateBtnClick: (item: {
        prop: string;
    }) => void;
    handleCommand: (command: string) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "refresh")[], "update:modelValue" | "refresh", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<string | string[]>;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    more: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onRefresh?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    modelValue: string | string[];
    more: boolean;
}, {}>;
export default _default;
