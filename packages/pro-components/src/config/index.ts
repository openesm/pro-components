import type { App } from 'vue'
import type { DeepPartial } from '../types'
import type { SdDatePickerProps } from '../components/date-picker/src/date-picker'

import { getDatePickerOptions } from './date-picker-config'
import { plusModalCount, minusModalCount } from '../utils/modal'
import { merge } from 'lodash-es'

const config: GlobalConfig = {
    // 保存当前应用
    app: null as null | App,

    // 组件相关配置
    components: {
        // 日期选择器组件配置
        datePicker: {
            year         : getDatePickerOptions('year'),
            month        : getDatePickerOptions('month'),
            monthrange   : getDatePickerOptions('monthrange'),
            week         : getDatePickerOptions('week'),
            date         : getDatePickerOptions('date'),
            daterange    : getDatePickerOptions('daterange'),
            dates        : getDatePickerOptions('dates'),
            datetime     : getDatePickerOptions('datetime'),
            datetimerange: getDatePickerOptions('datetimerange'),
        },
        // vxeTable 组件配置
        vxeTable: {
            cachePrefix: '',
        },
    },

    // 处理相关事件
    event: {
        onModalShow(_type: ModalType, _props?: Record<string, any>) { plusModalCount()  },
        onModalHide(_type: ModalType, _props?: Record<string, any>) { minusModalCount() },
    },
}

type ModalType = 'message-box' | 'dialog' | 'drawer'
export interface GlobalConfig {
    // 当前注册应用
    app: null | App

    // 组件配置
    components: {
        // 日期选择器默认属性配置
        datePicker: Record<string, Partial<SdDatePickerProps>>
        // vxe-table 组件属性配置
        vxeTable: {
            cachePrefix: string | (() => string) // 缓存前缀
        }
    }

    // 事件配置
    event: {
        onModalShow: (type: ModalType, opts: Record<string, any>) => void
        onModalHide: (type: ModalType, opts: Record<string, any>) => void
    }

    plugins?: {
        echarts?: {
            require: () => Promise<any> | any
        }
        jqxgrid?: {
            require: () => Promise<any> | any
        }
    }
}

// 设置配置
export function setConfig(customConfig?: DeepPartialGlobalConfig) {
    customConfig && merge(config, customConfig)
}

export type DeepPartialGlobalConfig = DeepPartial<GlobalConfig>
export const globalConfig = config
export default config
