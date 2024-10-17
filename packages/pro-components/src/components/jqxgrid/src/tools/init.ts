/**
 * 处理 jqxgrid 初始化
 */
import type { Ref } from 'vue'
import type { SdJqxgridTypes } from '../types'
import type { SdJqxgridProps } from '../jqxgrid'

import { toRaw } from 'vue'
import { getAggregates, aggregatesRenderer } from './aggregates'
import Chinese from '../locale/zh-CN'

// 初始化默认网格属性
export function initJqxGrid($: any, props: SdJqxgridProps, origin_col_map: Ref<Record<string, SdJqxgridTypes.ColumnOptions & { datafield: string }>>) {
    const datafields: SdJqxgridTypes.DataField[] = []
    const columns   : SdJqxgridTypes.Column[]    = []
    const { cols = [], rows = [] } = props

    let maxAggsLen = 0
    cols.forEach((col, idx: number) => {
        const key = `f${ idx }`
        origin_col_map.value[key] = { ...col, datafield: key } // 保存当前映射

        const dataField: SdJqxgridTypes.DataField = {
            name: key,
            map : `${ idx }`,             // 取数据的 key
            type: col.type || 'string',
        }
        if (['number', 'int', 'float', 'money'].includes(col.type || '')) {
            dataField.type = 'number'
        }

        datafields.push(dataField)

        const column = getColumn(col, key)
        if ( column.aggregates) {
            maxAggsLen = Math.max(maxAggsLen, column.aggregates.length)
        }

        columns.push(column)
    })

    // 开启序号列展示
    if (props.enableSeq) {
        datafields.unshift({ name: '_seq', map: '_seq', type: 'number' })
        columns.unshift(getSeqColumn(props))
    }

    const jqxGridSource = {
        localdata: rows,
        datafields,
        datatype : 'array', // 注释和开启没有测试出有何影响
    }

    const DataAdapter = $ ? $?.jqx?.dataAdapter : undefined
    return {
        localization   : Chinese,                 // 语言包
        theme          : 'bootstrap',             // 主题
        width          : props.width,             // 布局宽度
        height         : props.height,            // 布局高度
        columnsheight  : props.columnsHeight,     // 列高
        rowsheight     : props.rowsHeight,        // 行高
        autorowheight  : false,                   // 关闭自动行高
        columnsresize  : true,                    // 允许调整列宽度
        sortable       : true,                    // 允许选择排序模式
        editable       : false,                   // 关闭编辑模式
        altrows        : true,                    // 隔行分色
        filterable     : props.filterable,        // 允许过滤
        showfilterrow  : props.filterable,        // 显示过滤行
        clipboard      : true,                    // 取消粘贴板
        scrollmode     : 'logical',               // 滚动模式：default | logical | deferredf
        selectionmode  : 'multiplecellsadvanced', // 选择模式
        showstatusbar  : maxAggsLen > 0,          // 显示状态栏（聚合函数显示位置）
        showaggregates : maxAggsLen > 0,          // 是否显示聚合函数
        statusbarheight: ((maxAggsLen || 1) * 20) + 6,
        columngroups   : props.columnGroups ? toRaw(props.columnGroups) : undefined, // proxy 会导致识别不出来
        ...props.options,
        columns         , // 列定义
        source         : DataAdapter ? new DataAdapter(jqxGridSource) : undefined,
    }
}

function getColumn(col: SdJqxgridTypes.ColumnOptions, name: string): SdJqxgridTypes.Column {
    const o: SdJqxgridTypes.Column = {
        datafield         : name || col.name,
        text              : col.text || col.title || col.name || '',
        sortable          : col.sortable   !== false,
        filterable        : col.filterable !== false,
        hideable          : col.hideable   !== false,
        hidden            : !!col.hidden,
        groupable         : col.groupable  !== false,
        columngroup       : col.columngroup,
        exportable        : col.exportable !== false,
        renderer          : col.renderer,
        cellsrenderer     : col.cellsrenderer,
        columntype        : col.columntype,
        // validation        : col.validation,
        cellsformat       : col.cellsformat || col.format,
        aggregates        : getAggregates(col.aggregates  || col.aggs),
        aggregatesrenderer: col.aggregatesrenderer || aggregatesRenderer,
        align             : 'center', // TODO: 待修改支持 col.align || 'center',
        cellsalign        : col.cellsalign || col.align || 'center',
        minwidth          : col.minwidth,
        maxwidth          : col.maxwidth,
        resizable         : col.resizable !== false,
        draggable         : col.draggable !== false,
        // editable          : col.editable !== undefined,
        classname         : col.classname,
        cellclassname     : col.cellclassname,
        pinned            : !!col.pinned,
        nullable          : !!col.nullable,
        // filterdelay       : col.filterdelay || 800,
        filtertype        : col.filtertype || 'textbox',
        // filteritems       : new $.jqx.dataAdapter({ datatype: 'array', datafields: [], localdata: [] }),
        // filtercondition   : col.filtercondition,
    }

    // 不是数值，会导致 grid 无法显示 且未设置 width 时，则默认设置最小宽度 100
    if (col.width) {
        o.width = col.width
    } else {
        o.minwidth = col.minwidth ?? 120
    }

    if (col.displayfield !== undefined) {
        o.displayfield = col.displayfield
    }

    // 类型为数字、和日期的预设些参数
    switch (col.type) {
        case 'number': {
            if (!col.filtertype  && !col.filter) o.filtertype  = 'number'
            if (!col.cellsformat && !col.format) o.cellsformat = 'n' // 默认：整数
            if (!col.cellsalign  && !col.align ) o.cellsalign  = 'right'
            break
        }
        case 'int': {
            if (!col.filtertype  && !col.filter) o.filtertype  = 'number'
            if (!col.cellsformat && !col.format) o.cellsformat = 'n' // 默认：整数
            if (!col.cellsalign  && !col.align ) o.cellsalign  = 'right'
            break
        }
        case 'float': {
            if (!col.filtertype  && !col.filter) o.filtertype  = 'number'
            if (!col.cellsformat && !col.format) o.cellsformat = 'f2' // 默认：2位小数的浮点数
            if (!col.cellsalign  && !col.align ) o.cellsalign  = 'right'
            break
        }
        case 'money': {
            if (!col.filtertype  && !col.filter) o.filtertype  = 'number'
            if (!col.cellsformat && !col.format) o.cellsformat = 'c2' // 默认：带有金币符号的2位小数
            if (!col.cellsalign  && !col.align ) o.cellsalign  = 'right'
            break
        }
        case 'bool': {
            if (!col.filtertype  && !col.filter) o.filtertype  = 'checkedlist'
            if (!col.columntype                ) o.columntype  = 'checkbox'
            break
        }
        case 'date': {
            if (!col.filtertype  && !col.filter) o.filtertype  = 'date'
            if (!col.cellsformat && !col.format) o.cellsformat = 'd' // 默认：年-月-日
            break
        }
    }

    return o
}

// 获取序号列配置
function getSeqColumn(props: SdJqxgridProps): SdJqxgridTypes.Column {
    const c = props.seqConfig || {}
    return {
        text              : c.text || '#',
        datafield         : '$seq',
        pinned            : c.pinned !== false,
        exportable        : false,
        width             : c.width || 60,
        filtertype        : 'textbox',
        filterable        : false,
        sortable          : true,
        editable          : false,
        columntype        : 'number',
        align             : 'center',
        cellsalign        : 'center',
        cellclassname     : undefined,
        aggregates        : ['count'],
        ...c,
        aggregatesrenderer: aggregatesRenderer,
        cellsrenderer     : c.cellsrenderer
            ? c.cellsrenderer
            : (_row: number, _col: any, value: number) => {
                    const val = 1 + value
                    return (
                        `<div style="text-align: center; margin-top: 5px;">
                            ${ c.format ? c.format(val) : (val) }
                        </div>`
                    )
                },
    }
}
