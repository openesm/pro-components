import type { CSSProperties } from 'vue';
import type { ImageProps } from 'element-plus';
declare const _default: import("vue").DefineComponent<{
    width: {
        type: import("vue").PropType<string | number>;
    };
    height: {
        type: import("vue").PropType<string | number>;
    };
    minWidth: {
        type: import("vue").PropType<string | number>;
    };
    minHeight: {
        type: import("vue").PropType<string | number>;
    };
    circle: {
        type: BooleanConstructor;
        default: boolean;
    };
    borderRadius: {
        type: import("vue").PropType<string | number>;
        default: number;
    };
    disabledPreview: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholderStyle: {
        type: import("vue").PropType<CSSProperties>;
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
        type: import("vue").PropType<CSSProperties>;
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
        type: import("vue").PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<StringConstructor, "" | "fill" | "none" | "contain" | "cover" | "scale-down", unknown>>;
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
        readonly type: import("vue").PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<StringConstructor, "lazy" | "eager", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    lazy: BooleanConstructor;
    scrollContainer: {
        readonly type: import("vue").PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    previewSrcList: import("element-plus/es/utils/index.mjs").EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => [], boolean>;
    previewTeleported: BooleanConstructor;
    zIndex: {
        readonly type: import("vue").PropType<number>;
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
}, {
    image_props$: import("vue").ComputedRef<ImageProps>;
    image_style$: import("vue").ComputedRef<CSSProperties>;
    preview_src_list$: import("vue").ComputedRef<string[]>;
    onLoad: (e: Event) => void;
    onError: (e: Event) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    load: (evt: Event) => boolean;
    error: (evt: Event) => boolean;
    switch: (val: number) => boolean;
    close: () => boolean;
    show: () => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    width: {
        type: import("vue").PropType<string | number>;
    };
    height: {
        type: import("vue").PropType<string | number>;
    };
    minWidth: {
        type: import("vue").PropType<string | number>;
    };
    minHeight: {
        type: import("vue").PropType<string | number>;
    };
    circle: {
        type: BooleanConstructor;
        default: boolean;
    };
    borderRadius: {
        type: import("vue").PropType<string | number>;
        default: number;
    };
    disabledPreview: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholderStyle: {
        type: import("vue").PropType<CSSProperties>;
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
        type: import("vue").PropType<CSSProperties>;
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
        type: import("vue").PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<StringConstructor, "" | "fill" | "none" | "contain" | "cover" | "scale-down", unknown>>;
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
        readonly type: import("vue").PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<StringConstructor, "lazy" | "eager", unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    lazy: BooleanConstructor;
    scrollContainer: {
        readonly type: import("vue").PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined))[], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    previewSrcList: import("element-plus/es/utils/index.mjs").EpPropFinalized<(new (...args: any[]) => string[]) | (() => string[]) | ((new (...args: any[]) => string[]) | (() => string[]))[], unknown, unknown, () => [], boolean>;
    previewTeleported: BooleanConstructor;
    zIndex: {
        readonly type: import("vue").PropType<number>;
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
}>> & {
    onClose?: (() => any) | undefined;
    onLoad?: ((evt: Event) => any) | undefined;
    onError?: ((evt: Event) => any) | undefined;
    onShow?: (() => any) | undefined;
    onSwitch?: ((val: number) => any) | undefined;
}, {
    circle: boolean;
    infinite: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    src: string;
    closeOnPressEscape: import("element-plus/es/utils/index.mjs").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    borderRadius: string | number;
    previewSrcList: string[];
    disabledPreview: boolean;
    placeholderIconSize: number;
    placeholderIconColor: string;
    errorIconSize: number;
    fit: import("element-plus/es/utils/index.mjs").EpPropMergeType<StringConstructor, "" | "fill" | "none" | "contain" | "cover" | "scale-down", unknown>;
    hideOnClickModal: boolean;
    lazy: boolean;
    previewTeleported: boolean;
    initialIndex: number;
    zoomRate: number;
    minScale: number;
    maxScale: number;
}, {}>;
export default _default;
