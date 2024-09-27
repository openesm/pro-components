import { ExtractPublicPropTypes, PropType, CSSProperties, Component } from 'vue';

type ActionItem = {
    key: string;
    icon?: Component;
    text?: string;
};
export declare const sdCardProps: {
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
        type: PropType<"never" | "hover" | "always">;
        default: string;
    };
    headerClass: {
        type: StringConstructor;
        default: string;
    };
    headerStyle: {
        type: PropType<CSSProperties>;
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
        type: PropType<number | number[]>;
    };
    group: {
        type: BooleanConstructor;
        default: boolean;
    };
    colSpan: {
        type: PropType<string | number>;
        default: number;
    };
    split: {
        type: PropType<"horizontal" | "vertical">;
    };
    direction: {
        type: PropType<"row" | "column">;
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
        type: PropType<string | number>;
    };
    maxHeight: {
        type: PropType<string | number>;
    };
    bodyClass: {
        type: StringConstructor;
        default: string;
    };
    bodyStyle: {
        type: PropType<CSSProperties>;
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
        type: PropType<ActionItem[]>;
        default: () => never[];
    };
};
export declare const sdCardEmits: string[];
export type SdCardProps = ExtractPublicPropTypes<typeof sdCardProps>;
export {};
