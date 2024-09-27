<script lang="ts">
import { defineComponent, computed } from 'vue'
import { sdIconProps } from './icon'

import SvgIcon  from './svg-icon.vue'
import FontIcon from './font-icon.vue'

export default defineComponent({
    name      : 'SdIcon',
    components: { SvgIcon, FontIcon },
    props     : sdIconProps,
    setup(props) {
        const is_svg_icon$   = computed(() => props.name?.endsWith('|svg'))
        const svg_icon_name$ = computed(() => is_svg_icon$.value ? props.name?.replace('|svg', '') : '')
        return { is_svg_icon$, svg_icon_name$ }
    },
})
</script>

<template>
    <SvgIcon
        v-if="is_svg_icon$"
        :prefix="prefix"
        :name="svg_icon_name$"
        :size="size"
        :color="color"
    />

    <FontIcon
        v-else
        :prefix="prefix"
        :name="name"
        :color="color"
        :size="size"
    />
</template>
