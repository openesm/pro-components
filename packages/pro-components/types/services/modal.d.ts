/**
 * v24.03.17
 * 方法调用弹窗
 */
import type { ComponentPublicInstance, VNode } from 'vue';
import type { SdDialogProps } from '../components/dialog';
import type { SdDrawerProps } from '../components/drawer';
interface ExtraOptions {
    appContext?: any;
    appendTo?: HTMLElement | (() => HTMLElement);
}
type ModalInstance = ComponentPublicInstance<{
    visible: boolean;
    submitting: boolean;
}>;
type RenderContentType = string | VNode | null | undefined;
type RenderMethodReturn = RenderContentType | RenderContentType[];
interface DialogOptions extends SdDialogProps, CompoentEvent {
    slots?: Record<string, () => RenderMethodReturn>;
    render?: () => RenderMethodReturn;
    renderHeader?: () => RenderMethodReturn;
    renderHeaderExtra?: () => RenderMethodReturn;
    renderExtra?: () => RenderMethodReturn;
    renderFooter?: () => RenderMethodReturn;
}
interface DrawerOptions extends SdDrawerProps, CompoentEvent {
    slots?: Record<string, () => RenderMethodReturn>;
    render?: () => RenderMethodReturn;
    renderTitle?: () => RenderMethodReturn;
    renderHeaderExtra?: () => RenderMethodReturn;
    renderFooter?: () => RenderMethodReturn;
}
type CompoentEvent = {
    onOpen?: () => void;
    onOpened?: () => void;
    onClose?: () => void;
    onClosed?: () => void;
    onCancel?: () => void;
    onConfirm?: () => void;
    onScroll?: (params: {
        scrollTop: number;
        scrollLeft: number;
    }) => void;
};
export declare function showDialog(options: DialogOptions, extra_opts?: ExtraOptions): {
    $modal: ModalInstance;
    close: () => void;
};
export declare function showDrawer(options: DrawerOptions, extra_opts?: ExtraOptions): {
    $modal: ModalInstance;
    close: () => void;
};
export {};
