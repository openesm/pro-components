<script lang="ts" setup>
/**
 * 裁剪图片组件
 */
import { ref, computed, onMounted, watch } from 'vue'
import { sdCropperProps, sdCropperEmits  } from './cropper'
import { ElButton, ElTooltip, ElRadioGroup, ElRadioButton, ElColorPicker } from 'element-plus'
import { isNumber                        } from 'lodash-es'
import {
    Upload       as IconUpload,
    Refresh      as IconRefresh,
    RefreshRight as IconRefreshRight,
    RefreshLeft  as IconRefreshLeft,
    ZoomOut      as IconZoomOut,
    ZoomIn       as IconZoomIn,
} from '@element-plus/icons-vue'

import Cropper from './cropper.esm'
import 'cropperjs/dist/cropper.css'

defineOptions({ name: 'SdCropper' })

const props       = defineProps(sdCropperProps)
const emit        = defineEmits(sdCropperEmits)
const img_ref     = ref<HTMLImageElement | null>(null)      // 图片元素引用
const is_ready    = ref(false)                              // 裁剪器是否初始化完毕
const view_mode   = ref(props.cropperConfig?.viewMode ?? 0) // 裁剪器显示模式
const preview_src = ref('')                                 // 裁剪后的预览图片路径
const fill_color  = ref(props.outputType === 'png' ? '' : '#ffffff')

// 处理裁剪区域默认宽高，避免网络图片加载导致宽高变化
const wrap_style$ = computed(() => {
    const def_width = props.showChooseFile ? '360px' : '300px'
    const width     = props.width  ?? props.cropperConfig?.minContainerWidth  ?? def_width
    const height    = props.height ?? props.cropperConfig?.minContainerHeight ?? '300px'
    return {
        width : isNumber(width) ? `${ width }px` : width,
        height: isNumber(height) ? `${ height }px` : height,
    }
})

// 生成默认预览列表
const preview_list$ = computed(() => {
    const { showPreview, previewSizes, aspectRatio, cropperConfig } = props
    const ratio = cropperConfig?.aspectRatio ?? aspectRatio

    // 不显示预览图片
    if (!showPreview) return []

    // 自定义预览显示列表
    const sizes = previewSizes.length ? previewSizes : [120, 80]
    return sizes.map((size) => {
        if (ratio && ratio < 1 && ratio > 0) return { height: `${ size }px` } // 高宽比 9 / 16
        if (ratio && ratio === 1           ) return { width: `${ size }px`, height: `${ size }px` } // 等宽高
        return { width: `${ size }px`  }
    })
})

let $cropper: InstanceType<typeof Cropper>
onMounted(createCropper)
watch(view_mode, createCropper)
watch(fill_color, realTimeCroppered)
watch(() => props.src, (src) => { $cropper?.replace(src) })

// 创建图片裁剪器
function createCropper() {
    const $img = img_ref.value as HTMLImageElement
    if ( !$img ) return dispatchEvent('error')

    $cropper?.destroy()
    $cropper = new Cropper($img, {
        autoCropArea      : 1,                 // 自动裁剪区域比例：默认 0.8
        minContainerWidth : props.width,       // 最小容器宽度
        minContainerHeight: props.height,      // 最小容器高度
        autoCrop          : props.autoCrop,    // 是否自动裁剪：默认 true
        aspectRatio       : props.aspectRatio, // 裁剪比例
        dragMode          : 'move',            // 拖拽模式：crop 新建画布、move 移动画布、none 不处理
        ...props.cropperConfig,
        viewMode          : view_mode.value,   // 显示模式：0 自由模式, 1 裁剪模式
        crop              : () => { realTimeCroppered() }, // 裁剪
        zoom              : () => { realTimeCroppered() }, // 缩放
        cropmove          : () => { realTimeCroppered() }, // 移动
        ready             : () => {
            is_ready.value = true

            if (!$cropper) return
            if (view_mode.value !== 0) return // 仅填充模式
            const aspectRatio    = props.aspectRatio || 1
            const container_data = $cropper.getContainerData()
            const canvas_data    = $cropper.getCanvasData()

            let h1 = container_data.height
            let w1 = h1 * aspectRatio
            if (w1 > container_data.width) {
                w1 = container_data.width
                h1 = w1 / aspectRatio
            }

            $cropper.setCropBoxData({
                width : w1,
                height: h1,
                left  : (container_data.width - w1) / 2,
                top   : (container_data.height - h1) / 2,
            })

            const rate = canvas_data.naturalWidth / canvas_data.naturalHeight
            let h2 = h1
            let w2 = h2 * rate
            if (w2 > w1) {
                w2 = w1
                h2 = w2 / rate
            }

            $cropper.setCanvasData({
                width : w2,
                height: h2,
                left  : (container_data.width - w2) / 2,
                top   : (container_data.height - h2) / 2,
            })
        },
    })

    // 未选择正确的图片文件，导致裁剪器初始失败
    if (!$cropper || !($cropper as any).image) dispatchEvent('error')
}

// 实时预览
let timer: ReturnType<typeof setTimeout>
function realTimeCroppered() {
    if (props.autoCrop === false) return // 是否自动裁剪
    clearTimeout(timer)
    timer = setTimeout(cropperd, 80)
}

// 调用裁剪方法
async function cropperd() {
    if (!$cropper) return

    const blob = await getCroppedFile()
    if ( !blob ) return dispatchEvent('cropped-error')

    preview_src.value = URL.createObjectURL(blob)
    dispatchEvent('cropped', {
        blob,
        file   : blob,              // 原始文件
        src    : preview_src.value, // 预览图片路径
        imgInfo: $cropper.getData(),
    })
}

// 取得裁剪后图片文件
function getCroppedFile(): Promise<Blob | null> {
    return new Promise((resolve) => {

        // height: 720 rotate: 0 scaleX: 1 scaleY: 1 width: 720 x: 280 y: 0
        const crop_data = $cropper.getData()
        const output_config = { ...props.outputConfig }
        delete output_config.maxWidth
        delete output_config.maxHeight

        const  { maxWidth, maxHeight } = props.outputConfig || {}
        const crop_options = {
            fillColor: fill_color.value || undefined, // png 默认不填充颜色
            width    : maxWidth  ? Math.min(crop_data.width, maxWidth  ) : crop_data.width,
            height   : maxHeight ? Math.min(crop_data.height, maxHeight) : crop_data.height,
            ...output_config,
        }

        // 默认填充色为白色
        const crop_canvas = $cropper.getCroppedCanvas(crop_options)
        const canvas      = props.circle ? getRoundedCanvas(crop_canvas) : crop_canvas
        if ( !canvas ) return resolve(null)

        canvas.toBlob((blob) => { resolve(blob || null) }, `image/${ props.outputType }`)
    })
}

// 裁剪圆形图片
function getRoundedCanvas(sourceCanvas: HTMLCanvasElement) {
    const canvas  = document.createElement('canvas')
    const context = canvas.getContext('2d')
    if ( !context ) return

    const width  = sourceCanvas.width
    const height = sourceCanvas.height

    canvas.width = width
    canvas.height = height
    context.imageSmoothingEnabled = true
    context.drawImage(sourceCanvas, 0, 0, width, height)
    context.globalCompositeOperation = 'destination-in'
    context.beginPath()
    context.arc(width / 2, height / 2, Math.min(width, height) / 2, 0, 2 * Math.PI, true)
    context.fill()

    return canvas
}

// 派发事件
function dispatchEvent(name: string, praams?: Record<string, any>, event?: Event) {
    emit(name, { ...praams, $cropper, $event: event || null })
}

// 裁剪器是否已准备好
function isReady() { return is_ready.value }

// 将图像旋转到相对角度
function zoom(value: number) { $cropper?.zoom(value) }

// 旋转到（度）
function rotate(value: number) { $cropper?.rotate(value) }

// 重置
function reset() { createCropper() }

// 取得当前裁剪器实例
function getCropperInstance() { return $cropper }

defineExpose({
    isReady,
    zoom,
    rotate,
    reset,
    getRoundedCanvas,
    getCropperInstance,
    getCroppedFile,
    cropperd,
})
</script>

<template>
    <div class="sd-cropper-wrap">
        <!-- 裁剪区域 -->
        <div class="sd-cropper-wrap__left">
            <div class="sd-cropper" :class="{ 'is-cricle': circle }" :style="wrap_style$">
                <img v-show="is_ready" ref="img_ref" class="sd-cropper__img" :src="src">
            </div>

            <!-- 图片裁剪操作区域 -->
            <slot v-if="$slots.tools" name="tools" />
            <div v-else-if="showTools" class="sd-cropper-tools" :class="{ 'is-center': !showChooseFile }">
                <ElTooltip content="重新选择图片" :show-after="150">
                    <ElButton
                        v-if="showChooseFile"
                        :icon="IconUpload"
                        @click="dispatchEvent('choose-file-click', {}, $event)"
                    />
                </ElTooltip>
                <ElTooltip content="放大" :show-after="150">
                    <ElButton :icon="IconZoomIn" @click="zoom(0.1)" />
                </ElTooltip>
                <ElTooltip content="缩小" :show-after="150">
                    <ElButton :icon="IconZoomOut" @click="zoom(-0.1)" />
                </ElTooltip>
                <ElTooltip content="向左旋转" :show-after="150">
                    <ElButton :icon="IconRefreshLeft" @click="rotate(-90)" />
                </ElTooltip>
                <ElTooltip content="向右旋转" :show-after="150">
                    <ElButton :icon="IconRefreshRight" @click="rotate(90)" />
                </ElTooltip>
                <ElTooltip content="重置" :show-after="150">
                    <ElButton :icon="IconRefresh" @click="reset" />
                </ElTooltip>
                <ElRadioGroup v-model="view_mode" style="margin: 0 12px;">
                    <ElRadioButton :label="1">裁剪模式</ElRadioButton>
                    <ElRadioButton :label="0">填充模式</ElRadioButton>
                </ElRadioGroup>
                <ElColorPicker v-model="fill_color" :disabled="view_mode !== 0" />
            </div>
        </div>
        <!-- 图片裁剪预览区域 -->
        <slot v-if="$slots.preview" name="preview" />
        <div v-else-if="showPreview" class="sd-cropper-wrap__right">
            <div v-if="previewTitle && is_ready" :style="previewTitleStyle" class="sd-cropper__preview-title">{{ previewTitle }}</div>
            <div
                v-for="(preview_style, idx) in preview_list$"
                :key="idx"
                class="sd-cropper__preview-img"
                :class="{ 'is-circle': circle }"
                :style="preview_style"
            >
                <img v-if="preview_src" :src="preview_src">
            </div>
        </div>
    </div>
</template>
