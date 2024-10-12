import type { AppContext } from 'vue'
import type { FormItemRule } from 'element-plus'

export interface ProFormGlobalConfig {
    component: {
        [key: string]: {
            tag   : string
            type ?: 'input' | 'select'
            props?: Record<string, any>
        }
    }
    inputPlaceholderPrefix : string
    selectPlaceholderPrefix: string
    rulesConfig            : Record<string, FormItemRule>
    getAppContext?         : () => AppContext
}

const props_config = {
    timePicker: {      // ElTimePicker
        format     : 'HH:mm',
        valueFormat: 'HH:mm',
    },
    timePickerRange: { // ElTimePicker
        startPlaceholder: '开始时间',
        endPlaceholder  : '结束时间',
        format          : 'HH:mm',
        valueFormat     : 'HH:mm',
        isRange         : true,
    },
    timeSelect: {      // ElTimeSelect
        start : '09:00',
        end   : '18:00',
        step  : '00:30',
        format: 'HH:mm',
    },
    input       : { maxlength: 100  , clearable: true },
    password    : { type: 'password', clearable: true  , maxlength: 100 },
    textarea    : { type: 'textarea', clearable: true },
    autocomplete: { clearable: true  },
    number      : { min: 0           },
    cascader    : { filterable: true },
    switch      : { activeValue: 1, inactiveValue: 0 },
}

export const globalConfig: ProFormGlobalConfig = {
    component: {
        // --- ElementPlus  -------------------------------------------------------------------------------------------------
        // https://element-plus.gitee.io/zh-CN/guide/design.html
        'row'              : { tag: 'ElRow'      },
        'col'              : { tag: 'ElCol'      },
        'title-bar'        : { tag: 'SdTitleBar' },
        'card'             : { tag: 'SdCard'     },
        'divider'          : { tag: 'ElDivider'  },
        'alert'            : { tag: 'ElAlert'    },
        // -----------------------------------------------------------------------------------------------------------------
        'time'             : { tag: 'ElTimePicker', type: 'select', props: props_config.timePicker      }, // 选择时分
        'time-picker-range': { tag: 'ElTimePicker', type: 'select', props: props_config.timePickerRange }, // 选择时分范围
        'time-select'      : { tag: 'ElTimeSelect', type: 'select', props: props_config.timeSelect      }, // 选择固定时分
        // -----------------------------------------------------------------------------------------------------------------
        'year'             : { tag: 'SdDatePicker', type: 'select',  props: { type: 'year'          } }, // 选择年
        'month'            : { tag: 'SdDatePicker', type: 'select',  props: { type: 'month'         } }, // 选择月
        'week'             : { tag: 'SdDatePicker', type: 'select',  props: { type: 'week'          } }, // 选择周
        'date'             : { tag: 'SdDatePicker', type: 'select'                                    }, // 选择日期
        'dates'            : { tag: 'SdDatePicker', type: 'select',  props: { type: 'dates'         } }, // 选择多个日期
        'daterange'        : { tag: 'SdDatePicker', type: 'select',  props: { type: 'daterange'     } }, // 选择日期范围
        'monthrange'       : { tag: 'SdDatePicker', type: 'select',  props: { type: 'monthrange'    } }, // 选择月份范围
        'datetime'         : { tag: 'SdDatePicker', type: 'select',  props: { type: 'datetime'      } }, // 选择日期时间
        'datetimerange'    : { tag: 'SdDatePicker', type: 'select',  props: { type: 'datetimerange' } }, // 选择日期时间范围
        // -----------------------------------------------------------------------------------------------------------------
        'week-time-select' : { tag: 'SdWeekTimeSelect' },
        // -----------------------------------------------------------------------------------------------------------------
        'input'            : { tag: 'ElInput', type: 'input' , props: props_config.input    },
        'password'         : { tag: 'ElInput', type: 'input' , props: props_config.password },
        'textarea'         : { tag: 'ElInput', type: 'input' , props: props_config.textarea },
        // -----------------------------------------------------------------------------------------------------------------
        'autocomplete'     : { tag: 'ElAutocomplete', type: 'input' , props: props_config.autocomplete },
        'select'           : { tag: 'SdSelect'      , type: 'select' },
        'checkbox'         : { tag: 'ElCheckbox'      },
        'checkbox-group'   : { tag: 'SdCheckboxGroup' },
        'radio-group'      : { tag: 'SdRadioGroup'    },
        'switch'           : { tag: 'ElSwitch'      , props: props_config.switch },
        'color'            : { tag: 'ElColorPicker'   },
        'slider'           : { tag: 'ElSlider'        },
        'rate'             : { tag: 'ElRate'          },
        'price'            : { tag: 'SdInputPrice'  , type: 'input' },
        'number'           : { tag: 'ElInputNumber' , type: 'input' , props: props_config.number },
        'cascader'         : { tag: 'ElCascader'    , type: 'select', props: props_config.cascader },
        'transfer'         : { tag: 'ElTransfer'      },
        'image-upload'     : { tag: 'SdImageUpload'   },
    },
    inputPlaceholderPrefix : '请输入',
    selectPlaceholderPrefix: '请选择',
    // --- 校验规则配置 -----------------------------------------------------------------------------------------------
    rulesConfig            : {
        '@idcard': {
            pattern: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
            message: '请输入正确的身份证号',
        },
        '@mobile': {
            pattern: /1\d{10}/,
            message: '请输入正确的手机号',
        },
        '@url': {
            pattern: /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/,
            message: '请输入正确的网址',
        },
        '@email': {
            pattern: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
            message: '请输入正确的邮箱',
        },
    },
}

export const setupGlobalConfig = (options?: Partial<ProFormGlobalConfig>) => {
    if (options?.component  ) Object.assign(globalConfig.component  , options.component)
    if (options?.rulesConfig) Object.assign(globalConfig.rulesConfig, options.rulesConfig)

    globalConfig.getAppContext = options?.getAppContext
}

export default globalConfig
