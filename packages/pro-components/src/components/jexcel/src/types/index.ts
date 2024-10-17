import type { Jspreadsheet } from './jspreadsheet'
export type * from './jspreadsheet'


export namespace SdJexcelTypes {
    // 列配置
    export type ColumnOptions = Jspreadsheet.Column

    // 行高度配置
    export type RowOptions = Jspreadsheet.Row

    // 数据定义
    export type ArrayData = Jspreadsheet.CellValue[]
    export type JsonData  = Record<string, Jspreadsheet.CellValue>
    export type Data      = ArrayData[] | JsonData[]
    export type MergeCells = Jspreadsheet.JSpreadsheetOptions['mergeCells']

    // 初始化配置
    export type InitOptions = Omit<Jspreadsheet.JSpreadsheetOptions, 'columns' | 'data' | 'onbeforechange' | 'onafterchanges' | 'updateTable'> & {
        onBeforeChange?: (options: {
            element : JspreadsheetInstanceElement
            cell    : HTMLTableCellElement
            col     : ColumnOptions
            colIndex: number
            rowIndex: number
            newValue: Jspreadsheet.CellValue
        }) => Jspreadsheet.CellValue | undefined

        onAfterChanges?: (options: {
            element: JspreadsheetInstanceElement
            changes: Jspreadsheet.CellChange[]
        }) => void

        updateTable?: (options: {
            instance      : Jspreadsheet.JspreadsheetInstance
            cell          : HTMLTableCellElement
            colIndex      : number
            rowIndex      : number
            value         : Jspreadsheet.CellValue
            displayedValue: string
            cellName      : string
        }) => void

        onEditionStart?: (options: {
            element : JspreadsheetInstanceElement
            td      : HTMLTableCellElement
            colIndex: number
            rowIndex: number
        }) => void

        onEditionEnd?: (options: {
            element    : JspreadsheetInstanceElement
            td         : HTMLTableCellElement
            colIndex   : number
            rowIndex   : number
            editorValue: Jspreadsheet.CellValue
            wasSaved   : boolean
        }) => void

        onFocus?: (element: JspreadsheetInstanceElement) => void
        onBlur?: (element: JspreadsheetInstanceElement) => void
        onSelection? : (
            element: JspreadsheetInstanceElement,
            borderLeftIndex: number,
            borderTopIndex: number,
            borderRightIndex: number,
            borderBottomIndex: number,
            origin: any
        ) => void
    }

    export interface JspreadsheetInstanceElement extends HTMLDivElement {
        jexcel      : Jspreadsheet.JspreadsheetInstance
        jspreadsheet: Jspreadsheet.JspreadsheetInstance
    }

    export interface PublicMethod<T extends object = any> {
        reload    : () => void
        getData   : <K>(highlighted?: boolean, dataOnly?: boolean) => K extends object ? K[][] : T[][]
        setData   : (data?: T[][] | T[] | string) => void
        setRowData: (row_index: number, data: any[]) => void
        getJson   : <K>(highlighted?: boolean) => K extends object ? K[] : T[]
        setValue  : Jspreadsheet.JspreadsheetInstance['setValue']
        setValueFromCoords: Jspreadsheet.JspreadsheetInstance['setValueFromCoords']
        getValue  : Jspreadsheet.JspreadsheetInstance['getValue']
        showIndex : Jspreadsheet.JspreadsheetInstance['showIndex']
        hideIndex : Jspreadsheet.JspreadsheetInstance['hideIndex']
        getCell   : (x: number, y: number) => HTMLTableCellElement
        getSelectedRows: Jspreadsheet.JspreadsheetInstance['getSelectedRows']
        getSelectedColumns: Jspreadsheet.JspreadsheetInstance['getSelectedColumns']
        resetSelection: Jspreadsheet.JspreadsheetInstance['resetSelection']
        updateSelection: Jspreadsheet.JspreadsheetInstance['updateSelection']
        updateSelectionFromCoords: Jspreadsheet.JspreadsheetInstance['updateSelectionFromCoords']
        openEditor: Jspreadsheet.JspreadsheetInstance['openEditor']
        closeEditor: Jspreadsheet.JspreadsheetInstance['closeEditor']
    }

    // 内部字段翻译使用
    export interface _VIEW_OPTIONS_ {
        // -------------------------------------------------------
        // 常用属性
        allowInsertColumn      ?: boolean // 允许插入新列 @default true
        allowManualInsertColumn?: boolean // 允许用户在最后一列上使用制表键插入新列 @default true
        allowDeleteColumn      ?: boolean // 允许删除列           @default true
        allowRenameColumn      ?: boolean // 允许重命名列 @default true
        columnSorting          ?: boolean // 允许列排序。@default true
        columnDrag             ?: boolean // 允许拖动列。 @default false
        columnResize           ?: boolean // 允许调整列大小。 @default true

        allowInsertRow         ?: boolean // 允许插入新行 @default true
        allowManualInsertRow   ?: boolean // 允许用户在最后一行使用空格键插入新行 @default true
        allowDeleteRow         ?: boolean // 允许删除一行         @default true
        allowDeletingAllRows   ?: boolean // 允许删除所有行。否则，将至少保留一行。@default false
        rowDrag                ?: boolean // 允许行拖动。@default true
        rowResize              ?: boolean // 允许调整行大小。 @default false

        autoIncrement          ?: boolean // 使用拖动角点时自动递增操作。 @default true
        editable               ?: boolean // 允许表格编辑。@default true

        defaultColAlign ?: Jspreadsheet.HorizontalAlign // 未指定柱的对齐方式时使用的默认水平对齐方式 @default "center"
        defaultColWidth ?: number // 没有指定宽度的列的默认宽度。 @default 50
        defaultRowHeight?: number // 默认行高。

        columns                ?: Jspreadsheet.Column[] // 列配置
        data                   ?: Jspreadsheet.CellValue[][] | Record<string, Jspreadsheet.CellValue>[] // 表格数据
        mergeCells             ?: Record<string, [number, number]> // 初始化时表格中要合并的单元格
        rows                   ?: Jspreadsheet.Row[] | Record<number, Jspreadsheet.Row> // 行设置

        tableOverflow          ?: boolean // 允许表溢出。@default false
        tableHeight            ?: string // 设置表格最大高度，需开启 tableOverflow 属性，@default "300px"
        tableWidth             ?: string // 设置表格最大宽度，需开启 tableOverflow 属性
        minDimensions          ?: [number, number] // 最小表格尺寸：[cols，rows]。 @default [0, 0]
        minSpareCols           ?: number // 备用列的最小数量。 @default 0
        minSpareRows           ?: number // 备用行的最小数量 @default 0
        search                 ?: boolean // 允许在表中搜索。 @default false
        textOverflow           ?: boolean // 如果为true，则单元格内容可能溢出空单元格。@default false
        style                  ?: Record<string, string> // 单元格样式
        /**
         * 要应用于单元格的Css类。每个单元格只接受一个类。
         * @example
         * {
         *    A1: "some-class",
         *    B3: "another-class"
         * }
         */
        classes?                : Record<string, string>
        // -------------------------------------------------------

        csv?         : string // 加载 csv 文件
        csvHeaders?  : boolean // 从CSV文件加载标题 @default true
        csvDelimiter?: string // CSV文件的默认分隔符。此值用于导入和导出 @default ","
        csvFileName? : string // 下载 csv 文件默认文件名 @default "jspreadsheet"

        colWidths           ?: (string | number | undefined | null)[] // 列宽。但只有在列本身未指定宽度的情况下才会使用它们。
        colHeaders          ?: (string | undefined | null)[]  // 列标题。但只有在列本身未指定标题的情况下才会使用它们。
        colAlignments       ?: (Jspreadsheet.HorizontalAlign | undefined | null)[]       // 列对齐方式。但只有在列本身中未指定路线的情况下才会使用它们

        about               ?      : boolean // 在上下文菜单中显示或不显示“关于”项目。 @default true
        allowComments       ?      : boolean // 允许对单元格进行评论 @default false
        allowExport         ?      : boolean // 允许表导出 @default true
        autoCasting         ?      : boolean // 如果为true，Jss将尝试将公式中使用的单元格内容转换为数字 @default true
        copyCompatibility?         : boolean // 如果为true，则复制和导出将产生公式结果。如果为false，则会带来公式。@default false
        detachForUpdates?          : boolean // 调用updateTable时分离HTML表。@default false
        filters?                   : boolean // 启用列筛选器。 @default false
        footers?                   : string[][] // 设置电子表格的初始页脚
        freezeColumns?             : number // 冻结在电子表格顶部的列数。
        fullscreen?                : boolean // 全屏模式。 @default false
        imageOptions?              : any
        includeHeadersOnCopy?      : boolean // 复制所有单元格内容时包括标题 @default false
        includeHeadersOnDownload?  : boolean // 下载时包括标题。@default false
        lazyLoading?               : boolean // 激活表格懒加载
        loadingSpin?               : boolean // 填充表时显示加载旋转。 @default false
        meta?                      : Record<string, Jspreadsheet.MetaInformation> // 元信息
        method?                    : string // 用于加载外部数据的HTTP方法。@default "GET"
        nestedHeaders?             : Jspreadsheet.NestedHeaderCell[] | Jspreadsheet.NestedHeaderCell[][] // 定义嵌套标头
        pagination?                : number // 每页行数
        parseTableAutoCellType?    : boolean // 使用表标记创建实例时，请尝试标识列类型。@default false
        parseTableFirstRowAsHeader?: boolean // 如果创建带有table标记的实例，如果该标记没有表头，请将第一行转换为表头。 @default false
        persistance?               : boolean | string // 发送数据持久性请求的路由。如果为true，则将使用 “url” 属性值。
        requestVariables?          : any // 用于加载外部数据的请求正文。
        /**
         * HTML元素，其中将侦听此实例的事件。
         * 即使指定了此属性，文档对象上仍会侦听某些事件。
         * @default document
         */
        root?                      : HTMLElement

        secureFormulas?: boolean // 如果为true，Jss将公式中的字符大写。这不适用于双引号中的字符，双引号表示公式中的文本 @default true
        selectionCopy? : boolean // 允许使用选择角进行复制。@default true

        /**
         * 用于排序列的函数。如果未指定，将使用默认功能。
         * @param order - Sorting direction. 0 for ascending and 1 for descending.
         */
        sorting?: (
            order: 0 | 1
        ) => (itemA: Jspreadsheet.SortingItem, itemB: Jspreadsheet.SortingItem) => number

        /**
         * 如果为true，列标题或单元格值内的HTML将被视为常规文本。
         * 如果为false，则HTML将被视为HTML。
         * @default true
         */
        stripHTML?      : boolean
        /**
         * 如果为true，则当用户从电子表格中复制单元格时，也会复制单元格内的HTML。
         * 只有当 “copyCompatibility” 选项等于“true”时，此属性才有效。
         * @default false
         */
        stripHTMLOnCopy?: boolean
        text?           : Jspreadsheet.TranslationOptions // 所有要自定义的消息
        toolbar?        : Jspreadsheet.ToolbarItem[] // 添加自定义工具栏
        url?            : string // 从这个URL加载一个外部json文件。
        wordWrap?       : boolean // 全局文本环绕。@default false
        /**
         * 下拉列表中可用的值，用于选择每页的行数。
         * 只有当 “search” 选项为true并且 “pagination” 选项大于0时，此下拉列表才可见。
         * @default true
         */
        parseFormulas?  : boolean

        /** Context menu content. */
        contextMenu?: (
            instance: Jspreadsheet.JspreadsheetInstance,
            colIndex: string | null,
            rowIndex: string | null,
            event: PointerEvent
        ) => object[] | null

    }
}

