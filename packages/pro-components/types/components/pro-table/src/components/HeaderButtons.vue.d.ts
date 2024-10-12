/** 顶部区域按钮配置 */
import type { PropType } from 'vue';
import type { SdProTableDefineTypes } from '../types';
declare const _default: import("vue").DefineComponent<{
    data: {
        type: PropType<SdProTableDefineTypes.HeaderButtonItem[]>;
        default: () => never[];
    };
}, {
    buttons$: import("vue").ComputedRef<SdProTableDefineTypes.HeaderButtonItem[]>;
    more_buttons$: import("vue").ComputedRef<SdProTableDefineTypes.HeaderButtonItem[]>;
    isDisabled: (item: {
        disabled?: boolean | Function;
    }) => any;
    isHidden: (item: {
        hidden?: boolean | Function;
    }) => any;
    handleClick: (item: SdProTableDefineTypes.HeaderButtonItem) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: PropType<SdProTableDefineTypes.HeaderButtonItem[]>;
        default: () => never[];
    };
}>>, {
    data: SdProTableDefineTypes.HeaderButtonItem[];
}, {}>;
export default _default;
