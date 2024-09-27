import type { ExtractPublicPropTypes } from 'vue'

import type _CountTo from './count-to.vue'

export const sdCountToProps = {
    startVal : { type: Number , default: 0    }, // 起始数字
    endVal   : { type: Number , default: 0    }, // 结束数字
    duration : { type: Number , default: 3000 }, // 动画时间
    autoplay : { type: Boolean, default: true }, // 自动运行
    decimals : { type: Number , default: 0, validator: (value: number) => value >= 0 }, // 小数点几位
    decimal  : { type: String , default: '.'  }, // 小数点符号
    separator: { type: String , default: ','  }, // 千位符号
    prefix   : { type: String , default: ''   }, // 数字前缀
    suffix   : { type: String , default: ''   }, // 数字后缀
    useEasing: { type: Boolean, default: true }, // 使用动画函数
    easingFn : {
        type: Function,
        default(t: number, b: number, c: number, d: number) {
            return c * (-(2 ** (-10 * t / d)) + 1) * 1024 / 1023 + b
        },
    },
}
export const sdCountToEmits = ['callback']

export type SdCountToProps = ExtractPublicPropTypes<typeof sdCountToProps>
export type SdCountTo      = InstanceType<typeof _CountTo>
