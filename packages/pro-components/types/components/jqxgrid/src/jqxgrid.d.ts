import type { PropType, ExtractPublicPropTypes } from 'vue';
import type { SdJqxgridTypes } from './types';
export declare const jqxgridProps: {
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
        type: PropType<any[]>;
        default: () => never[];
    };
    cols: {
        type: PropType<SdJqxgridTypes.ColumnOptions[]>;
        default: () => never[];
    };
    filterable: {
        type: BooleanConstructor;
        default: boolean;
    };
    columnGroups: {
        type: PropType<SdJqxgridTypes.ColumnGroupItem[]>;
    };
    options: {
        type: PropType<Record<string, any>>;
    };
    enableSeq: {
        type: BooleanConstructor;
    };
    seqConfig: {
        type: PropType<SdJqxgridTypes.SeqConfig>;
    };
};
export declare const jqxgridEmits: string[];
export type SdJqxgridProps = ExtractPublicPropTypes<typeof jqxgridProps>;
