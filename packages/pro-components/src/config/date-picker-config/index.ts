import type { DatePickType } from 'element-plus'
import type { SdDatePickerProps } from '../../components/date-picker/src/date-picker'

import date          from './date'
import week          from './week'
import month         from './month'
import year          from './year'
import dates         from './dates'
import monthrange    from './monthrange'
import daterange     from './daterange'
import datetime      from './datetime'
import datetimerange from './datetimerange'

const getDatePickerTypeDefaultOptions = (type: DatePickType) => {
    switch (type) {
        case 'year'          : return year
        case 'month'         : return month
        case 'week'          : return week
        case 'date'          : return date
        case 'dates'         : return dates
        case 'datetime'      : return datetime
        case 'daterange'     : return daterange
        case 'datetimerange' : return datetimerange
        case 'monthrange'    : return monthrange
    }
}

export const getDatePickerOptions = (type: DatePickType): Partial<SdDatePickerProps> => {
    return {
        format     : 'YYYY-MM-DD', /** 显示在输入框中的格式 */
        valueFormat: 'YYYY-MM-DD', /** 选中日期范围的格式   */
        ...getDatePickerTypeDefaultOptions(type), /** 单独配置的默认值    */
    }
}
