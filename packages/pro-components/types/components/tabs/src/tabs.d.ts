import { ExtractPublicPropTypes, PropType } from 'vue';
import { OptionComponentTypes } from '../../../types';

export declare const sdTabsProps: {
    options: {
        type: PropType<OptionComponentTypes.item[]>;
        default: () => never[];
    };
    prop: {
        type: PropType<OptionComponentTypes.PropConfig>;
    };
    type: import('element-plus/es/utils/index.mjs').EpPropFinalized<StringConstructor, "" | "card" | "border-card", unknown, "", boolean>;
    activeName: {
        readonly type: PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    closable: BooleanConstructor;
    addable: BooleanConstructor;
    modelValue: {
        readonly type: PropType<import('element-plus/es/utils/index.mjs').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
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
};
export declare const sdTabsEmits: {
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
};
export declare const sdTabsOmitKeys: string[];
export type SdTabsProps = ExtractPublicPropTypes<typeof sdTabsProps>;
