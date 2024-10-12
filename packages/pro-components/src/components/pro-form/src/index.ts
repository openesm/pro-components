import type { App } from 'vue'
import type { ProFormGlobalConfig } from './config'

import SdProForm       from './pro-form.vue'
import SdProFormRender from './pro-form-render.vue'
import SdProFormField  from './pro-form-field.vue'
import { setupGlobalConfig } from './config'

export * from './types'
export * from './token'
export * from './helper'
export * from './pro-form'
export * from './services'

export {
    SdProForm,
    SdProFormRender,
    SdProFormField,
    setupGlobalConfig,
}

export default {
    install: (app: App, options?: Partial<ProFormGlobalConfig>) => {
        app.component(SdProForm.name      , SdProForm)
        app.component(SdProFormRender.name, SdProFormRender)
        app.component(SdProFormField.name , SdProFormField)

        setupGlobalConfig({
            getAppContext: () => app._context,
            ...options,
        })
    },
}
