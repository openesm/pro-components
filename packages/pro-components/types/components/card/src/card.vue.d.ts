import { ComponentPublicInstance, CSSProperties } from 'vue';

declare const _default: import('vue').DefineComponent<{
    title: {
        type: StringConstructor;
    };
    subTitle: {
        type: StringConstructor;
    };
    tooltip: {
        type: StringConstructor;
    };
    extra: {
        type: StringConstructor;
    };
    shadow: {
        type: import('vue').PropType<"never" | "hover" | "always">;
        default: string;
    };
    headerClass: {
        type: StringConstructor;
        default: string;
    };
    headerStyle: {
        type: import('vue').PropType<CSSProperties>;
    };
    headerBordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    ghost: {
        type: BooleanConstructor;
        default: boolean;
    };
    gutter: {
        type: import('vue').PropType<number | number[]>;
    };
    group: {
        type: BooleanConstructor;
        default: boolean;
    };
    colSpan: {
        type: import('vue').PropType<string | number>;
        default: number;
    };
    split: {
        type: import('vue').PropType<"horizontal" | "vertical">;
    };
    direction: {
        type: import('vue').PropType<"row" | "column">;
    };
    wrap: {
        type: BooleanConstructor;
        default: boolean;
    };
    contentCenter: {
        type: BooleanConstructor;
        default: boolean;
    };
    height: {
        type: import('vue').PropType<string | number>;
    };
    maxHeight: {
        type: import('vue').PropType<string | number>;
    };
    bodyClass: {
        type: StringConstructor;
        default: string;
    };
    bodyStyle: {
        type: import('vue').PropType<CSSProperties>;
        default: () => {};
    };
    showEmpty: {
        type: BooleanConstructor;
        default: boolean;
    };
    emptyText: {
        type: StringConstructor;
        default: string;
    };
    actionsBordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    actions: {
        type: import('vue').PropType<{
            key: string;
            icon?: import('vue').Component | undefined;
            text?: string | undefined;
        }[]>;
        default: () => never[];
    };
}, {
    childVNodes: import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
        [key: string]: any;
    }>[];
    isContainer$: import('vue').ComputedRef<boolean>;
    bodyFlexDirection$: import('vue').ComputedRef<"row" | "column" | undefined>;
    getBodyGutterStyle: () => CSSProperties;
    getCardColClass: (component: ComponentPublicInstance<any>, idx: number) => string[];
    getCardColStyle: (component: ComponentPublicInstance<any>) => CSSProperties;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, string[], string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    title: {
        type: StringConstructor;
    };
    subTitle: {
        type: StringConstructor;
    };
    tooltip: {
        type: StringConstructor;
    };
    extra: {
        type: StringConstructor;
    };
    shadow: {
        type: import('vue').PropType<"never" | "hover" | "always">;
        default: string;
    };
    headerClass: {
        type: StringConstructor;
        default: string;
    };
    headerStyle: {
        type: import('vue').PropType<CSSProperties>;
    };
    headerBordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    ghost: {
        type: BooleanConstructor;
        default: boolean;
    };
    gutter: {
        type: import('vue').PropType<number | number[]>;
    };
    group: {
        type: BooleanConstructor;
        default: boolean;
    };
    colSpan: {
        type: import('vue').PropType<string | number>;
        default: number;
    };
    split: {
        type: import('vue').PropType<"horizontal" | "vertical">;
    };
    direction: {
        type: import('vue').PropType<"row" | "column">;
    };
    wrap: {
        type: BooleanConstructor;
        default: boolean;
    };
    contentCenter: {
        type: BooleanConstructor;
        default: boolean;
    };
    height: {
        type: import('vue').PropType<string | number>;
    };
    maxHeight: {
        type: import('vue').PropType<string | number>;
    };
    bodyClass: {
        type: StringConstructor;
        default: string;
    };
    bodyStyle: {
        type: import('vue').PropType<CSSProperties>;
        default: () => {};
    };
    showEmpty: {
        type: BooleanConstructor;
        default: boolean;
    };
    emptyText: {
        type: StringConstructor;
        default: string;
    };
    actionsBordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    actions: {
        type: import('vue').PropType<{
            key: string;
            icon?: import('vue').Component | undefined;
            text?: string | undefined;
        }[]>;
        default: () => never[];
    };
}>> & {
    [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
}, {
    shadow: "never" | "hover" | "always";
    headerClass: string;
    headerBordered: boolean;
    bordered: boolean;
    ghost: boolean;
    group: boolean;
    colSpan: string | number;
    wrap: boolean;
    contentCenter: boolean;
    bodyClass: string;
    bodyStyle: CSSProperties;
    showEmpty: boolean;
    emptyText: string;
    actionsBordered: boolean;
    actions: {
        key: string;
        icon?: import('vue').Component | undefined;
        text?: string | undefined;
    }[];
}, {}>;
export default _default;
