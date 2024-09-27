<script lang="ts">
import { defineComponent } from 'vue'
import { ElScrollbar     } from 'element-plus'
import { sdPageProps     } from './page'

export default defineComponent({
    name      : 'SdPage',
    components: { ElScrollbar },
    props     : sdPageProps,
})
</script>

<template>
    <component :is="lockScroll ? 'div' : 'el-scrollbar'" class="sd-page">
        <div
            v-if="$slots.header || title"
            class="sd-page__header"
            :class="[headerClass, { 'is-fixed': headerFixed }]"
            :style="headerStyle"
        >
            <slot name="header">
                <div v-if="title" class="sd-page__header-title">
                    {{ title }}
                </div>
            </slot>
        </div>

        <div
            class="sd-page__body"
            :class="[{ 'is-lock': lockScroll, 'is-flex': wrap }, bodyClass]"
            :style="bodyStyle"
        >
            <slot />
        </div>

        <div
            v-if="$slots.footer"
            class="sd-page__footer"
            :class="[footerClass, { 'is-fixed': footerFixed }]"
            :style="footerStyle"
        >
            <slot name="footer" />
        </div>
    </component>
</template>
