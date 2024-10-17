import type { SdJexcelTypes, Jspreadsheet } from './types';
import type { CSSProperties } from 'vue';
declare const _default: import("vue").DefineComponent<{
    showLoading: {
        type: BooleanConstructor;
        default: boolean;
    };
    loadingHeight: {
        type: (StringConstructor | NumberConstructor)[];
    };
    loadingStyle: {
        type: import("vue").PropType<CSSProperties>;
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
        type: import("vue").PropType<Jspreadsheet.Column[]>;
        default: () => never[];
    };
    data: {
        type: import("vue").PropType<any[]>;
        default: () => never[];
    };
    mergeCells: {
        type: import("vue").PropType<Record<string, [number, number]> | undefined>;
    };
    minDimensions: {
        type: import("vue").PropType<number[]>;
        default: () => number[];
    };
    onBeforeChange: {
        type: import("vue").PropType<((options: {
            element: SdJexcelTypes.JspreadsheetInstanceElement;
            cell: HTMLTableCellElement;
            col: Jspreadsheet.Column;
            colIndex: number;
            rowIndex: number;
            newValue: Jspreadsheet.CellValue;
        }) => Jspreadsheet.CellValue | undefined) | undefined>;
    };
    onAfterChanges: {
        type: import("vue").PropType<((options: {
            element: SdJexcelTypes.JspreadsheetInstanceElement;
            changes: Jspreadsheet.CellChange[];
        }) => void) | undefined>;
    };
    onUpdateTable: {
        type: import("vue").PropType<((options: {
            instance: Jspreadsheet.JspreadsheetInstance;
            cell: HTMLTableCellElement;
            colIndex: number;
            rowIndex: number;
            value: Jspreadsheet.CellValue;
            displayedValue: string;
            cellName: string;
        }) => void) | undefined>;
    };
    onEditionStart: {
        type: import("vue").PropType<((options: {
            element: SdJexcelTypes.JspreadsheetInstanceElement;
            td: HTMLTableCellElement;
            colIndex: number;
            rowIndex: number;
        }) => void) | undefined>;
    };
    onEditionEnd: {
        type: import("vue").PropType<((options: {
            element: SdJexcelTypes.JspreadsheetInstanceElement;
            td: HTMLTableCellElement;
            colIndex: number;
            rowIndex: number;
            editorValue: Jspreadsheet.CellValue;
            wasSaved: boolean;
        }) => void) | undefined>;
    };
    onFocus: {
        type: import("vue").PropType<((element: SdJexcelTypes.JspreadsheetInstanceElement) => void) | undefined>;
    };
    onBlur: {
        type: import("vue").PropType<((element: SdJexcelTypes.JspreadsheetInstanceElement) => void) | undefined>;
    };
    onSelection: {
        type: import("vue").PropType<((element: SdJexcelTypes.JspreadsheetInstanceElement, borderLeftIndex: number, borderTopIndex: number, borderRightIndex: number, borderBottomIndex: number, origin: any) => void) | undefined>;
    };
    options: {
        type: import("vue").PropType<SdJexcelTypes.InitOptions>;
        default: () => {};
    };
}, {
    loading: import("vue").Ref<boolean>;
    css_var_styles$: import("vue").ComputedRef<CSSProperties>;
    wrap_ref: import("vue").Ref<HTMLDivElement | null | undefined>;
    reload: () => void;
    getData: () => any;
    getJson: () => any;
    setData: (data: any[]) => Promise<void>;
    setRowData: (row_index: number, data: any[]) => void;
    getRowData: (row_index: number) => any;
    setValue: (cell: any, value: any, force: any) => void;
    setValueFromCoords: (...rest: any) => void;
    getValue: (cell: any, processedValue?: boolean) => void;
    showIndex: () => void;
    hideIndex: () => void;
    getCell: (...rest: any) => any;
    getSelectedRows: (...rest: any) => any;
    getSelectedColumns: (...rest: any) => any;
    resetSelection: (...rest: any) => void;
    updateSelection: (...rest: any) => void;
    updateSelectionFromCoords: (...rest: any) => void;
    openEditor: (...args: any) => any;
    closeEditor: (...args: any) => any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    showLoading: {
        type: BooleanConstructor;
        default: boolean;
    };
    loadingHeight: {
        type: (StringConstructor | NumberConstructor)[];
    };
    loadingStyle: {
        type: import("vue").PropType<CSSProperties>;
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
        type: import("vue").PropType<Jspreadsheet.Column[]>;
        default: () => never[];
    };
    data: {
        type: import("vue").PropType<any[]>;
        default: () => never[];
    };
    mergeCells: {
        type: import("vue").PropType<Record<string, [number, number]> | undefined>;
    };
    minDimensions: {
        type: import("vue").PropType<number[]>;
        default: () => number[];
    };
    onBeforeChange: {
        type: import("vue").PropType<((options: {
            element: SdJexcelTypes.JspreadsheetInstanceElement;
            cell: HTMLTableCellElement;
            col: Jspreadsheet.Column;
            colIndex: number;
            rowIndex: number;
            newValue: Jspreadsheet.CellValue;
        }) => Jspreadsheet.CellValue | undefined) | undefined>;
    };
    onAfterChanges: {
        type: import("vue").PropType<((options: {
            element: SdJexcelTypes.JspreadsheetInstanceElement;
            changes: Jspreadsheet.CellChange[];
        }) => void) | undefined>;
    };
    onUpdateTable: {
        type: import("vue").PropType<((options: {
            instance: Jspreadsheet.JspreadsheetInstance;
            cell: HTMLTableCellElement;
            colIndex: number;
            rowIndex: number;
            value: Jspreadsheet.CellValue;
            displayedValue: string;
            cellName: string;
        }) => void) | undefined>;
    };
    onEditionStart: {
        type: import("vue").PropType<((options: {
            element: SdJexcelTypes.JspreadsheetInstanceElement;
            td: HTMLTableCellElement;
            colIndex: number;
            rowIndex: number;
        }) => void) | undefined>;
    };
    onEditionEnd: {
        type: import("vue").PropType<((options: {
            element: SdJexcelTypes.JspreadsheetInstanceElement;
            td: HTMLTableCellElement;
            colIndex: number;
            rowIndex: number;
            editorValue: Jspreadsheet.CellValue;
            wasSaved: boolean;
        }) => void) | undefined>;
    };
    onFocus: {
        type: import("vue").PropType<((element: SdJexcelTypes.JspreadsheetInstanceElement) => void) | undefined>;
    };
    onBlur: {
        type: import("vue").PropType<((element: SdJexcelTypes.JspreadsheetInstanceElement) => void) | undefined>;
    };
    onSelection: {
        type: import("vue").PropType<((element: SdJexcelTypes.JspreadsheetInstanceElement, borderLeftIndex: number, borderTopIndex: number, borderRightIndex: number, borderBottomIndex: number, origin: any) => void) | undefined>;
    };
    options: {
        type: import("vue").PropType<SdJexcelTypes.InitOptions>;
        default: () => {};
    };
}>> & {
    [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
}, {
    data: any[];
    index: boolean;
    options: SdJexcelTypes.InitOptions;
    columns: Jspreadsheet.Column[];
    showLoading: boolean;
    minDimensions: number[];
}, {}>;
export default _default;
