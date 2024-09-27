import { SdExceptionTypes } from './types';

declare const _default: import('vue').DefineComponent<{
    status: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    subTitle: {
        type: StringConstructor;
        default: string;
    };
}, {
    resultOpts$: import('vue').ComputedRef<SdExceptionTypes.ExcePtionItem>;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    status: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    subTitle: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    title: string;
    subTitle: string;
    status: string | number;
}, {}>;
export default _default;
