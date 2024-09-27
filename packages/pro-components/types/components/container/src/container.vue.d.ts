declare const _default: import('vue').DefineComponent<{
    readonly lockScroll: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly title: {
        readonly type: StringConstructor;
    };
    readonly wrap: {
        readonly type: BooleanConstructor;
    };
    readonly headerFixed: {
        readonly type: BooleanConstructor;
    };
    readonly headerClass: {
        readonly type: StringConstructor;
    };
    readonly headerStyle: {
        readonly type: import('vue').PropType<import('vue').StyleValue>;
    };
    readonly titleStyle: {
        readonly type: import('vue').PropType<import('vue').StyleValue>;
    };
    readonly bodyClass: {
        readonly type: StringConstructor;
    };
    readonly bodyStyle: {
        readonly type: import('vue').PropType<import('vue').StyleValue>;
    };
    readonly renderContent: {
        readonly type: BooleanConstructor;
    };
    readonly contentStyle: {
        readonly type: import('vue').PropType<import('vue').StyleValue>;
    };
    readonly footerFixed: {
        readonly type: BooleanConstructor;
    };
    readonly footerClass: {
        readonly type: StringConstructor;
    };
    readonly footerStyle: {
        readonly type: import('vue').PropType<import('vue').StyleValue>;
    };
    readonly scrollbarConfig: {
        readonly type: import('vue').PropType<Partial<import('element-plus').ScrollbarProps>>;
    };
    readonly loading: {
        readonly type: BooleanConstructor;
    };
    readonly loadingDelay: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly showError: {
        readonly type: BooleanConstructor;
    };
    readonly errorText: {
        readonly type: StringConstructor;
    };
}, {
    scroll_ref: import('vue').Ref<any>;
    scrollbar_config$: import('vue').ComputedRef<{}>;
    scrollToTop: () => void;
    IconRefresh: import('vue').DefineComponent<{}, {}, {}, import('vue').ComputedOptions, import('vue').MethodOptions, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{}>>, {}>;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, string[], string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    readonly lockScroll: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly title: {
        readonly type: StringConstructor;
    };
    readonly wrap: {
        readonly type: BooleanConstructor;
    };
    readonly headerFixed: {
        readonly type: BooleanConstructor;
    };
    readonly headerClass: {
        readonly type: StringConstructor;
    };
    readonly headerStyle: {
        readonly type: import('vue').PropType<import('vue').StyleValue>;
    };
    readonly titleStyle: {
        readonly type: import('vue').PropType<import('vue').StyleValue>;
    };
    readonly bodyClass: {
        readonly type: StringConstructor;
    };
    readonly bodyStyle: {
        readonly type: import('vue').PropType<import('vue').StyleValue>;
    };
    readonly renderContent: {
        readonly type: BooleanConstructor;
    };
    readonly contentStyle: {
        readonly type: import('vue').PropType<import('vue').StyleValue>;
    };
    readonly footerFixed: {
        readonly type: BooleanConstructor;
    };
    readonly footerClass: {
        readonly type: StringConstructor;
    };
    readonly footerStyle: {
        readonly type: import('vue').PropType<import('vue').StyleValue>;
    };
    readonly scrollbarConfig: {
        readonly type: import('vue').PropType<Partial<import('element-plus').ScrollbarProps>>;
    };
    readonly loading: {
        readonly type: BooleanConstructor;
    };
    readonly loadingDelay: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly showError: {
        readonly type: BooleanConstructor;
    };
    readonly errorText: {
        readonly type: StringConstructor;
    };
}>> & {
    [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
}, {
    readonly wrap: boolean;
    readonly lockScroll: boolean;
    readonly headerFixed: boolean;
    readonly renderContent: boolean;
    readonly footerFixed: boolean;
    readonly loading: boolean;
    readonly loadingDelay: number;
    readonly showError: boolean;
}, {}>;
export default _default;
