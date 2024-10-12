import type { SdProFormDefine } from './types';
/** 定义表单渲染配置 */
export declare function defineProFormSchema(config: SdProFormDefine.SchemaConfig[]): SdProFormDefine.SchemaConfig[];
export declare function defineProFormSchema(config: () => ({
    template: string;
    props?: Record<string, SdProFormDefine.SchemaConfig>;
})): SdProFormDefine.SchemaConfig[];
export declare function defineProFormSchema(config: string, props?: Record<string, SdProFormDefine.SchemaConfig> | (() => Record<string, SdProFormDefine.SchemaConfig>)): SdProFormDefine.SchemaConfig[];
