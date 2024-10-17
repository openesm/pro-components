export declare namespace SdJqxgridTypes {
    export type DataFieldType = 'string' | 'date' | 'number' | 'float' | 'int' | 'bool' | 'money' | 'seq';
    export interface DataField {
        name: string;
        type?: DataFieldType;
        map?: string;
        format?: CellsFormatType;
        values?: {
            source: any[];
            name: string;
            value: string;
        };
    }
    /** 请求路径                 */
    /** 请求前携带的参数         */
    /** 本地数据源               */
    /** 数据类型                 */
    /** 请求类型                 */
    /** 描述特定记录中字段的数组 */
    export interface DataSource {
        url?: string;
        data?: Record<string, any>;
        localdata?: any[];
        datatype?: 'xml' | 'json' | 'jsonp' | 'tsv' | 'csv' | 'local' | 'array' | 'observablearray';
        type?: 'GET' | 'POST';
        datafields: DataField[];
        unboundmode?: boolean;
        totalrecords?: number;
    }
    export type EditMode = 'click' | 'selectedcell' | 'selectedrow' | 'dblclick' | 'programmatic';
    export type ScrollMode = 'default' | 'logical' | 'deferred';
    export type SelectMode = 'none' | 'selectionMode' | 'multiplerows' | 'multiplerowsextended' | 'singlecellc' | 'multiplecells' | 'multiplecellsextended' | 'multiplecellsadvanced' | 'checkbox';
    export type ColumnType = 'number' | 'date' | 'checkbox' | 'numberinput' | 'dropdownlist' | 'combobox' | 'datetimeinput' | 'textbox' | 'template' | 'custom';
    export type AggregateType = 'avg' | 'count' | 'min' | 'max' | 'sum' | 'sumx' | 'product' | 'stdev' | 'stdevp' | 'varp' | 'var';
    export type AggregateCustomType = Record<string, (aggregatedValue: number, currentValue: number, columnField: string, record: any) => number | string>;
    /**
     * 数字添加小数位：则在后面补充数、eg: c3 => $25.256
     */
    export type CellsFormatType = 'd' | 'f' | 'n' | 'c' | 'p' | 'dd' | 'ddd' | 'dddd' | 'h' | 'hh' | 'H' | 'HH' | 'm' | 'mm' | 'M' | 'MM' | 'MMM' | 'MMMM' | 's' | 'ss' | 't' | 'tt' | 'y' | 'yy' | 'yyy' | 'yyyy' | 'yyyyy' | string;
    export type Align = 'left' | 'center' | 'right';
    export type FilterType = 'textbox' | 'input' | 'checkedlist' | 'list' | 'number' | 'checkbox' | 'date' | 'range' | 'custom';
    export type FilterconditionType = 'EMPTY' | 'NOT_EMPTY' | 'CONTAINS' | 'CONTAINS_CASE_SENSITIVE' | 'DOES_NOT_CONTAIN' | 'DOES_NOT_CONTAIN_CASE_SENSITIVE' | 'STARTS_WITH' | 'STARTS_WITH_CASE_SENSITIVE' | 'ENDS_WITH' | 'ENDS_WITH_CASE_SENSITIVE' | 'EQUAL_CASE_SENSITIVE' | 'NULL' | 'NOT_NULL' | 'EQUAL' | 'NOT_EQUAL' | 'LESS_THAN' | 'LESS_THAN_OR_EQUAL' | 'GREATER_THAN' | 'GREATER_THAN_OR_EQUAL';
    export interface SeqConfig extends Pick<ColumnOptions, 'text' | 'width' | 'pinned' | 'cellsrenderer'> {
        format?: (val: number) => number;
    }
    export interface ColumnOptions {
        datafield?: string;
        /** 列标题                   */ text?: string;
        /** 列标题                   */ title?: string;
        /** 列标题                   */ name: string;
        /** 数据选项                 */ items?: {
            id: string;
            name: string;
        }[];
        /** 设置显示其他的列字段     */ displayfield?: string;
        /** 可排序                   */ sortable?: boolean;
        /** 可过滤                   */ filterable?: boolean;
        /** 可隐藏                   */ hideable?: boolean;
        /** 隐藏列                   */ hidden?: boolean;
        /** 可分组                   */ groupable?: boolean;
        /** 组合列名                 */ columngroup?: string;
        /** 可导出                   */ exportable?: boolean;
        /** 自定义渲染               */ renderer?: (name: string) => string;
        /** 自定义单元格渲染         */ cellsrenderer?: (row: number, columnfield: string, value: any, defaulthtml: HTMLElement, columnproperties: Column) => string;
        /** 单元格渲染类型           */ columntype?: ColumnType;
        /** 数据类型                 */ type?: DataFieldType;
        /** 自定义验证函数           */ validation?: (cell: any, value: any) => boolean | {
            result: boolean;
            message: string;
        };
        /** 格式化函数               */ cellsformat?: CellsFormatType;
        /** 格式化函数               */ format?: CellsFormatType;
        /** 自定义渲染聚合函数单元格 */ aggregatesrenderer?: (aggregatesrenderer: any) => string;
        /** 聚合函数                 */ aggregates?: (AggregateType | AggregateCustomType)[];
        /** 聚合函数                 */ aggs?: (AggregateType | AggregateCustomType)[];
        /** 列对齐方式               */ align?: Align;
        /** 单元格对齐方式           */ cellsalign?: Align;
        /** 列宽                     */ width?: number;
        /** 最小列宽                 */ minwidth?: number;
        /** 最大列宽                 */ maxwidth?: number;
        /** 可调整列宽               */ resizable?: boolean;
        /** 可调整位置               */ draggable?: boolean;
        /** 可编辑                   */ editable?: boolean;
        /** 样式名                   */ classname?: string;
        /** 单元格样式名             */ cellclassname?: string | ((row: number, column: string, value: any, data: any) => string);
        /** 冻结列                   */ pinned?: boolean;
        /** 允许 null 空值           */ nullable?: boolean;
        /** 列筛选器的值             */ filteritems?: any[];
        /** 设置自动过滤延迟         */ filterdelay?: number;
        /** 过滤类型                 */ filtertype?: FilterType;
        /** 过滤类型                 */ filter?: FilterType;
        /**                          */ filtercondition?: FilterconditionType;
        /** --------------------------------------------------------------- */
        /** 扩展属性                 */ target?: Record<string, any>;
    }
    export interface Column extends Omit<ColumnOptions, 'title' | 'name' | 'type' | 'format' | 'filter' | 'aggs' | 'type' | 'items'> {
        /** 列标题 */ text: string;
        /** 列字段 */ datafield: string;
    }
    export interface ColumnGroupItem {
        align?: Align;
        text: string;
        name: string;
    }
    type MethodCallBackColumn = Pick<Column, 'datafield' | 'displayfield' | 'text' | 'sortable' | 'filterable' | 'exportable' | 'editable' | 'groupable' | 'resizable' | 'draggable' | 'cellclassname' | 'width'> & {
        menu: any;
    };
    type MethodReturnCell = {
        value: any;
        row: any;
        column: MethodCallBackColumn;
    };
    export interface Methods {
        /**
         * 更新数据源数据
         * - 如果是筛选和排序中的更改，导致需要刷新，则可以只定 type = sorting | filtering
         * - 仅更新不包含列的数据，则可以指定 type = data
         * - 快速更新单元格 cells
         * - 完整更新则部传递任何参数
         */
        updateBoundData: (type?: 'sorting' | 'filtering' | 'data' | 'cells') => void;
        /** 更新组件数据源 */
        updateSourceRows: (data: any[]) => void;
        /** 刷新当前数据 */
        refreshData: () => void;
        /** 刷新当前 Gird 视图 */
        refresh: () => void;
        /** 渲染 Gird, 此方法完全刷新单元格、列、布局、并重新绘制视图  */
        render: () => void;
        /** 手动滚动 */
        scrollOffset: (top: number, left: number) => void;
        /** 滚动位置信息 */
        scrollPosition: () => {
            top: number;
            left: number;
        };
        /** 清空数据 */
        clear: () => void;
        /** 注销Grid */
        destroy: () => void;
        /** 获取列下标 */
        getColumnIndex: (dataField: string) => number;
        /** 获取列属性 */
        getColumnProperty: (dataField: string, propertyName: keyof Column) => Record<string, any>;
        /** 获取列 */
        getColumn: (dataField: string) => MethodCallBackColumn;
        /** 隐藏列 */
        hideColumn: (dataField: string) => void;
        /** 显示列 */
        showColumn: (dataField: string) => void;
        /** 当前列是否显示 */
        isColumnVisible: (dataField: string) => boolean;
        /** 当前列是否冻结 */
        isColumnPinned: (dataField: string) => boolean;
        /** 获取网格行编码 */
        getRowId: (rowBoundIndex: number) => string;
        /** 获取网格行数据 */
        getRowData: (rowBoundIndex: number) => Record<string, any>;
        /** 通过行编码 获取网格行数据 */
        getRowDataById: (rowId: string) => Record<string, any>;
        /** 获取所有行，返回网格中加载的所有行的数组。如果网格已进行过滤，则返回的值是过滤的记录的数组 */
        getRows: () => any[];
        /** 通过行编码 获取行在数据源中的索引 */
        getRowBoundIndexById: (rowId: string) => number;
        /** 通过视图显示索引,获取数据源中的行索引 */
        getRowBoundIndex: (rowDisplayIndex: number) => number;
        /** 获取数据源的所有行，不受排序、过滤、分组、分页的影响 */
        getBoundRows: () => any[];
        /** 获取当前显示在网格中的所有行。该方法返回显示行的数组。网格的排序、过滤、分组和分页将影响这种方法的结果。 */
        getDisplayRows: () => void;
        /** 添加行或多行 */
        addRow: (rowIds: string | number | any[], data: Record<string, any> | any[], rowPosition: 'first' | 'last') => void;
        /** 删除行或多行 */
        deleteRow: (rowIds: string | number | any[]) => void;
        /** 更新行或多行 */
        updateRow: (rowIds: string | number | any[], data: Record<string, any> | any[]) => void;
        /** 获取单元格信息 */
        getCell: (rowBoundIndex: number, dataField: string) => MethodReturnCell;
        /** 通过行下标索引，列字段，获取单元格文本 */
        getCellText: (rowBoundIndex: number, dataField: string) => string;
        /** 通过行编码，列字段，获取单元格文本 */
        getCellTextById: (rowId: string, dataField: string) => string;
        /** 通过行下标索引，列字段，获取单元格值 */
        getCellValue: (rowBoundIndex: number, dataField: string) => any;
        /** 通过行编码，列字段，获取单元格值 */
        getCellValueById: (rowId: string, dataField: string) => any;
        /** 通过行下标索引，列字段，设置单元格值 */
        setCellValue: (rowBoundIndex: number, dataField: string, value: any) => void;
        /** 通过行编码，列字段，设置单元格值 */
        setCellValueById: (rowId: string, dataField: string, value: any) => void;
        /** 清空选中 */
        clearSelection: () => void;
        /** 获取选中行的下标索引 */
        getSelectedRowIndex: () => number;
        /** 获取选中多行的下标索引 */
        getSelectedRowIndexes: () => number[];
        /** 获取选中单元格信息 */
        getSelectedCell: () => {
            rowindex: number;
            datafield: string;
        }[];
        /** 获取选中多个单元格信息 */
        getSelectedCells: () => void;
        /** 选中单元格 */
        selectCell: (rowBoundIndex: number, dataField: string) => void;
        /** 取消选中单元格 */
        unselectCell: () => void;
        /** 选中行 */
        selectRow: (rowBoundIndex: number) => void;
        /** 取消选中行 */
        unselectRow: (rowBoundIndex: number) => void;
        /** 刷新聚合函数在视图中显示的状态 */
        refreshAggregates: () => void;
        /** 重新渲染聚合函数在视图中的状态 */
        renderAggregates: () => void;
        /** 服务器导出数据 */
        exportData: (dataType: 'xls' | 'xml' | 'html' | 'json' | 'pdf' | 'tsv' | 'csv' | 'xlsx', fileName: string, exportHeader: boolean, rows: any[], exportHiddenColumns: boolean, serverURL: string, charSet: string) => void;
        /** 导出视图 */
        exportView: (dataType: 'xls' | 'xml' | 'html' | 'json' | 'pdf' | 'tsv' | 'csv' | 'xlsx', fileName: string, rows: any[]) => void;
    }
    export {};
}
