import type { LoadingOptions } from 'element-plus'
import { ElLoading           } from 'element-plus'

/** 显示 Loading */
let $loading: ReturnType<typeof ElLoading.service> | null = null
export function showLoading(options?: LoadingOptions) {
    if ($loading) return $loading

    const opt = options?.fullscreen
        ? options
        : {
                text      : '加载中...',
                background: 'transparent',
                spinner   : `
                    <path fill="currentColor" d="M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"></path>
                `,
                svgViewBox : '0 0 1024 1024',
                customClass: 'sd-loading-request',
                ...options,
            }

    $loading = ElLoading.service(opt)

    return $loading
}

/** 显示 隐藏 Loading */
export function hideLoading() {
    $loading && $loading.close()
    $loading = null

    // 23.09.13
    // 解决登录跳转有调用全局Loading的页面，清空了当前的Loading，body中的样式无法被清除
    document.body.classList.remove('el-loading-parent--relative')
}
