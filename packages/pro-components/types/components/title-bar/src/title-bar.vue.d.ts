declare const _default: import('vue').DefineComponent<{
    type: {
        type: import('vue').PropType<import('../../../types').ComponentTypes>;
        default: string;
    };
    icon: {
        type: import('vue').PropType<import('vue').Component>;
    };
    iconColor: {
        type: StringConstructor;
    };
    iconSize: {
        type: NumberConstructor;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    subTitle: {
        type: StringConstructor;
        default: string;
    };
    desc: {
        type: StringConstructor;
        default: string;
    };
    arrow: {
        type: BooleanConstructor;
        default: boolean;
    };
    headClass: {
        type: StringConstructor;
    };
    headStyle: {
        type: import('vue').PropType<import('vue').StyleValue>;
    };
    bodyClass: {
        type: StringConstructor;
    };
    bodyStyle: {
        type: import('vue').PropType<import('vue').StyleValue>;
    };
}, unknown, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, string[], string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    type: {
        type: import('vue').PropType<import('../../../types').ComponentTypes>;
        default: string;
    };
    icon: {
        type: import('vue').PropType<import('vue').Component>;
    };
    iconColor: {
        type: StringConstructor;
    };
    iconSize: {
        type: NumberConstructor;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    subTitle: {
        type: StringConstructor;
        default: string;
    };
    desc: {
        type: StringConstructor;
        default: string;
    };
    arrow: {
        type: BooleanConstructor;
        default: boolean;
    };
    headClass: {
        type: StringConstructor;
    };
    headStyle: {
        type: import('vue').PropType<import('vue').StyleValue>;
    };
    bodyClass: {
        type: StringConstructor;
    };
    bodyStyle: {
        type: import('vue').PropType<import('vue').StyleValue>;
    };
}>> & {
    [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
}, {
    title: string;
    subTitle: string;
    type: import('../../../types').ComponentTypes;
    desc: string;
    arrow: boolean;
}, {}>;
export default _default;
