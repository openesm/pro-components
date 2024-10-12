import type { PropType, VNode } from 'vue';
import type { SdProFormDefine } from './types';
declare const ProFormField: import("vue").DefineComponent<{
    config: {
        type: PropType<SdProFormDefine.SchemaConfig>;
        required: true;
    };
    isNest: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> | SdProFormDefine.RenderContentType[] | null | undefined, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    config: {
        type: PropType<SdProFormDefine.SchemaConfig>;
        required: true;
    };
    isNest: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    isNest: boolean;
}, {}>;
export default ProFormField;
