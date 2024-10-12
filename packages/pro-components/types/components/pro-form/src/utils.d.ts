import type { SdProFormDefine } from './types';
import type { FormItemRule } from 'element-plus';
export declare function wrapSlots(slots: Record<string, Function> | undefined, params: SdProFormDefine.SlotMethodParams): Record<string, Function>;
export declare function wrapEventMethod(on: Record<string, Function> | undefined, params: Omit<SdProFormDefine.EventMethodParams, '$event'>): Record<string, Function>;
export declare function isHTMLTag(name: string): boolean;
/** 解析字符串表单配置 */
export declare function parseSchema(config: string, props?: Record<string, SdProFormDefine.SchemaConfig>): SdProFormDefine.SchemaConfig[];
type RuleConfig = Omit<SdProFormDefine.SchemaConfig, 'label'> & {
    label: string;
};
type RuleParams = Omit<SdProFormDefine.RuleMethodParams, '$value' | '$label'>;
type CustomRulesConfig = Record<string, FormItemRule>;
export declare function getRules(config: RuleConfig, rule_params: RuleParams, customRulesConfig?: CustomRulesConfig): any[];
export {};
