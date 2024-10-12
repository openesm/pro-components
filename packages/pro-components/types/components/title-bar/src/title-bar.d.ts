import type { ExtractPublicPropTypes, PropType, StyleValue, Component } from 'vue';
import type { ComponentTypes } from '../../../types';
export declare const sdTitleBarProps: {
    type: {
        type: PropType<ComponentTypes>;
        default: string;
    };
    icon: {
        type: PropType<Component>;
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
        type: PropType<StyleValue>;
    };
    bodyClass: {
        type: StringConstructor;
    };
    bodyStyle: {
        type: PropType<StyleValue>;
    };
};
export declare const sdTieleBarEmits: string[];
export type SdTitleBarProps = ExtractPublicPropTypes<typeof sdTitleBarProps>;
