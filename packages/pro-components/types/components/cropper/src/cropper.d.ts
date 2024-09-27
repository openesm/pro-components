import { PropType, ExtractPublicPropTypes, CSSProperties } from 'vue';
import { default as Cropper } from 'cropperjs';
import { default as _Cropper } from './cropper.vue';

export declare const sdCropperProps: {
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
        type: PropType<Cropper.GetCroppedCanvasOptions>;
    };
    cropperConfig: {
        type: PropType<Cropper.Options<EventTarget>>;
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
        type: PropType<CSSProperties>;
    };
    previewSizes: {
        type: PropType<number[]>;
        default: () => never[];
    };
};
export declare const sdCropperEmits: string[];
export type SdCropperProps = ExtractPublicPropTypes<typeof sdCropperProps>;
export type SdCropperInstance = InstanceType<typeof _Cropper>;
