export declare const SdCropper: ({
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            height: number;
            circle: boolean;
            width: number;
            src: string;
            autoCrop: boolean;
            showTools: boolean;
            showChooseFile: boolean;
            showPreview: boolean;
            previewTitle: string;
            previewSizes: number[];
        }> & Omit<{
            readonly height: number;
            readonly circle: boolean;
            readonly width: number;
            readonly src: string;
            readonly autoCrop: boolean;
            readonly showTools: boolean;
            readonly showChooseFile: boolean;
            readonly showPreview: boolean;
            readonly previewTitle: string;
            readonly previewSizes: number[];
            readonly outputType?: string | undefined;
            readonly aspectRatio?: number | undefined;
            readonly outputConfig?: Cropper.GetCroppedCanvasOptions | undefined;
            readonly cropperConfig?: Cropper.Options<EventTarget> | undefined;
            readonly previewTitleStyle?: import("vue").CSSProperties | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            src: {
                type: StringConstructor;
                default: string;
            };
            circle: {
                type: BooleanConstructor;
                default: boolean;
            };
            width: {
                type: NumberConstructor;
                default: number;
            };
            height: {
                type: NumberConstructor;
                default: number;
            };
            outputType: {
                type: StringConstructor;
            };
            autoCrop: {
                type: BooleanConstructor;
                default: boolean;
            };
            aspectRatio: {
                type: NumberConstructor;
            };
            outputConfig: {
                type: import("vue").PropType<Cropper.GetCroppedCanvasOptions>;
            };
            cropperConfig: {
                type: import("vue").PropType<Cropper.Options<EventTarget>>;
            };
            showTools: {
                type: BooleanConstructor;
                default: boolean;
            };
            showChooseFile: {
                type: BooleanConstructor;
                default: boolean;
            };
            showPreview: {
                type: BooleanConstructor;
                default: boolean;
            };
            previewTitle: {
                type: StringConstructor;
                default: string;
            };
            previewTitleStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
            };
            previewSizes: {
                type: import("vue").PropType<number[]>;
                default: () => never[];
            };
        }>>, "height" | "circle" | "width" | "src" | "autoCrop" | "showTools" | "showChooseFile" | "showPreview" | "previewTitle" | "previewSizes">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot<any> | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            src: {
                type: StringConstructor;
                default: string;
            };
            circle: {
                type: BooleanConstructor;
                default: boolean;
            };
            width: {
                type: NumberConstructor;
                default: number;
            };
            height: {
                type: NumberConstructor;
                default: number;
            };
            outputType: {
                type: StringConstructor;
            };
            autoCrop: {
                type: BooleanConstructor;
                default: boolean;
            };
            aspectRatio: {
                type: NumberConstructor;
            };
            outputConfig: {
                type: import("vue").PropType<Cropper.GetCroppedCanvasOptions>;
            };
            cropperConfig: {
                type: import("vue").PropType<Cropper.Options<EventTarget>>;
            };
            showTools: {
                type: BooleanConstructor;
                default: boolean;
            };
            showChooseFile: {
                type: BooleanConstructor;
                default: boolean;
            };
            showPreview: {
                type: BooleanConstructor;
                default: boolean;
            };
            previewTitle: {
                type: StringConstructor;
                default: string;
            };
            previewTitleStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
            };
            previewSizes: {
                type: import("vue").PropType<number[]>;
                default: () => never[];
            };
        }>>, {
            isReady: () => boolean;
            zoom: (value: number) => void;
            rotate: (value: number) => void;
            reset: () => void;
            getRoundedCanvas: (sourceCanvas: HTMLCanvasElement) => HTMLCanvasElement | undefined;
            getCropperInstance: () => Cropper;
            getCroppedFile: () => Promise<Blob | null>;
            cropperd: () => Promise<void>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            [x: string]: (...args: any[]) => void;
        }, string, {
            height: number;
            circle: boolean;
            width: number;
            src: string;
            autoCrop: boolean;
            showTools: boolean;
            showChooseFile: boolean;
            showPreview: boolean;
            previewTitle: string;
            previewSizes: number[];
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
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        src: {
            type: StringConstructor;
            default: string;
        };
        circle: {
            type: BooleanConstructor;
            default: boolean;
        };
        width: {
            type: NumberConstructor;
            default: number;
        };
        height: {
            type: NumberConstructor;
            default: number;
        };
        outputType: {
            type: StringConstructor;
        };
        autoCrop: {
            type: BooleanConstructor;
            default: boolean;
        };
        aspectRatio: {
            type: NumberConstructor;
        };
        outputConfig: {
            type: import("vue").PropType<Cropper.GetCroppedCanvasOptions>;
        };
        cropperConfig: {
            type: import("vue").PropType<Cropper.Options<EventTarget>>;
        };
        showTools: {
            type: BooleanConstructor;
            default: boolean;
        };
        showChooseFile: {
            type: BooleanConstructor;
            default: boolean;
        };
        showPreview: {
            type: BooleanConstructor;
            default: boolean;
        };
        previewTitle: {
            type: StringConstructor;
            default: string;
        };
        previewTitleStyle: {
            type: import("vue").PropType<import("vue").CSSProperties>;
        };
        previewSizes: {
            type: import("vue").PropType<number[]>;
            default: () => never[];
        };
    }>> & import("vue").ShallowUnwrapRef<{
        isReady: () => boolean;
        zoom: (value: number) => void;
        rotate: (value: number) => void;
        reset: () => void;
        getRoundedCanvas: (sourceCanvas: HTMLCanvasElement) => HTMLCanvasElement | undefined;
        getCropperInstance: () => Cropper;
        getCroppedFile: () => Promise<Blob | null>;
        cropperd: () => Promise<void>;
    }> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    src: {
        type: StringConstructor;
        default: string;
    };
    circle: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: NumberConstructor;
        default: number;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
    outputType: {
        type: StringConstructor;
    };
    autoCrop: {
        type: BooleanConstructor;
        default: boolean;
    };
    aspectRatio: {
        type: NumberConstructor;
    };
    outputConfig: {
        type: import("vue").PropType<Cropper.GetCroppedCanvasOptions>;
    };
    cropperConfig: {
        type: import("vue").PropType<Cropper.Options<EventTarget>>;
    };
    showTools: {
        type: BooleanConstructor;
        default: boolean;
    };
    showChooseFile: {
        type: BooleanConstructor;
        default: boolean;
    };
    showPreview: {
        type: BooleanConstructor;
        default: boolean;
    };
    previewTitle: {
        type: StringConstructor;
        default: string;
    };
    previewTitleStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
    };
    previewSizes: {
        type: import("vue").PropType<number[]>;
        default: () => never[];
    };
}>>, {
    isReady: () => boolean;
    zoom: (value: number) => void;
    rotate: (value: number) => void;
    reset: () => void;
    getRoundedCanvas: (sourceCanvas: HTMLCanvasElement) => HTMLCanvasElement | undefined;
    getCropperInstance: () => Cropper;
    getCroppedFile: () => Promise<Blob | null>;
    cropperd: () => Promise<void>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    [x: string]: (...args: any[]) => void;
}, string, {
    height: number;
    circle: boolean;
    width: number;
    src: string;
    autoCrop: boolean;
    showTools: boolean;
    showChooseFile: boolean;
    showPreview: boolean;
    previewTitle: string;
    previewSizes: number[];
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        tools?(_: {}): any;
        preview?(_: {}): any;
    };
}) & import("vue").Plugin) & Record<string, any>;
export * from './src/cropper';
export default SdCropper;
