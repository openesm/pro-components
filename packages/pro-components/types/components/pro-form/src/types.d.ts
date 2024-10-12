import type { RuleItem } from 'async-validator';
import type { SetupContext, Ref, VNode, CSSProperties, Component } from 'vue';
import type { FormItemProps, ColProps, FormItemRule } from 'element-plus';
export interface SdProFormContext extends SdProFormPublishMethod {
    emit: SetupContext['emit'];
    attrs: SetupContext['attrs'];
    slots: SetupContext['slots'];
    props: Record<string, any>;
    state: SdProFormState;
}
export interface SdProFormPublishMethod {
    bindField: (key: string, state: {
        config: SdProFormDefine.SchemaConfig;
    }) => void;
    unbindField: (key: string) => void;
    getFieldsMap: () => Record<string, SdProFormDefine.SchemaConfig>;
    getConfig: (key: string) => SdProFormDefine.SchemaConfig;
    setConfig: (key: string, config: SdProFormDefine.SchemaConfig) => void;
    replaceConfig: (key: string, config: SdProFormDefine.SchemaConfig) => void;
    getModel: () => Record<string, any>;
    setModel: (model: Record<string, any>) => void;
    getValue: (key: string) => any;
    setValue: (key: string, val: any) => void;
    getLabel: (key: string) => void;
    setLabel: (key: string, label: string) => void;
    getOptions: (key: string) => SdProFormDefine.OptionItem[];
    setOptions: (key: string, val: SdProFormDefine.OptionItem[]) => void;
    show: (key: string) => void;
    hidden: (key: string) => void;
    enable: (key: string) => void;
    disable: (key: string) => void;
    validate: (alertMsg?: boolean) => Promise<boolean>;
    validateField: (props?: string | string[], alertMsg?: boolean) => Promise<boolean>;
    resetFields: () => void;
    scrollToField: (prop: string) => void;
    clearValidate: (props?: string | string[]) => void;
}
export interface SdProFormState {
    model: Record<string, any>;
    schema: SdProFormDefine.SchemaConfig[];
}
export declare namespace SdProFormDefine {
    interface FieldsConifg {
        [name: string]: VNode | Component | (() => VNode | Component);
    }
    interface RulesConfig {
        [name: string]: FormItemRule;
    }
    interface SchemaConfig {
        id?: string;
        col?: number | (Partial<ColProps> & {
            style?: CSSProperties;
        });
        formItem?: boolean | (Partial<FormItemProps> & {
            style?: CSSProperties;
        });
        required?: boolean | ((params: RequiredMethodParams) => boolean);
        label?: string | ((params: LabelMethodParams) => string);
        subLabel?: string;
        labelHelp?: string;
        rules?: RuleItemConfig | RuleItemConfig[];
        hidden?: boolean | ((params: HiddenMethodParams) => boolean);
        tag?: TagType | string | VNode | ((params: TagMethodParams) => MethodReturnRenderContent);
        key?: string;
        value?: any;
        placeholder?: string | ((params: PlaceholderMethodPrams) => string);
        width?: string | number;
        style?: CSSProperties;
        contentStyle?: CSSProperties;
        props?: Record<string, any> | ((parmas: PropsMethodParams) => Record<string, any>);
        disabled?: boolean | ((params: DisableMethodParams) => boolean);
        options?: OptionItem[] | ((params: OptionMethodParams) => OptionItem[]);
        on?: Record<string, (params: EventMethodParams) => void>;
        slots?: Record<string, (params: SlotMethodParams) => MethodReturnRenderContent>;
        left?: string | ((params: SlotMethodParams) => MethodReturnRenderContent);
        right?: string | ((params: SlotMethodParams) => MethodReturnRenderContent);
        tip?: string | ((params: SlotMethodParams) => MethodReturnRenderContent);
        tipStyle?: CSSProperties;
        text?: string;
        items?: DataItem[] | ((params: ItemsMethodParams) => DataItem[]);
        children?: SchemaConfig[];
    }
    type DataItem = {
        tag: string | VNode;
        props: Record<string, any>;
        text?: string;
        children?: DataItem[];
    };
    type OptionItem = {
        [key: string]: any;
    };
    interface RuleItemConfig extends Omit<RuleItem, 'validator' | 'asyncValidator' | 'message'> {
        trigger?: string | string[];
        message?: string | ((params: Omit<RuleMethodParams, '$key'>) => string);
        validator?: (params: RuleMethodParams) => string | boolean | undefined | null;
        asyncValidator?: (params: RuleMethodParams) => Promise<string | boolean | undefined | null>;
        customType?: string;
    }
    interface BasicCbMethodParams {
        $model: Record<string, any>;
        $key: any;
        $proForm: SdProFormContext;
        colRef: Ref<any>;
        formItemRef: Ref<any>;
        fieldRef: Ref<any>;
    }
    type RenderContentType = null | undefined | string | VNode;
    type MethodReturnRenderContent = RenderContentType | RenderContentType[];
    type TagType = 'row' | 'col' | 'title-bar' | 'card' | 'divider' | 'alert' | 'time' | 'time-select' | 'date' | 'week' | 'month' | 'year' | 'dates' | 'daterange' | 'monthrange' | 'datetime' | 'datetimerange' | 'week-time-select' | 'text' | 'input' | 'password' | 'textarea' | 'autocomplete' | 'select' | 'checkbox' | 'checkbox-group' | 'radio-group' | 'swicth' | 'color' | 'slider' | 'rate' | 'number' | 'price' | 'cascader' | 'transfer' | 'upload' | 'image-upload';
    interface TagMethodParams extends BasicCbMethodParams {
        $props: Record<string, any>;
    }
    interface LabelMethodParams extends BasicCbMethodParams {
    }
    interface RequiredMethodParams extends BasicCbMethodParams {
    }
    interface PlaceholderMethodPrams extends BasicCbMethodParams {
    }
    interface HiddenMethodParams extends BasicCbMethodParams {
    }
    interface DisableMethodParams extends BasicCbMethodParams {
    }
    interface ItemsMethodParams extends BasicCbMethodParams {
    }
    interface SlotMethodParams extends BasicCbMethodParams {
        $scope?: any;
    }
    interface EventMethodParams extends BasicCbMethodParams {
        $event: any;
    }
    interface OptionMethodParams extends BasicCbMethodParams {
    }
    interface RuleMethodParams extends BasicCbMethodParams {
        $value: any;
        $label: string;
    }
    interface PropsMethodParams extends BasicCbMethodParams {
    }
}
