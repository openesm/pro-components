import type { SdJqxgridTypes } from './types';
declare const _default: import("vue").DefineComponent<{
    height: {
        type: StringConstructor;
        default: string;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    columnsHeight: {
        type: NumberConstructor;
        default: number;
    };
    rowsHeight: {
        type: NumberConstructor;
        default: number;
    };
    rows: {
        type: import("vue").PropType<any[]>;
        default: () => never[];
    };
    cols: {
        type: import("vue").PropType<SdJqxgridTypes.ColumnOptions[]>;
        default: () => never[];
    };
    filterable: {
        type: BooleanConstructor;
        default: boolean;
    };
    columnGroups: {
        type: import("vue").PropType<SdJqxgridTypes.ColumnGroupItem[]>;
    };
    options: {
        type: import("vue").PropType<Record<string, any>>;
    };
    enableSeq: {
        type: BooleanConstructor;
    };
    seqConfig: {
        type: import("vue").PropType<SdJqxgridTypes.SeqConfig>;
    };
}, {
    IconArrowLeft: import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    IconArrowRight: import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    IconDownload: import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    grid_ref: import("vue").Ref<any>;
    require_loading: import("vue").Ref<boolean>;
    getRows: () => any;
    refresh: () => void;
    render: () => void;
    destroy: () => void;
    scrolloffset: (top: number, left: number) => void;
    toggle: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    height: {
        type: StringConstructor;
        default: string;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    columnsHeight: {
        type: NumberConstructor;
        default: number;
    };
    rowsHeight: {
        type: NumberConstructor;
        default: number;
    };
    rows: {
        type: import("vue").PropType<any[]>;
        default: () => never[];
    };
    cols: {
        type: import("vue").PropType<SdJqxgridTypes.ColumnOptions[]>;
        default: () => never[];
    };
    filterable: {
        type: BooleanConstructor;
        default: boolean;
    };
    columnGroups: {
        type: import("vue").PropType<SdJqxgridTypes.ColumnGroupItem[]>;
    };
    options: {
        type: import("vue").PropType<Record<string, any>>;
    };
    enableSeq: {
        type: BooleanConstructor;
    };
    seqConfig: {
        type: import("vue").PropType<SdJqxgridTypes.SeqConfig>;
    };
}>> & {
    [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
}, {
    height: string;
    width: string;
    filterable: boolean;
    columnsHeight: number;
    rowsHeight: number;
    rows: any[];
    cols: SdJqxgridTypes.ColumnOptions[];
    enableSeq: boolean;
}, {}>;
export default _default;
