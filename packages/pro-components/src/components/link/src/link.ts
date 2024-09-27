import type { ExtractPublicPropTypes, PropType } from 'vue'

import { linkProps } from 'element-plus'

export const sdLinkProps = {
    ...linkProps,
    underline: { type: String as PropType<'none' | 'hover' | 'always'>, default: 'hover' },
    replace  : { type: Boolean , default: false }, // 替换当前路由页面
    text     : { type: String  , default: ''    }, // 显示文字
    size     : { type: String                   }, // 文字大小
    color    : { type: String                   }, // 文字颜色
}

export type SdLinkProps = ExtractPublicPropTypes<typeof sdLinkProps>
