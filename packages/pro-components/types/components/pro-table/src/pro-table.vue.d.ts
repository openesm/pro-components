import type { VxeGridInstance } from 'vxe-table';
declare const _default: import("vue").DefineComponent<{
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    stripe: {
        type: BooleanConstructor;
        default: boolean;
    };
    id: {
        type: StringConstructor;
    };
    title: {
        type: StringConstructor;
    };
    height: {
        type: import("vue").PropType<string | number>;
    };
    minHeight: {
        type: import("vue").PropType<string | number>;
    };
    emptyText: {
        type: StringConstructor;
        default: string;
    };
    align: {
        type: import("vue").PropType<import("vxe-table").VxeTablePropTypes.Align>;
        default: string;
    };
    headerAlign: {
        type: import("vue").PropType<import("vxe-table").VxeTablePropTypes.Align>;
    };
    footerAlign: {
        type: import("vue").PropType<import("vxe-table").VxeTablePropTypes.Align>;
    };
    showOverflow: {
        type: import("vue").PropType<import("vxe-table").VxeTablePropTypes.ShowOverflow>;
        default: string;
    };
    showHeaderOverflow: {
        type: import("vue").PropType<import("vxe-table").VxeTablePropTypes.ShowOverflow>;
        default: string;
    };
    showFooterOverflow: {
        type: import("vue").PropType<import("vxe-table").VxeTablePropTypes.ShowOverflow>;
        default: string;
    };
    rowClassName: {
        type: import("vue").PropType<import("./types").SdProTableDefineTypes.RowClassName>;
    };
    rowStyle: {
        type: import("vue").PropType<import("./types").SdProTableDefineTypes.RowStyle>;
    };
    cellClassName: {
        type: import("vue").PropType<import("./types").SdProTableDefineTypes.CellClassName>;
    };
    cellStyle: {
        type: import("vue").PropType<import("./types").SdProTableDefineTypes.CellStyle>;
    };
    headerStyle: {
        type: import("vue").PropType<import("vue").StyleValue>;
    };
    alertStyle: {
        type: import("vue").PropType<import("vue").StyleValue>;
    };
    bodyStyle: {
        type: import("vue").PropType<import("vue").StyleValue>;
    };
    footerStyle: {
        type: import("vue").PropType<import("vue").StyleValue>;
    };
    showHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    showFooter: {
        type: BooleanConstructor;
        default: boolean;
    };
    showAggregates: {
        type: BooleanConstructor;
        default: boolean;
    };
    cols: {
        type: import("vue").PropType<string | import("./types").SdProTableDefineTypes.ColumnOptions<any>[]>;
    };
    colsConfig: {
        type: import("vue").PropType<Record<string, import("./types").SdProTableDefineTypes.ColumnOptions<any>>>;
    };
    columnConfig: {
        type: import("vue").PropType<import("./types").SdProTableDefineTypes.ColumnConfig>;
    };
    rows: {
        type: import("vue").PropType<any[]>;
        default: () => never[];
    };
    rowKey: {
        type: StringConstructor;
    };
    rowHeight: {
        type: NumberConstructor;
        default: number;
    };
    rowConfig: {
        type: import("vue").PropType<import("./types").SdProTableDefineTypes.RowConfig>;
    };
    operations: {
        type: import("vue").PropType<import("./types").SdProTableDefineTypes.OperationItem<any>[]>;
    };
    operationsConfig: {
        type: import("vue").PropType<import("./types").SdProTableDefineTypes.OperationsConfig>;
    };
    activeTab: {
        type: import("vue").PropType<string | number>;
    };
    tabs: {
        type: import("vue").PropType<import("./types").SdProTableDefineTypes.HeaderTabItem[]>;
    };
    tabsConfig: {
        type: import("vue").PropType<import("./types").SdProTableDefineTypes.HeaderTabsConfig>;
    };
    buttons: {
        type: import("vue").PropType<import("./types").SdProTableDefineTypes.HeaderButtonItem[]>;
    };
    enableTools: {
        type: BooleanConstructor;
        default: boolean;
    };
    toolsConfig: {
        type: import("vue").PropType<import("./types").SdProTableDefineTypes.ToolsConfig>;
    };
    enableQuickSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    quickSearchConfig: {
        type: import("vue").PropType<import("./types").SdProTableDefineTypes.QuickSearchConfig>;
    };
    enablePager: {
        type: BooleanConstructor;
        default: boolean;
    };
    pagerConfig: {
        type: import("vue").PropType<import("./types").SdProTableDefineTypes.PagerConfig>;
    };
    cacheConfig: {
        type: import("vue").PropType<import("./types").SdProTableDefineTypes.CacheConfig>;
    };
    mergeCells: {
        type: ArrayConstructor;
    };
    spanMethod: {
        type: FunctionConstructor;
    };
    enableScrollY: {
        type: BooleanConstructor;
        default: boolean;
    };
    enableSeq: {
        type: BooleanConstructor;
        default: boolean;
    };
    seqColumnConfig: {
        type: import("vue").PropType<import("vxe-table").VxeColumnProps<any>>;
    };
    enableExpand: {
        type: BooleanConstructor;
        default: boolean;
    };
    expandColumnConfig: {
        type: import("vue").PropType<import("vxe-table").VxeColumnProps<any>>;
    };
    enableReadio: {
        type: BooleanConstructor;
        deafult: boolean;
    };
    radioConfig: {
        type: import("vue").PropType<import("./types").SdProTableDefineTypes.RadioConfig>;
    };
    radioColumnConfig: {
        type: import("vue").PropType<import("vxe-table").VxeColumnProps<any>>;
    };
    enableCheckbox: {
        type: BooleanConstructor;
        default: boolean;
    };
    checkboxConfig: {
        type: import("vue").PropType<import("./types").SdProTableDefineTypes.CheckboxConfig>;
    };
    checkboxColumnConfig: {
        type: import("vue").PropType<import("vxe-table").VxeColumnProps<any>>;
    };
    enableDargSort: {
        type: BooleanConstructor;
        default: boolean;
    };
    beforeDargSort: {
        type: import("vue").PropType<import("./types").SdProTableDefineTypes.BeforeDargSort>;
    };
    sortableOptions: {
        type: import("vue").PropType<import("./types").SdProTableDefineTypes.SortableOptions>;
    };
    sortColumnConfig: {
        type: import("vue").PropType<import("vxe-table").VxeColumnProps<any>>;
    };
    enableEdit: {
        type: BooleanConstructor;
    };
    editConfig: {
        type: import("vue").PropType<import("./types").SdProTableDefineTypes.EditConfig>;
    };
    gridConfig: {
        type: import("vue").PropType<import("./types").SdProTableDefineTypes.GridConfig>;
    };
}, {
    state: {
        curr_tab: string | number;
        tab_count_map: Record<string, number>;
        columns: {
            children?: any[] | undefined;
            slots?: {
                title?: string | ((params: import("vxe-table").VxeColumnSlotTypes.HeaderSlotParams<any>) => import("vxe-table").VxeComponentSlotType | import("vxe-table").VxeComponentSlotType[]) | null | undefined;
                radio?: string | ((params: import("vxe-table").VxeColumnSlotTypes.RadioSlotParams<any>) => import("vxe-table").VxeComponentSlotType | import("vxe-table").VxeComponentSlotType[]) | null | undefined;
                checkbox?: string | ((params: import("vxe-table").VxeColumnSlotTypes.CheckboxSlotParams<any>) => import("vxe-table").VxeComponentSlotType | import("vxe-table").VxeComponentSlotType[]) | null | undefined;
                default?: string | ((params: import("vxe-table").VxeColumnSlotTypes.DefaultSlotParams<any>) => import("vxe-table").VxeComponentSlotType | import("vxe-table").VxeComponentSlotType[]) | null | undefined;
                header?: string | ((params: import("vxe-table").VxeColumnSlotTypes.HeaderSlotParams<any>) => import("vxe-table").VxeComponentSlotType | import("vxe-table").VxeComponentSlotType[]) | null | undefined;
                footer?: string | ((params: import("vxe-table").VxeColumnSlotTypes.FooterSlotParams<any>) => import("vxe-table").VxeComponentSlotType | import("vxe-table").VxeComponentSlotType[]) | null | undefined;
                content?: string | ((params: import("vxe-table").VxeColumnSlotTypes.ContentSlotParams<any>) => import("vxe-table").VxeComponentSlotType | import("vxe-table").VxeComponentSlotType[]) | null | undefined;
                filter?: string | ((params: import("vxe-table").VxeColumnSlotTypes.FilterSlotParams<any>) => import("vxe-table").VxeComponentSlotType | import("vxe-table").VxeComponentSlotType[]) | null | undefined;
                edit?: string | ((params: import("vxe-table").VxeColumnSlotTypes.EditSlotParams<any>) => import("vxe-table").VxeComponentSlotType | import("vxe-table").VxeComponentSlotType[]) | null | undefined;
                valid?: string | ((params: import("vxe-table").VxeColumnSlotTypes.ValidSlotParams<any>) => import("vxe-table").VxeComponentSlotType | import("vxe-table").VxeComponentSlotType[]) | null | undefined;
                icon?: string | ((params: import("vxe-table").VxeColumnSlotTypes.IconSlotParams<any>) => import("vxe-table").VxeComponentSlotType | import("vxe-table").VxeComponentSlotType[]) | null | undefined;
            } | undefined;
            colId?: import("vxe-table").VxeColumnPropTypes.ColId | undefined;
            type?: import("vxe-table").VxeColumnPropTypes.Type | undefined;
            field?: string | undefined;
            title?: string | undefined;
            width?: import("vxe-table").VxeColumnPropTypes.Width | undefined;
            minWidth?: import("vxe-table").VxeColumnPropTypes.MinWidth | undefined;
            maxWidth?: import("vxe-table").VxeColumnPropTypes.MaxWidth | undefined;
            resizable?: boolean | undefined;
            fixed?: import("vxe-table").VxeColumnPropTypes.Fixed | undefined;
            align?: import("vxe-table").VxeColumnPropTypes.Align | undefined;
            headerAlign?: import("vxe-table").VxeColumnPropTypes.Align | undefined;
            footerAlign?: import("vxe-table").VxeColumnPropTypes.Align | undefined;
            showOverflow?: import("vxe-table").VxeTablePropTypes.ShowOverflow | undefined;
            showHeaderOverflow?: import("vxe-table").VxeTablePropTypes.ShowOverflow | undefined;
            showFooterOverflow?: import("vxe-table").VxeTablePropTypes.ShowOverflow | undefined;
            className?: import("vxe-table").VxeColumnPropTypes.ClassName<any> | undefined;
            headerClassName?: import("vxe-table").VxeColumnPropTypes.HeaderClassName<any> | undefined;
            footerClassName?: import("vxe-table").VxeColumnPropTypes.FooterClassName<any> | undefined;
            formatter?: import("vxe-table").VxeColumnPropTypes.Formatter<any> | undefined;
            footerFormatter?: import("vxe-table").VxeColumnPropTypes.FooterFormatter<any> | undefined;
            sortable?: boolean | undefined;
            sortBy?: import("vxe-table").VxeColumnPropTypes.SortBy<any> | undefined;
            sortType?: import("vxe-table").VxeColumnPropTypes.SortType | undefined;
            filters?: {
                label?: string | number | undefined;
                value?: any;
                data?: any;
                resetValue?: any;
                checked?: boolean | undefined;
            }[] | undefined;
            filterMultiple?: boolean | undefined;
            filterMethod?: import("vxe-table").VxeColumnPropTypes.FilterMethod<any> | undefined;
            filterRender?: {
                name?: string | undefined;
                props?: {
                    [key: string]: any;
                } | undefined;
                attrs?: {
                    [key: string]: any;
                } | undefined;
                events?: {
                    [key: string]: (...args: any[]) => any;
                } | undefined;
                children?: any[] | undefined;
                enabled?: boolean | undefined;
                options?: any[] | undefined;
                optionProps?: {
                    value?: string | undefined;
                    label?: string | undefined;
                    disabled?: string | undefined;
                    key?: string | undefined;
                    children?: string | undefined;
                    hasChild?: string | undefined;
                    parent?: string | undefined;
                } | undefined;
                optionGroups?: any[] | undefined;
                optionGroupProps?: {
                    options?: string | undefined;
                    label?: string | undefined;
                    key?: string | undefined;
                } | undefined;
                content?: string | undefined;
                cellType?: import("vxe-table").VxeColumnPropTypes.CellType | undefined;
            } | undefined;
            treeNode?: boolean | undefined;
            visible?: boolean | undefined;
            headerExportMethod?: import("vxe-table").VxeColumnPropTypes.HeaderExportMethod<any> | undefined;
            exportMethod?: import("vxe-table").VxeColumnPropTypes.ExportMethod<any> | undefined;
            footerExportMethod?: import("vxe-table").VxeColumnPropTypes.FooterExportMethod<any> | undefined;
            titleHelp?: {
                useHTML?: boolean | undefined;
                content?: import("vxe-table").VxeTooltipPropTypes.Content | undefined;
                enterable?: boolean | undefined;
                theme?: import("vxe-table").VxeTooltipPropTypes.Theme | undefined;
                icon?: string | undefined;
                iconStatus?: string | undefined;
                message?: string | undefined;
            } | undefined;
            titlePrefix?: {
                useHTML?: boolean | undefined;
                content?: import("vxe-table").VxeTooltipPropTypes.Content | undefined;
                enterable?: boolean | undefined;
                theme?: import("vxe-table").VxeTooltipPropTypes.Theme | undefined;
                icon?: string | undefined;
                iconStatus?: string | undefined;
                message?: string | undefined;
            } | undefined;
            titleSuffix?: {
                useHTML?: boolean | undefined;
                content?: import("vxe-table").VxeTooltipPropTypes.Content | undefined;
                enterable?: boolean | undefined;
                theme?: import("vxe-table").VxeTooltipPropTypes.Theme | undefined;
                icon?: string | undefined;
                iconStatus?: string | undefined;
                message?: string | undefined;
            } | undefined;
            cellType?: import("vxe-table").VxeColumnPropTypes.CellType | undefined;
            cellRender?: {
                name?: string | undefined;
                props?: Record<string, any> | undefined;
                attrs?: Record<string, any> | undefined;
                children?: any[] | undefined;
                events?: Record<string, (cellParams: import("vxe-table").VxeColumnSlotTypes.DefaultSlotParams<any>, ...args: any[]) => any> | undefined;
                options?: any[] | undefined;
                optionProps?: {
                    value?: string | undefined;
                    label?: string | undefined;
                    disabled?: string | undefined;
                    key?: string | undefined;
                    children?: string | undefined;
                    hasChild?: string | undefined;
                    parent?: string | undefined;
                } | undefined;
                optionGroups?: any[] | undefined;
                optionGroupProps?: {
                    options?: string | undefined;
                    label?: string | undefined;
                    key?: string | undefined;
                } | undefined;
                content?: string | undefined;
            } | undefined;
            editRender?: {
                name?: string | undefined;
                props?: Record<string, any> | undefined;
                attrs?: Record<string, any> | undefined;
                children?: any[] | undefined;
                events?: Record<string, (cellParams: import("vxe-table").VxeColumnSlotTypes.EditSlotParams<any>, ...args: any[]) => any> | undefined;
                enabled?: boolean | undefined;
                options?: any[] | undefined;
                optionProps?: {
                    value?: string | undefined;
                    label?: string | undefined;
                    disabled?: string | undefined;
                    key?: string | undefined;
                    children?: string | undefined;
                    hasChild?: string | undefined;
                    parent?: string | undefined;
                } | undefined;
                optionGroups?: any[] | undefined;
                optionGroupProps?: {
                    options?: string | undefined;
                    label?: string | undefined;
                    key?: string | undefined;
                } | undefined;
                autoFocus?: string | undefined;
                autoSelect?: boolean | undefined;
                defaultValue?: string | number | object | any[] | {
                    exec: (string: string) => RegExpExecArray | null;
                    test: (string: string) => boolean;
                    readonly source: string;
                    readonly global: boolean;
                    readonly ignoreCase: boolean;
                    readonly multiline: boolean;
                    lastIndex: number;
                    compile: (pattern: string, flags?: string | undefined) => RegExp;
                    readonly flags: string;
                    readonly sticky: boolean;
                    readonly unicode: boolean;
                    readonly dotAll: boolean;
                    readonly hasIndices: boolean;
                    [Symbol.match]: (string: string) => RegExpMatchArray | null;
                    [Symbol.replace]: {
                        (string: string, replaceValue: string): string;
                        (string: string, replacer: (substring: string, ...args: any[]) => string): string;
                    };
                    [Symbol.search]: (string: string) => number;
                    [Symbol.split]: (string: string, limit?: number | undefined) => string[];
                    [Symbol.matchAll]: (str: string) => IterableIterator<RegExpMatchArray>;
                } | ((params: {
                    column: import("vxe-table").VxeTableDefines.ColumnInfo<any>;
                }) => any) | {
                    toString: () => string;
                    toDateString: () => string;
                    toTimeString: () => string;
                    toLocaleString: {
                        (): string;
                        (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
                        (locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions | undefined): string;
                    };
                    toLocaleDateString: {
                        (): string;
                        (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
                        (locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions | undefined): string;
                    };
                    toLocaleTimeString: {
                        (): string;
                        (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
                        (locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions | undefined): string;
                    };
                    valueOf: () => number;
                    getTime: () => number;
                    getFullYear: () => number;
                    getUTCFullYear: () => number;
                    getMonth: () => number;
                    getUTCMonth: () => number;
                    getDate: () => number;
                    getUTCDate: () => number;
                    getDay: () => number;
                    getUTCDay: () => number;
                    getHours: () => number;
                    getUTCHours: () => number;
                    getMinutes: () => number;
                    getUTCMinutes: () => number;
                    getSeconds: () => number;
                    getUTCSeconds: () => number;
                    getMilliseconds: () => number;
                    getUTCMilliseconds: () => number;
                    getTimezoneOffset: () => number;
                    setTime: (time: number) => number;
                    setMilliseconds: (ms: number) => number;
                    setUTCMilliseconds: (ms: number) => number;
                    setSeconds: (sec: number, ms?: number | undefined) => number;
                    setUTCSeconds: (sec: number, ms?: number | undefined) => number;
                    setMinutes: (min: number, sec?: number | undefined, ms?: number | undefined) => number;
                    setUTCMinutes: (min: number, sec?: number | undefined, ms?: number | undefined) => number;
                    setHours: (hours: number, min?: number | undefined, sec?: number | undefined, ms?: number | undefined) => number;
                    setUTCHours: (hours: number, min?: number | undefined, sec?: number | undefined, ms?: number | undefined) => number;
                    setDate: (date: number) => number;
                    setUTCDate: (date: number) => number;
                    setMonth: (month: number, date?: number | undefined) => number;
                    setUTCMonth: (month: number, date?: number | undefined) => number;
                    setFullYear: (year: number, month?: number | undefined, date?: number | undefined) => number;
                    setUTCFullYear: (year: number, month?: number | undefined, date?: number | undefined) => number;
                    toUTCString: () => string;
                    toISOString: () => string;
                    toJSON: (key?: any) => string;
                    [Symbol.toPrimitive]: {
                        (hint: "default"): string;
                        (hint: "string"): string;
                        (hint: "number"): number;
                        (hint: string): string | number;
                    };
                } | null | undefined;
                immediate?: boolean | undefined;
                content?: string | undefined;
                placeholder?: string | undefined;
                autofocus?: string | undefined;
                autoselect?: boolean | undefined;
            } | undefined;
            contentRender?: {
                name?: string | undefined;
                props?: Record<string, any> | undefined;
                attrs?: Record<string, any> | undefined;
                events?: Record<string, (cellParams: import("vxe-table").VxeColumnSlotTypes.ContentSlotParams<any>, ...args: any[]) => any> | undefined;
                children?: any[] | undefined;
                options?: any[] | undefined;
                optionProps?: {
                    value?: string | undefined;
                    label?: string | undefined;
                    disabled?: string | undefined;
                    key?: string | undefined;
                    children?: string | undefined;
                    hasChild?: string | undefined;
                    parent?: string | undefined;
                } | undefined;
                optionGroups?: any[] | undefined;
                optionGroupProps?: {
                    options?: string | undefined;
                    label?: string | undefined;
                    key?: string | undefined;
                } | undefined;
            } | undefined;
            params?: any;
        }[];
        columns_map: Record<string, import("vxe-table").VxeTableDefines.ColumnOptions<any>>;
        all_data_column_ids: string[];
        def_visible_column_ids: string[];
        search_column_ids: string[];
        column_filters: {
            id: string | number;
            column: {
                title: string;
                colSpan: number;
                disabled: boolean;
                id: string;
                visible: boolean;
                className: import("vxe-table").VxeColumnPropTypes.ClassName<any>;
                type: import("vxe-table").VxeColumnPropTypes.Type;
                fixed: import("vxe-table").VxeColumnPropTypes.Fixed;
                slots: {
                    title?: string | ((params: import("vxe-table").VxeColumnSlotTypes.HeaderSlotParams<any>) => import("vxe-table").VxeComponentSlotType | import("vxe-table").VxeComponentSlotType[]) | null | undefined;
                    radio?: string | ((params: import("vxe-table").VxeColumnSlotTypes.RadioSlotParams<any>) => import("vxe-table").VxeComponentSlotType | import("vxe-table").VxeComponentSlotType[]) | null | undefined;
                    checkbox?: string | ((params: import("vxe-table").VxeColumnSlotTypes.CheckboxSlotParams<any>) => import("vxe-table").VxeComponentSlotType | import("vxe-table").VxeComponentSlotType[]) | null | undefined;
                    default?: string | ((params: import("vxe-table").VxeColumnSlotTypes.DefaultSlotParams<any>) => import("vxe-table").VxeComponentSlotType | import("vxe-table").VxeComponentSlotType[]) | null | undefined;
                    header?: string | ((params: import("vxe-table").VxeColumnSlotTypes.HeaderSlotParams<any>) => import("vxe-table").VxeComponentSlotType | import("vxe-table").VxeComponentSlotType[]) | null | undefined;
                    footer?: string | ((params: import("vxe-table").VxeColumnSlotTypes.FooterSlotParams<any>) => import("vxe-table").VxeComponentSlotType | import("vxe-table").VxeComponentSlotType[]) | null | undefined;
                    content?: string | ((params: import("vxe-table").VxeColumnSlotTypes.ContentSlotParams<any>) => import("vxe-table").VxeComponentSlotType | import("vxe-table").VxeComponentSlotType[]) | null | undefined;
                    filter?: string | ((params: import("vxe-table").VxeColumnSlotTypes.FilterSlotParams<any>) => import("vxe-table").VxeComponentSlotType | import("vxe-table").VxeComponentSlotType[]) | null | undefined;
                    edit?: string | ((params: import("vxe-table").VxeColumnSlotTypes.EditSlotParams<any>) => import("vxe-table").VxeComponentSlotType | import("vxe-table").VxeComponentSlotType[]) | null | undefined;
                    valid?: string | ((params: import("vxe-table").VxeColumnSlotTypes.ValidSlotParams<any>) => import("vxe-table").VxeComponentSlotType | import("vxe-table").VxeComponentSlotType[]) | null | undefined;
                    icon?: string | ((params: import("vxe-table").VxeColumnSlotTypes.IconSlotParams<any>) => import("vxe-table").VxeComponentSlotType | import("vxe-table").VxeComponentSlotType[]) | null | undefined;
                };
                filters: {
                    label?: string | number | undefined;
                    value?: any;
                    data?: any;
                    resetValue?: any;
                    checked?: boolean | undefined;
                }[];
                children: {
                    property: string;
                    type: import("vxe-table").VxeColumnPropTypes.Type;
                    field: string;
                    title: string;
                    width: import("vxe-table").VxeColumnPropTypes.Width;
                    minWidth: import("vxe-table").VxeColumnPropTypes.MinWidth;
                    maxWidth: import("vxe-table").VxeColumnPropTypes.MaxWidth;
                    resizable: boolean;
                    fixed: import("vxe-table").VxeColumnPropTypes.Fixed;
                    align: import("vxe-table").VxeColumnPropTypes.Align;
                    headerAlign: import("vxe-table").VxeColumnPropTypes.Align;
                    footerAlign: import("vxe-table").VxeColumnPropTypes.Align;
                    showOverflow: import("vxe-table").VxeTablePropTypes.ShowOverflow;
                    showHeaderOverflow: import("vxe-table").VxeTablePropTypes.ShowOverflow;
                    showFooterOverflow: import("vxe-table").VxeTablePropTypes.ShowOverflow;
                    className: import("vxe-table").VxeColumnPropTypes.ClassName<any>;
                    headerClassName: import("vxe-table").VxeColumnPropTypes.HeaderClassName<any>;
                    footerClassName: import("vxe-table").VxeColumnPropTypes.FooterClassName<any>;
                    formatter: import("vxe-table").VxeColumnPropTypes.Formatter<any>;
                    footerFormatter: import("vxe-table").VxeColumnPropTypes.FooterFormatter<any>;
                    sortable: boolean;
                    sortBy: import("vxe-table").VxeColumnPropTypes.SortBy<any>;
                    sortType: import("vxe-table").VxeColumnPropTypes.SortType;
                    filters: {
                        label?: string | number | undefined;
                        value?: any;
                        data?: any;
                        resetValue?: any;
                        checked?: boolean | undefined;
                    }[];
                    filterMultiple: boolean;
                    filterMethod: import("vxe-table").VxeColumnPropTypes.FilterMethod<any>;
                    filterRender: {
                        name?: string | undefined;
                        props?: {
                            [key: string]: any;
                        } | undefined;
                        attrs?: {
                            [key: string]: any;
                        } | undefined;
                        events?: {
                            [key: string]: (...args: any[]) => any;
                        } | undefined;
                        children?: any[] | undefined;
                        enabled?: boolean | undefined;
                        options?: any[] | undefined;
                        optionProps?: {
                            value?: string | undefined;
                            label?: string | undefined;
                            disabled?: string | undefined;
                            key?: string | undefined;
                            children?: string | undefined;
                            hasChild?: string | undefined;
                            parent?: string | undefined;
                        } | undefined;
                        optionGroups?: any[] | undefined;
                        optionGroupProps?: {
                            options?: string | undefined;
                            label?: string | undefined;
                            key?: string | undefined;
                        } | undefined;
                        content?: string | undefined;
                        cellType?: import("vxe-table").VxeColumnPropTypes.CellType | undefined;
                    };
                    treeNode: boolean;
                    visible: boolean;
                    exportMethod: import("vxe-table").VxeColumnPropTypes.ExportMethod<any>;
                    footerExportMethod: import("vxe-table").VxeColumnPropTypes.FooterExportMethod<any>;
                    titleHelp: {
                        useHTML?: boolean | undefined;
                        content?: import("vxe-table").VxeTooltipPropTypes.Content | undefined;
                        enterable?: boolean | undefined;
                        theme?: import("vxe-table").VxeTooltipPropTypes.Theme | undefined;
                        icon?: string | undefined;
                        iconStatus?: string | undefined;
                        message?: string | undefined;
                    };
                    titlePrefix: {
                        useHTML?: boolean | undefined;
                        content?: import("vxe-table").VxeTooltipPropTypes.Content | undefined;
                        enterable?: boolean | undefined;
                        theme?: import("vxe-table").VxeTooltipPropTypes.Theme | undefined;
                        icon?: string | undefined;
                        iconStatus?: string | undefined;
                        message?: string | undefined;
                    };
                    titleSuffix: {
                        useHTML?: boolean | undefined;
                        content?: import("vxe-table").VxeTooltipPropTypes.Content | undefined;
                        enterable?: boolean | undefined;
                        theme?: import("vxe-table").VxeTooltipPropTypes.Theme | undefined;
                        icon?: string | undefined;
                        iconStatus?: string | undefined;
                        message?: string | undefined;
                    };
                    cellType: import("vxe-table").VxeColumnPropTypes.CellType;
                    cellRender: {
                        name?: string | undefined;
                        props?: Record<string, any> | undefined;
                        attrs?: Record<string, any> | undefined;
                        children?: any[] | undefined;
                        events?: Record<string, (cellParams: import("vxe-table").VxeColumnSlotTypes.DefaultSlotParams<any>, ...args: any[]) => any> | undefined;
                        options?: any[] | undefined;
                        optionProps?: {
                            value?: string | undefined;
                            label?: string | undefined;
                            disabled?: string | undefined;
                            key?: string | undefined;
                            children?: string | undefined;
                            hasChild?: string | undefined;
                            parent?: string | undefined;
                        } | undefined;
                        optionGroups?: any[] | undefined;
                        optionGroupProps?: {
                            options?: string | undefined;
                            label?: string | undefined;
                            key?: string | undefined;
                        } | undefined;
                        content?: string | undefined;
                    };
                    editRender: {
                        name?: string | undefined;
                        props?: Record<string, any> | undefined;
                        attrs?: Record<string, any> | undefined;
                        children?: any[] | undefined;
                        events?: Record<string, (cellParams: import("vxe-table").VxeColumnSlotTypes.EditSlotParams<any>, ...args: any[]) => any> | undefined;
                        enabled?: boolean | undefined;
                        options?: any[] | undefined;
                        optionProps?: {
                            value?: string | undefined;
                            label?: string | undefined;
                            disabled?: string | undefined;
                            key?: string | undefined;
                            children?: string | undefined;
                            hasChild?: string | undefined;
                            parent?: string | undefined;
                        } | undefined;
                        optionGroups?: any[] | undefined;
                        optionGroupProps?: {
                            options?: string | undefined;
                            label?: string | undefined;
                            key?: string | undefined;
                        } | undefined;
                        autoFocus?: string | undefined;
                        autoSelect?: boolean | undefined;
                        defaultValue?: string | number | object | any[] | {
                            exec: (string: string) => RegExpExecArray | null;
                            test: (string: string) => boolean;
                            readonly source: string;
                            readonly global: boolean;
                            readonly ignoreCase: boolean;
                            readonly multiline: boolean;
                            lastIndex: number;
                            compile: (pattern: string, flags?: string | undefined) => RegExp;
                            readonly flags: string;
                            readonly sticky: boolean;
                            readonly unicode: boolean;
                            readonly dotAll: boolean;
                            readonly hasIndices: boolean;
                            [Symbol.match]: (string: string) => RegExpMatchArray | null;
                            [Symbol.replace]: {
                                (string: string, replaceValue: string): string;
                                (string: string, replacer: (substring: string, ...args: any[]) => string): string;
                            };
                            [Symbol.search]: (string: string) => number;
                            [Symbol.split]: (string: string, limit?: number | undefined) => string[];
                            [Symbol.matchAll]: (str: string) => IterableIterator<RegExpMatchArray>;
                        } | ((params: {
                            column: import("vxe-table").VxeTableDefines.ColumnInfo<any>;
                        }) => any) | {
                            toString: () => string;
                            toDateString: () => string;
                            toTimeString: () => string;
                            toLocaleString: {
                                (): string;
                                (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
                                (locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions | undefined): string;
                            };
                            toLocaleDateString: {
                                (): string;
                                (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
                                (locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions | undefined): string;
                            };
                            toLocaleTimeString: {
                                (): string;
                                (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
                                (locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions | undefined): string;
                            };
                            valueOf: () => number;
                            getTime: () => number;
                            getFullYear: () => number;
                            getUTCFullYear: () => number;
                            getMonth: () => number;
                            getUTCMonth: () => number;
                            getDate: () => number;
                            getUTCDate: () => number;
                            getDay: () => number;
                            getUTCDay: () => number;
                            getHours: () => number;
                            getUTCHours: () => number;
                            getMinutes: () => number;
                            getUTCMinutes: () => number;
                            getSeconds: () => number;
                            getUTCSeconds: () => number;
                            getMilliseconds: () => number;
                            getUTCMilliseconds: () => number;
                            getTimezoneOffset: () => number;
                            setTime: (time: number) => number;
                            setMilliseconds: (ms: number) => number;
                            setUTCMilliseconds: (ms: number) => number;
                            setSeconds: (sec: number, ms?: number | undefined) => number;
                            setUTCSeconds: (sec: number, ms?: number | undefined) => number;
                            setMinutes: (min: number, sec?: number | undefined, ms?: number | undefined) => number;
                            setUTCMinutes: (min: number, sec?: number | undefined, ms?: number | undefined) => number;
                            setHours: (hours: number, min?: number | undefined, sec?: number | undefined, ms?: number | undefined) => number;
                            setUTCHours: (hours: number, min?: number | undefined, sec?: number | undefined, ms?: number | undefined) => number;
                            setDate: (date: number) => number;
                            setUTCDate: (date: number) => number;
                            setMonth: (month: number, date?: number | undefined) => number;
                            setUTCMonth: (month: number, date?: number | undefined) => number;
                            setFullYear: (year: number, month?: number | undefined, date?: number | undefined) => number;
                            setUTCFullYear: (year: number, month?: number | undefined, date?: number | undefined) => number;
                            toUTCString: () => string;
                            toISOString: () => string;
                            toJSON: (key?: any) => string;
                            [Symbol.toPrimitive]: {
                                (hint: "default"): string;
                                (hint: "string"): string;
                                (hint: "number"): number;
                                (hint: string): string | number;
                            };
                        } | null | undefined;
                        immediate?: boolean | undefined;
                        content?: string | undefined;
                        placeholder?: string | undefined;
                        autofocus?: string | undefined;
                        autoselect?: boolean | undefined;
                    };
                    contentRender: {
                        name?: string | undefined;
                        props?: Record<string, any> | undefined;
                        attrs?: Record<string, any> | undefined;
                        events?: Record<string, (cellParams: import("vxe-table").VxeColumnSlotTypes.ContentSlotParams<any>, ...args: any[]) => any> | undefined;
                        children?: any[] | undefined;
                        options?: any[] | undefined;
                        optionProps?: {
                            value?: string | undefined;
                            label?: string | undefined;
                            disabled?: string | undefined;
                            key?: string | undefined;
                            children?: string | undefined;
                            hasChild?: string | undefined;
                            parent?: string | undefined;
                        } | undefined;
                        optionGroups?: any[] | undefined;
                        optionGroupProps?: {
                            options?: string | undefined;
                            label?: string | undefined;
                            key?: string | undefined;
                        } | undefined;
                    };
                    params: any;
                    slots: {
                        title?: string | ((params: import("vxe-table").VxeColumnSlotTypes.HeaderSlotParams<any>) => import("vxe-table").VxeComponentSlotType | import("vxe-table").VxeComponentSlotType[]) | null | undefined;
                        radio?: string | ((params: import("vxe-table").VxeColumnSlotTypes.RadioSlotParams<any>) => import("vxe-table").VxeComponentSlotType | import("vxe-table").VxeComponentSlotType[]) | null | undefined;
                        checkbox?: string | ((params: import("vxe-table").VxeColumnSlotTypes.CheckboxSlotParams<any>) => import("vxe-table").VxeComponentSlotType | import("vxe-table").VxeComponentSlotType[]) | null | undefined;
                        default?: string | ((params: import("vxe-table").VxeColumnSlotTypes.DefaultSlotParams<any>) => import("vxe-table").VxeComponentSlotType | import("vxe-table").VxeComponentSlotType[]) | null | undefined;
                        header?: string | ((params: import("vxe-table").VxeColumnSlotTypes.HeaderSlotParams<any>) => import("vxe-table").VxeComponentSlotType | import("vxe-table").VxeComponentSlotType[]) | null | undefined;
                        footer?: string | ((params: import("vxe-table").VxeColumnSlotTypes.FooterSlotParams<any>) => import("vxe-table").VxeComponentSlotType | import("vxe-table").VxeComponentSlotType[]) | null | undefined;
                        content?: string | ((params: import("vxe-table").VxeColumnSlotTypes.ContentSlotParams<any>) => import("vxe-table").VxeComponentSlotType | import("vxe-table").VxeComponentSlotType[]) | null | undefined;
                        filter?: string | ((params: import("vxe-table").VxeColumnSlotTypes.FilterSlotParams<any>) => import("vxe-table").VxeComponentSlotType | import("vxe-table").VxeComponentSlotType[]) | null | undefined;
                        edit?: string | ((params: import("vxe-table").VxeColumnSlotTypes.EditSlotParams<any>) => import("vxe-table").VxeComponentSlotType | import("vxe-table").VxeComponentSlotType[]) | null | undefined;
                        valid?: string | ((params: import("vxe-table").VxeColumnSlotTypes.ValidSlotParams<any>) => import("vxe-table").VxeComponentSlotType | import("vxe-table").VxeComponentSlotType[]) | null | undefined;
                        icon?: string | ((params: import("vxe-table").VxeColumnSlotTypes.IconSlotParams<any>) => import("vxe-table").VxeComponentSlotType | import("vxe-table").VxeComponentSlotType[]) | null | undefined;
                    };
                    id: string;
                    parentId: string;
                    level: number;
                    rowSpan: number;
                    colSpan: number;
                    halfVisible: boolean;
                    defaultVisible: any;
                    defaultFixed: any;
                    checked: boolean;
                    halfChecked: boolean;
                    disabled: boolean;
                    order: import("vxe-table").VxeTablePropTypes.SortOrder;
                    sortTime: number;
                    sortNumber: number;
                    renderSortNumber: number;
                    renderFixed: import("vxe-table").VxeColumnPropTypes.Fixed;
                    renderVisible: boolean;
                    renderWidth: number;
                    renderHeight: number;
                    renderAutoWidth: number;
                    renderResizeWidth: number;
                    resizeWidth: number;
                    model: {
                        update: boolean;
                        value: any;
                    };
                    children: any[];
                    renderHeader: (params: import("vxe-table").VxeTableDefines.CellRenderHeaderParams<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                        [key: string]: any;
                    }>[];
                    renderCell: (params: import("vxe-table").VxeTableDefines.CellRenderCellParams<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                        [key: string]: any;
                    }>[];
                    renderData: (params: import("vxe-table").VxeTableDefines.CellRenderDataParams<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                        [key: string]: any;
                    }>[];
                    renderFooter: (params: import("vxe-table").VxeTableDefines.CellRenderFooterParams<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                        [key: string]: any;
                    }>[];
                    getTitle: () => string;
                    getKey: () => string;
                }[];
                width: import("vxe-table").VxeColumnPropTypes.Width;
                filterMethod: import("vxe-table").VxeColumnPropTypes.FilterMethod<any>;
                minWidth: import("vxe-table").VxeColumnPropTypes.MinWidth;
                checked: boolean;
                model: {
                    update: boolean;
                    value: any;
                };
                maxWidth: import("vxe-table").VxeColumnPropTypes.MaxWidth;
                order: import("vxe-table").VxeTablePropTypes.SortOrder;
                renderHeader: (params: import("vxe-table").VxeTableDefines.CellRenderHeaderParams<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                renderFooter: (params: import("vxe-table").VxeTableDefines.CellRenderFooterParams<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                formatter: import("vxe-table").VxeColumnPropTypes.Formatter<any>;
                sortable: boolean;
                align: import("vxe-table").VxeColumnPropTypes.Align;
                resizable: boolean;
                field: string;
                headerAlign: import("vxe-table").VxeColumnPropTypes.Align;
                footerAlign: import("vxe-table").VxeColumnPropTypes.Align;
                showOverflow: import("vxe-table").VxeTablePropTypes.ShowOverflow;
                showHeaderOverflow: import("vxe-table").VxeTablePropTypes.ShowOverflow;
                showFooterOverflow: import("vxe-table").VxeTablePropTypes.ShowOverflow;
                level: number;
                property: string;
                headerClassName: import("vxe-table").VxeColumnPropTypes.HeaderClassName<any>;
                footerClassName: import("vxe-table").VxeColumnPropTypes.FooterClassName<any>;
                footerFormatter: import("vxe-table").VxeColumnPropTypes.FooterFormatter<any>;
                sortBy: import("vxe-table").VxeColumnPropTypes.SortBy<any>;
                sortType: import("vxe-table").VxeColumnPropTypes.SortType;
                filterMultiple: boolean;
                filterRender: {
                    name?: string | undefined;
                    props?: {
                        [key: string]: any;
                    } | undefined;
                    attrs?: {
                        [key: string]: any;
                    } | undefined;
                    events?: {
                        [key: string]: (...args: any[]) => any;
                    } | undefined;
                    children?: any[] | undefined;
                    enabled?: boolean | undefined;
                    options?: any[] | undefined;
                    optionProps?: {
                        value?: string | undefined;
                        label?: string | undefined;
                        disabled?: string | undefined;
                        key?: string | undefined;
                        children?: string | undefined;
                        hasChild?: string | undefined;
                        parent?: string | undefined;
                    } | undefined;
                    optionGroups?: any[] | undefined;
                    optionGroupProps?: {
                        options?: string | undefined;
                        label?: string | undefined;
                        key?: string | undefined;
                    } | undefined;
                    content?: string | undefined;
                    cellType?: import("vxe-table").VxeColumnPropTypes.CellType | undefined;
                };
                treeNode: boolean;
                exportMethod: import("vxe-table").VxeColumnPropTypes.ExportMethod<any>;
                footerExportMethod: import("vxe-table").VxeColumnPropTypes.FooterExportMethod<any>;
                titleHelp: {
                    useHTML?: boolean | undefined;
                    content?: import("vxe-table").VxeTooltipPropTypes.Content | undefined;
                    enterable?: boolean | undefined;
                    theme?: import("vxe-table").VxeTooltipPropTypes.Theme | undefined;
                    icon?: string | undefined;
                    iconStatus?: string | undefined;
                    message?: string | undefined;
                };
                titlePrefix: {
                    useHTML?: boolean | undefined;
                    content?: import("vxe-table").VxeTooltipPropTypes.Content | undefined;
                    enterable?: boolean | undefined;
                    theme?: import("vxe-table").VxeTooltipPropTypes.Theme | undefined;
                    icon?: string | undefined;
                    iconStatus?: string | undefined;
                    message?: string | undefined;
                };
                titleSuffix: {
                    useHTML?: boolean | undefined;
                    content?: import("vxe-table").VxeTooltipPropTypes.Content | undefined;
                    enterable?: boolean | undefined;
                    theme?: import("vxe-table").VxeTooltipPropTypes.Theme | undefined;
                    icon?: string | undefined;
                    iconStatus?: string | undefined;
                    message?: string | undefined;
                };
                cellType: import("vxe-table").VxeColumnPropTypes.CellType;
                cellRender: {
                    name?: string | undefined;
                    props?: Record<string, any> | undefined;
                    attrs?: Record<string, any> | undefined;
                    children?: any[] | undefined;
                    events?: Record<string, (cellParams: import("vxe-table").VxeColumnSlotTypes.DefaultSlotParams<any>, ...args: any[]) => any> | undefined;
                    options?: any[] | undefined;
                    optionProps?: {
                        value?: string | undefined;
                        label?: string | undefined;
                        disabled?: string | undefined;
                        key?: string | undefined;
                        children?: string | undefined;
                        hasChild?: string | undefined;
                        parent?: string | undefined;
                    } | undefined;
                    optionGroups?: any[] | undefined;
                    optionGroupProps?: {
                        options?: string | undefined;
                        label?: string | undefined;
                        key?: string | undefined;
                    } | undefined;
                    content?: string | undefined;
                };
                editRender: {
                    name?: string | undefined;
                    props?: Record<string, any> | undefined;
                    attrs?: Record<string, any> | undefined;
                    children?: any[] | undefined;
                    events?: Record<string, (cellParams: import("vxe-table").VxeColumnSlotTypes.EditSlotParams<any>, ...args: any[]) => any> | undefined;
                    enabled?: boolean | undefined;
                    options?: any[] | undefined;
                    optionProps?: {
                        value?: string | undefined;
                        label?: string | undefined;
                        disabled?: string | undefined;
                        key?: string | undefined;
                        children?: string | undefined;
                        hasChild?: string | undefined;
                        parent?: string | undefined;
                    } | undefined;
                    optionGroups?: any[] | undefined;
                    optionGroupProps?: {
                        options?: string | undefined;
                        label?: string | undefined;
                        key?: string | undefined;
                    } | undefined;
                    autoFocus?: string | undefined;
                    autoSelect?: boolean | undefined;
                    defaultValue?: string | number | object | any[] | {
                        exec: (string: string) => RegExpExecArray | null;
                        test: (string: string) => boolean;
                        readonly source: string;
                        readonly global: boolean;
                        readonly ignoreCase: boolean;
                        readonly multiline: boolean;
                        lastIndex: number;
                        compile: (pattern: string, flags?: string | undefined) => RegExp;
                        readonly flags: string;
                        readonly sticky: boolean;
                        readonly unicode: boolean;
                        readonly dotAll: boolean;
                        readonly hasIndices: boolean;
                        [Symbol.match]: (string: string) => RegExpMatchArray | null;
                        [Symbol.replace]: {
                            (string: string, replaceValue: string): string;
                            (string: string, replacer: (substring: string, ...args: any[]) => string): string;
                        };
                        [Symbol.search]: (string: string) => number;
                        [Symbol.split]: (string: string, limit?: number | undefined) => string[];
                        [Symbol.matchAll]: (str: string) => IterableIterator<RegExpMatchArray>;
                    } | ((params: {
                        column: import("vxe-table").VxeTableDefines.ColumnInfo<any>;
                    }) => any) | {
                        toString: () => string;
                        toDateString: () => string;
                        toTimeString: () => string;
                        toLocaleString: {
                            (): string;
                            (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
                            (locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions | undefined): string;
                        };
                        toLocaleDateString: {
                            (): string;
                            (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
                            (locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions | undefined): string;
                        };
                        toLocaleTimeString: {
                            (): string;
                            (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
                            (locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions | undefined): string;
                        };
                        valueOf: () => number;
                        getTime: () => number;
                        getFullYear: () => number;
                        getUTCFullYear: () => number;
                        getMonth: () => number;
                        getUTCMonth: () => number;
                        getDate: () => number;
                        getUTCDate: () => number;
                        getDay: () => number;
                        getUTCDay: () => number;
                        getHours: () => number;
                        getUTCHours: () => number;
                        getMinutes: () => number;
                        getUTCMinutes: () => number;
                        getSeconds: () => number;
                        getUTCSeconds: () => number;
                        getMilliseconds: () => number;
                        getUTCMilliseconds: () => number;
                        getTimezoneOffset: () => number;
                        setTime: (time: number) => number;
                        setMilliseconds: (ms: number) => number;
                        setUTCMilliseconds: (ms: number) => number;
                        setSeconds: (sec: number, ms?: number | undefined) => number;
                        setUTCSeconds: (sec: number, ms?: number | undefined) => number;
                        setMinutes: (min: number, sec?: number | undefined, ms?: number | undefined) => number;
                        setUTCMinutes: (min: number, sec?: number | undefined, ms?: number | undefined) => number;
                        setHours: (hours: number, min?: number | undefined, sec?: number | undefined, ms?: number | undefined) => number;
                        setUTCHours: (hours: number, min?: number | undefined, sec?: number | undefined, ms?: number | undefined) => number;
                        setDate: (date: number) => number;
                        setUTCDate: (date: number) => number;
                        setMonth: (month: number, date?: number | undefined) => number;
                        setUTCMonth: (month: number, date?: number | undefined) => number;
                        setFullYear: (year: number, month?: number | undefined, date?: number | undefined) => number;
                        setUTCFullYear: (year: number, month?: number | undefined, date?: number | undefined) => number;
                        toUTCString: () => string;
                        toISOString: () => string;
                        toJSON: (key?: any) => string;
                        [Symbol.toPrimitive]: {
                            (hint: "default"): string;
                            (hint: "string"): string;
                            (hint: "number"): number;
                            (hint: string): string | number;
                        };
                    } | null | undefined;
                    immediate?: boolean | undefined;
                    content?: string | undefined;
                    placeholder?: string | undefined;
                    autofocus?: string | undefined;
                    autoselect?: boolean | undefined;
                };
                contentRender: {
                    name?: string | undefined;
                    props?: Record<string, any> | undefined;
                    attrs?: Record<string, any> | undefined;
                    events?: Record<string, (cellParams: import("vxe-table").VxeColumnSlotTypes.ContentSlotParams<any>, ...args: any[]) => any> | undefined;
                    children?: any[] | undefined;
                    options?: any[] | undefined;
                    optionProps?: {
                        value?: string | undefined;
                        label?: string | undefined;
                        disabled?: string | undefined;
                        key?: string | undefined;
                        children?: string | undefined;
                        hasChild?: string | undefined;
                        parent?: string | undefined;
                    } | undefined;
                    optionGroups?: any[] | undefined;
                    optionGroupProps?: {
                        options?: string | undefined;
                        label?: string | undefined;
                        key?: string | undefined;
                    } | undefined;
                };
                parentId: string;
                rowSpan: number;
                halfVisible: boolean;
                defaultVisible: any;
                defaultFixed: any;
                halfChecked: boolean;
                sortTime: number;
                sortNumber: number;
                renderSortNumber: number;
                renderFixed: import("vxe-table").VxeColumnPropTypes.Fixed;
                renderVisible: boolean;
                renderWidth: number;
                renderHeight: number;
                renderAutoWidth: number;
                renderResizeWidth: number;
                resizeWidth: number;
                renderCell: (params: import("vxe-table").VxeTableDefines.CellRenderCellParams<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                renderData: (params: import("vxe-table").VxeTableDefines.CellRenderDataParams<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                getTitle: () => string;
                getKey: () => string;
                params: {
                    renderType: import("./types").SdProTableDefineTypes.RenderType;
                    renderParams: Record<string, any>;
                    filterType: import("./types").SdProTableDefineTypes.FilterType;
                    valueEnums: {
                        [x: string]: string | number | undefined;
                        id: string | number;
                        name: string;
                    }[];
                    resolveColumns: {
                        id: string;
                        name: string;
                        formatter?: import("./types").SdProTableDefineTypes.FormatterMethod<any> | undefined;
                        searchable?: boolean | undefined;
                        filterable?: boolean | undefined;
                        conditionFilterable?: boolean | undefined;
                        filterType?: import("./types").SdProTableDefineTypes.FilterType | undefined;
                    }[];
                    aggregates: import("./types").SdProTableDefineTypes.AggregateType[];
                    filterable: boolean;
                    conditionFilterable: boolean;
                    searchable: boolean;
                    formatter?: import("./types").SdProTableDefineTypes.FormatterMethod<any> | undefined;
                    filterMethod?: import("./types").SdProTableFilterDefineTypes.FilterMethod<any> | undefined;
                    exportable: boolean;
                };
            };
            data: {
                id: string;
                title: string;
                filter_mode: "content" | "custom";
                is_apply: boolean;
                can_custom_filter: boolean;
                content_data: {
                    is_all: boolean;
                    is_indeterminate: boolean;
                    search: string;
                    values: (string | number)[];
                    valuex: Record<string, boolean>;
                    filters: {
                        id: string | number;
                        name: string;
                    }[];
                };
                custom_data: {
                    render_type: "number" | "text" | "date" | "datetime";
                    join_mode: "and" | "or";
                    type1: import("./types").SdProTableFilterDefineTypes.FilterconditionType | undefined;
                    value1: string | number | undefined;
                    type2: import("./types").SdProTableFilterDefineTypes.FilterconditionType | undefined;
                    value2: string | number | undefined;
                    filters: {
                        id: string | number;
                        name: string;
                    }[];
                };
            }[];
        }[];
        full_rows: any[];
        page_index: number;
        page_size: number;
        search: string;
        search_loading: boolean;
        is_fullscreen: boolean;
        visible_export_dialog: boolean;
        visible_column_setting_dialog: boolean;
        show_filter_panel: boolean;
    };
    body_ref: import("vue").Ref<HTMLDivElement | undefined>;
    body_height: import("vue").Ref<number>;
    grid_ref: import("vue").Ref<VxeGridInstance | undefined>;
    grid_opts$: import("vue").ComputedRef<import("vxe-table").VxeGridProps<any>>;
    visible_rows$: import("vue").ComputedRef<any[]>;
    empty_text$: import("vue").ComputedRef<string>;
    tools_config$: import("vue").ComputedRef<{
        enableRefresh: boolean;
        enableExport: boolean;
        enableFullscreen: boolean;
        enableColumnSetting: boolean;
    }>;
    handleGridEvent: (key: string, params: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    stripe: {
        type: BooleanConstructor;
        default: boolean;
    };
    id: {
        type: StringConstructor;
    };
    title: {
        type: StringConstructor;
    };
    height: {
        type: import("vue").PropType<string | number>;
    };
    minHeight: {
        type: import("vue").PropType<string | number>;
    };
    emptyText: {
        type: StringConstructor;
        default: string;
    };
    align: {
        type: import("vue").PropType<import("vxe-table").VxeTablePropTypes.Align>;
        default: string;
    };
    headerAlign: {
        type: import("vue").PropType<import("vxe-table").VxeTablePropTypes.Align>;
    };
    footerAlign: {
        type: import("vue").PropType<import("vxe-table").VxeTablePropTypes.Align>;
    };
    showOverflow: {
        type: import("vue").PropType<import("vxe-table").VxeTablePropTypes.ShowOverflow>;
        default: string;
    };
    showHeaderOverflow: {
        type: import("vue").PropType<import("vxe-table").VxeTablePropTypes.ShowOverflow>;
        default: string;
    };
    showFooterOverflow: {
        type: import("vue").PropType<import("vxe-table").VxeTablePropTypes.ShowOverflow>;
        default: string;
    };
    rowClassName: {
        type: import("vue").PropType<import("./types").SdProTableDefineTypes.RowClassName>;
    };
    rowStyle: {
        type: import("vue").PropType<import("./types").SdProTableDefineTypes.RowStyle>;
    };
    cellClassName: {
        type: import("vue").PropType<import("./types").SdProTableDefineTypes.CellClassName>;
    };
    cellStyle: {
        type: import("vue").PropType<import("./types").SdProTableDefineTypes.CellStyle>;
    };
    headerStyle: {
        type: import("vue").PropType<import("vue").StyleValue>;
    };
    alertStyle: {
        type: import("vue").PropType<import("vue").StyleValue>;
    };
    bodyStyle: {
        type: import("vue").PropType<import("vue").StyleValue>;
    };
    footerStyle: {
        type: import("vue").PropType<import("vue").StyleValue>;
    };
    showHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    showFooter: {
        type: BooleanConstructor;
        default: boolean;
    };
    showAggregates: {
        type: BooleanConstructor;
        default: boolean;
    };
    cols: {
        type: import("vue").PropType<string | import("./types").SdProTableDefineTypes.ColumnOptions<any>[]>;
    };
    colsConfig: {
        type: import("vue").PropType<Record<string, import("./types").SdProTableDefineTypes.ColumnOptions<any>>>;
    };
    columnConfig: {
        type: import("vue").PropType<import("./types").SdProTableDefineTypes.ColumnConfig>;
    };
    rows: {
        type: import("vue").PropType<any[]>;
        default: () => never[];
    };
    rowKey: {
        type: StringConstructor;
    };
    rowHeight: {
        type: NumberConstructor;
        default: number;
    };
    rowConfig: {
        type: import("vue").PropType<import("./types").SdProTableDefineTypes.RowConfig>;
    };
    operations: {
        type: import("vue").PropType<import("./types").SdProTableDefineTypes.OperationItem<any>[]>;
    };
    operationsConfig: {
        type: import("vue").PropType<import("./types").SdProTableDefineTypes.OperationsConfig>;
    };
    activeTab: {
        type: import("vue").PropType<string | number>;
    };
    tabs: {
        type: import("vue").PropType<import("./types").SdProTableDefineTypes.HeaderTabItem[]>;
    };
    tabsConfig: {
        type: import("vue").PropType<import("./types").SdProTableDefineTypes.HeaderTabsConfig>;
    };
    buttons: {
        type: import("vue").PropType<import("./types").SdProTableDefineTypes.HeaderButtonItem[]>;
    };
    enableTools: {
        type: BooleanConstructor;
        default: boolean;
    };
    toolsConfig: {
        type: import("vue").PropType<import("./types").SdProTableDefineTypes.ToolsConfig>;
    };
    enableQuickSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    quickSearchConfig: {
        type: import("vue").PropType<import("./types").SdProTableDefineTypes.QuickSearchConfig>;
    };
    enablePager: {
        type: BooleanConstructor;
        default: boolean;
    };
    pagerConfig: {
        type: import("vue").PropType<import("./types").SdProTableDefineTypes.PagerConfig>;
    };
    cacheConfig: {
        type: import("vue").PropType<import("./types").SdProTableDefineTypes.CacheConfig>;
    };
    mergeCells: {
        type: ArrayConstructor;
    };
    spanMethod: {
        type: FunctionConstructor;
    };
    enableScrollY: {
        type: BooleanConstructor;
        default: boolean;
    };
    enableSeq: {
        type: BooleanConstructor;
        default: boolean;
    };
    seqColumnConfig: {
        type: import("vue").PropType<import("vxe-table").VxeColumnProps<any>>;
    };
    enableExpand: {
        type: BooleanConstructor;
        default: boolean;
    };
    expandColumnConfig: {
        type: import("vue").PropType<import("vxe-table").VxeColumnProps<any>>;
    };
    enableReadio: {
        type: BooleanConstructor;
        deafult: boolean;
    };
    radioConfig: {
        type: import("vue").PropType<import("./types").SdProTableDefineTypes.RadioConfig>;
    };
    radioColumnConfig: {
        type: import("vue").PropType<import("vxe-table").VxeColumnProps<any>>;
    };
    enableCheckbox: {
        type: BooleanConstructor;
        default: boolean;
    };
    checkboxConfig: {
        type: import("vue").PropType<import("./types").SdProTableDefineTypes.CheckboxConfig>;
    };
    checkboxColumnConfig: {
        type: import("vue").PropType<import("vxe-table").VxeColumnProps<any>>;
    };
    enableDargSort: {
        type: BooleanConstructor;
        default: boolean;
    };
    beforeDargSort: {
        type: import("vue").PropType<import("./types").SdProTableDefineTypes.BeforeDargSort>;
    };
    sortableOptions: {
        type: import("vue").PropType<import("./types").SdProTableDefineTypes.SortableOptions>;
    };
    sortColumnConfig: {
        type: import("vue").PropType<import("vxe-table").VxeColumnProps<any>>;
    };
    enableEdit: {
        type: BooleanConstructor;
    };
    editConfig: {
        type: import("vue").PropType<import("./types").SdProTableDefineTypes.EditConfig>;
    };
    gridConfig: {
        type: import("vue").PropType<import("./types").SdProTableDefineTypes.GridConfig>;
    };
}>> & {
    [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
}, {
    emptyText: string;
    showHeader: boolean;
    showFooter: boolean;
    enableDargSort: boolean;
    border: boolean;
    rows: any[];
    rowHeight: number;
    align: import("vxe-table").VxeTablePropTypes.Align;
    enableSeq: boolean;
    stripe: boolean;
    showOverflow: import("vxe-table").VxeTablePropTypes.ShowOverflow;
    showHeaderOverflow: import("vxe-table").VxeTablePropTypes.ShowOverflow;
    showFooterOverflow: import("vxe-table").VxeTablePropTypes.ShowOverflow;
    showAggregates: boolean;
    enableTools: boolean;
    enableQuickSearch: boolean;
    enablePager: boolean;
    enableScrollY: boolean;
    enableExpand: boolean;
    enableReadio: boolean;
    enableCheckbox: boolean;
    enableEdit: boolean;
}, {}>;
export default _default;
