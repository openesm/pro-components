import type { PropType, ExtractPublicPropTypes } from 'vue';
import type { SdWangeditorToolbarTypes } from './types';
export declare const wangeditorToolbarProps: {
    editor: {
        type: PropType<import("@wangeditor/editor").IDomEditor | null>;
        default: null;
    };
    mode: {
        type: PropType<SdWangeditorToolbarTypes.ToolbarMode>;
        default: string;
    };
    config: {
        type: PropType<Partial<import("@wangeditor/editor").IToolbarConfig>>;
    };
};
export type SdWangeditorToolbarProps = ExtractPublicPropTypes<typeof wangeditorToolbarProps>;
