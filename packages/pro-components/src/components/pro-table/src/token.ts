import type { InjectionKey } from 'vue'
import type { SdProTableContext } from './types'

// 表格上下文
export const sdProTableKey: InjectionKey<SdProTableContext> = Symbol('sdProTableKey')
