import type { ExtractPropTypes, PropType, CSSProperties } from 'vue'

export const sdTypeListProps = {
    width      : { type: [Number, String] as PropType<number | string>, default: 250 }, // 宽度
    showHeader : { type: Boolean, default: true                                      }, // 是否显示头部
    headerClass: { type: String , default: '' },
    headerStyle: { type: Object as PropType<CSSProperties>  },
    showFooter : { type: Boolean, default: false                                     }, // 是否显示底部
    footerClass: { type: String , default: '' },
    footerStyle: { type: Object as PropType<CSSProperties>  },
    showOption : { type: Boolean, default: false                                     }, // 是否右侧操作项
    title      : { type: String , default: ''                                        }, // 头部标题
    showMore   : { type: Boolean, default: false },
    list       : { type: Array  , default: () => []                                       }, // 列表数据
    prop       : { type: Object as PropType<{ label?: string; value?: string; icon?: string; count?: string }>      }, // 自定义列字段
    showCount  : { type: Boolean, default: false                                          }, // 显示统计数字
    modelValue : { type: Object as PropType<Record<string, any> | null>, default: null    }, // 当前激活项
    emptyText  : { type: String                                                           }, // 数据为空时提示文字
    filter     : { type: Function                                                         }, // 过滤函数
    sort       : { type: Boolean, default: false }, // 允许排序
    sortHandle : { type: String                  }, // 排序目标
    animation  : { type: Number , default: 200   }, // 排序动画时间
}

export type SdTypeListProps = ExtractPropTypes<typeof sdTypeListProps>
