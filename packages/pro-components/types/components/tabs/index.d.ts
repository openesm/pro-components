export declare const SdTabs: ({
    new (...args: any[]): {
        $: import('vue').ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            type: import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "" | "card" | "border-card", unknown>;
            options: import("../../types").OptionComponentTypes.item[];
            stretch: boolean;
            editable: boolean;
            beforeLeave: (newName: import('element-plus').TabPaneName, oldName: import('element-plus').TabPaneName) => import('element-plus/es/utils/typescript.mjs').Awaitable<boolean | void>;
            closable: boolean;
            addable: boolean;
            tabPosition: import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "bottom" | "top" | "left" | "right", unknown>;
        }> & Omit<{
            readonly type: import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "" | "card" | "border-card", unknown>;
            readonly options: import("../../types").OptionComponentTypes.item[];
            readonly stretch: boolean;
            readonly editable: boolean;
            readonly beforeLeave: (newName: import('element-plus').TabPaneName, oldName: import('element-plus').TabPaneName) => import('element-plus/es/utils/typescript.mjs').Awaitable<boolean | void>;
            readonly closable: boolean;
            readonly addable: boolean;
            readonly tabPosition: import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "bottom" | "top" | "left" | "right", unknown>;
            readonly prop?: import("../../types").OptionComponentTypes.PropConfig | undefined;
            readonly modelValue?: import('element-plus/es/utils/index.mjs').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined;
            readonly activeName?: import('element-plus/es/utils/index.mjs').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined;
            "onUpdate:modelValue"?: ((name: import('element-plus').TabPaneName) => any) | undefined;
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
            onTabChange?: ((name: import('element-plus').TabPaneName) => any) | undefined;
            onEdit?: ((paneName: import('element-plus').TabPaneName | undefined, action: "add" | "remove") => any) | undefined;
            onTabRemove?: ((name: import('element-plus').TabPaneName) => any) | undefined;
            onTabAdd?: (() => any) | undefined;
        } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<import('vue').ExtractPropTypes<{
            options: {
                type: import('vue').PropType<import("../../types").OptionComponentTypes.item[]>;
                default: () => never[];
            };
            prop: {
                type: import('vue').PropType<import("../../types").OptionComponentTypes.PropConfig>;
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
            beforeLeave: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => (newName: import('element-plus').TabPaneName, oldName: import('element-plus').TabPaneName) => import('element-plus/es/utils/typescript.mjs').Awaitable<boolean | void>) | (() => (newName: import('element-plus').TabPaneName, oldName: import('element-plus').TabPaneName) => import('element-plus/es/utils/typescript.mjs').Awaitable<boolean | void>) | {
                (): (newName: import('element-plus').TabPaneName, oldName: import('element-plus').TabPaneName) => import('element-plus/es/utils/typescript.mjs').Awaitable<boolean | void>;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => (newName: import('element-plus').TabPaneName, oldName: import('element-plus').TabPaneName) => import('element-plus/es/utils/typescript.mjs').Awaitable<boolean | void>) | (() => (newName: import('element-plus').TabPaneName, oldName: import('element-plus').TabPaneName) => import('element-plus/es/utils/typescript.mjs').Awaitable<boolean | void>) | {
                (): (newName: import('element-plus').TabPaneName, oldName: import('element-plus').TabPaneName) => import('element-plus/es/utils/typescript.mjs').Awaitable<boolean | void>;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, () => true, boolean>;
            stretch: BooleanConstructor;
        }>> & {
            "onUpdate:modelValue"?: ((name: import('element-plus').TabPaneName) => any) | undefined;
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
            onTabChange?: ((name: import('element-plus').TabPaneName) => any) | undefined;
            onEdit?: ((paneName: import('element-plus').TabPaneName | undefined, action: "add" | "remove") => any) | undefined;
            onTabRemove?: ((name: import('element-plus').TabPaneName) => any) | undefined;
            onTabAdd?: (() => any) | undefined;
        }, "type" | "options" | "stretch" | "editable" | "beforeLeave" | "closable" | "addable" | "tabPosition">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import('vue').Slot<any> | undefined;
        }>;
        $root: import('vue').ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import('vue').ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: import('vue').ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import('vue').ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: ((event: "update:modelValue", name: import('element-plus').TabPaneName) => void) & ((event: "tab-click", pane: {
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
        }, ev: Event) => void) & ((event: "tabClick", pane: {
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
        }, ev: Event) => void) & ((event: "tabChange", name: import('element-plus').TabPaneName) => void) & ((event: "edit", paneName: import('element-plus').TabPaneName | undefined, action: "add" | "remove") => void) & ((event: "tabRemove", name: import('element-plus').TabPaneName) => void) & ((event: "tabAdd") => void);
        $el: any;
        $options: import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
            options: {
                type: import('vue').PropType<import("../../types").OptionComponentTypes.item[]>;
                default: () => never[];
            };
            prop: {
                type: import('vue').PropType<import("../../types").OptionComponentTypes.PropConfig>;
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
            beforeLeave: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => (newName: import('element-plus').TabPaneName, oldName: import('element-plus').TabPaneName) => import('element-plus/es/utils/typescript.mjs').Awaitable<boolean | void>) | (() => (newName: import('element-plus').TabPaneName, oldName: import('element-plus').TabPaneName) => import('element-plus/es/utils/typescript.mjs').Awaitable<boolean | void>) | {
                (): (newName: import('element-plus').TabPaneName, oldName: import('element-plus').TabPaneName) => import('element-plus/es/utils/typescript.mjs').Awaitable<boolean | void>;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => (newName: import('element-plus').TabPaneName, oldName: import('element-plus').TabPaneName) => import('element-plus/es/utils/typescript.mjs').Awaitable<boolean | void>) | (() => (newName: import('element-plus').TabPaneName, oldName: import('element-plus').TabPaneName) => import('element-plus/es/utils/typescript.mjs').Awaitable<boolean | void>) | {
                (): (newName: import('element-plus').TabPaneName, oldName: import('element-plus').TabPaneName) => import('element-plus/es/utils/typescript.mjs').Awaitable<boolean | void>;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, () => true, boolean>;
            stretch: BooleanConstructor;
        }>> & {
            "onUpdate:modelValue"?: ((name: import('element-plus').TabPaneName) => any) | undefined;
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
            onTabChange?: ((name: import('element-plus').TabPaneName) => any) | undefined;
            onEdit?: ((paneName: import('element-plus').TabPaneName | undefined, action: "add" | "remove") => any) | undefined;
            onTabRemove?: ((name: import('element-plus').TabPaneName) => any) | undefined;
            onTabAdd?: (() => any) | undefined;
        }, {
            internal_value$: import('vue').WritableComputedRef<import('element-plus/es/utils/index.mjs').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined>;
            tabs_props$: import('vue').ComputedRef<import('element-plus').TabsProps>;
            options$: import('vue').ComputedRef<any[]>;
            onTabClick: (pane: {
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
            }, ev: Event) => void;
            onTabEdit: (paneName: import('element-plus').TabPaneName | undefined, action: "add" | "remove") => void;
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
            "update:modelValue": (name: import('element-plus').TabPaneName) => boolean;
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
            tabChange: (name: import('element-plus').TabPaneName) => boolean;
            edit: (paneName: import('element-plus').TabPaneName | undefined, action: "add" | "remove") => boolean;
            tabRemove: (name: import('element-plus').TabPaneName) => boolean;
            tabAdd: () => boolean;
        }, string, {
            type: import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "" | "card" | "border-card", unknown>;
            options: import("../../types").OptionComponentTypes.item[];
            stretch: boolean;
            editable: boolean;
            beforeLeave: (newName: import('element-plus').TabPaneName, oldName: import('element-plus').TabPaneName) => import('element-plus/es/utils/typescript.mjs').Awaitable<boolean | void>;
            closable: boolean;
            addable: boolean;
            tabPosition: import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "bottom" | "top" | "left" | "right", unknown>;
        }, {}, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import('vue').ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import('vue').ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import('vue').ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import('vue').nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import('vue').WatchOptions<boolean> | undefined): import('vue').WatchStopHandle;
    } & Readonly<import('vue').ExtractPropTypes<{
        options: {
            type: import('vue').PropType<import("../../types").OptionComponentTypes.item[]>;
            default: () => never[];
        };
        prop: {
            type: import('vue').PropType<import("../../types").OptionComponentTypes.PropConfig>;
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
        beforeLeave: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => (newName: import('element-plus').TabPaneName, oldName: import('element-plus').TabPaneName) => import('element-plus/es/utils/typescript.mjs').Awaitable<boolean | void>) | (() => (newName: import('element-plus').TabPaneName, oldName: import('element-plus').TabPaneName) => import('element-plus/es/utils/typescript.mjs').Awaitable<boolean | void>) | {
            (): (newName: import('element-plus').TabPaneName, oldName: import('element-plus').TabPaneName) => import('element-plus/es/utils/typescript.mjs').Awaitable<boolean | void>;
            new (): any;
            readonly prototype: any;
        } | ((new (...args: any[]) => (newName: import('element-plus').TabPaneName, oldName: import('element-plus').TabPaneName) => import('element-plus/es/utils/typescript.mjs').Awaitable<boolean | void>) | (() => (newName: import('element-plus').TabPaneName, oldName: import('element-plus').TabPaneName) => import('element-plus/es/utils/typescript.mjs').Awaitable<boolean | void>) | {
            (): (newName: import('element-plus').TabPaneName, oldName: import('element-plus').TabPaneName) => import('element-plus/es/utils/typescript.mjs').Awaitable<boolean | void>;
            new (): any;
            readonly prototype: any;
        })[], unknown, unknown, () => true, boolean>;
        stretch: BooleanConstructor;
    }>> & {
        "onUpdate:modelValue"?: ((name: import('element-plus').TabPaneName) => any) | undefined;
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
        onTabChange?: ((name: import('element-plus').TabPaneName) => any) | undefined;
        onEdit?: ((paneName: import('element-plus').TabPaneName | undefined, action: "add" | "remove") => any) | undefined;
        onTabRemove?: ((name: import('element-plus').TabPaneName) => any) | undefined;
        onTabAdd?: (() => any) | undefined;
    } & import('vue').ShallowUnwrapRef<{
        internal_value$: import('vue').WritableComputedRef<import('element-plus/es/utils/index.mjs').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined>;
        tabs_props$: import('vue').ComputedRef<import('element-plus').TabsProps>;
        options$: import('vue').ComputedRef<any[]>;
        onTabClick: (pane: {
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
        }, ev: Event) => void;
        onTabEdit: (paneName: import('element-plus').TabPaneName | undefined, action: "add" | "remove") => void;
    }> & {} & import('vue').ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    options: {
        type: import('vue').PropType<import("../../types").OptionComponentTypes.item[]>;
        default: () => never[];
    };
    prop: {
        type: import('vue').PropType<import("../../types").OptionComponentTypes.PropConfig>;
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
    beforeLeave: import('element-plus/es/utils/index.mjs').EpPropFinalized<(new (...args: any[]) => (newName: import('element-plus').TabPaneName, oldName: import('element-plus').TabPaneName) => import('element-plus/es/utils/typescript.mjs').Awaitable<boolean | void>) | (() => (newName: import('element-plus').TabPaneName, oldName: import('element-plus').TabPaneName) => import('element-plus/es/utils/typescript.mjs').Awaitable<boolean | void>) | {
        (): (newName: import('element-plus').TabPaneName, oldName: import('element-plus').TabPaneName) => import('element-plus/es/utils/typescript.mjs').Awaitable<boolean | void>;
        new (): any;
        readonly prototype: any;
    } | ((new (...args: any[]) => (newName: import('element-plus').TabPaneName, oldName: import('element-plus').TabPaneName) => import('element-plus/es/utils/typescript.mjs').Awaitable<boolean | void>) | (() => (newName: import('element-plus').TabPaneName, oldName: import('element-plus').TabPaneName) => import('element-plus/es/utils/typescript.mjs').Awaitable<boolean | void>) | {
        (): (newName: import('element-plus').TabPaneName, oldName: import('element-plus').TabPaneName) => import('element-plus/es/utils/typescript.mjs').Awaitable<boolean | void>;
        new (): any;
        readonly prototype: any;
    })[], unknown, unknown, () => true, boolean>;
    stretch: BooleanConstructor;
}>> & {
    "onUpdate:modelValue"?: ((name: import('element-plus').TabPaneName) => any) | undefined;
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
    onTabChange?: ((name: import('element-plus').TabPaneName) => any) | undefined;
    onEdit?: ((paneName: import('element-plus').TabPaneName | undefined, action: "add" | "remove") => any) | undefined;
    onTabRemove?: ((name: import('element-plus').TabPaneName) => any) | undefined;
    onTabAdd?: (() => any) | undefined;
}, {
    internal_value$: import('vue').WritableComputedRef<import('element-plus/es/utils/index.mjs').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined>;
    tabs_props$: import('vue').ComputedRef<import('element-plus').TabsProps>;
    options$: import('vue').ComputedRef<any[]>;
    onTabClick: (pane: {
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
    }, ev: Event) => void;
    onTabEdit: (paneName: import('element-plus').TabPaneName | undefined, action: "add" | "remove") => void;
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
    "update:modelValue": (name: import('element-plus').TabPaneName) => boolean;
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
    tabChange: (name: import('element-plus').TabPaneName) => boolean;
    edit: (paneName: import('element-plus').TabPaneName | undefined, action: "add" | "remove") => boolean;
    tabRemove: (name: import('element-plus').TabPaneName) => boolean;
    tabAdd: () => boolean;
}, string, {
    type: import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "" | "card" | "border-card", unknown>;
    options: import("../../types").OptionComponentTypes.item[];
    stretch: boolean;
    editable: boolean;
    beforeLeave: (newName: import('element-plus').TabPaneName, oldName: import('element-plus').TabPaneName) => import('element-plus/es/utils/typescript.mjs').Awaitable<boolean | void>;
    closable: boolean;
    addable: boolean;
    tabPosition: import('element-plus/es/utils/index.mjs').EpPropMergeType<StringConstructor, "bottom" | "top" | "left" | "right", unknown>;
}, {}, string, {}> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & import('vue').Plugin) & Record<string, any>;
export * from './src/tabs';
