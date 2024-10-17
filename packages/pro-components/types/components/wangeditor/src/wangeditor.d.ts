import type { PropType, ExtractPublicPropTypes } from 'vue';
import type { SlateDescendant } from '@wangeditor/editor';
import type { SdWangeditorTypes } from './types';
export declare const wangeditorProps: {
    modelValue: {
        type: StringConstructor;
    };
    defaultContent: {
        type: PropType<SlateDescendant[]>;
        default: () => never[];
    };
    defaultHtml: {
        type: StringConstructor;
        default: string;
    };
    mode: {
        type: PropType<SdWangeditorTypes.EditorMode>;
    };
    config: {
        type: PropType<Partial<import("@wangeditor/editor").IEditorConfig>>;
    };
};
export declare const wangeditorEmits: string[];
export type SdWangeditorProps = ExtractPublicPropTypes<typeof wangeditorProps>;
