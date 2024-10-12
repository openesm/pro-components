import type { SdProTableDefineTypes } from '../types'

import { globalConfig } from '../../../../config'
import { isObject, isNumber, isFunction } from 'lodash-es'

const getKey = (key: string) => {
    const cachePrefix = globalConfig?.components?.vxeTable?.cachePrefix || ''
    let prefix = isFunction(cachePrefix) ? cachePrefix() : (cachePrefix || '')
    if (prefix) prefix += '/'

    return `${ prefix }${ key }`
}

// 读取缓存列设置
export const loadColumnByCache = (config?: SdProTableDefineTypes.CacheConfig): string[] | null => {
    if (!config || !config.key) return null

    try {
        const key = getKey(config.key)
        const val = localStorage.getItem(key)
        if ( !val ) return null

        // 不符合格式，清除缓存
        const obj = JSON.parse(val)
        if (!isObject(obj)) {
            localStorage.removeItem(key)
            return null
        }

        const { value, time, expire, version } = obj as Record<string, any>
        if (value === undefined || !isNumber(time) || !isNumber(expire)) {
            localStorage.removeItem(key)
            return null
        }

        // 缓存过期，清除缓存。
        if (expire && Date.now() > (expire * 1000) + time) {
            localStorage.removeItem(key)
            return null
        }

        // 版本不一致
        if ((version || config.version) && version !== config.version) {
            localStorage.removeItem(key)
            return null
        }

        return Array.isArray(value) ? value : null
    } catch (error) {
        return null
    }
}

// 保存列设置至缓存
export const saveColumnToCache = (value: string[], config?: SdProTableDefineTypes.CacheConfig) => {
    if (!config || !config.key) return

    try {
        const key = getKey(config.key)
        if ( !value.length ) {
            localStorage.removeItem(key)
            return
        }

        localStorage.setItem(key, JSON.stringify({
            time   : Date.now()          , // 缓存时间
            expire : config.expire  || 0 , // 时效性
            version: config.version || '', // 缓存版本
            value  ,                       // 缓存值
        }))
    } catch (error) {}
}
