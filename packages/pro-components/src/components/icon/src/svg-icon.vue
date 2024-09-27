<script lang="ts">
import type { CSSProperties } from 'vue'
import { defineComponent, computed } from 'vue'

export default defineComponent({
    name : 'SdSvgIcon',
    props: {
        prefix: { type: String, default: 'icon' },
        name  : { type: String                  },
        size  : { type: Number                  },
        color : { type: String                  },
    },
    setup(props) {
        const icon_style$ = computed(() => {
            const styles: CSSProperties = {}
            if (props.size) {
                styles.width = `${ props.size }px`
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
    <svg class="sd-icon sd-svg-icon" :class="[$attrs.class]" :style="icon_style$" aria-hidden="true">
        <use :xlink:href="`#${ prefix }-${ name }`" />
    </svg>
</template>
