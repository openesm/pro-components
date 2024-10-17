import type { IEditorConfig, IToolbarConfig, IDomEditor, Toolbar, SlateDescendant } from '@wangeditor/editor';
export declare namespace SdWangeditorToolbarTypes {
    type ToolbarMode = 'default' | 'simple';
    type ToolbarConfig = Partial<IToolbarConfig>;
    type ToolbarInstance = Toolbar;
    type CreateOption = {
        editor: IDomEditor | null;
        selector: string | Element;
        mode?: ToolbarMode;
        config?: ToolbarConfig;
    };
    type CreateToolbar = (option?: CreateOption) => Toolbar;
    interface PublicMethod {
        getMenus: () => ReturnType<Toolbar['getMenus']>;
        getConfig: () => ReturnType<Toolbar['getConfig']>;
        destroy: () => void;
    }
}
export declare namespace SdWangeditorTypes {
    type EditorMode = 'default' | 'simple';
    type EditorConfig = Partial<IEditorConfig>;
    type EditorInstance = IDomEditor;
    type CreateOption = {
        selector: string | Element;
        mode?: EditorMode;
        content?: SlateDescendant[];
        html?: string;
        config?: EditorConfig;
    };
    type CreateEditor = (option?: CreateOption) => IDomEditor;
    interface Event {
        ['onUpdate:ModelValue']: (html: string) => void;
        onReady: () => void;
        onError: () => void;
        onCreated: (editor: EditorInstance) => void;
        onChange: (editor: EditorInstance) => void;
        onDestroyed: (editor: EditorInstance) => void;
        onOverMaxlength: (editor: EditorInstance) => void;
        onFocus: (editor: EditorInstance) => void;
        onBlur: (editor: EditorInstance) => void;
    }
    interface PublicMethod {
        getHtml: () => string;
        clear: () => void;
        destroy: () => void;
    }
}
