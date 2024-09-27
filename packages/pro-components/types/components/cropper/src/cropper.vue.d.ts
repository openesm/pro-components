import { default as Cropper } from './cropper.esm';

declare function cropperd(): Promise<void>;
declare function getCroppedFile(): Promise<Blob | null>;
declare function getRoundedCanvas(sourceCanvas: HTMLCanvasElement): HTMLCanvasElement | undefined;
declare function isReady(): boolean;
declare function zoom(value: number): void;
declare function rotate(value: number): void;
declare function reset(): void;
declare function getCropperInstance(): Cropper;
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
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
        type: import('vue').PropType<Cropper.GetCroppedCanvasOptions>;
    };
    cropperConfig: {
        type: import('vue').PropType<Cropper.Options<EventTarget>>;
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
        type: import('vue').PropType<import('vue').CSSProperties>;
    };
    previewSizes: {
        type: import('vue').PropType<number[]>;
        default: () => never[];
    };
}, {
    isReady: typeof isReady;
    zoom: typeof zoom;
    rotate: typeof rotate;
    reset: typeof reset;
    getRoundedCanvas: typeof getRoundedCanvas;
    getCropperInstance: typeof getCropperInstance;
    getCroppedFile: typeof getCroppedFile;
    cropperd: typeof cropperd;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    [x: string]: (...args: any[]) => void;
}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
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
        type: import('vue').PropType<Cropper.GetCroppedCanvasOptions>;
    };
    cropperConfig: {
        type: import('vue').PropType<Cropper.Options<EventTarget>>;
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
        type: import('vue').PropType<import('vue').CSSProperties>;
    };
    previewSizes: {
        type: import('vue').PropType<number[]>;
        default: () => never[];
    };
}>>, {
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
}, {}>, {
    tools?(_: {}): any;
    preview?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
