import { Component } from 'vue';

export declare namespace SdCategoryListTypes {
    interface Prop {
        label?: string;
        value?: string;
        icon?: string;
        count?: string;
        [key: string]: any;
    }
    interface OperationItem<RowItem = any> {
        id: string;
        name: string;
        icon?: Component;
        more?: boolean;
        handle?: (params: OperationHandleParams<RowItem>) => void;
        disabled?: ((params: OperationHandleParams<RowItem>) => boolean) | boolean;
        hidden?: ((params: OperationHandleParams<RowItem>) => boolean) | boolean;
    }
    /** 行操作函数回调参数 */
    interface OperationHandleParams<RowItem = any> {
        $item: OperationItem<RowItem>;
        row: RowItem;
        $columnIndex: number;
        $rowIndex: number;
    }
}
