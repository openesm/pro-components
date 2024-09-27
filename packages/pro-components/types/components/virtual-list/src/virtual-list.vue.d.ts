import { CSSProperties } from 'vue';

declare const _default: import('vue').DefineComponent<{
    height: {
        type: NumberConstructor;
        required: boolean;
    };
    minHeight: {
        type: NumberConstructor;
    };
    maxHeight: {
        type: NumberConstructor;
    };
    width: {
        type: NumberConstructor;
    };
    minWidth: {
        type: NumberConstructor;
    };
    maxWidth: {
        type: NumberConstructor;
    };
    bench: {
        type: NumberConstructor;
        default: number;
    };
    itemHeight: {
        type: NumberConstructor;
        required: boolean;
    };
    items: {
        type: import('vue').PropType<any[]>;
        default: () => never[];
    };
}, {
    state: {
        start_idx: number;
        end_idx: number;
        scroll_top: number;
    };
    scroll_ref: import('vue').Ref<any>;
    wrap_style$: import('vue').ComputedRef<CSSProperties>;
    content_height$: import('vue').ComputedRef<string>;
    visbile_list$: import('vue').ComputedRef<{
        data: any;
        style: {
            top: string;
        };
    }[]>;
    onScroll: ({ scrollTop: scroll_top }: {
        scrollTop: number;
    }) => void;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    height: {
        type: NumberConstructor;
        required: boolean;
    };
    minHeight: {
        type: NumberConstructor;
    };
    maxHeight: {
        type: NumberConstructor;
    };
    width: {
        type: NumberConstructor;
    };
    minWidth: {
        type: NumberConstructor;
    };
    maxWidth: {
        type: NumberConstructor;
    };
    bench: {
        type: NumberConstructor;
        default: number;
    };
    itemHeight: {
        type: NumberConstructor;
        required: boolean;
    };
    items: {
        type: import('vue').PropType<any[]>;
        default: () => never[];
    };
}>>, {
    items: any[];
    bench: number;
}, {}>;
export default _default;
