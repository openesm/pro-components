import type { IEditorConfig, IToolbarConfig, IDomEditor, Toolbar, SlateDescendant } from '@wangeditor/editor'

export namespace SdWangeditorToolbarTypes {
    export type ToolbarMode     = 'default' | 'simple' // default 默认模式含全部功能，simple 简洁模式含部分常见功能
    export type ToolbarConfig   = Partial<IToolbarConfig>
    export type ToolbarInstance = Toolbar

    export type CreateOption = {
        editor  : IDomEditor | null    // 编辑器实例
        selector: string | Element     // 选择器
        mode   ?: ToolbarMode          // default 默认模式含全部功能，simple 简洁模式含部分常见功能
        config ?: ToolbarConfig        // 工具栏配置
    }
    export type CreateToolbar = (option?: CreateOption) => Toolbar

    export interface PublicMethod {
        getMenus : () => ReturnType<Toolbar['getMenus']>
        getConfig: () => ReturnType<Toolbar['getConfig']>
        destroy  : () => void
    }
}

export namespace SdWangeditorTypes {
    export type EditorMode     = 'default' | 'simple' // default 默认模式含全部功能，simple 简洁模式含部分常见功能
    export type EditorConfig   = Partial<IEditorConfig>
    export type EditorInstance = IDomEditor

    export type CreateOption = {
        selector: string | Element     // 选择器
        mode   ?: EditorMode           // default 默认模式含全部功能，simple 简洁模式含部分常见功能
        content?: SlateDescendant[]   // 内容
        html   ?: string               // HTML内容
        config ?: EditorConfig         // 编辑器配置
    }
    export type CreateEditor = (option?: CreateOption) => IDomEditor

    export interface Event {
        ['onUpdate:ModelValue']: (html: string) => void
        onReady                : () => void
        onError                : () => void
        onCreated              : (editor: EditorInstance) => void
        onChange               : (editor: EditorInstance) => void
        onDestroyed            : (editor: EditorInstance) => void
        onOverMaxlength        : (editor: EditorInstance) => void
        onFocus                : (editor: EditorInstance) => void
        onBlur                 : (editor: EditorInstance) => void
    }

    export interface PublicMethod {
        getHtml: () => string
        clear  : () => void
        destroy: () => void
    }
}
