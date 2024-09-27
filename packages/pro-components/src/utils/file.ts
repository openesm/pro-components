// 检查文件类型
export function checkFileType(file: File, types: string[]) {
    const file_type = file.name.substring(file.name.lastIndexOf('.') + 1).toLowerCase()
    return types.includes(file_type)
}

// 检查文件宽高
export function checkFileWH(file: File) {
    return new Promise((resolve) => {
        const width  = 900
        const height = 900
        const _URL   = window.URL || window.webkitURL

        const img  = new Image()
        img.onload = () => { resolve(img.width <= width && img.height <= height) }
        img.src    = _URL.createObjectURL(file)
    })
}

// 格式化文件大小单位
export function formatFileSize(size: number) {
    if (!size) return ''

    let to_size = ''
    let to_unit = ''

    const num = 1024.00 // byte
    if (size < num     ) {
        to_size = size.toFixed(2)
        to_unit = 'B'
    } else if (size < num ** 2) {
        to_size = (size / num).toFixed(2)
        to_unit = 'KB'
    } else if (size < num ** 3) {
        to_size = (size / num ** 2).toFixed(2)
        to_unit = 'MB'
    } else if (size < num ** 4) {
        to_size = (size / num ** 3).toFixed(2)
        to_unit = 'G'
    } else {
        to_size = (size / num ** 4).toFixed(2)
        to_unit = 'T'
    }

    return `${ to_size.endsWith('00') ? to_size.slice(0, -3) : to_size }${ to_unit }`
}
