import type { ExtractPublicPropTypes, PropType, StyleValue } from 'vue';
import type { SdProTableDefineTypes } from './types';
export declare const sdProTableProps: {
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
        type: PropType<string | number>;
    };
    minHeight: {
        type: PropType<string | number>;
    };
    emptyText: {
        type: StringConstructor;
        default: string;
    };
    align: {
        type: PropType<VxeTablePropTypes.Align>;
        default: string;
    };
    headerAlign: {
        type: PropType<VxeTablePropTypes.HeaderAlign>;
    };
    footerAlign: {
        type: PropType<VxeTablePropTypes.FooterAlign>;
    };
    showOverflow: {
        type: PropType<VxeTablePropTypes.ShowOverflow>;
        default: string;
    };
    showHeaderOverflow: {
        type: PropType<VxeTablePropTypes.ShowHeaderOverflow>;
        default: string;
    };
    showFooterOverflow: {
        type: PropType<VxeTablePropTypes.ShowFooterOverflow>;
        default: string;
    };
    rowClassName: {
        type: PropType<VxeTablePropTypes.RowClassName>;
    };
    rowStyle: {
        type: PropType<VxeTablePropTypes.RowStyle>;
    };
    cellClassName: {
        type: PropType<VxeTablePropTypes.CellClassName>;
    };
    cellStyle: {
        type: PropType<VxeTablePropTypes.CellStyle>;
    };
    headerStyle: {
        type: PropType<StyleValue>;
    };
    alertStyle: {
        type: PropType<StyleValue>;
    };
    bodyStyle: {
        type: PropType<StyleValue>;
    };
    footerStyle: {
        type: PropType<StyleValue>;
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
        type: PropType<string | SdProTableDefineTypes.ColumnOptions<any>[]>;
    };
    colsConfig: {
        type: PropType<Record<string, SdProTableDefineTypes.ColumnOptions<any>>>;
    };
    columnConfig: {
        type: PropType<VxeTablePropTypes.ColumnConfig>;
    };
    rows: {
        type: PropType<any[]>;
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
        type: PropType<VxeTablePropTypes.RowConfig>;
    };
    operations: {
        type: PropType<SdProTableDefineTypes.OperationItem<any>[]>;
    };
    operationsConfig: {
        type: PropType<SdProTableDefineTypes.OperationsConfig>;
    };
    activeTab: {
        type: PropType<string | number>;
    };
    tabs: {
        type: PropType<SdProTableDefineTypes.HeaderTabItem[]>;
    };
    tabsConfig: {
        type: PropType<SdProTableDefineTypes.HeaderTabsConfig>;
    };
    buttons: {
        type: PropType<SdProTableDefineTypes.HeaderButtonItem[]>;
    };
    enableTools: {
        type: BooleanConstructor;
        default: boolean;
    };
    toolsConfig: {
        type: PropType<SdProTableDefineTypes.ToolsConfig>;
    };
    enableQuickSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    quickSearchConfig: {
        type: PropType<SdProTableDefineTypes.QuickSearchConfig>;
    };
    enablePager: {
        type: BooleanConstructor;
        default: boolean;
    };
    pagerConfig: {
        type: PropType<SdProTableDefineTypes.PagerConfig>;
    };
    cacheConfig: {
        type: PropType<SdProTableDefineTypes.CacheConfig>;
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
        type: PropType<VxeColumnProps>;
    };
    enableExpand: {
        type: BooleanConstructor;
        default: boolean;
    };
    expandColumnConfig: {
        type: PropType<VxeColumnProps>;
    };
    enableReadio: {
        type: BooleanConstructor;
        deafult: boolean;
    };
    radioConfig: {
        type: PropType<VxeTablePropTypes.RadioConfig>;
    };
    radioColumnConfig: {
        type: PropType<VxeColumnProps>;
    };
    enableCheckbox: {
        type: BooleanConstructor;
        default: boolean;
    };
    checkboxConfig: {
        type: PropType<VxeTablePropTypes.CheckboxConfig>;
    };
    checkboxColumnConfig: {
        type: PropType<VxeColumnProps>;
    };
    enableDargSort: {
        type: BooleanConstructor;
        default: boolean;
    };
    beforeDargSort: {
        type: PropType<SdProTableDefineTypes.BeforeDargSort>;
    };
    sortableOptions: {
        type: PropType<SdProTableDefineTypes.SortableOptions>;
    };
    sortColumnConfig: {
        type: PropType<VxeColumnProps>;
    };
    enableEdit: {
        type: BooleanConstructor;
    };
    editConfig: {
        type: PropType<SdProTableDefineTypes.EditConfig>;
    };
    gridConfig: {
        type: PropType<VxeTableProps>;
    };
};
export declare const sdProTableEmits: string[];
export type SdProTableProps = ExtractPublicPropTypes<typeof sdProTableProps>;
