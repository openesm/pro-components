import type { CSSProperties, ExtractPublicPropTypes, PropType } from 'vue';
export declare const sdImageProps: {
    width: {
        type: PropType<string | number>;
    };
    height: {
        type: PropType<string | number>;
    };
    minWidth: {
        type: PropType<string | number>;
    };
    minHeight: {
        type: PropType<string | number>;
    };
    circle: {
        type: BooleanConstructor;
        default: boolean;
    };
    borderRadius: {
        type: PropType<string | number>;
        default: number;
    };
    disabledPreview: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholderStyle: {
        type: PropType<CSSProperties>;
    };
    placeholderIconSize: {
        type: NumberConstructor;
        default: number;
    };
    placeholderIconColor: {
        type: StringConstructor;
        default: string;
    };
    errorStyle: {
        type: PropType<CSSProperties>;
    };
    errorIconSize: {
        type: NumberConstructor;
        default: number;
    };
    errorIconColor: {
        type: StringConstructor;
    };
    fit: {
        default: string;
        type: PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<StringConstructor, "" | "fill" | "none" | "contain" | "cover" | "scale-down", unknown>>;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    hideOnClickModal: {
        default: boolean;
        prototype: Boolean;
    };
    src: import("element-plus/es/utils/index.mjs").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    loading: {
        readonly type: PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<StringConstructor, "lazy" | "eager", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    lazy: BooleanConstructor;
    scrollContainer: {
        readonly type: PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    previewSrcList: import("element-plus/es/utils/index.mjs").EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => [], boolean>;
    previewTeleported: BooleanConstructor;
    zIndex: {
        readonly type: PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    initialIndex: import("element-plus/es/utils/index.mjs").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    infinite: import("element-plus/es/utils/index.mjs").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    closeOnPressEscape: import("element-plus/es/utils/index.mjs").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    zoomRate: import("element-plus/es/utils/index.mjs").EpPropFinalized<NumberConstructor, unknown, unknown, 1.2, boolean>;
    minScale: import("element-plus/es/utils/index.mjs").EpPropFinalized<NumberConstructor, unknown, unknown, 0.2, boolean>;
    maxScale: import("element-plus/es/utils/index.mjs").EpPropFinalized<NumberConstructor, unknown, unknown, 7, boolean>;
};
export declare const sdImageEmits: {
    load: (evt: Event) => boolean;
    error: (evt: Event) => boolean;
    switch: (val: number) => boolean;
    close: () => boolean;
    show: () => boolean;
};
export declare const sdImageOmitKeys: string[];
export type SdImageProps = ExtractPublicPropTypes<typeof sdImageProps>;
