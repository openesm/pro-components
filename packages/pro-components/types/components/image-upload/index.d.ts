/// <reference types="@types/node" />
export declare const SdImageUpload: ({
    new (...args: any[]): {
        $: import('vue').ComponentInternalInstance;
        $data: {};
        $props: Partial<{
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
        }> & Omit<{
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
            readonly onError?: Function | undefined;
            readonly placeholderStyle?: import('vue').CSSProperties | undefined;
            readonly tipStyle?: import('vue').CSSProperties | undefined;
            readonly imageProps?: import('element-plus').ImageProps | undefined;
            readonly imageCropperProps?: {
                height?: number | undefined;
                circle?: boolean | undefined;
                width?: number | undefined;
                src?: string | undefined;
                outputType?: string | undefined;
                autoCrop?: boolean | undefined;
                aspectRatio?: number | undefined;
                outputConfig?: Cropper.GetCroppedCanvasOptions | undefined;
                cropperConfig?: Cropper.Options<EventTarget> | undefined;
                showTools?: boolean | undefined;
                showChooseFile?: boolean | undefined;
                showPreview?: boolean | undefined;
                previewTitle?: string | undefined;
                previewTitleStyle?: import('vue').CSSProperties | undefined;
                previewSizes?: number[] | undefined;
            } | undefined;
            readonly limitSize?: number | undefined;
            readonly onOverflowSize?: Function | undefined;
            readonly onSuccess?: Function | undefined;
            readonly beforeUpload?: Function | undefined;
        } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<import('vue').ExtractPropTypes<{
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
                type: import('vue').PropType<import('vue').CSSProperties>;
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
                type: import('vue').PropType<import('vue').CSSProperties>;
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
                type: import('vue').PropType<import('..').SdCropperProps>;
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
        }>>, "height" | "disabled" | "name" | "data" | "circle" | "width" | "modelValue" | "drag" | "placeholder" | "defaultValue" | "transform" | "placeholderIconSize" | "progressWidth" | "tip" | "showPreviewButton" | "showDeleteButton" | "enableCropper" | "api" | "autoUpload">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import('vue').Slot<any> | undefined;
        }>;
        $root: import('vue').ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import('vue').ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: import('vue').ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import('vue').ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
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
                type: import('vue').PropType<import('vue').CSSProperties>;
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
                type: import('vue').PropType<import('vue').CSSProperties>;
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
                type: import('vue').PropType<import('..').SdCropperProps>;
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
            reset: () => void;
            clear: () => void;
            submit: (file: File | Blob) => Promise<void>;
            getFile: () => {
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
        }, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            [x: string]: (...args: any[]) => void;
        }, string, {
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
        }, {}, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import('vue').ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import('vue').ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import('vue').ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import('vue').nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import('vue').WatchOptions<boolean> | undefined): import('vue').WatchStopHandle;
    } & Readonly<import('vue').ExtractPropTypes<{
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
            type: import('vue').PropType<import('vue').CSSProperties>;
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
            type: import('vue').PropType<import('vue').CSSProperties>;
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
            type: import('vue').PropType<import('..').SdCropperProps>;
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
    }>> & import('vue').ShallowUnwrapRef<{
        reset: () => void;
        clear: () => void;
        submit: (file: File | Blob) => Promise<void>;
        getFile: () => {
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
    }> & {} & import('vue').ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
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
        type: import('vue').PropType<import('vue').CSSProperties>;
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
        type: import('vue').PropType<import('vue').CSSProperties>;
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
        type: import('vue').PropType<import('..').SdCropperProps>;
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
    reset: () => void;
    clear: () => void;
    submit: (file: File | Blob) => Promise<void>;
    getFile: () => {
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
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    [x: string]: (...args: any[]) => void;
}, string, {
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
}, {}, string, {}> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        placeholder?(_: {}): any;
        tip?(_: {}): any;
    };
}) & import('vue').Plugin) & Record<string, any>;
export * from './src/image-upload';
