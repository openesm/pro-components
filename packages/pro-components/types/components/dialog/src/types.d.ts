export declare namespace SdDialogTypes {
    interface WriteOptions {
        visible: boolean;
        width: string | number | undefined;
        height: string | number;
        maxHeight: string | number | undefined;
        showClose: boolean;
        showFooter: boolean;
        fullscreen: boolean;
        draggable: boolean;
        title: string;
        submitting: boolean;
        showCancelButton: boolean;
        disabledCancelButton: boolean;
        cancelButtonText: string;
        showConfirmButton: boolean;
        disabledConfirmButton: boolean;
        confirmButtonText: string;
    }
}
export interface SdDialogContext {
    scrollTo: (options: any, yCoord?: number) => void;
    setScrollTop: (scrollTop: number) => void;
    setScrollLeft: (scrollLeft: number) => void;
    getScrollbar: () => any;
    setOption: (options: Partial<SdDialogTypes.WriteOptions>) => void;
    getOption: <K extends keyof SdDialogTypes.WriteOptions>(key?: K) => K extends string ? SdDialogTypes.WriteOptions[K] : SdDialogTypes.WriteOptions;
    show: () => void;
    hide: () => void;
    isVisible: () => boolean;
    isSubmitting: () => boolean;
}
