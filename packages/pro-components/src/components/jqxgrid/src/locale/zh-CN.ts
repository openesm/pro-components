export default {
    percentsymbol         : '%',
    currencysymbol        : '￥',
    currencysymbolposition: 'before',
    decimalseparator      : '.',
    thousandsseparator    : ',',

    sortascendingstring : '顺序',
    sortdescendingstring: '倒序',
    sortremovestring    : '清除排序',

    pagergotopagestring      : '页码:',
    pagershowrowsstring      : '行数:',
    pagerrangestring         : ' / ',
    pagerpreviousbuttonstring: '上一页',
    pagernextbuttonstring    : '下一页',
    pagerfirstbuttonstring   : '第一页',
    pagerlastbuttonstring    : '最后一页',

    groupsheaderstring: '将列拖放到这里即可完成分组...',
    groupbystring     : '使用该列分组',
    groupremovestring : '清除分组',

    filterclearstring              : '清除',
    filterstring                   : '过滤',
    filtershowrowstring            : '请设置过滤条件:',
    filterorconditionstring        : '或',
    filterandconditionstring       : '并且',
    filterselectallstring          : '(全部)',
    filterchoosestring             : '请选择:',
    filterselectstring             : '(过滤)',
    filterstringcomparisonoperators: ['空', '不空', '包含', '包含(区分大小写)',
        '不包含', '不包含(区分大小写)', '左匹配', '左匹配(区分大小写)',
        '右匹配', '右匹配(区分大小写)', '全匹配', '全匹配(区分大小写)', '空', '非空'],
    filternumericcomparisonoperators: ['等于', '不等于', '小于', '小于或等于', '大于', '大于或等于', '空', '非空'],
    filterdatecomparisonoperators   : ['等于', '不等于', '小于', '小于或等于', '大于', '大于或等于', '空', '非空'],
    filterbooleancomparisonoperators: ['等于', '不等于'],

    validationstring: '输入数据有误',
    emptydatastring : '查无数据',
    loadtext        : '加载中...',
    clearstring     : '清空',
    todaystring     : '今天',

    firstDay: 1, // (0 = Sunday, 1 = Monday, etc)
    days    : {
        names     : ['日','一','二','三','四','五','六'],// ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],
        namesAbbr : ['日','一','二','三','四','五','六'],// ["周日","周一","周二","周三","周四","周五","周六"],
        namesShort: ['日','一','二','三','四','五','六'],
    },
    months: {
        names    : ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月',''],
        namesAbbr: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月',''],
    },
    AM      : ['上午','上午','上午'],
    PM      : ['下午','下午','下午'],
    eras    : [{ name: '公元',start: null,offset: 0 }],
    patterns: {
        d: 'yyyy-MM-dd',
        D: 'yyyy\'年\'M\'月\'d\'日\'',
        t: 'H:mm',
        T: 'H:mm:ss',
        f: 'yyyy\'年\'M\'月\'d\'日\' H:mm',
        F: 'yyyy\'年\'M\'月\'d\'日\' H:mm:ss',
        M: 'M\'月\'d\'日\'',
        Y: 'yyyy\'年\'M\'月\'',
    },
}
