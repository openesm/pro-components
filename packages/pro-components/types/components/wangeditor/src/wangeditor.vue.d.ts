import type { SdWangeditorTypes } from './types';
import type { IDomEditor } from '@wangeditor/editor';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: StringConstructor;
    };
    defaultContent: {
        type: import("vue").PropType<import("@wangeditor/editor").SlateDescendant[]>;
        default: () => never[];
    };
    defaultHtml: {
        type: StringConstructor;
        default: string;
    };
    mode: {
        type: import("vue").PropType<SdWangeditorTypes.EditorMode>;
    };
    config: {
        type: import("vue").PropType<Partial<import("@wangeditor/editor").IEditorConfig>>;
    };
}, {
    edit_ref: import("vue").Ref<any>;
    getHtml: () => string;
    clear: () => void;
    destroy: () => void;
    getEditorInstance: () => IDomEditor | null;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
    };
    defaultContent: {
        type: import("vue").PropType<import("@wangeditor/editor").SlateDescendant[]>;
        default: () => never[];
    };
    defaultHtml: {
        type: StringConstructor;
        default: string;
    };
    mode: {
        type: import("vue").PropType<SdWangeditorTypes.EditorMode>;
    };
    config: {
        type: import("vue").PropType<Partial<import("@wangeditor/editor").IEditorConfig>>;
    };
}>> & {
    [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
}, {
    defaultContent: import("@wangeditor/editor").SlateDescendant[];
    defaultHtml: string;
}, {}>;
export default _default;
