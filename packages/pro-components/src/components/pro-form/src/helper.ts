import type { SdProFormDefine } from './types'
import { isFunction, isString } from 'lodash-es'
import { parseSchema } from './utils'

/** 定义表单渲染配置 */
export function defineProFormSchema(config: SdProFormDefine.SchemaConfig[]): SdProFormDefine.SchemaConfig[]
export function defineProFormSchema(config: () => ({ template: string; props?: Record<string, SdProFormDefine.SchemaConfig> })): SdProFormDefine.SchemaConfig[]
export function defineProFormSchema(config: string, props?: Record<string, SdProFormDefine.SchemaConfig> | (() => Record<string, SdProFormDefine.SchemaConfig>)): SdProFormDefine.SchemaConfig[]
export function defineProFormSchema(
    config: SdProFormDefine.SchemaConfig[] | string | (() => ({ template: string; props?: Record<string, SdProFormDefine.SchemaConfig> })),
    props?: Record<string, SdProFormDefine.SchemaConfig> | (() => Record<string, SdProFormDefine.SchemaConfig>),
): SdProFormDefine.SchemaConfig[] {
    if (isFunction(config)) {
        const _config_ = config()
        return parseSchema(_config_.template, _config_.props)
    } else if (isString(config)) {
        const _props_ = isFunction(props) ? props() : props
        return parseSchema(config, _props_)
    } else {
        return config
    }
}
