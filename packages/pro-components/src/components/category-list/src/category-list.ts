import type { ExtractPublicPropTypes, PropType, CSSProperties } from 'vue'
import type { EmptyProps, ScrollbarProps } from 'element-plus'
import type { SdCategoryListTypes } from './types'

export const sdCategoryListProps = {
    autoActive     : { type: Boolean, default: true                                           }, // 是否默认选中一项
    activedItem    : { type: Object as PropType<Record<string, any> | null>, default: null    }, // 当前选中项
    disabled       : { type: Boolean, default: false                                          }, // 是否禁止操作
    width          : { type: [Number, String] as PropType<number | string> , default: 250     }, // 列表宽度
    title          : { type: String , default: ''                                             }, // 顶部区域标题（无自定义顶部时）
    showHeader     : { type: Boolean, default: true                                           }, // 是否显示顶部区域
    headerClass    : { type: String , default: ''                                             }, // 顶部区域类名
    headerStyle    : { type: Object as PropType<CSSProperties>                                }, // 顶部区域自定义样式
    headerBorderd  : { type: Boolean, default: true                                           }, // 是否显示顶部区域底部边框
    showFooter     : { type: Boolean, default: false                                          }, // 是否显示底部区域
    footerClass    : { type: String , default: ''                                             }, // 底部区域类名
    footerStyle    : { type: Object as PropType<CSSProperties>                                }, // 底部区域自定义样式
    footerBorderd  : { type: Boolean, default: true                                           }, // 是否显示顶部区域底部边框
    itemStyle      : { type: Object as PropType<CSSProperties>                                }, // 列表项自定义样式
    operations     : { type: Array  as PropType<SdCategoryListTypes.OperationItem[]>          }, // 表格行操作数组形式配置
    data           : { type: Array as PropType<any[]>, default: () => []                      }, // 列表数据
    prop           : { type: Object as PropType<SdCategoryListTypes.Prop>                     }, // 自定义列字段
    filterMethod   : { type: Function                                                         }, // 过滤函数
    showCount      : { type: Boolean, default: false                                          }, // 显示统计数字
    showDesc       : { type: Boolean, default: false                                          }, // 显示描述信息
    emptyText      : { type: String                                                           }, // 数据为空时提示文字
    emptyStyle     : { type: Object as PropType<CSSProperties>                                }, // 数据为空时样式
    emptyConfig    : { type: Object as PropType<Partial<EmptyProps>>                          }, // 数据为空时样式
    scrollbarConfig: { type: Object as PropType<Partial<ScrollbarProps>>                      },
    // -------------------------------------------------------------------------------------------------------------------
    enableDargSort : { type: Boolean, default: false                                          }, // 允许排序
    dargSortConfig : { type: Object as PropType<any>                                          }, // 排序配置项
}

export const sdCategoryListEmits = [
    'update:activedItem',
    'change',
    'scroll',
    'click-item',
    'sort-start',
    'sort-move',
    'sort-end',
]

export type SdCategoryListProps = ExtractPublicPropTypes<typeof sdCategoryListProps>
