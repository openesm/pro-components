<script lang="ts">
import type { Router } from 'vue-router'

import { defineComponent, getCurrentInstance } from 'vue'
import { ElIcon                              } from 'element-plus'
import { sdLinkProps                         } from './link'

export default defineComponent({
    name      : 'SdLink',
    components: { ElIcon },
    props     : sdLinkProps,
    setup(props) {
        const instance   = getCurrentInstance()!
        const $router    = instance.appContext.config.globalProperties.$router as Router

        // 传入路径是外链
        const onClick = () => {
            if (props.disabled) return

            const href = props.href
            if ( !href ) return

            const is_url = /^https?:\/\//.test(props.href)
            if (is_url) {
                window.open(href, '_target')
            } else {
                const route_record = $router.resolve(href)
                if ( !route_record ) return

                $router.push({
                    path   : route_record.path,
                    params : route_record.params,
                    query  : route_record.query,
                    replace: !!props.replace,
                })
            }
        }

        return { onClick }
    },
})
</script>

<template>
    <a
        class="sd-link"
        :class="[
            `sd-link--${ type }`,
            {
                'is-disabled'                  : disabled,
                [`is-${ underline }-underline`]: !disabled,
            },
        ]"
        @click.prevent.stop="onClick"
    >
        <ElIcon v-if="icon"><component :is="icon" /></ElIcon>
        <slot>
            {{ text }}
        </slot>
        <slot v-if="$slots.icon" name="icon" />
    </a>
</template>
