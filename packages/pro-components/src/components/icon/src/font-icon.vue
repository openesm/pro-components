<script lang="ts">
import type { CSSProperties } from 'vue'
import { defineComponent, computed } from 'vue'

export default defineComponent({
    name : 'SdFontIcon',
    props: {
        prefix: { type: String, default: 'sd-font-icon' },
        name  : { type: String                          },
        size  : { type: Number, default: 16             },
        color : { type: String                          },
    },
    setup(props) {
        const icon_style$ = computed(() => {
            const styles: CSSProperties = {}
            if (props.size) {
                styles.width  = `${ props.size }px`
                styles.height = `${ props.size }px`
            }
            if (props.color) {
                styles.color = props.color
            }
            return styles
        })

        return { icon_style$ }
    },
})
</script>

<template>
    <i class="sd-icon sd-font-icon" :class="[`${ prefix } ${ name }`]" :style="icon_style$" />
</template>
