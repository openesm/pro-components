<script lang="ts">
import { defineComponent } from 'vue'
import { ElIcon          } from 'element-plus'
import { ArrowRight      } from '@element-plus/icons-vue'
import { sdTitleBarProps, sdTieleBarEmits } from './title-bar'

export default defineComponent({
    name      : 'SdTitleBar',
    components: { ElIcon, ArrowRight },
    props     : sdTitleBarProps,
    emits     : sdTieleBarEmits,
})
</script>

<template>
    <div class="sd-title-bar">
        <div
            class="sd-title-bar__head" :class="[`sd-title-bar__head--${ type }`, { ['is-arrow']: arrow }, headClass]"
            :style="headStyle"
            @click="$emit('click-header', $event)"
        >
            <ElIcon v-if="icon" :color="iconColor" :size="iconSize">
                <component :is="icon" />
            </ElIcon>
            <span class="sd-title-bar__head-content">
                <span class="sd-title-bar__head-title">{{ title }}</span>
                <span class="sd-title-bar__head-subtitle">{{ subTitle }}</span>
            </span>
            <span class="sd-title-bar__head-desc">{{ desc }}</span>
            <ElIcon v-if="arrow">
                <ArrowRight />
            </ElIcon>
            <slot name="extra" />
        </div>
        <div v-if="$slots.default" class="sd-title-bar__body" :class="[bodyClass]" :style="bodyStyle">
            <slot />
        </div>
    </div>
</template>
