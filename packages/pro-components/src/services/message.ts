import type { MessageOptionsWithType } from 'element-plus'
import { ElMessage } from 'element-plus'

export const successMsg = CreateMessage('success')
export const warningMsg = CreateMessage('warning')
export const infoMsg    = CreateMessage('info')
export const errorMsg   = CreateMessage('error')

// 创建反馈消息函数
function CreateMessage(type: 'success' | 'warning' | 'info' | 'error') {
    return (options: string | MessageOptionsWithType) => {
        ElMessage[type](typeof options === 'string' ? { message: options } : options)
    }
}
