import type { ExtractPublicPropTypes, PropType  } from 'vue'
import type { SdProFormDefine } from './types'
import type { RowProps        } from 'element-plus'

import { formEmits, formProps } from 'element-plus'

const extraProps = {
    schema      : { type: Array  as PropType<SdProFormDefine.SchemaConfig[]> }, // 表单配置
    fieldsConfig: { type: Object as PropType<SdProFormDefine.FieldsConifg>   }, // 组件配置
    rulesConfig : { type: Object as PropType<SdProFormDefine.RulesConfig>    }, // 校验规则配置
    layout      : { type: Boolean },
    rowProps    : { type: Object as PropType<RowProps> },
}
export const sdProFormProps = {
    ...formProps,
    // -----------------------------------------------
    model      : { type: Object as PropType<Record<string, any>> },
    labelWidth : { ...formProps.labelWidth , default: 100        }, // 表单项标题宽度
    labelSuffix: { ...formProps.labelSuffix, default: ':'        }, // 表单项标题后缀
    // -----------------------------------------------
    ...extraProps,
}
export const sdProFormEmits = {
    ...formEmits,
    'submit'      : null,
    'update:model': null,
}
export const sdProFormOmitKeys = [
    'model',
    ...Object.keys(extraProps),
]

export type SdProFormProps = ExtractPublicPropTypes<typeof sdProFormProps>
