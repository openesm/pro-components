<script lang="ts">
import { defineComponent, ref, computed     } from 'vue'
import { ElScrollbar, ElResult, ElButton    } from 'element-plus'
import { Refresh as IconRefresh             } from '@element-plus/icons-vue'
import { sdContainerProps, sdContainerEmits } from './container'
import { SdLoading } from '../../loading'

export default defineComponent({
    name      : 'SdContainer',
    components: { ElScrollbar, ElResult, ElButton, SdLoading },
    props     : sdContainerProps,
    emits     : sdContainerEmits,
    setup(props) {
        const scroll_ref = ref()
        const scrollbar_config$ = computed(() => {
            // 非滚动模式
            if (props.lockScroll) return {}

            const viewStyle = props.scrollbarConfig?.viewStyle
            return {
                ...props.scrollbarConfig,
                viewStyle: viewStyle || { display: 'flex', flexDirection: 'column',  minHeight: '100%' },
            }
        })

        function scrollToTop() {
            scroll_ref.value && scroll_ref.value.setScrollTop(0)
        }

        return { scroll_ref, scrollbar_config$, scrollToTop, IconRefresh }
    },
})
</script>

<template>
    <component
        :is="lockScroll ? 'div' : 'el-scrollbar'"
        ref="scroll_ref"
        class="sd-container"
        v-bind="scrollbar_config$"
        @scroll="$emit('scroll', $event)"
    >
        <SdLoading v-if="loading" />

        <template v-else-if="showError">
            <slot name="error">
                <div class="error-wrap" style="width: 100%; height: 100%; padding-top: 24vh;">
                    <ElResult icon="error" :title="errorText">
                        <template #extra>
                            <slot name="error-extra" />

                            <ElButton :icon="IconRefresh" @click="$emit('reload')">
                                重新加载
                            </ElButton>
                        </template>
                    </ElResult>
                </div>
            </slot>
        </template>

        <template v-else>
            <div
                v-if="$slots.header || title"
                class="sd-container__header"
                :class="[headerClass, { 'is-fixed': headerFixed }]"
                :style="headerStyle"
            >
                <slot name="header">
                    <div v-if="title" class="sd-container__header-title">
                        {{ title }}
                    </div>
                </slot>
            </div>

            <div
                class="sd-container__body"
                :class="[{ 'is-lock': lockScroll, 'is-flex': wrap }, bodyClass]"
                :style="bodyStyle"
            >
                <div v-if="renderContent" class="sd-container__content" :style="contentStyle">
                    <slot />
                </div>
                <slot v-else />
            </div>

            <div
                v-if="$slots.footer"
                class="sd-container__footer"
                :class="[footerClass, { 'is-fixed': footerFixed }]"
                :style="footerStyle"
            >
                <slot name="footer" />
            </div>
        </template>
    </component>
</template>
