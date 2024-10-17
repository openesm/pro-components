import type { PropType, ExtractPublicPropTypes, CSSProperties } from 'vue';
import type { SdJexcelTypes } from './types';
export declare const jexcelProps: {
    showLoading: {
        type: BooleanConstructor;
        default: boolean;
    };
    loadingHeight: {
        type: (StringConstructor | NumberConstructor)[];
    };
    loadingStyle: {
        type: PropType<CSSProperties>;
    };
    index: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonlyBackground: {
        type: StringConstructor;
    };
    readonlyColor: {
        type: StringConstructor;
    };
    titleHeight: {
        type: (StringConstructor | NumberConstructor)[];
    };
    rowHeight: {
        type: (StringConstructor | NumberConstructor)[];
    };
    columns: {
        type: PropType<import("./types").Jspreadsheet.Column[]>;
        default: () => never[];
    };
    data: {
        type: PropType<any[]>;
        default: () => never[];
    };
    mergeCells: {
        type: PropType<Record<string, [number, number]> | undefined>;
    };
    minDimensions: {
        type: PropType<number[]>;
        default: () => number[];
    };
    onBeforeChange: {
        type: PropType<((options: {
            element: SdJexcelTypes.JspreadsheetInstanceElement;
            cell: HTMLTableCellElement;
            col: import("./types").Jspreadsheet.Column;
            colIndex: number;
            rowIndex: number;
            newValue: import("./types").Jspreadsheet.CellValue;
        }) => import("./types").Jspreadsheet.CellValue | undefined) | undefined>;
    };
    onAfterChanges: {
        type: PropType<((options: {
            element: SdJexcelTypes.JspreadsheetInstanceElement;
            changes: import("./types").Jspreadsheet.CellChange[];
        }) => void) | undefined>;
    };
    onUpdateTable: {
        type: PropType<((options: {
            instance: import("./types").Jspreadsheet.JspreadsheetInstance;
            cell: HTMLTableCellElement;
            colIndex: number;
            rowIndex: number;
            value: import("./types").Jspreadsheet.CellValue;
            displayedValue: string;
            cellName: string;
        }) => void) | undefined>;
    };
    onEditionStart: {
        type: PropType<((options: {
            element: SdJexcelTypes.JspreadsheetInstanceElement;
            td: HTMLTableCellElement;
            colIndex: number;
            rowIndex: number;
        }) => void) | undefined>;
    };
    onEditionEnd: {
        type: PropType<((options: {
            element: SdJexcelTypes.JspreadsheetInstanceElement;
            td: HTMLTableCellElement;
            colIndex: number;
            rowIndex: number;
            editorValue: import("./types").Jspreadsheet.CellValue;
            wasSaved: boolean;
        }) => void) | undefined>;
    };
    onFocus: {
        type: PropType<((element: SdJexcelTypes.JspreadsheetInstanceElement) => void) | undefined>;
    };
    onBlur: {
        type: PropType<((element: SdJexcelTypes.JspreadsheetInstanceElement) => void) | undefined>;
    };
    onSelection: {
        type: PropType<((element: SdJexcelTypes.JspreadsheetInstanceElement, borderLeftIndex: number, borderTopIndex: number, borderRightIndex: number, borderBottomIndex: number, origin: any) => void) | undefined>;
    };
    options: {
        type: PropType<SdJexcelTypes.InitOptions>;
        default: () => {};
    };
};
export declare const jexcelEmits: string[];
export type SdJexcelProps = ExtractPublicPropTypes<typeof jexcelProps>;
