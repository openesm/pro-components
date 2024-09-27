import { destoryContextMenu } from './create-context-menu';

/** 使用右键菜单 */
export declare function useContextMenu(auto_remove?: boolean): {
    createContextMenu: (options: import('./types').CreateContextOptions) => Promise<unknown>;
    destoryContextMenu: typeof destoryContextMenu;
};
