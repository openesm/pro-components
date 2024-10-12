import type { SdProFormDefine } from './types'
import type { FormItemRule } from 'element-plus'
import { h } from 'vue'
import { isFunction, isString, isNumber, isRegExp, isUndefined, isPlainObject, isArray } from 'lodash-es'
import { globalConfig } from './config'

// 包装插槽
export  function wrapSlots(slots: Record<string, Function> = {}, params: SdProFormDefine.SlotMethodParams) {
    const map = {} as Record<string, Function>
    if (slots && Object.keys(slots).length) {
        Object.entries(slots).forEach(([key, handle]) => {
            map[key] = ($scope: any) => handle({ ...params, $scope })
        })
    }
    return map
}

// 包装事件函数
export  function wrapEventMethod(on: Record<string, Function> = {}, params: Omit<SdProFormDefine.EventMethodParams, '$event'>) {
    const map = {} as Record<string, Function>
    if (on && Object.keys(on).length) {
        Object.entries(on).forEach(([key, handle]) => {
            map[key] = ($event: any) => handle({ ...params, $event })
        })
    }
    return map
}

export function isHTMLTag(name: string) {
    const HTML_TAGS = new Set([
        'html', 'body', 'base', 'head', 'link', 'meta', 'style', 'title', 'address', 'article',
        'aside', 'footer', 'header', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'nav', 'section', 'div',
        'dd', 'dl', 'dt', 'figcaption', 'figure', 'picture', 'hr', 'img', 'li', 'main', 'ol',
        'p', 'pre', 'ul', 'a', 'b', 'abbr', 'bdi', 'bdo', 'br', 'cite', 'code', 'data', 'dfn',
        'em', 'i', 'kbd', 'mark', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'small', 'span', 'strong',
        'sub', 'sup', 'time', 'u', 'var', 'wbr', 'area', 'audio', 'map', 'track', 'video', 'embed',
        'object', 'param', 'source', 'canvas', 'script', 'noscript', 'del', 'ins', 'caption', 'col',
        'colgroup', 'table', 'thead', 'tbody', 'td', 'th', 'tr', 'button', 'datalist', 'fieldset',
        'form', 'input', 'label', 'legend', 'meter', 'optgroup', 'option', 'output', 'progress',
        'select', 'textarea', 'details', 'dialog', 'menu', 'summary', 'template', 'blockquote',
        'iframe', 'tfoot', // 这里只是部分标签，您可以根据需要添加更多
    ])

    // 转换为小写以进行不区分大小写的比较
    const normalizedTagName = name.toLowerCase()

    // 检查标签名是否在预定义的标签集合中
    return HTML_TAGS.has(normalizedTagName)
}

/** 解析字符串表单配置 */
export function parseSchema(config: string, props: Record<string, SdProFormDefine.SchemaConfig> = {}): SdProFormDefine.SchemaConfig[] {
    const schemas: SdProFormDefine.SchemaConfig[] = []

    const str_list  = config.trim().split('\n').map(str => str.trim())
    const is_layout = config.includes('|')

    let i = 0
    while (i < str_list.length) {
        const str = str_list[i]!

        // 注释
        if (str.startsWith('//') || /^(-){2,2}(?!-)/.test(str)) {
            i += 1
            continue
            // 组件模板插槽
            // } else if (/^slot:([a-zA-Z])+(a-zA-Z)?/.test(str)) {
            //     const slot_str  = str.trim()
            //     const slot_name = slot_str.replace('slot:', '')
            //     schemas.push({ slot: slot_name, ...getExtraProps(slot_str, props) })
        // divider 分割线
        } else if (str.includes('---')) {
            const content = str.replace(/---/g, '').trim()
            const conf: SdProFormDefine.SchemaConfig =  {
                tag  : 'divider',
                props: {
                    ...getExtraProps('$divider', props),
                    'content-position': 'center',
                },
                text: content || undefined,
            }
            if (str.length === 3) {
                schemas.push(conf)
            } else if (str.startsWith('---') && str.endsWith('---')) {
                schemas.push(conf)
            } else if (str.startsWith('---')) {
                (conf.props as any)['content-position'] = 'left'
                schemas.push(conf)
            } else if (str.endsWith('---')) {
                (conf.props as any)['content-position'] = 'right'
                schemas.push(conf)
            }

        /**
         * Alert 提示
         * eg:
         *  :::(success) 温馨提示
         *  温馨提示内容
         *  :::
         */
        } else if (/^:::(success|warning|info|error)/.test(str)) {
            const contents: string[] = []
            for (let j = i + 1; j < str_list.length; j++) {
                if (str_list[j] === ':::') {
                    i += 1
                    break
                } else {
                    contents.push(str_list[j]!)
                    i += 1
                }
            }

            const match_arr = str.match(/:::(success|warning|info|error)(.*)/) || []
            schemas.push({
                tag  : 'alert',
                props: {
                    closable: false,
                    showIcon: true,
                    ...getExtraProps('$alert', props),
                    type    : match_arr[1] || 'warning',
                    title   : match_arr[2]?.trim() || '',
                },
                slots: { default: () => contents.map(text => h('div', text)) },
            })

        // 空格
        } else if (str === '') {
            schemas.push({
                tag  : 'div',
                props: {
                    style: { height: '10px' },
                    ...getExtraProps('$blank-row', props),
                },
            })

        // title-bar 标题卡片
        } else if (str_list[i + 1] && str_list[i + 1]!.startsWith('===')) {
            schemas.push({
                tag  : 'title-bar',
                props: {
                    ...getExtraProps('$title-bar', props),
                    title: str.trim(),
                },
            })
            i += 1

        // 表单控件
        } else {
            const row_id   = str.match(/^(#[#a-zA-Z0-9]*)\x20/)?.[0]?.trim() || '' // 取得字符串行开头的 “#” 的编码
            const curr_str = str.replace(/^(#[#a-zA-Z0-9]*)\x20/, '').trim()       // 删除 “#” 开头相关的字符
            const cols     = curr_str.split('|').map(str => str.trim()).filter(str => !!str)
            const col      = is_layout ? (24 / curr_str.split('|').length) : undefined

            // 当前行容器配置
            let row_config = null as null | SdProFormDefine.SchemaConfig
            // if (is_layout && cols.length > 1) {
            // v24.03.29 统一使用 row 包裹一层，避免对其自定义，未使用的row包裹的 col 与其它行显示不一致
            if (is_layout) {
                row_config = {
                    id      : row_id,
                    tag     : 'row',
                    ...getExtraProps('$row', props),
                    ...getExtraProps(row_id, props),
                    children: [],
                }
            }

            cols.forEach((col_str) => {
                const split_idx = col_str.indexOf(':')
                const left_str  = col_str.slice(0, split_idx).trim()  // 取得 “：” 左侧字符
                const right_str = col_str.slice(split_idx + 1).trim() // 取得 “：” 右侧字符

                const required = left_str.endsWith('*')               // 以 * 结尾代表必填
                const label    = left_str.replace('*', '').replace(/(\(#[a-zA-Z0-9_\-]+\)\x20*)/g,'').trim() // 删除 * 号字符
                const id       = (left_str.match(/\((#[a-zA-Z0-9_\-]+)\)/g) || [''])[0].replace(/(\(|\))/g, '')

                /**
                 * 匹配成功的受控组件规则
                 * - name@input
                 * - [name]
                 */
                const vars = right_str!.match(/([a-zA-Z0-9_]+@[a-zA-Z0-9:_\-]+)|(\[[a-zA-Z0-9_]+\](@[a-zA-Z0-9:_\-]+)?)/g) || [] as string[]

                // 如渲染为栅格布局，则补充父级 row 容器
                const parent = row_config ? row_config.children! : schemas

                /**
                 * 取得右侧内容解析
                 * - 右侧只有文本节点
                 * - 右侧只有一个受控组件配置
                 * - 右侧有多个受控组件或一个受控组件及一个或多个文本节点
                 */
                const contents = right_str!.split(' ').map(str => str.trim()).filter(str => !!str)
                if (contents.length === 0) {
                    // 无右侧规则配置，需要设置编码，否则无法对其进行扩展配置
                    if (id) {
                        parent.push({
                            id      ,
                            col     ,
                            label   ,
                            required,
                            formItem: true,
                            ...getExtraProps(id, props),
                        })
                    }
                } else if (contents.length === 1) {
                    let extra_props = {} as Record<string, any>
                    if (vars && vars.length === 1) {
                        extra_props = getKeyWithTypeWithProps(vars[0], props)
                    } else {
                        extra_props = {
                            tag     : 'span',
                            text    : contents[0],
                            formItem: true,
                            ...getExtraProps(id, props),
                        }
                    }
                    parent.push({
                        id      ,
                        col     ,
                        label   ,
                        required,
                        ...extra_props,
                    })
                }  else {
                    parent.push({
                        id      ,
                        col     ,
                        label   ,
                        required,
                        formItem: true,
                        ...getExtraProps(id, props),
                        children: contents.map((str, idx) => {
                            if (vars.includes(str)) {
                                // 受控组件渲染
                                const val_props = getKeyWithTypeWithProps(str, props)
                                return {
                                    required,
                                    // 有多个控件（含文本节点）时默认不渲染 form-item，如需校验控件，可手动配置 formItem: true
                                    formItem: false,
                                    ...val_props,
                                }
                            } else {
                                // 文本节点渲染
                                return {
                                    tag  : 'span',
                                    props: {
                                        style: {
                                            marginRight: contents[idx + 1] ? '10px' : 0, // 右侧有内容则补充间距
                                            marginLeft : contents[idx - 1] ? '10px' : 0, // 左侧有内容则补充间距
                                        },
                                    },
                                    text: str,
                                }
                            }
                        }),
                    })
                }
            })

            // 补充栅格行
            if (row_config) schemas.push(row_config)
        }

        i += 1
    }

    return schemas
}

/** 取出表单 key 及渲染组件类型，预设属性 */
function getKeyWithTypeWithProps(str: string, props: Record<string, SdProFormDefine.SchemaConfig>) {
    let [key = '', tag = ''] = str.split('@').map(str => str.trim())
    key = key.replace(/\[|\]/g, '')
    tag = tag || 'input'

    return {
        key,
        tag,
        ...(tag ? getExtraProps(`@${ tag }`, props) : {}), // 设置相同类型控件 props 定义
        ...getExtraProps(key, props),                      // 设置对应项控件 props 定义
    }
}

// 外部扩展属性
function getExtraProps(key: string, props: Record<string, SdProFormDefine.SchemaConfig>) {
    return props ? (key in props ? props[key] : {}) : {}
}

// 转化校验函数
type RuleConfig        = Omit<SdProFormDefine.SchemaConfig    , 'label'>  & { label: string }
type RuleParams        = Omit<SdProFormDefine.RuleMethodParams, '$value' | '$label'>
type CustomRulesConfig = Record<string, FormItemRule>
export function getRules(config: RuleConfig, rule_params: RuleParams, customRulesConfig?: CustomRulesConfig) {
    const { required, label = '', rules } = config

    // 单独声明 required
    if (required === true && isUndefined(rules)) {
        return [{ required: true, message: `${ label }不能为空` }]
    }

    // 未声明校验规则
    if (!rules) return []

    // 构造校验函数 (内部完成)
    if (isPlainObject(config.rules)) {
        const new_rules = [] as FormItemRule[]
        const r = config.rules as SdProFormDefine.RuleItemConfig
        if (r.required || (config.required as boolean)) {
            new_rules.push({ required: true, message: `${ config.label }不能为空`, trigger: r.trigger })
        }

        if (isNumber(r.min) && isNumber(r.max)) {
            let msg = ''
            if (r.type === 'number') {
                msg = `${ label }不能小于${ r.min }或者大于${ r.max }`
            } else {
                msg = `${ label }需要在${ r.min }到${ r.max }个字符`
            }

            new_rules.push({
                type   : r.type || 'string',
                min    : r.min,
                max    : r.max,
                message: msg,
                trigger: r.trigger,
            })
        } else if (isNumber(r.min)) {
            let msg = ''
            if (r.type === 'number') {
                msg = `${ label }不能小于${ r.min }`
            } else {
                msg = `${ label }最小${ r.min }个字符`
            }

            new_rules.push({
                type   : r.type,
                min    : r.min,
                message: msg,
                trigger: r.trigger,
            })
        } else if (isNumber(r.max)) {
            let msg = ''
            if (r.type === 'number') {
                msg = `${ label }不能大于${ r.max }`
            } else {
                msg = `${ label }最大${ r.max }个字符`
            }

            new_rules.push({
                type   : r.type,
                max    : r.max,
                message: msg,
                trigger: r.trigger,
            })
        }

        // 枚举值
        if (r.type === 'enum') {
            new_rules.push({
                type   : r.type,
                enum   : r.enum,
                message: `${ label }必须是其中之一：${ r.enum?.join('、') }`,
                trigger: r.trigger,
            })
        }

        // 正则表达式
        if (isRegExp(r.pattern)) {
            new_rules.push({
                pattern: r.pattern,
                message: `${ config.label }校验失败,请重新输入`,
                trigger: r.trigger,
            })
        }

        // 自定义校验
        if (isFunction(r.validator)) {
            const cb = r.validator
            new_rules.push({
                validator: (_rule, value, callback) => {
                    const err = cb({ ...rule_params, $value: value, $label: label })
                    callback(isString(err) && err !== '' ? err : undefined)
                },
                trigger: r.trigger,
            })
        }

        // 自定义校验
        if (isFunction(r.asyncValidator)) {
            const cb = r.asyncValidator
            new_rules.push({
                asyncValidator: async (_rule, value, callback) => {
                    const err = await cb({ ...rule_params, $value: value, $label: label })
                    callback(isString(err) && err !== '' ? err : undefined)
                },
                trigger: r.trigger,
            })
        }

        // v24.04.07
        // 匹配预定义规则（待处理自定义函数回调参数）
        if (r.customType) {
            new_rules.push({
                ...(globalConfig.rulesConfig && globalConfig.rulesConfig[r.customType]),
                ...(customRulesConfig && customRulesConfig[r.customType]),
            })
        }

        return new_rules
    }

    // 全部自定义重写
    if (isArray(rules)) {
        return rules.map((r) => {
            const custom_msg = isFunction(r.message)
                ? () => (r.message as Function)({ ...rule_params, $label: label })
                : isString(r.message) ? r.message : undefined

            const o = { ...r, message: custom_msg } as any
            if (o.validator) {
                const validate_fn = o.validator
                o.validator = (_rule: any, value: any, callback: Function) => {
                    const err = validate_fn({ ...rule_params, $value: value, $label: label })
                    callback(isString(err) && err !== '' ? err : undefined)
                }
            }

            if (o.asyncValidator) {
                const async_validate_fn = o.asyncValidator
                o.asyncValidator = async (_rule: any, value: any, callback: Function) => {
                    const err = await async_validate_fn({ ...rule_params, $value: value, $label: label })
                    callback(isString(err) && err !== '' ? err : undefined)
                }
            }
            return o
        })
    }

    return []
}
