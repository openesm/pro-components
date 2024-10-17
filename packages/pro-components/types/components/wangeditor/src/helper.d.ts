import type { SdWangeditorToolbarProps } from './wangeditor-toolbar';
import type { SdWangeditorProps } from './wangeditor';
import type { SdWangeditorTypes } from './types';
export declare function defineWangeditorToolbar(props?: SdWangeditorToolbarProps): (SdWangeditorToolbarProps | import("vue").ShallowRef<null>)[];
export declare function defineWangeditor(props?: SdWangeditorProps & Partial<SdWangeditorTypes.Event>): (import("vue").ShallowRef<null> | ({} & {
    modelValue?: string | undefined;
    mode?: SdWangeditorTypes.EditorMode | undefined;
    config?: Partial<import("@wangeditor/editor").IEditorConfig> | undefined;
    defaultContent?: import("@wangeditor/editor").SlateDescendant[] | undefined;
    defaultHtml?: string | undefined;
} & Partial<SdWangeditorTypes.Event>))[];
