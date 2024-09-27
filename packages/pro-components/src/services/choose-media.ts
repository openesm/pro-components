/**
 * 打开媒体文件选择
 */

interface OpenFilePickerOptions {
    accept  ?: string  // 接收上传的文件类型
    multiple?: boolean // 是否支持多选
}

type OpenFilePickerReturn<T extends OpenFilePickerOptions> = T extends OpenFilePickerOptions
    ? T['multiple'] extends true ? File[] : File
    : File

export async function chooseMedia<T extends OpenFilePickerOptions>(options?: T): Promise<OpenFilePickerReturn<T> | null> {
    return new Promise((resolve) => {
        const input_el = document.createElement('input')

        input_el.type = 'file'
        input_el.style.display = 'none'
        input_el.accept   = options?.accept   || '*'
        input_el.multiple = options?.multiple || false

        input_el.addEventListener('change', () => {
            const files = input_el.files
            if (files) {
                const arr = Array.from(files)
                resolve((options?.multiple ? arr : arr[0]) as any)
            }
        }, { once: true })

        input_el.addEventListener('cancel', () => {
            resolve(null)
        }, { once: true })

        input_el.click()
    })
}
