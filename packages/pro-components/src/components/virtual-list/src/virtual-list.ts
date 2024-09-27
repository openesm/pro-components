import type { ExtractPublicPropTypes, PropType } from 'vue'

export const sdVirtualListProps = {
    height    : { type: Number, required: true },
    minHeight : { type: Number },
    maxHeight : { type: Number },
    width     : { type: Number },
    minWidth  : { type: Number },
    maxWidth  : { type: Number },
    bench     : { type: Number, default: 0                          }, // 预渲染数
    itemHeight: { type: Number, required: true                      }, // 渲染项高度
    items     : { type: Array as PropType<any[]>, default: () => [] }, // 渲染列表
}

export type SdVirtualListProps = ExtractPublicPropTypes<typeof sdVirtualListProps>
