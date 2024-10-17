import type { PropType } from 'vue'

export const webdataRocksProps = {
    // https://www.webdatarocks.com/doc/report-object/
    report       : { type: Object as PropType<any>           }, // 报表对象
    width        : { type: [Number, String]                  }, // 报表宽度
    height       : { type: [Number, String], default: '100%' }, // 报表高度
    toolbar      : { type: Boolean, default: true            }, // 开启报表工具栏
    customizeCell: { type: Function                          }, // 自定义格式化单元格
}

export const webdataRocksEmits = [
    'require',
    'require-success',
    'require-error',
    'ready',
    // -----------------------
    'beforetoolbarcreated',
    'cellclick',
    'celldoubleclick',
    'dataloaded',
    'reportchange',
    'reportcomplete',
    'update',
    'scroll',
]
