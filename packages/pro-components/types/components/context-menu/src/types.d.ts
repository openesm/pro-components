import type { Component } from 'vue';
/** 坐标 */
export interface Axis {
    x: number;
    y: number;
}
/** 右键菜单项定义 */
export interface ContextMenuItem {
    label: string;
    icon?: string | Component;
    disabled?: boolean;
    handle?: Function;
    divider?: boolean;
    children?: ContextMenuItem[];
}
/** 创建右键菜单定义 */
export interface CreateContextOptions {
    event: MouseEvent;
    icon?: string | Component;
    styles?: any;
    items?: ContextMenuItem[];
}
/** 右键菜单按钮属性 */
export interface ContextMenuProps {
    event?: MouseEvent;
    styles?: any;
    items: ContextMenuItem[];
    customEvent?: MouseEvent;
    axis?: Axis;
    width?: number;
    showIcon?: boolean;
}
/** 右键菜单项按钮属性 */
export interface ItemContextProps {
    showIcon?: boolean;
    item?: ContextMenuItem;
    handle: Function;
}
