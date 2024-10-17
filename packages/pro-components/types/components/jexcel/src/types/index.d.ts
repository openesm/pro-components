import type { Jspreadsheet } from './jspreadsheet';
export type * from './jspreadsheet';
export declare namespace SdJexcelTypes {
    type ColumnOptions = Jspreadsheet.Column;
    type RowOptions = Jspreadsheet.Row;
    type ArrayData = Jspreadsheet.CellValue[];
    type JsonData = Record<string, Jspreadsheet.CellValue>;
    type Data = ArrayData[] | JsonData[];
    type MergeCells = Jspreadsheet.JSpreadsheetOptions['mergeCells'];
    type InitOptions = Omit<Jspreadsheet.JSpreadsheetOptions, 'columns' | 'data' | 'onbeforechange' | 'onafterchanges' | 'updateTable'> & {
        onBeforeChange?: (options: {
            element: JspreadsheetInstanceElement;
            cell: HTMLTableCellElement;
            col: ColumnOptions;
            colIndex: number;
            rowIndex: number;
            newValue: Jspreadsheet.CellValue;
        }) => Jspreadsheet.CellValue | undefined;
        onAfterChanges?: (options: {
            element: JspreadsheetInstanceElement;
            changes: Jspreadsheet.CellChange[];
        }) => void;
        updateTable?: (options: {
            instance: Jspreadsheet.JspreadsheetInstance;
            cell: HTMLTableCellElement;
            colIndex: number;
            rowIndex: number;
            value: Jspreadsheet.CellValue;
            displayedValue: string;
            cellName: string;
        }) => void;
        onEditionStart?: (options: {
            element: JspreadsheetInstanceElement;
            td: HTMLTableCellElement;
            colIndex: number;
            rowIndex: number;
        }) => void;
        onEditionEnd?: (options: {
            element: JspreadsheetInstanceElement;
            td: HTMLTableCellElement;
            colIndex: number;
            rowIndex: number;
            editorValue: Jspreadsheet.CellValue;
            wasSaved: boolean;
        }) => void;
        onFocus?: (element: JspreadsheetInstanceElement) => void;
        onBlur?: (element: JspreadsheetInstanceElement) => void;
        onSelection?: (element: JspreadsheetInstanceElement, borderLeftIndex: number, borderTopIndex: number, borderRightIndex: number, borderBottomIndex: number, origin: any) => void;
    };
    interface JspreadsheetInstanceElement extends HTMLDivElement {
        jexcel: Jspreadsheet.JspreadsheetInstance;
        jspreadsheet: Jspreadsheet.JspreadsheetInstance;
    }
    interface PublicMethod<T extends object = any> {
        reload: () => void;
        getData: <K>(highlighted?: boolean, dataOnly?: boolean) => K extends object ? K[][] : T[][];
        setData: (data?: T[][] | T[] | string) => void;
        setRowData: (row_index: number, data: any[]) => void;
        getJson: <K>(highlighted?: boolean) => K extends object ? K[] : T[];
        setValue: Jspreadsheet.JspreadsheetInstance['setValue'];
        setValueFromCoords: Jspreadsheet.JspreadsheetInstance['setValueFromCoords'];
        getValue: Jspreadsheet.JspreadsheetInstance['getValue'];
        showIndex: Jspreadsheet.JspreadsheetInstance['showIndex'];
        hideIndex: Jspreadsheet.JspreadsheetInstance['hideIndex'];
        getCell: (x: number, y: number) => HTMLTableCellElement;
        getSelectedRows: Jspreadsheet.JspreadsheetInstance['getSelectedRows'];
        getSelectedColumns: Jspreadsheet.JspreadsheetInstance['getSelectedColumns'];
        resetSelection: Jspreadsheet.JspreadsheetInstance['resetSelection'];
        updateSelection: Jspreadsheet.JspreadsheetInstance['updateSelection'];
        updateSelectionFromCoords: Jspreadsheet.JspreadsheetInstance['updateSelectionFromCoords'];
        openEditor: Jspreadsheet.JspreadsheetInstance['openEditor'];
        closeEditor: Jspreadsheet.JspreadsheetInstance['closeEditor'];
    }
    interface _VIEW_OPTIONS_ {
        allowInsertColumn?: boolean;
        allowManualInsertColumn?: boolean;
        allowDeleteColumn?: boolean;
        allowRenameColumn?: boolean;
        columnSorting?: boolean;
        columnDrag?: boolean;
        columnResize?: boolean;
        allowInsertRow?: boolean;
        allowManualInsertRow?: boolean;
        allowDeleteRow?: boolean;
        allowDeletingAllRows?: boolean;
        rowDrag?: boolean;
        rowResize?: boolean;
        autoIncrement?: boolean;
        editable?: boolean;
        defaultColAlign?: Jspreadsheet.HorizontalAlign;
        defaultColWidth?: number;
        defaultRowHeight?: number;
        columns?: Jspreadsheet.Column[];
        data?: Jspreadsheet.CellValue[][] | Record<string, Jspreadsheet.CellValue>[];
        mergeCells?: Record<string, [number, number]>;
        rows?: Jspreadsheet.Row[] | Record<number, Jspreadsheet.Row>;
        tableOverflow?: boolean;
        tableHeight?: string;
        tableWidth?: string;
        minDimensions?: [number, number];
        minSpareCols?: number;
        minSpareRows?: number;
        search?: boolean;
        textOverflow?: boolean;
        style?: Record<string, string>;
        /**
         * 要应用于单元格的Css类。每个单元格只接受一个类。
         * @example
         * {
         *    A1: "some-class",
         *    B3: "another-class"
         * }
         */
        classes?: Record<string, string>;
        csv?: string;
        csvHeaders?: boolean;
        csvDelimiter?: string;
        csvFileName?: string;
        colWidths?: (string | number | undefined | null)[];
        colHeaders?: (string | undefined | null)[];
        colAlignments?: (Jspreadsheet.HorizontalAlign | undefined | null)[];
        about?: boolean;
        allowComments?: boolean;
        allowExport?: boolean;
        autoCasting?: boolean;
        copyCompatibility?: boolean;
        detachForUpdates?: boolean;
        filters?: boolean;
        footers?: string[][];
        freezeColumns?: number;
        fullscreen?: boolean;
        imageOptions?: any;
        includeHeadersOnCopy?: boolean;
        includeHeadersOnDownload?: boolean;
        lazyLoading?: boolean;
        loadingSpin?: boolean;
        meta?: Record<string, Jspreadsheet.MetaInformation>;
        method?: string;
        nestedHeaders?: Jspreadsheet.NestedHeaderCell[] | Jspreadsheet.NestedHeaderCell[][];
        pagination?: number;
        parseTableAutoCellType?: boolean;
        parseTableFirstRowAsHeader?: boolean;
        persistance?: boolean | string;
        requestVariables?: any;
        /**
         * HTML元素，其中将侦听此实例的事件。
         * 即使指定了此属性，文档对象上仍会侦听某些事件。
         * @default document
         */
        root?: HTMLElement;
        secureFormulas?: boolean;
        selectionCopy?: boolean;
        /**
         * 用于排序列的函数。如果未指定，将使用默认功能。
         * @param order - Sorting direction. 0 for ascending and 1 for descending.
         */
        sorting?: (order: 0 | 1) => (itemA: Jspreadsheet.SortingItem, itemB: Jspreadsheet.SortingItem) => number;
        /**
         * 如果为true，列标题或单元格值内的HTML将被视为常规文本。
         * 如果为false，则HTML将被视为HTML。
         * @default true
         */
        stripHTML?: boolean;
        /**
         * 如果为true，则当用户从电子表格中复制单元格时，也会复制单元格内的HTML。
         * 只有当 “copyCompatibility” 选项等于“true”时，此属性才有效。
         * @default false
         */
        stripHTMLOnCopy?: boolean;
        text?: Jspreadsheet.TranslationOptions;
        toolbar?: Jspreadsheet.ToolbarItem[];
        url?: string;
        wordWrap?: boolean;
        /**
         * 下拉列表中可用的值，用于选择每页的行数。
         * 只有当 “search” 选项为true并且 “pagination” 选项大于0时，此下拉列表才可见。
         * @default true
         */
        parseFormulas?: boolean;
        /** Context menu content. */
        contextMenu?: (instance: Jspreadsheet.JspreadsheetInstance, colIndex: string | null, rowIndex: string | null, event: PointerEvent) => object[] | null;
    }
}
