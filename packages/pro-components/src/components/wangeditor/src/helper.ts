
import type { SdWangeditorToolbarProps } from './wangeditor-toolbar'
import type { SdWangeditorProps } from './wangeditor'
import type { SdWangeditorTypes } from './types'

import { shallowRef } from 'vue'

export function defineWangeditorToolbar(props?: SdWangeditorToolbarProps) {
    const editor_toolbar_ref     = shallowRef(null)
    const editor_toolbar_options = props || {}
    return [editor_toolbar_ref, editor_toolbar_options]
}

export function defineWangeditor(props?: SdWangeditorProps & Partial<SdWangeditorTypes.Event>) {
    const editor_ref     = shallowRef(null)
    const editor_options = props || {}
    return [editor_ref, editor_options]
}
