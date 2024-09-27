export declare namespace SdDrawerTypes {
    interface WriteOptions {
        visible: boolean;
        width: string | number | undefined;
        loading: boolean;
        title: string;
        background: string | undefined;
        bodyLockScroll: boolean;
        showClose: boolean;
        showFooter: boolean;
        submitting: boolean;
        showCancelButton: boolean;
        disabledCancelButton: boolean;
        cancelButtonText: string;
        showConfirmButton: boolean;
        disabledConfirmButton: boolean;
        confirmButtonText: string;
    }
}
export interface SdDrawerContext {
    scrollTo: (options: any, yCoord?: number) => void;
    setScrollTop: (scrollTop: number) => void;
    setScrollLeft: (scrollLeft: number) => void;
    getScrollbar: () => any;
    setOption: (options: Partial<SdDrawerTypes.WriteOptions>) => void;
    getOption: <K extends keyof SdDrawerTypes.WriteOptions>(key?: K) => K extends string ? SdDrawerTypes.WriteOptions[K] : SdDrawerTypes.WriteOptions;
    show: () => void;
    hide: () => void;
    isVisible: () => boolean;
    isSubmitting: () => boolean;
}
