import type { UnwrapNestedRefs } from 'vue';
import type { SdProTableProps } from '../pro-table';
import type { SdProTableDefineTypes, SdProTableContext } from '../types';
export declare function defineProTableContext(): import("vue").Ref<SdProTableContext | undefined>;
export declare function defineProTableConfig<T extends object = SdProTableProps>(config: T): UnwrapNestedRefs<T>;
export declare function defineProTableCols(...params: (string | SdProTableDefineTypes.ColumnOptions[])[]): SdProTableDefineTypes.ColumnOptions<any>[];
export declare function defineProTableColsWithConfig(params: (string | SdProTableDefineTypes.ColumnOptions[]), config: Record<string, SdProTableDefineTypes.ColumnOptions>): {
    id?: string | undefined;
    name?: string | undefined;
    desc?: string | undefined;
    width?: import("vxe-table").VxeColumnPropTypes.Width | undefined;
    minWidth?: import("vxe-table").VxeColumnPropTypes.MinWidth | undefined;
    resizable?: boolean | undefined;
    visible?: boolean | undefined;
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
    sortable?: boolean | undefined;
    sortBy?: import("vxe-table").VxeColumnPropTypes.SortBy<any> | undefined;
    sortType?: import("vxe-table").VxeColumnPropTypes.SortType | undefined;
    filterMultiple?: boolean | undefined;
    slots?: Partial<Omit<import("vxe-table").VxeColumnPropTypes.Slots<any>, "content" | "default" | "edit"> & {
        default: string | ((params: Omit<import("vxe-table").VxeColumnSlotTypes.DefaultSlotParams<any> & {
            $proTable: SdProTableContext;
        }, "row"> & {
            row: any;
        }) => string[] | import("vue").Component[] | JSX.Element[] | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | null;
        content: string | ((params: Omit<import("vxe-table").VxeColumnSlotTypes.ContentSlotParams<any>, "row"> & {
            row: any;
        }) => string[] | import("vue").Component[] | JSX.Element[] | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | null;
        edit: string | ((params: Omit<import("vxe-table").VxeColumnSlotTypes.EditSlotParams<any>, "row"> & {
            row: any;
        }) => string[] | import("vue").Component[] | JSX.Element[] | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | null;
    }> | undefined;
    editRender?: string | import("vxe-table").VxeColumnPropTypes.EditRender<any, Record<string, any>> | undefined;
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
    render?: (string | ((params: Omit<import("vxe-table").VxeColumnSlotTypes.DefaultSlotParams<any> & {
        $proTable: SdProTableContext;
    }, "row"> & {
        row: any;
    }) => string[] | import("vue").Component[] | JSX.Element[] | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[]) | null) | undefined;
    renderHeader?: string | ((params: import("vxe-table").VxeColumnSlotTypes.HeaderSlotParams<any>) => import("vxe-table").VxeComponentSlotType | import("vxe-table").VxeComponentSlotType[]) | null | undefined;
    renderFooter?: string | ((params: import("vxe-table").VxeColumnSlotTypes.FooterSlotParams<any>) => import("vxe-table").VxeComponentSlotType | import("vxe-table").VxeComponentSlotType[]) | null | undefined;
    renderContent?: (string | ((params: Omit<import("vxe-table").VxeColumnSlotTypes.ContentSlotParams<any>, "row"> & {
        row: any;
    }) => string[] | import("vue").Component[] | JSX.Element[] | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[]) | null) | undefined;
    renderEdit?: (string | ((params: Omit<import("vxe-table").VxeColumnSlotTypes.EditSlotParams<any>, "row"> & {
        row: any;
    }) => string[] | import("vue").Component[] | JSX.Element[] | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[]) | null) | undefined;
}[];
