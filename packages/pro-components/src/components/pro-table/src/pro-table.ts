import type { ExtractPublicPropTypes, PropType, StyleValue } from 'vue'
import type { VxeColumnProps } from 'vxe-table'
import type { SdProTableDefineTypes } from './types'

export const sdProTableProps = {
    // ------------------------------------------------------------------------------------------------------------------------
    // Grid 属性配置
    // ------------------------------------------------------------------------------------------------------------------------
    border              : { type: Boolean, default: false                                                      }, // 是否带有边框
    stripe              : { type: Boolean, default: true                                                       }, // 是否带有边框
    id                  : { type: String                                                                       }, // 唯一标识
    title               : { type: String                                                                       }, // 顶部区域左侧标题
    height              : { type: [Number, String] as PropType<string | number>                                }, // 表格高度
    minHeight           : { type: [String, Number] as PropType<string | number>                                }, // 表格最少高度
    emptyText           : { type: String  , default: '暂无数据'                                                }, // 表格数据为空提示
    align               : { type: String as PropType<SdProTableDefineTypes.Align>      , default: 'center'     }, // 设置所有内容过长显示省略号
    headerAlign         : { type: String as PropType<SdProTableDefineTypes.HeaderAlign>                        }, // 设置表头所有内容过长显示省略号
    footerAlign         : { type: String as PropType<SdProTableDefineTypes.FooterAlign>                        }, // 设置表尾所有内容过长显示省略号
    showOverflow        : { type: [Boolean, String, Object] as PropType<SdProTableDefineTypes.ShowOverflow>      , default: 'title'    }, // 设置所有内容过长显示省略号
    showHeaderOverflow  : { type: [Boolean, String, Object] as PropType<SdProTableDefineTypes.ShowHeaderOverflow>, default: 'ellipsis' }, // 设置表头所有内容过长显示省略号
    showFooterOverflow  : { type: [Boolean, String, Object] as PropType<SdProTableDefineTypes.ShowFooterOverflow>, default: 'ellipsis' }, // 设置表尾所有内容过长显示省略号
    rowClassName        : { type: [String, Function] as PropType<SdProTableDefineTypes.RowClassName>           }, // 行 class 名称
    rowStyle            : { type: [Object, Function] as PropType<SdProTableDefineTypes.RowStyle>               }, // 行自定义样式
    cellClassName       : { type: [String, Function] as PropType<SdProTableDefineTypes.CellClassName>          }, // 单元格 class 名称
    cellStyle           : { type: [Object, Function] as PropType<SdProTableDefineTypes.CellStyle>              }, // 单元格自定义样式
    headerStyle         : { type: Object as PropType<StyleValue>                                               }, // 顶部区域样式
    alertStyle          : { type: Object as PropType<StyleValue>                                               }, // 提示区域样式
    bodyStyle           : { type: Object as PropType<StyleValue>                                               }, // 内容区域样式
    footerStyle         : { type: Object as PropType<StyleValue>                                               }, // 底部区域样式
    showHeader          : { type: Boolean , default: true                                                      }, // 显示表格顶部区域
    showFooter          : { type: Boolean , default: false                                                     }, // 显示表格底部区域
    showAggregates      : { type: Boolean , default: true                                                      }, // 显示表格聚合函数区域
    // ------------------------------------------------------------------------------------------------------------------------
    // 模块功能配置
    // ------------------------------------------------------------------------------------------------------------------------
    cols                : { type: [String, Array]  as PropType<string | SdProTableDefineTypes.ColumnOptions[]> }, // 表格列数组形式配置
    colsConfig          : { type: Object as PropType<Record<string, SdProTableDefineTypes.ColumnOptions>>      }, // 表格列对象形式配置
    columnConfig        : { type: Object as PropType<SdProTableDefineTypes.ColumnConfig>                       }, // 列配置
    rows                : { type: Array  as PropType<any[]> , default: () => []                                }, // 表格数据
    rowKey              : { type: String                                                                       }, // 行唯一标识
    rowHeight           : { type: Number , default: 36                                                         }, // 表格行高度
    rowConfig           : { type: Object as PropType<SdProTableDefineTypes.RowConfig>                          }, // 行配置
    operations          : { type: Array  as PropType<SdProTableDefineTypes.OperationItem[]>                    }, // 表格行操作数组形式配置
    operationsConfig    : { type: Object as PropType<SdProTableDefineTypes.OperationsConfig>                   }, // 表格行操作对象形式配置
    activeTab           : { type: [Number, String] as PropType<string | number>                                }, // 当前选中 tab
    tabs                : { type: Array  as PropType<SdProTableDefineTypes.HeaderTabItem[]>                    }, // 顶部 tabs 数据
    tabsConfig          : { type: Object as PropType<SdProTableDefineTypes.HeaderTabsConfig>                   }, // 顶部 tabs 配置
    buttons             : { type: Array  as PropType<SdProTableDefineTypes.HeaderButtonItem[]>                 }, // 顶部按钮数据
    enableTools         : { type: Boolean , default: true                                                      }, // 开启工具栏
    toolsConfig         : { type: Object as PropType<SdProTableDefineTypes.ToolsConfig>                        }, // 工具栏功能配置
    enableQuickSearch   : { type: Boolean , default: true                                                      }, // 开启快速搜索功能
    quickSearchConfig   : { type: Object as PropType<SdProTableDefineTypes.QuickSearchConfig>                  }, // 快速搜索功能配置
    enablePager         : { type: Boolean , default: false                                                     }, // 开启分页功能
    pagerConfig         : { type: Object as PropType<SdProTableDefineTypes.PagerConfig>                        }, // 分页功能配置
    cacheConfig         : { type: Object as PropType<SdProTableDefineTypes.CacheConfig>                        }, // 缓存功能配置
    // ------------------------------------------------------------------------------------------------------------------------
    // Grid 功能配置
    // ------------------------------------------------------------------------------------------------------------------------
    mergeCells          : { type: Array },
    spanMethod          : { type: Function },
    enableScrollY       : { type: Boolean , default: true                                                      }, // 开启虚拟滚动
    enableSeq           : { type: Boolean , default: false                                                     }, // 开启行序列号显示
    seqColumnConfig     : { type: Object as PropType<VxeColumnProps>                                           }, // 序号列配置
    enableExpand        : { type: Boolean , default: false                                                     }, // 开启内容扩展列
    expandColumnConfig  : { type: Object as PropType<VxeColumnProps>                                           }, // 内容列配置
    enableReadio        : { type: Boolean, deafult: false                                                      }, // 开启单选
    radioConfig         : { type: Object as PropType<SdProTableDefineTypes.RadioConfig>                        }, // 单选配置
    radioColumnConfig   : { type: Object as PropType<VxeColumnProps>                                           }, // 单选列配置
    enableCheckbox      : { type: Boolean, default: false                                                      }, // 开启多选
    checkboxConfig      : { type: Object as PropType<SdProTableDefineTypes.CheckboxConfig>                     }, // 多选配置
    checkboxColumnConfig: { type: Object as PropType<VxeColumnProps>                                           }, // 多选列配置
    enableDargSort      : { type: Boolean , default: false                                                     }, // 开启拖拽排序功能
    beforeDargSort      : { type: Function as PropType<SdProTableDefineTypes.BeforeDargSort>                   }, // 用于处理是否可排序
    sortableOptions     : { type: Object as PropType<SdProTableDefineTypes.SortableOptions>                    }, // 拖拽排序功能配置
    sortColumnConfig    : { type: Object as PropType<VxeColumnProps>                                           }, // 排序列配置
    // ------------------------------------------------------------------------------------------------------------------------
    enableEdit          : { type: Boolean                                                                      }, // 开启编辑功能
    editConfig          : { type: Object as PropType<SdProTableDefineTypes.EditConfig>                         }, // 编辑功能配置
    gridConfig          : { type: Object as PropType<SdProTableDefineTypes.GridConfig>                         }, // VxeGrid 完整配置
}

export const sdProTableEmits = [
    'sort-start',
    'sort-end',
    // ------------
    'filter-data-change',
    'visible-data-change',
    // ------------
    'header-tabs-change',
    'header-tabs-click',
    'header-button-click',
    'operation-click',
    'refresh',
    'search-change',
    'search-enter',
    'search-focus',
    'search-blur',
    'search-clear',
    'page-size-change',
    'page-index-change',
    'prev-click',
    'next-click',
    // ------------
    'cell-click',
    'cell-dblclick',
    'header-cell-click',
    'header-cell-dblclick',
    'current-change',
    'scroll',
    'radio-change',
    'checkbox-change',
    'checkbox-all',
    'checkbox-range-start',
    'checkbox-range-change',
    'checkbox-range-end',
    'toggle-row-expand',
    'resizable-change',
    'zoom',
    'filter-change',
    'filter-visible',
    'clear-filter',
]

export type SdProTableProps  = ExtractPublicPropTypes<typeof sdProTableProps>

