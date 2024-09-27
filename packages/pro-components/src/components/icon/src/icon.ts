import type { ExtractPublicPropTypes } from 'vue'

export const sdIconProps = {
    prefix: { type: String  }, // 图标前缀
    name  : { type: String  }, // 图标名称
    size  : { type: Number  }, // 图标大小
    color : { type: String  }, // 图标颜色
    inline: { type: Boolean }, // 默认与文字保持同一基线
}

export type SdIconProps    = ExtractPublicPropTypes<typeof sdIconProps>
