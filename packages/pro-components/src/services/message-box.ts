import type {
    ElMessageBoxShortcutMethod,
    ElMessageBoxOptions,
} from 'element-plus'
import { ElMessageBox } from 'element-plus'
import { isString, isObject } from 'lodash-es'
import { globalConfig } from '../config'

/** messageBox 确认框等. */
export const showAlert   = createMessageBox<boolean>(ElMessageBox.alert)
export const showConfirm = createMessageBox<boolean>(ElMessageBox.confirm)
export const showPrompt  = createMessageBox<string | boolean>(ElMessageBox.prompt)

// 创建弹窗类函数
function createMessageBox<T>(MessageBoxMethod: ElMessageBoxShortcutMethod) {
    return (
        message: string,
        title?: string,
        options?: ElMessageBoxOptions['type'] | ElMessageBoxOptions,
    ): Promise<T> => {
        return new Promise((resolve) => {
            title   = title   || '提示'
            message = message || ''

            let type: ElMessageBoxOptions['type'] = 'warning'
            let opt : ElMessageBoxOptions         = {}
            if (isString(options)) {
                type = options
                opt  = {}
            } else if (isObject(opt)) {
                type = opt?.type || 'warning'
                opt  = options   || {}
            }

            const _options_: ElMessageBoxOptions = {
                closeOnClickModal: true,
                confirmButtonText: '确认',
                cancelButtonText : '取消',
                ...opt,
                type,
            }

            globalConfig.event?.onModalShow('message-box', {  message, title, ..._options_ })
            MessageBoxMethod(message, title, _options_)
                .then((res: any) => {
                    globalConfig.event?.onModalHide('message-box', {  message, title, ..._options_ })

                    const val = res.value
                    resolve(isObject(res) ? val : true)
                })
                .catch(() => {
                    globalConfig.event?.onModalHide('message-box', {  message, title, ..._options_ })

                    resolve(false as any)
                })

        })
    }
}
