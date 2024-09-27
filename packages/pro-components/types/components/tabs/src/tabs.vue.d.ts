import { TabPaneName, TabsPaneContext, TabsProps } from 'element-plus';

declare const _default: import('vue').DefineComponent<{
    options: {
        type: import('vue').PropType<import("../../../types").OptionComponentTypes.item[]>;
        default: () => never[];
    };
    prop: {
        type: import('vue').PropType<import("../../../types").OptionComponentTypes.PropConfig>;
    };
    type: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, "" | "card" | "border-card", unknown, "", boolean>;
    activeName: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    closable: BooleanConstructor;
    addable: BooleanConstructor;
    modelValue: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    editable: BooleanConstructor;
    tabPosition: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, "bottom" | "top" | "left" | "right", unknown, "top", boolean>;
    beforeLeave: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => (newName: TabPaneName, oldName: TabPaneName) => import('element-plus/es/utils/typescript.mjs').Awaitable<boolean | void>) | (() => (newName: TabPaneName, oldName: TabPaneName) => import('element-plus/es/utils/typescript.mjs').Awaitable<boolean | void>) | {
        (): (newName: TabPaneName, oldName: TabPaneName) => import('element-plus/es/utils/typescript.mjs').Awaitable<boolean | void>;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (newName: TabPaneName, oldName: TabPaneName) => import('element-plus/es/utils/typescript.mjs').Awaitable<boolean | void>) | (() => (newName: TabPaneName, oldName: TabPaneName) => import('element-plus/es/utils/typescript.mjs').Awaitable<boolean | void>) | {
        (): (newName: TabPaneName, oldName: TabPaneName) => import('element-plus/es/utils/typescript.mjs').Awaitable<boolean | void>;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => true, boolean>;
    stretch: BooleanConstructor;
}, {
    internal_value$: import('vue').WritableComputedRef<import('element-plus/es/utils/index.mjs').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined>;
    tabs_props$: import('vue').ComputedRef<TabsProps>;
    options$: import('vue').ComputedRef<any[]>;
    onTabClick: (pane: TabsPaneContext, ev: Event) => void;
    onTabEdit: (paneName: TabPaneName | undefined, action: 'remove' | 'add') => void;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    'tab-click': (pane: {
        uid: number;
        slots: Readonly<{
            [name: string]: import('vue').Slot<any> | undefined;
        }>;
        props: {
            readonly disabled: boolean;
            readonly label: string;
            readonly lazy: boolean;
            readonly closable: boolean;
            readonly name?: import('element-plus/es/utils/index.mjs').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined;
        };
        paneName: string | number | undefined;
        active: boolean;
        index: string | undefined;
        isClosable: boolean;
    }, ev: Event) => boolean;
    "update:modelValue": (name: TabPaneName) => boolean;
    tabClick: (pane: {
        uid: number;
        slots: Readonly<{
            [name: string]: import('vue').Slot<any> | undefined;
        }>;
        props: {
            readonly disabled: boolean;
            readonly label: string;
            readonly lazy: boolean;
            readonly closable: boolean;
            readonly name?: import('element-plus/es/utils/index.mjs').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined;
        };
        paneName: string | number | undefined;
        active: boolean;
        index: string | undefined;
        isClosable: boolean;
    }, ev: Event) => boolean;
    tabChange: (name: TabPaneName) => boolean;
    edit: (paneName: TabPaneName | undefined, action: "add" | "remove") => boolean;
    tabRemove: (name: TabPaneName) => boolean;
    tabAdd: () => boolean;
}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    options: {
        type: import('vue').PropType<import("../../../types").OptionComponentTypes.item[]>;
        default: () => never[];
    };
    prop: {
        type: import('vue').PropType<import("../../../types").OptionComponentTypes.PropConfig>;
    };
    type: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, "" | "card" | "border-card", unknown, "", boolean>;
    activeName: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    closable: BooleanConstructor;
    addable: BooleanConstructor;
    modelValue: {
        readonly type: import('vue').PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    editable: BooleanConstructor;
    tabPosition: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, "bottom" | "top" | "left" | "right", unknown, "top", boolean>;
    beforeLeave: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => (newName: TabPaneName, oldName: TabPaneName) => import('element-plus/es/utils/typescript.mjs').Awaitable<boolean | void>) | (() => (newName: TabPaneName, oldName: TabPaneName) => import('element-plus/es/utils/typescript.mjs').Awaitable<boolean | void>) | {
        (): (newName: TabPaneName, oldName: TabPaneName) => import('element-plus/es/utils/typescript.mjs').Awaitable<boolean | void>;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (newName: TabPaneName, oldName: TabPaneName) => import('element-plus/es/utils/typescript.mjs').Awaitable<boolean | void>) | (() => (newName: TabPaneName, oldName: TabPaneName) => import('element-plus/es/utils/typescript.mjs').Awaitable<boolean | void>) | {
        (): (newName: TabPaneName, oldName: TabPaneName) => import('element-plus/es/utils/typescript.mjs').Awaitable<boolean | void>;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => true, boolean>;
    stretch: BooleanConstructor;
}>> & {
    "onUpdate:modelValue"?: ((name: TabPaneName) => any) | undefined;
    "onTab-click"?: ((pane: {
        uid: number;
        slots: Readonly<{
            [name: string]: import('vue').Slot<any> | undefined;
        }>;
        props: {
            readonly disabled: boolean;
            readonly label: string;
            readonly lazy: boolean;
            readonly closable: boolean;
            readonly name?: import('element-plus/es/utils/index.mjs').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined;
        };
        paneName: string | number | undefined;
        active: boolean;
        index: string | undefined;
        isClosable: boolean;
    }, ev: Event) => any) | undefined;
    onTabClick?: ((pane: {
        uid: number;
        slots: Readonly<{
            [name: string]: import('vue').Slot<any> | undefined;
        }>;
        props: {
            readonly disabled: boolean;
            readonly label: string;
            readonly lazy: boolean;
            readonly closable: boolean;
            readonly name?: import('element-plus/es/utils/index.mjs').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined;
        };
        paneName: string | number | undefined;
        active: boolean;
        index: string | undefined;
        isClosable: boolean;
    }, ev: Event) => any) | undefined;
    onTabChange?: ((name: TabPaneName) => any) | undefined;
    onEdit?: ((paneName: TabPaneName | undefined, action: "add" | "remove") => any) | undefined;
    onTabRemove?: ((name: TabPaneName) => any) | undefined;
    onTabAdd?: (() => any) | undefined;
}, {
    type: import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "" | "card" | "border-card", unknown>;
    options: import("../../../types").OptionComponentTypes.item[];
    stretch: boolean;
    editable: boolean;
    beforeLeave: (newName: TabPaneName, oldName: TabPaneName) => import('element-plus/es/utils/typescript.mjs').Awaitable<boolean | void>;
    closable: boolean;
    addable: boolean;
    tabPosition: import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "bottom" | "top" | "left" | "right", unknown>;
}, {}>;
export default _default;
