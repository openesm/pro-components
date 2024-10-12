import type { UnwrapNestedRefs } from 'vue';
import type { SdProTableProps } from '../pro-table';
import type { SdProTableDefineTypes, SdProTableContext } from '../types';
export declare function defineProTableContext(): import("vue").Ref<SdProTableContext | undefined>;
export declare function defineProTableConfig<T extends object = SdProTableProps>(config: T): UnwrapNestedRefs<T>;
export declare function defineProTableCols(...params: (string | SdProTableDefineTypes.ColumnOptions[])[]): SdProTableDefineTypes.ColumnOptions<any>[];
export declare function defineProTableColsWithConfig(params: (string | SdProTableDefineTypes.ColumnOptions[]), config: Record<string, SdProTableDefineTypes.ColumnOptions>): {
    id?: any;
    name?: any;
    desc?: string | undefined;
    width?: any;
    minWidth?: any;
    resizable?: any;
    visible?: any;
    fixed?: any;
    align?: any;
    headerAlign?: any;
    footerAlign?: any;
    showOverflow?: any;
    showHeaderOverflow?: any;
    showFooterOverflow?: any;
    className?: any;
    headerClassName?: any;
    footerClassName?: any;
    sortable?: any;
    sortBy?: any;
    sortType?: any;
    filterMultiple?: any;
    slots?: Partial<Omit<VxeColumnPropTypes.Slots, "content" | "default" | "edit"> & {
        default: string | ((params: Omit<any, "row"> & {
            row: any;
        }) => string[] | import("vue").Component[] | JSX.Element[] | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | null;
        content: string | ((params: Omit<VxeColumnSlotTypes.ContentSlotParams, "row"> & {
            row: any;
        }) => string[] | import("vue").Component[] | JSX.Element[] | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | null;
        edit: string | ((params: Omit<VxeColumnSlotTypes.EditSlotParams, "row"> & {
            row: any;
        }) => string[] | import("vue").Component[] | JSX.Element[] | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | null;
    }> | undefined;
    editRender?: any;
    children?: SdProTableDefineTypes.ColumnOptions<any>[] | undefined;
    renderType?: SdProTableDefineTypes.RenderType | undefined;
    renderParams?: Record<string, any> | undefined;
    filterType?: SdProTableDefineTypes.FilterType | undefined;
    valueEnums?: number[] | string[] | {
        [k: string]: string | number | undefined;
        id?: string | number | undefined;
        name?: string | undefined;
    }[] | undefined;
    resolveColumns?: SdProTableDefineTypes.ResolveColumnOptions[] | undefined;
    aggregates?: SdProTableDefineTypes.AggregateType[] | undefined;
    searchable?: boolean | undefined;
    formatter?: SdProTableDefineTypes.FormatterMethod<any> | undefined;
    filterable?: boolean | undefined;
    conditionFilterable?: boolean | undefined;
    filterMethod?: import("../types").SdProTableFilterDefineTypes.FilterMethod<any> | undefined;
    render?: (string | ((params: Omit<any, "row"> & {
        row: any;
    }) => string[] | import("vue").Component[] | JSX.Element[] | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[]) | null) | undefined;
    renderHeader?: any;
    renderFooter?: any;
    renderContent?: (string | ((params: Omit<VxeColumnSlotTypes.ContentSlotParams, "row"> & {
        row: any;
    }) => string[] | import("vue").Component[] | JSX.Element[] | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[]) | null) | undefined;
    renderEdit?: (string | ((params: Omit<VxeColumnSlotTypes.EditSlotParams, "row"> & {
        row: any;
    }) => string[] | import("vue").Component[] | JSX.Element[] | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[]) | null) | undefined;
}[];
