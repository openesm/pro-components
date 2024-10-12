declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    is_closed: import("vue").Ref<boolean>;
    tree_ref: import("vue").Ref<any>;
    tree_data: import("vue").Ref<any[]>;
    def_checked_keys: import("vue").Ref<string[]>;
    internal_visible$: import("vue").WritableComputedRef<boolean>;
    onOpen: () => void;
    onClosed: () => void;
    handleReset: () => void;
    handleConfirm: () => Promise<void>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "confirm")[], "update:modelValue" | "confirm", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onConfirm?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: boolean;
}, {}>;
export default _default;
