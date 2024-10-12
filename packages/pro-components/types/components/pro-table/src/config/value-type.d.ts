import type { VNode } from 'vue';
import type { SdProTableDefineTypes } from '../types';
type ValueTypeMap = Record<SdProTableDefineTypes.RenderType | string, {
    render?: (params: {
        row: any;
        column: SdProTableDefineTypes.VxeColumnInfo;
    }) => JSX.Element[] | VNode[] | string[];
    formatter?: SdProTableDefineTypes.FormatterMethod;
}>;
export declare const ROW_FORMAT_PROP = "_ROW_FORMAT_";
export declare function getCellValue(row: any, field: string): any;
export declare const VALUE_TYPE: ValueTypeMap;
export {};
