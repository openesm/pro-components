
import type { PropType, ExtractPublicPropTypes } from 'vue'
import type { SdJqxgridTypes } from './types'
import type _Jqxgrid from './jqxgrid.vue'

export const jqxgridProps = {
    height       : { type: String , default: '100%' }, // Grid 高度
    width        : { type: String , default: '100%' }, // Grid 宽度
    columnsHeight: { type: Number , default: 30     }, // 列高
    rowsHeight   : { type: Number , default: 25     }, // 行高
    rows         : { type: Array as PropType<any[]>, default: () => [] },
    cols         : { type: Array as PropType<SdJqxgridTypes.ColumnOptions[]>, default: () => [] }, // 列定义
    filterable   : { type: Boolean, default: true }, // 是否可过滤
    columnGroups : { type: Array as PropType<SdJqxgridTypes.ColumnGroupItem[]> },
    options      : { type: Object as PropType<Record<string, any>> }, // jqxgrid 配置
    enableSeq    : { type: Boolean }, // 是否显示序号
    seqConfig    : { type: Object as PropType<SdJqxgridTypes.SeqConfig> },
}

export const jqxgridEmits = [
    'require',
    'require-success',
    'require-error',
    'ready',
    // -----------
    'created',
    'cellClick',
    'cellDoubleClick',
    'cellSelect',
    'cellUnselect',
    'rowClick',
    'rowDoubleClick',
    'rowSelect',
    'rowUnselect',
]

export type SdJqxgridProps = ExtractPublicPropTypes<typeof jqxgridProps>
