/**
 * v24.10.12
 * 显示表单弹窗
 */
import type { StyleValue, ComponentPublicInstance, CSSProperties, VNode } from 'vue';
import type { SdDialogProps } from '../../dialog';
import type { SdDrawerProps } from '../../drawer';
import type { SdProFormProps } from './pro-form';
import type { SdProFormDefine, SdProFormContext } from './types';
interface Options<T = Record<string, any>> {
    title?: string;
    titleStyle?: CSSProperties;
    width?: string | number;
    height?: string | number;
    maxHeight?: string | number;
    modalConfig?: Partial<SdDialogProps | SdDrawerProps> & {
        style?: StyleValue;
    };
    modalSlots?: Record<string, () => RenderMethodReturn>;
    onOpen?: (params: {
        $proForm: SdProFormContext;
    }) => void;
    onOpened?: (params: {
        $proForm: SdProFormContext;
    }) => void;
    onClose?: (params: {
        $proForm: SdProFormContext;
    }) => void;
    onClosed?: () => void;
    onCancel?: (params: {
        $proForm: SdProFormContext;
    }) => void;
    onConfirm?: (params: {
        $proForm: SdProFormContext;
    }) => void;
    onScroll?: (params: {
        $proForm: SdProFormContext;
    }) => void;
    labelWidth?: number | string;
    labelPosition?: 'top' | 'right' | 'left';
    labelSuffix?: string;
    model?: OutputModelType<T>;
    schema?: string | SdProFormDefine.SchemaConfig[];
    schemaConfig?: Record<string, SdProFormDefine.SchemaConfig>;
    formConfig?: Partial<SdProFormProps> & {
        style?: StyleValue;
    };
    fieldsConfig?: SdProFormDefine.FieldsConifg;
    rulesConfig?: SdProFormDefine.RulesConfig;
    submit?: (model: OutputModelType<T>, params: {
        close: () => void;
        $proForm: SdProFormContext;
    }) => boolean | Promise<boolean>;
    formSlots?: Record<string, Function>;
}
interface ExtraOptions {
    appContext?: any;
    appendTo?: HTMLElement | (() => HTMLElement);
}
type OutputModelType<T> = T extends Object ? T & {
    [k: string]: any;
} : Record<string, any>;
type ModalInstance = ComponentPublicInstance<{
    visible: boolean;
    submitting: boolean;
}>;
type RenderContentType = string | VNode | null | undefined;
type RenderMethodReturn = RenderContentType | RenderContentType[];
interface DialogOptions<T = Record<string, any>> extends Options<T> {
    onOpenAutoFocus?: (params: {
        $proForm: SdProFormContext;
    }) => void;
    onCloseAutoFocus?: (params: {
        $proForm: SdProFormContext;
    }) => void;
    renderHeader?: () => RenderMethodReturn;
    renderHeaderExtra?: () => RenderMethodReturn;
    renderExtra?: () => RenderMethodReturn;
    renderFooter?: () => RenderMethodReturn;
}
export declare function showFormDialog<T>(options: DialogOptions<T>, extra_opts?: ExtraOptions): {
    $modal: ModalInstance;
    close: () => void;
    getProFormCtx: () => SdProFormContext;
};
interface DrawerOptions<T = Record<string, any>> extends Options<T> {
    renderTitle?: () => RenderMethodReturn;
    renderHeaderExtra?: () => RenderMethodReturn;
    renderFooter?: () => RenderMethodReturn;
}
export declare function showFormDrawer<T>(options: DrawerOptions<T>, extra_opts?: ExtraOptions): {
    $modal: ModalInstance;
    close: () => void;
    getProFormCtx: () => SdProFormContext;
};
export {};
