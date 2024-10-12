import type { ExtractPublicPropTypes, PropType, StyleValue } from 'vue';
import type { VxeColumnProps } from 'vxe-table';
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
        type: PropType<import("vxe-table").VxeTablePropTypes.Align>;
        default: string;
    };
    headerAlign: {
        type: PropType<import("vxe-table").VxeTablePropTypes.Align>;
    };
    footerAlign: {
        type: PropType<import("vxe-table").VxeTablePropTypes.Align>;
    };
    showOverflow: {
        type: PropType<import("vxe-table").VxeTablePropTypes.ShowOverflow>;
        default: string;
    };
    showHeaderOverflow: {
        type: PropType<import("vxe-table").VxeTablePropTypes.ShowOverflow>;
        default: string;
    };
    showFooterOverflow: {
        type: PropType<import("vxe-table").VxeTablePropTypes.ShowOverflow>;
        default: string;
    };
    rowClassName: {
        type: PropType<SdProTableDefineTypes.RowClassName>;
    };
    rowStyle: {
        type: PropType<SdProTableDefineTypes.RowStyle>;
    };
    cellClassName: {
        type: PropType<SdProTableDefineTypes.CellClassName>;
    };
    cellStyle: {
        type: PropType<SdProTableDefineTypes.CellStyle>;
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
        type: PropType<SdProTableDefineTypes.ColumnConfig>;
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
        type: PropType<SdProTableDefineTypes.RowConfig>;
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
        type: PropType<VxeColumnProps<any>>;
    };
    enableExpand: {
        type: BooleanConstructor;
        default: boolean;
    };
    expandColumnConfig: {
        type: PropType<VxeColumnProps<any>>;
    };
    enableReadio: {
        type: BooleanConstructor;
        deafult: boolean;
    };
    radioConfig: {
        type: PropType<SdProTableDefineTypes.RadioConfig>;
    };
    radioColumnConfig: {
        type: PropType<VxeColumnProps<any>>;
    };
    enableCheckbox: {
        type: BooleanConstructor;
        default: boolean;
    };
    checkboxConfig: {
        type: PropType<SdProTableDefineTypes.CheckboxConfig>;
    };
    checkboxColumnConfig: {
        type: PropType<VxeColumnProps<any>>;
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
        type: PropType<VxeColumnProps<any>>;
    };
    enableEdit: {
        type: BooleanConstructor;
    };
    editConfig: {
        type: PropType<SdProTableDefineTypes.EditConfig>;
    };
    gridConfig: {
        type: PropType<SdProTableDefineTypes.GridConfig>;
    };
};
export declare const sdProTableEmits: string[];
export type SdProTableProps = ExtractPublicPropTypes<typeof sdProTableProps>;
