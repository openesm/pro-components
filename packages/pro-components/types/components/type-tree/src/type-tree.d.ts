import { SdTypeTreeTypes } from './types';
import { ExtractPropTypes, PropType, CSSProperties } from 'vue';

export declare const sdTypeTreeProps: {
    width: {
        type: PropType<string | number>;
        default: number;
    };
    headClass: {
        type: PropType<string | Record<string, string>>;
        default: string;
    };
    headStyle: {
        type: PropType<string | CSSProperties>;
        default: string;
    };
    mainClass: {
        type: PropType<string | Record<string, string>>;
        default: string;
    };
    mainStyle: {
        type: PropType<string | CSSProperties>;
        default: string;
    };
    footClass: {
        type: PropType<string | Record<string, string>>;
        default: string;
    };
    footStyle: {
        type: PropType<string | CSSProperties>;
        default: string;
    };
    showHead: {
        type: BooleanConstructor;
        default: boolean;
    };
    showFoot: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    list: {
        type: ArrayConstructor;
        default: () => never[];
    };
    prop: {
        type: PropType<SdTypeTreeTypes.PropConfig>;
        default: () => void;
    };
    emptyText: {
        type: StringConstructor;
    };
    showRefresh: {
        type: BooleanConstructor;
        default: boolean;
    };
    renderContent: {
        type: FunctionConstructor;
    };
    accordion: {
        type: BooleanConstructor;
        default: boolean;
    };
    nodeKey: {
        type: StringConstructor;
        default: string;
    };
};
export type SdTypeTreeProps = ExtractPropTypes<typeof sdTypeTreeProps>;
