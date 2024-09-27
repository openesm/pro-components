<script lang="ts">
import { defineComponent } from 'vue'
import { sdStatusProps   } from './status'

export default defineComponent({
    name : 'SdStatus',
    props: sdStatusProps,
})
</script>

<template>
    <span class="sd-status" :class="[`sd-status--${ type }`]">
        <slot>
            {{ text }}
        </slot>
    </span>
</template>
