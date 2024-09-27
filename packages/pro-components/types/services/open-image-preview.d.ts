interface ImagePreviewOptions {
    urlList: string[];
    zIndex?: number;
    initialIndex?: number;
    infinite?: boolean;
    hideOnClickModal?: boolean;
    closeOnPressEscape?: boolean;
    zoomRate?: number;
    minScale?: number;
    maxScale?: number;
    crossorigin?: 'anonymous' | 'use-credentials' | '';
    onClose?: () => void;
    onSwitch?: (index: number) => number;
    onRotate?: (deg: number) => number;
}
export declare function openImagePreview(options: ImagePreviewOptions, lock_route?: boolean): void;
export declare function switchImagePreview(index: number): void;
export declare function closeImagePreview(): void;
export {};
