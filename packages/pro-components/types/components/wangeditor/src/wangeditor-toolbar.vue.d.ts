import type { SdWangeditorToolbarTypes } from './types';
declare const _default: import("vue").DefineComponent<{
    editor: {
        type: import("vue").PropType<import("@wangeditor/editor").IDomEditor | null>;
        default: null;
    };
    mode: {
        type: import("vue").PropType<SdWangeditorToolbarTypes.ToolbarMode>;
        default: string;
    };
    config: {
        type: import("vue").PropType<Partial<import("@wangeditor/editor").IToolbarConfig>>;
    };
}, {
    toolbar_ref: import("vue").Ref<null>;
    getMenus: () => {
        [key: string]: import("@wangeditor/editor").IButtonMenu | import("@wangeditor/editor").ISelectMenu | import("@wangeditor/editor").IDropPanelMenu | import("@wangeditor/editor").IModalMenu;
    };
    getConfig: () => Partial<import("@wangeditor/editor").IToolbarConfig>;
    destroy: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    editor: {
        type: import("vue").PropType<import("@wangeditor/editor").IDomEditor | null>;
        default: null;
    };
    mode: {
        type: import("vue").PropType<SdWangeditorToolbarTypes.ToolbarMode>;
        default: string;
    };
    config: {
        type: import("vue").PropType<Partial<import("@wangeditor/editor").IToolbarConfig>>;
    };
}>>, {
    mode: SdWangeditorToolbarTypes.ToolbarMode;
    editor: import("@wangeditor/editor").IDomEditor | null;
}, {}>;
export default _default;
