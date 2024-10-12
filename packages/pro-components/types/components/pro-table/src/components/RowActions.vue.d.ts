/** 行操作列 */
import type { PropType } from 'vue';
import type { VxeColumnSlotTypes } from 'vxe-table';
import type { SdProTableDefineTypes } from '../types';
declare const _default: import("vue").DefineComponent<{
    data: {
        type: PropType<SdProTableDefineTypes.OperationItem<any>[]>;
        default: () => never[];
    };
    params: {
        type: PropType<VxeColumnSlotTypes.DefaultSlotParams<any>>;
        required: true;
    };
}, {
    show_dropdown_menus: import("vue").Ref<boolean>;
    buttons$: import("vue").ComputedRef<{
        disabled: boolean;
        id?: string | undefined;
        name: string;
        more?: boolean | undefined;
        handle?: ((params: SdProTableDefineTypes.OperationHandleParams<any>) => void) | undefined;
        hidden?: boolean | ((params: SdProTableDefineTypes.OperationHandleParams<any>) => boolean) | undefined;
    }[]>;
    more_buttons$: import("vue").ComputedRef<{
        disabled: boolean;
        id?: string | undefined;
        name: string;
        more?: boolean | undefined;
        handle?: ((params: SdProTableDefineTypes.OperationHandleParams<any>) => void) | undefined;
        hidden?: boolean | ((params: SdProTableDefineTypes.OperationHandleParams<any>) => boolean) | undefined;
    }[]>;
    handleClick: (item: SdProTableDefineTypes.OperationItem) => void;
    isDisabled: (item: SdProTableDefineTypes.OperationItem) => boolean;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: PropType<SdProTableDefineTypes.OperationItem<any>[]>;
        default: () => never[];
    };
    params: {
        type: PropType<VxeColumnSlotTypes.DefaultSlotParams<any>>;
        required: true;
    };
}>>, {
    data: SdProTableDefineTypes.OperationItem<any>[];
}, {}>;
export default _default;
