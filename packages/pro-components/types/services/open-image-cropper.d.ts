import { SdCropperProps } from '../components/cropper/src/cropper';

type OpenImageCropperDialogOptions = {
    title?: string;
    confirmButtonText?: string;
    cancelButtonText?: string;
};
type OpenImageCropperOptions = SdCropperProps & OpenImageCropperDialogOptions;
type OpenImageCropperReturn = Promise<{
    confirm: boolean;
    src?: string;
    file?: File | Blob;
}>;
export declare function openImageCropper(options: OpenImageCropperOptions): OpenImageCropperReturn;
export {};
