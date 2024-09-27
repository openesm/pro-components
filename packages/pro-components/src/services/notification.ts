import type { NotificationOptionsTyped } from 'element-plus'
import { ElNotification } from 'element-plus'
import { isString } from 'lodash-es'

export const successNotice = CreateNotice('success')
export const warningNotice = CreateNotice('warning')
export const infoNotice    = CreateNotice('info')
export const errorNotice   = CreateNotice('error')

function CreateNotice(type: 'success' | 'warning' | 'info' | 'error') {
    return (options: string | NotificationOptionsTyped, title = '通知') => {
        const _options_ = isString(options) ? { message: options } : options

        ElNotification[type]({ ..._options_, title })
    }
}
