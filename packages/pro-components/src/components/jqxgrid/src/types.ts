export namespace SdJqxgridTypes {
    // money 为扩展
    export type DataFieldType = 'string' | 'date' | 'number' | 'float' | 'int' | 'bool' | 'money' | 'seq'

    export interface DataField {
        name   : string
        type  ?: DataFieldType
        map   ?: string
        format?: CellsFormatType
        values?: { source: any[]; name: string; value: string }
    }

    /** 请求路径                 */
    /** 请求前携带的参数         */
    /** 本地数据源               */
    /** 数据类型                 */
    /** 请求类型                 */
    /** 描述特定记录中字段的数组 */
    export interface DataSource {
        url      ?   : string
        data     ?   : Record<string, any>
        localdata?   : any[]
        datatype ?   : 'xml' | 'json' | 'jsonp' | 'tsv' | 'csv' | 'local' | 'array' | 'observablearray'
        type     ?   : 'GET' | 'POST'
        datafields   : DataField[]
        unboundmode? : boolean
        totalrecords?: number

        // id?: string
        // root?: string
        // record?: string
        // pagenum?: number
        // pagesize?: number
        // pager?: Function
        // sortcolumn?: string
        // sortdirection?: 'asc' | 'desc'
        // sort?: Function
        // filter?: Function,
        // addrow?: Function
        // deleterow?: Function
        // updaterow?: Function
        // processdata?: Function
        // formatdata?: Function
        // contenttype?: string
    }

    export type EditMode = 'click'
    | 'selectedcell'
    | 'selectedrow'
    | 'dblclick'
    | 'programmatic'

    export type ScrollMode = 'default'
    | 'logical' // 滚动条的移动是按行，而不是按像素
    | 'deferred' // 当用户拖动滚动条的拇指时，内容是静止的

    export type SelectMode = 'none' // 禁用选择
    | 'selectionMode' // 整行选择
    | 'multiplerows' // 每次单击都会选择一个新行。单击选定的行，取消选中该行
    | 'multiplerowsextended' // 通过拖放选择多行。选择行为类似于在你身上选择图标
    | 'singlecellc' // 单列选择
    | 'multiplecells' // 每次单击都会选择一个新单元。单击选定的单元格，取消选中它
    | 'multiplecellsextended' // 在此模式下，用户可以通过拖放选择多个单元格。选择行为类似于在桌面上选择图标
    | 'multiplecellsadvanced' // 此模式是最高级的单元格选择模式。在此模式下，用户可以通过拖放选择多个单元格。选择行为类似于电子表格中的单元格选择
    | 'checkbox' // 通过复选框选择多行。

    // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------
    export type ColumnType = 'number'     // 数字只读列
    | 'date'          // 日期
    | 'checkbox'      // 禁用编辑时，选中readonly复选框。启用编辑时的复选框输入。
    | 'numberinput'   // 将数字输入编辑器设置为列的默认编辑器。
    | 'dropdownlist'  // 将dropdownlist编辑器设置为列的默认编辑器
    | 'combobox'      // 将组合框编辑器设置为列的默认编辑器
    | 'datetimeinput' // 将datetimeinput编辑器设置为列的默认编辑器
    | 'textbox'       // 将文本框编辑器设置为列的默认编辑器。
    | 'template'      // 将自定义编辑器设置为列的默认编辑器；编辑器应该在“createeditor”回调中创建。编辑器应该与“initeditor”回调中的单元格值同步。应该在“geteditorvalue”回调中检索编辑器的值。
    | 'custom'        // 将自定义编辑器设置为单元格的默认编辑器。通过该设置，可以在网格列中有多个编辑器。编辑器应该在“createeditor”回调中创建——当“columntype=custom”时，会为每一行调用它。编辑器应该与“initeditor”回调中的单元格值同步。应该在“geteditorvalue”回调中检索编辑器的值。

    export type AggregateType = 'avg'    // 平均值
    | 'count'    // 合计
    | 'min'      // 最小值
    | 'max'      // 最大值
    | 'sum'      // 总和
    | 'sumx'
    | 'product'
    | 'stdev'
    | 'stdevp'
    | 'varp'
    | 'var'

    export type AggregateCustomType = Record<string, (aggregatedValue: number, currentValue: number, columnField: string, record: any) => number | string>
    /**
     * 数字添加小数位：则在后面补充数、eg: c3 => $25.256
     */
    export type CellsFormatType = 'd' // 数字为：十进制，日期格式为: 月
    | 'f'     // 浮点数
    | 'n'     // 整数
    | 'c'     // 货币数字
    | 'p'     // 百分比
    | 'dd'    // 月日
    | 'ddd'   // 一周中某一天的缩写
    | 'dddd'  // 星期几
    | 'h'
    | 'hh'
    | 'H'
    | 'HH'
    | 'm'
    | 'mm'
    | 'M'
    | 'MM'
    | 'MMM'
    | 'MMMM'
    | 's'
    | 'ss'
    | 't'
    | 'tt'
    | 'y'
    | 'yy'
    | 'yyy'
    | 'yyyy'
    | 'yyyyy'
    | string

    export type Align = 'left' | 'center' | 'right'

    export type FilterType = 'textbox'   // 文本字段
    | 'input'       // 带有下拉列表的输入字段, 用于选择过滤条件
    | 'checkedlist' // dropdownlist带有复选框，用于指定哪些记录应可见和隐藏。
    | 'list'        // dropdownlist，根据选择指定可见记录。
    | 'number'      // 数字输入字段
    | 'checkbox'    // 过滤布尔数据
    | 'date'        // 过滤日期
    | 'range'       // 过滤范围
    | 'custom'      // 允许您创建自定义筛选菜单小部件

    export type FilterconditionType = 'EMPTY'                       // 为空
    | 'NOT_EMPTY'                       // 不为空
    | 'CONTAINS'                        // 包含
    | 'CONTAINS_CASE_SENSITIVE'         // 包含（区分大小写）
    | 'DOES_NOT_CONTAIN'                // 不包含
    | 'DOES_NOT_CONTAIN_CASE_SENSITIVE' // 不包含（区分大小写）
    | 'STARTS_WITH'                     // 以开始
    | 'STARTS_WITH_CASE_SENSITIVE'      // 以开始（区分大小写）
    | 'ENDS_WITH'                       // 以结尾
    | 'ENDS_WITH_CASE_SENSITIVE'        // 以结尾（区分大小写）
    | 'EQUAL_CASE_SENSITIVE'            // 区分大小写
    | 'NULL'                            // 为 NULL
    | 'NOT_NULL'                        // 不为 NULL
    | 'EQUAL'                           // 相等
    | 'NOT_EQUAL'                       // 不相等
    | 'LESS_THAN'                       // 小于
    | 'LESS_THAN_OR_EQUAL'              // 小于或等于
    | 'GREATER_THAN'                    // 大于
    | 'GREATER_THAN_OR_EQUAL'           // 大于或等于

    export interface SeqConfig extends Pick<ColumnOptions, 'text' | 'width' | 'pinned' | 'cellsrenderer'> {
        format?: (val: number) => number
    }

    // 外部列定义
    export interface ColumnOptions {
        datafield?                         : string
        /** 列标题                   */ text? : string
        /** 列标题                   */ title?: string
        /** 列标题                   */ name  : string
        /** 数据选项                 */ items? : { id: string; name: string }[]

        /** 设置显示其他的列字段     */ displayfield?     : string
        /** 可排序                   */ sortable?  : boolean
        /** 可过滤                   */ filterable?: boolean
        // /** 初始化的过滤列表      */ filter: { values: any[];  name: string; value: string }[]
        /** 可隐藏                   */ hideable?  : boolean // 为 true 时 hidden 可隐藏列，为 false 时 hidden则隐藏单元格内容
        /** 隐藏列                   */ hidden?    : boolean
        /** 可分组                   */ groupable? : boolean
        /** 组合列名                 */ columngroup?: string
        // /** 鼠标移入区域是否显示菜单 */ menu: boolean
        /** 可导出                   */ exportable?: boolean
        // /** 开启工具提示 */ enabletooltips: boolean
        /** 自定义渲染               */ renderer?    : (name: string) => string
        // /**渲染列的回调 */ rendered?: Function
        /** 自定义单元格渲染         */  cellsrenderer? : (row: number, columnfield: string, value: any, defaulthtml: HTMLElement, columnproperties: Column) => string

        /** 单元格渲染类型           */ columntype?: ColumnType
        /** 数据类型                 */ type?   : DataFieldType

        /** 自定义验证函数           */ validation?: (cell: any, value: any) => boolean | { result: boolean; message: string } // 设置自定义验证函数。网格向其传递两个参数-编辑单元和单元值。函数应该返回true或false，具体取决于用户的验证逻辑。它还可以返回一个验证对象，并向用户显示两个字段——“结果”——true或false，以及“消息”——验证字符串。

        /** 格式化函数               */ cellsformat?: CellsFormatType
        /** 格式化函数               */ format?     : CellsFormatType

        /** 自定义渲染聚合函数单元格 */ aggregatesrenderer?: (aggregatesrenderer: any) => string
        /** 聚合函数                 */ aggregates?: (AggregateType | AggregateCustomType)[]
        /** 聚合函数                 */ aggs?      : (AggregateType | AggregateCustomType)[]

        /** 列对齐方式               */ align?       : Align
        /** 单元格对齐方式           */ cellsalign?    : Align
        /** 列宽                     */ width?    : number
        /** 最小列宽                 */ minwidth?   : number
        /** 最大列宽                 */ maxwidth?   : number
        /** 可调整列宽               */ resizable?   : boolean
        /** 可调整位置               */ draggable?   : boolean
        /** 可编辑                   */ editable?  : boolean
        /** 样式名                   */ classname? : string
        /** 单元格样式名             */ cellclassname?: string | ((row: number, column: string, value: any, data: any) => string)
        /** 冻结列                   */ pinned?    : boolean
        /** 允许 null 空值           */ nullable?   : boolean
        /** 列筛选器的值             */ filteritems?  : any[] // 设置列表筛选器中显示的项目-当“showfilterrow”属性值为true且筛选器的类型为“list”或“checkedlist”时
        /** 设置自动过滤延迟         */ filterdelay?    : number // 默认 800

        /** 过滤类型                 */ filtertype?: FilterType
        /** 过滤类型                 */ filter?    : FilterType

        /**                          */ filtercondition?: FilterconditionType // 确定filtertype等于“textbox”或“number”的列的筛选条件

        /** --------------------------------------------------------------- */
        /** 扩展属性                 */ target?: Record<string, any>
    }

    // 已转换的列定义
    export interface Column extends Omit<ColumnOptions, 'title' | 'name' | 'type' | 'format' | 'filter' | 'aggs' | 'type' | 'items'> {
        /** 列标题 */ text     : string
        /** 列字段 */ datafield: string
    }

    // 列分组
    export interface ColumnGroupItem {
        align?: Align
        text  : string
        name  : string
    }

    type MethodCallBackColumn = Pick<
        Column,
          'datafield' | 'displayfield' | 'text' | 'sortable' | 'filterable' | 'exportable'
          | 'editable' | 'groupable' | 'resizable' | 'draggable' | 'cellclassname' | 'width'
    > & { menu: any }

    type MethodReturnCell = {
        value : any
        row   : any
        column: MethodCallBackColumn
    }

    export interface Methods {
        // Grid 操作 ---------------------------------------------------------------------------------

        /**
         * 更新数据源数据
         * - 如果是筛选和排序中的更改，导致需要刷新，则可以只定 type = sorting | filtering
         * - 仅更新不包含列的数据，则可以指定 type = data
         * - 快速更新单元格 cells
         * - 完整更新则部传递任何参数
         */
        updateBoundData: (type?: 'sorting' | 'filtering' | 'data' | 'cells') => void

        /** 更新组件数据源 */
        updateSourceRows: (data: any[]) => void

        /** 刷新当前数据 */
        refreshData   : () => void
        /** 刷新当前 Gird 视图 */
        refresh       : () => void
        /** 渲染 Gird, 此方法完全刷新单元格、列、布局、并重新绘制视图  */
        render        : () => void
        /** 手动滚动 */
        scrollOffset  : (top: number, left: number) => void
        /** 滚动位置信息 */
        scrollPosition: () => { top: number; left: number }
        /** 清空数据 */
        clear         : () => void
        /** 注销Grid */
        destroy       : () => void

        // 列操作 ---------------------------------------------------------------------------------

        /** 获取列下标 */
        getColumnIndex   : (dataField: string) => number
        /** 获取列属性 */
        getColumnProperty: (dataField: string, propertyName: keyof Column) => Record<string, any>
        /** 获取列 */
        getColumn        : (dataField: string) => MethodCallBackColumn
        /** 隐藏列 */
        hideColumn       : (dataField: string) => void
        /** 显示列 */
        showColumn       : (dataField: string) => void
        /** 当前列是否显示 */
        isColumnVisible  : (dataField: string) => boolean
        /** 当前列是否冻结 */
        isColumnPinned   : (dataField: string) => boolean

        // 行操作 ---------------------------------------------------------------------------------

        /** 获取网格行编码 */
        getRowId            : (rowBoundIndex: number) => string
        /** 获取网格行数据 */
        getRowData          : (rowBoundIndex: number) => Record<string, any>
        /** 通过行编码 获取网格行数据 */
        getRowDataById      : (rowId: string) => Record<string, any>
        /** 获取所有行，返回网格中加载的所有行的数组。如果网格已进行过滤，则返回的值是过滤的记录的数组 */
        getRows             : () => any[]
        /** 通过行编码 获取行在数据源中的索引 */
        getRowBoundIndexById: (rowId: string) => number
        /** 通过视图显示索引,获取数据源中的行索引 */
        getRowBoundIndex    : (rowDisplayIndex: number) => number
        /** 获取数据源的所有行，不受排序、过滤、分组、分页的影响 */
        getBoundRows        : () => any[]
        /** 获取当前显示在网格中的所有行。该方法返回显示行的数组。网格的排序、过滤、分组和分页将影响这种方法的结果。 */
        getDisplayRows      : () => void

        // 编辑操作 ---------------------------------------------------------------------------------

        // 编辑
        /** 添加行或多行 */
        addRow          : (rowIds: string | number | any[], data: Record<string, any> | any[], rowPosition: 'first' | 'last') => void
        /** 删除行或多行 */
        deleteRow       : (rowIds: string | number | any[]) => void
        /** 更新行或多行 */
        updateRow       : (rowIds: string | number | any[], data: Record<string, any> | any[]) => void
        /** 获取单元格信息 */
        getCell         : (rowBoundIndex: number, dataField: string) => MethodReturnCell
        /** 通过行下标索引，列字段，获取单元格文本 */
        getCellText     : (rowBoundIndex: number, dataField: string) => string
        /** 通过行编码，列字段，获取单元格文本 */
        getCellTextById : (rowId: string, dataField: string) => string
        /** 通过行下标索引，列字段，获取单元格值 */
        getCellValue    : (rowBoundIndex: number, dataField: string) => any
        /** 通过行编码，列字段，获取单元格值 */
        getCellValueById: (rowId: string, dataField: string) => any
        /** 通过行下标索引，列字段，设置单元格值 */
        setCellValue    : (rowBoundIndex: number, dataField: string, value: any) => void
        /** 通过行编码，列字段，设置单元格值 */
        setCellValueById: (rowId: string, dataField: string, value: any) => void

        // 选中状态

        /** 清空选中 */
        clearSelection       : () => void
        /** 获取选中行的下标索引 */
        getSelectedRowIndex  : () => number
        /** 获取选中多行的下标索引 */
        getSelectedRowIndexes: () => number[]
        /** 获取选中单元格信息 */
        getSelectedCell      : () => { rowindex: number; datafield: string }[]
        /** 获取选中多个单元格信息 */
        getSelectedCells     : () => void
        /** 选中单元格 */
        selectCell           : (rowBoundIndex: number, dataField: string) => void
        /** 取消选中单元格 */
        unselectCell         : () => void
        /** 选中行 */
        selectRow            : (rowBoundIndex: number) => void
        /** 取消选中行 */
        unselectRow          : (rowBoundIndex: number) => void

        // 聚合函数
        /** 刷新聚合函数在视图中显示的状态 */
        refreshAggregates: () => void
        /** 重新渲染聚合函数在视图中的状态 */
        renderAggregates : () => void

        // 导出
        /** 服务器导出数据 */
        exportData: (
            dataType: 'xls' | 'xml' | 'html' | 'json' | 'pdf' | 'tsv' | 'csv' | 'xlsx',
            fileName: string,
            exportHeader: boolean,
            rows: any[],
            exportHiddenColumns: boolean,
            serverURL: string,
            charSet: string
        ) => void
        /** 导出视图 */
        exportView: (
            dataType: 'xls' | 'xml' | 'html' | 'json' | 'pdf' | 'tsv' | 'csv' | 'xlsx',
            fileName: string,
            rows: any[],
        ) => void
    }
}
