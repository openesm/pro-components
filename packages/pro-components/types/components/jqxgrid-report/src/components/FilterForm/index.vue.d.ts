import type { PropType } from 'vue';
import type { SdProFormContext, SdProFormDefine } from '../../../../pro-form';
declare const _default: import("vue").DefineComponent<{
    model: {
        type: ObjectConstructor;
    };
    schema: {
        type: PropType<SdProFormDefine.SchemaConfig[]>;
        default: () => never[];
    };
    disabledQueryButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabledResetButton: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    form_ref: import("vue").Ref<SdProFormContext | undefined>;
    expand: import("vue").Ref<boolean>;
    more_show_fields$: import("vue").ComputedRef<SdProFormDefine.SchemaConfig[]>;
    button_offset$: import("vue").ComputedRef<number>;
    onReset: () => void;
    onQuery: () => void;
    onExpand: (value: boolean) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("reset" | "query" | "expand")[], "reset" | "query" | "expand", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    model: {
        type: ObjectConstructor;
    };
    schema: {
        type: PropType<SdProFormDefine.SchemaConfig[]>;
        default: () => never[];
    };
    disabledQueryButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabledResetButton: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onReset?: ((...args: any[]) => any) | undefined;
    onQuery?: ((...args: any[]) => any) | undefined;
    onExpand?: ((...args: any[]) => any) | undefined;
}, {
    schema: SdProFormDefine.SchemaConfig[];
    disabledQueryButton: boolean;
    disabledResetButton: boolean;
}, {}>;
export default _default;
