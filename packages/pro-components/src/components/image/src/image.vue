<script lang="ts">
import type { CSSProperties } from 'vue'
import type { ImageProps    } from 'element-plus'

import { defineComponent, ref, computed              } from 'vue'
import { Picture, Loading                            } from '@element-plus/icons-vue'
import { ElImage, ElIcon                             } from 'element-plus'
import { sdImageProps, sdImageEmits, sdImageOmitKeys } from './image'
import { isString, omit                              } from 'lodash-es'

export default defineComponent({
    name        : 'SdImage',
    components  : { ElImage, ElIcon, PictureIcon: Picture, LoadingIcon: Loading },
    inheritAttrs: false,
    props       : sdImageProps,
    emits       : sdImageEmits,
    setup(props, ctx) {
        // el-image 属性配置
        const image_props$ = computed(() => omit(props, sdImageOmitKeys) as ImageProps)

        // 图片容器样式
        const image_style$ = computed(() => {
            const styles: CSSProperties = {}
            const { width, height, minWidth, minHeight, borderRadius, circle } = props
            if (width       ) styles.width        = isString(width    )    ? width        : `${ width     }px`
            if (height      ) styles.height       = isString(height   )    ? height       : `${ height    }px`
            if (minWidth    ) styles.minWidth     = isString(minWidth )    ? minWidth     : `${ minWidth  }px`
            if (minHeight   ) styles.minHeight    = isString(minHeight)    ? minHeight    : `${ minHeight }px`
            if (borderRadius) styles.borderRadius = isString(borderRadius) ? borderRadius : `${ borderRadius }px`
            if (circle      ) styles.borderRadius = '50%'
            return styles
        })

        // 预览图片列表
        const load_succeed = ref(false)
        const preview_src_list$ = computed(() => {
            if (props.disabledPreview      ) return []
            if (props.previewSrcList.length) return props.previewSrcList
            return load_succeed.value ? [props.src] : []
        })

        // 加载图片成功
        const onLoad = (e: Event) => {
            ctx.emit('load', e)
            load_succeed.value = true
        }

        // 加载图片失败
        const onError = (e: Event) => {
            ctx.emit('error', e)
            load_succeed.value = false
        }

        return {
            image_props$,
            image_style$,
            preview_src_list$,
            onLoad,
            onError,
        }
    },
})
</script>

<template>
    <ElImage
        class="sd-image"
        :alt="$attrs.alt"
        :referrer-policy="$attrs.referrerPolicy"
        v-bind="image_props$"
        :preview-src-list="preview_src_list$"
        :style="image_style$"
        @load="onLoad"
        @error="onError"
        @close="$emit('close')"
        @show="$emit('show')"
        @switch="$emit('switch', $event)"
    >
        <template #placeholder>
            <slot name="placeholder">
                <div class="el-image__placeholder" :style="[image_style$, placeholderStyle || '']">
                    <ElIcon class="is-loading" :size="placeholderIconSize" :color="placeholderIconColor">
                        <LoadingIcon />
                    </ElIcon>
                </div>
            </slot>
        </template>

        <template #error>
            <slot name="error">
                <div class="el-image__error" :style="[image_style$, errorStyle || '']">
                    <ElIcon :size="errorIconSize" :color="errorIconColor">
                        <PictureIcon />
                    </ElIcon>
                </div>
            </slot>
        </template>
    </ElImage>
</template>
