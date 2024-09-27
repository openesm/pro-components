import { CSSProperties } from 'vue';

declare function uploadImage(file: File | Blob): Promise<void>;
declare function handelImageDelete(): void;
declare function reset(): void;
declare function getFile(): {
    readonly size: number;
    readonly type: string;
    arrayBuffer: {
        (): Promise<ArrayBuffer>;
        (): Promise<ArrayBuffer>;
    };
    slice: {
        (start?: number | undefined, end?: number | undefined, contentType?: string | undefined): Blob;
        (start?: number | undefined, end?: number | undefined, contentType?: string | undefined): Blob;
    };
    stream: {
        (): ReadableStream<Uint8Array>;
        (): NodeJS.ReadableStream;
    };
    text: {
        (): Promise<string>;
        (): Promise<string>;
    };
} | null;
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
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
        type: import('vue').PropType<CSSProperties>;
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
        type: import('vue').PropType<CSSProperties>;
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
        type: import('vue').PropType<import('element-plus').ImageProps>;
    };
    readonly enableCropper: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly imageCropperProps: {
        type: import('vue').PropType<import('../..').SdCropperProps>;
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
        type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => ((rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils/typescript.mjs').Awaitable<import('element-plus/es/utils/typescript.mjs').Mutable<Record<string, any>>>) | import('element-plus/es/utils/typescript.mjs').Mutable<Record<string, any>> | Promise<import('element-plus/es/utils/typescript.mjs').Mutable<Record<string, any>>>) | (() => ((rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils/typescript.mjs').Awaitable<import('element-plus/es/utils/typescript.mjs').Mutable<Record<string, any>>>) | import('element-plus/es/utils/typescript.mjs').Awaitable<import('element-plus/es/utils/typescript.mjs').Mutable<Record<string, any>>>) | ((new (...args: any[]) => import('element-plus/es/utils/typescript.mjs').Mutable<Record<string, any>> | Promise<import('element-plus/es/utils/typescript.mjs').Mutable<Record<string, any>>> | ((rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils/typescript.mjs').Awaitable<import('element-plus/es/utils/typescript.mjs').Mutable<Record<string, any>>>)) | (() => import('element-plus/es/utils/typescript.mjs').Awaitable<import('element-plus/es/utils/typescript.mjs').Mutable<Record<string, any>>> | ((rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils/typescript.mjs').Awaitable<import('element-plus/es/utils/typescript.mjs').Mutable<Record<string, any>>>)))[], unknown, unknown>>;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
        default: () => import('element-plus/es/utils/typescript.mjs').Mutable<{}>;
    };
    readonly disabled: BooleanConstructor;
    readonly drag: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
}, {
    reset: typeof reset;
    clear: typeof handelImageDelete;
    submit: typeof uploadImage;
    getFile: typeof getFile;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    [x: string]: (...args: any[]) => void;
}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
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
        type: import('vue').PropType<CSSProperties>;
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
        type: import('vue').PropType<CSSProperties>;
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
        type: import('vue').PropType<import('element-plus').ImageProps>;
    };
    readonly enableCropper: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly imageCropperProps: {
        type: import('vue').PropType<import('../..').SdCropperProps>;
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
        type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => ((rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils/typescript.mjs').Awaitable<import('element-plus/es/utils/typescript.mjs').Mutable<Record<string, any>>>) | import('element-plus/es/utils/typescript.mjs').Mutable<Record<string, any>> | Promise<import('element-plus/es/utils/typescript.mjs').Mutable<Record<string, any>>>) | (() => ((rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils/typescript.mjs').Awaitable<import('element-plus/es/utils/typescript.mjs').Mutable<Record<string, any>>>) | import('element-plus/es/utils/typescript.mjs').Awaitable<import('element-plus/es/utils/typescript.mjs').Mutable<Record<string, any>>>) | ((new (...args: any[]) => import('element-plus/es/utils/typescript.mjs').Mutable<Record<string, any>> | Promise<import('element-plus/es/utils/typescript.mjs').Mutable<Record<string, any>>> | ((rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils/typescript.mjs').Awaitable<import('element-plus/es/utils/typescript.mjs').Mutable<Record<string, any>>>)) | (() => import('element-plus/es/utils/typescript.mjs').Awaitable<import('element-plus/es/utils/typescript.mjs').Mutable<Record<string, any>>> | ((rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils/typescript.mjs').Awaitable<import('element-plus/es/utils/typescript.mjs').Mutable<Record<string, any>>>)))[], unknown, unknown>>;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
        default: () => import('element-plus/es/utils/typescript.mjs').Mutable<{}>;
    };
    readonly disabled: BooleanConstructor;
    readonly drag: import('element-plus/es/utils/index.mjs').EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
}>>, {
    readonly height: string | number;
    readonly disabled: boolean;
    readonly name: string;
    readonly data: import('element-plus/es/utils/index.mjs').EpPropMergeType<(new (...args: any[]) => ((rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils/typescript.mjs').Awaitable<import('element-plus/es/utils/typescript.mjs').Mutable<Record<string, any>>>) | import('element-plus/es/utils/typescript.mjs').Mutable<Record<string, any>> | Promise<import('element-plus/es/utils/typescript.mjs').Mutable<Record<string, any>>>) | (() => ((rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils/typescript.mjs').Awaitable<import('element-plus/es/utils/typescript.mjs').Mutable<Record<string, any>>>) | import('element-plus/es/utils/typescript.mjs').Awaitable<import('element-plus/es/utils/typescript.mjs').Mutable<Record<string, any>>>) | ((new (...args: any[]) => import('element-plus/es/utils/typescript.mjs').Mutable<Record<string, any>> | Promise<import('element-plus/es/utils/typescript.mjs').Mutable<Record<string, any>>> | ((rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils/typescript.mjs').Awaitable<import('element-plus/es/utils/typescript.mjs').Mutable<Record<string, any>>>)) | (() => import('element-plus/es/utils/typescript.mjs').Awaitable<import('element-plus/es/utils/typescript.mjs').Mutable<Record<string, any>>> | ((rawFile: import('element-plus').UploadRawFile) => import('element-plus/es/utils/typescript.mjs').Awaitable<import('element-plus/es/utils/typescript.mjs').Mutable<Record<string, any>>>)))[], unknown, unknown>;
    readonly circle: boolean;
    readonly width: string | number;
    readonly modelValue: string;
    readonly drag: import('element-plus/es/utils/index.mjs').EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly placeholder: string;
    readonly defaultValue: string;
    readonly transform: Function;
    readonly placeholderIconSize: string | number;
    readonly progressWidth: number;
    readonly tip: string;
    readonly showPreviewButton: boolean;
    readonly showDeleteButton: boolean;
    readonly enableCropper: boolean;
    readonly api: Function;
    readonly autoUpload: boolean;
}, {}>, {
    placeholder?(_: {}): any;
    tip?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
