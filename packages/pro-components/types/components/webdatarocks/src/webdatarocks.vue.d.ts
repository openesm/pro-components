import type { CSSProperties } from 'vue';
declare const _default: import("vue").DefineComponent<{
    report: {
        type: import("vue").PropType<any>;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
    };
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    toolbar: {
        type: BooleanConstructor;
        default: boolean;
    };
    customizeCell: {
        type: FunctionConstructor;
    };
}, {
    require_loading: import("vue").Ref<boolean>;
    wrap_style$: import("vue").ComputedRef<CSSProperties>;
    container_ref: import("vue").Ref<HTMLElement | undefined>;
    exportExcel: (name?: string) => void;
    exportTo: (exportType: 'excel' | 'pdf' | 'html', parameters?: Record<string, any>, cb?: Function) => void;
    save: (options: any) => void;
    refresh: () => void;
    expandAllData: () => void;
    collapseAllData: () => void;
    removeSelection: () => void;
    openFieldsList: () => void;
    showOptionsDialog: () => void;
    showFormatCellsDialog: () => void;
    showConditionalFormattingDialog: () => void;
    getReport: (options: {
        withDefaults?: boolean;
        withGlobals?: boolean;
    }) => any;
    setReport: (report: any) => void;
    getOptions: () => any;
    setOptions: (options: any) => void;
    getData: (options?: any) => {
        data: never[];
        meta: {};
    };
    updateData: (options: {
        filename?: string;
        fieldSeparator?: string;
        data?: string | object[];
    }) => void;
    setCustomizeCell: (cb: Function) => void;
    scrollTo: (x: number, y: number) => void;
    scrollToTop: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    report: {
        type: import("vue").PropType<any>;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
    };
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    toolbar: {
        type: BooleanConstructor;
        default: boolean;
    };
    customizeCell: {
        type: FunctionConstructor;
    };
}>> & {
    [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
}, {
    height: string | number;
    toolbar: boolean;
}, {}>;
export default _default;
