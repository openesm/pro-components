import type { LoadingOptions } from 'element-plus';
export declare function showLoading(options?: LoadingOptions): {
    setText: (text: string) => void;
    removeElLoadingChild: () => void;
    close: () => void;
    handleAfterLeave: () => void;
    vm: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>;
    $el: HTMLElement;
    originalPosition: import("vue").Ref<string>;
    originalOverflow: import("vue").Ref<string>;
    visible: import("vue").Ref<boolean>;
    parent: import("vue").Ref<import("element-plus").LoadingParentElement>;
    background: import("vue").Ref<string>;
    svg: import("vue").Ref<string>;
    svgViewBox: import("vue").Ref<string>;
    spinner: import("vue").Ref<string | boolean>;
    text: import("vue").Ref<string>;
    fullscreen: import("vue").Ref<boolean>;
    lock: import("vue").Ref<boolean>;
    customClass: import("vue").Ref<string>;
    target: import("vue").Ref<HTMLElement>;
    beforeClose?: import("vue").Ref<(() => boolean) | undefined> | undefined;
    closed?: import("vue").Ref<(() => void) | undefined> | undefined;
};
/** 显示 隐藏 Loading */
export declare function hideLoading(): void;
