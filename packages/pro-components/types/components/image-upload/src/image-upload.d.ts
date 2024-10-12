import type { ExtractPublicPropTypes, PropType, CSSProperties } from 'vue';
import type { ImageProps } from 'element-plus';
import type { SdCropperProps } from '../../cropper/src/cropper';
export declare const sdImageUploadProps: {
    readonly modelValue: {
        type: StringConstructor;
        default: string;
    };
    readonly defaultValue: {
        type: StringConstructor;
        default: string;
    };
    readonly height: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    readonly width: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    readonly progressWidth: {
        type: NumberConstructor;
        default: number;
    };
    readonly tip: {
        type: StringConstructor;
        default: string;
    };
    readonly tipStyle: {
        type: PropType<CSSProperties>;
    };
    readonly placeholder: {
        type: StringConstructor;
        default: string;
    };
    readonly placeholderIconSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    readonly placeholderStyle: {
        type: PropType<CSSProperties>;
    };
    readonly circle: {
        type: BooleanConstructor;
    };
    readonly showPreviewButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly showDeleteButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly imageProps: {
        type: PropType<ImageProps>;
    };
    readonly enableCropper: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly imageCropperProps: {
        type: PropType<SdCropperProps>;
    };
    readonly limitSize: {
        type: NumberConstructor;
    };
    readonly onOverflowSize: {
        type: FunctionConstructor;
    };
    readonly api: {
        type: FunctionConstructor;
        default: null;
    };
    readonly transform: {
        type: FunctionConstructor;
        default: null;
    };
    readonly autoUpload: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly onSuccess: {
        type: FunctionConstructor;
    };
    readonly onError: {
        type: FunctionConstructor;
    };
    readonly beforeUpload: {
        type: FunctionConstructor;
    };
    readonly name: {
        type: StringConstructor;
        default: string;
    };
    readonly data: {
        type: PropType<import("element-plus/es/utils/index.mjs").EpPropMergeType<(new (...args: any[]) => ((rawFile: import("element-plus").UploadRawFile) => import("element-plus/es/utils/typescript.mjs").Awaitable<import("element-plus/es/utils/typescript.mjs").Mutable<Record<string, any>>>) | import("element-plus/es/utils/typescript.mjs").Mutable<Record<string, any>> | Promise<import("element-plus/es/utils/typescript.mjs").Mutable<Record<string, any>>>) | (() => ((rawFile: import("element-plus").UploadRawFile) => import("element-plus/es/utils/typescript.mjs").Awaitable<import("element-plus/es/utils/typescript.mjs").Mutable<Record<string, any>>>) | import("element-plus/es/utils/typescript.mjs").Awaitable<import("element-plus/es/utils/typescript.mjs").Mutable<Record<string, any>>>) | ((new (...args: any[]) => import("element-plus/es/utils/typescript.mjs").Mutable<Record<string, any>> | Promise<import("element-plus/es/utils/typescript.mjs").Mutable<Record<string, any>>> | ((rawFile: import("element-plus").UploadRawFile) => import("element-plus/es/utils/typescript.mjs").Awaitable<import("element-plus/es/utils/typescript.mjs").Mutable<Record<string, any>>>)) | (() => import("element-plus/es/utils/typescript.mjs").Awaitable<import("element-plus/es/utils/typescript.mjs").Mutable<Record<string, any>>> | ((rawFile: import("element-plus").UploadRawFile) => import("element-plus/es/utils/typescript.mjs").Awaitable<import("element-plus/es/utils/typescript.mjs").Mutable<Record<string, any>>>)))[], unknown, unknown>>;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
        default: () => import("element-plus/es/utils/typescript.mjs").Mutable<{}>;
    };
    readonly disabled: BooleanConstructor;
    readonly drag: import("element-plus/es/utils/index.mjs").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
};
export declare const sdImageUploadEmits: string[];
export declare const sdImageUploadOmitKeys: string[];
export type SdImageUploadProps = ExtractPublicPropTypes<typeof sdImageUploadProps>;
