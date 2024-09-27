<script lang="ts" setup>
import type { CSSProperties } from 'vue'
import type { FormContext } from 'element-plus'

import { reactive, computed, watch, inject                     } from 'vue'
import { ElUpload, ElProgress, ElIcon, ElImage, formContextKey } from 'element-plus'
import { isString, isFunction, omit                            } from 'lodash-es'
import { sdImageUploadProps, sdImageUploadEmits, sdImageUploadOmitKeys } from './image-upload'
import { showAlert, openImageCropper, openImagePreview } from '../../../services'
import { debugWarn, formatFileSize                     } from '../../../utils'

import { Plus as IconPlus, ZoomIn as IconZoomIn, Delete as IconDelete } from '@element-plus/icons-vue'

defineOptions({
    name        : 'SdImageUpload',
    inheritAttrs: false,
})

const props = defineProps(sdImageUploadProps)
const emit  = defineEmits(sdImageUploadEmits)

const state = reactive({
    img_url        : props.modelValue || props.defaultValue, // 当前展示图片地址
    local_file     : null as File | Blob | null,             // 选择的文件对象
    local_file_type: '',                                     // 选择的文件类型
    progress_number: 0,                                      // 上传进度
    uploading      : false,                                  // 是否上传中
})

// el-form 表单组件上下文
const formCtx = inject<FormContext | null>(formContextKey, null)

// 组件禁用 =》表单禁用
const disabled$ = computed(() => props.disabled || formCtx?.disabled || false)

// el-upload 组件属性配置
const upload_props$ = computed(() => omit(props, ...sdImageUploadOmitKeys))

// 更新当前图片路径
watch(() => props.modelValue, (value) => { state.img_url = value })

// 根据当前选择的文件，更新当前图片地址
watch(() => state.img_url, (new_val, old_val) => {
    emit('update:modelValue', new_val)
    emit('change', new_val, old_val)
})

// 展示尺寸样式
const size_style$ = computed(() => {
    const { width, height } = props

    const styles: CSSProperties = {}
    if (width ) styles.width  = isString(width ) ? width  : `${ width  }px`
    if (height) styles.height = isString(height) ? height : `${ height }px`

    return styles
})

// 自定义 ElUpload 上传
async function onHttpRequest(options: any) {
    let file = options?.file as File | Blob
    if ( !file ) return

    // 取得文件类型
    state.local_file_type = file.type.replace('image/', '')

    // 裁剪图片
    if (props.enableCropper) {
        const res = await openImageCropper({
            src       : URL.createObjectURL(file),
            ...props.imageCropperProps,
            outputType: props.imageCropperProps?.outputType ?? state.local_file_type,
        })
        if (!res.confirm) return
        file = res.file!
    }

    // 本地图片与上传成功后图片数据不一致，会导致二次图片刷新，如不是自动上传则显示本地图片
    if (!props.autoUpload) {
        state.local_file = file
        state.img_url    = URL.createObjectURL(file)
        return
    }

    uploadImage(file)

    return options
}

// 上传图片
async function uploadImage(file: File | Blob) {
    const _file = file || (!props.autoUpload ? state.local_file : null)
    if ( !_file ) return

    // 未定义上传函数
    if (!props.api) {
        debugWarn('SdImageUpload', '未定义 api 函数')
        return
    }

    // 检查图片文件大小
    const limit_size_result = _checkImageSize(file)
    if ( !limit_size_result ) return

    // 自定义上传前检查
    if (isFunction(props.beforeUpload)) {
        const can_upload = await props.beforeUpload(file)
        if ( !can_upload ) return
    }

    state.uploading = true
    // ---------------------------------------------------------------------------------------
    state.progress_number = 0
    const res = await props.api(_getRequestData(_file), {
        onUploadProgress: (progressEvent: { loaded: number; total: number }) => {
            const { loaded, total } = progressEvent
            state.progress_number = Math.round((loaded / total) * 10000) / 100
        },
    })
    // ---------------------------------------------------------------------------------------
    state.uploading = false
    if (!res.ok) {
        state.img_url = ''
        isFunction(props.onError) && props.onError({ ok: false, err: res.err, uploadFile: _file })
        return
    }

    // 处理上传成功的图片路径
    if (isFunction(props.transform)) {
        state.img_url = props.transform(res.data)
    } else if (isString(res.data) && /https?:\/\//.test(res.data)) {
        state.img_url = res.data
    } else {
        state.img_url = res.data.img_url
    }

    state.local_file = _file
    isFunction(props.onSuccess) && props.onSuccess({ ...res, uploadFile: _file })
}

// 检查图片文件大小
function _checkImageSize(file: File | Blob) {
    // 未定义文件大小校验
    const limit_size = props.limitSize || 0
    if ( limit_size <= 0 ) return true

    // 检查文件大小
    if (file.size > limit_size) {
        const fileSizeText  = formatFileSize(file.size)
        const limitSizeText = formatFileSize(limit_size)
        if (isFunction(props.onOverflowSize)) {
            props.onOverflowSize({
                file,
                limitSize: limit_size,
                fileSizeText ,
                limitSizeText,
            })
        } else {
            showAlert(`最大上传图片: ${ limitSizeText }，当前上传图片：${ fileSizeText }`)
        }
        return false
    }

    return true
}

// 取得请求参数
function _getRequestData(file: File | Blob) {
    const formData = new FormData()
    formData.append(props.name, file)
    if (Object.keys(props.data || {}).length) { // 补充 data 数据
        Object.entries(props.data).forEach(([key, value]) => {
            formData.append(key, value)
        })
    }
    return formData
}

// 处理图片预览
function handleImagePreview() {
    const urlList = state.img_url ? [state.img_url] : []
    if ( !urlList.length ) return

    openImagePreview({ urlList })
}

// 处理图片删除
function handelImageDelete() {
    state.img_url    = ''
    state.local_file = null
}

// 重置图片
function reset() {
    state.img_url    = props.defaultValue || ''
    state.local_file = null
}

// 取得选择的图片
function getFile() {
    return state.local_file || null
}

defineExpose({
    reset,                     // 重置为默认上传图片
    clear : handelImageDelete, // 清空上传图片
    submit: uploadImage,       // 提交上传
    getFile,
})
</script>

<template>
    <ElUpload
        v-bind="upload_props$"
        class="sd-image-upload"
        :class="[{ 'sd-image-upload--circle': circle, 'is-disabled': disabled$ }, $attrs.class]"
        :http-request="onHttpRequest"
        :show-file-list="false"
        :disabled="disabled$"
        :style="$attrs.style"
        auto-upload
        action="#"
    >
        <!-- 上传图片进度展示 -->
        <div v-if="state.uploading" class="sd-image-upload__progress" :style="size_style$">
            <ElProgress
                type="circle"
                :percentage="state.progress_number"
                :width="progressWidth"
            />
        </div>

        <div v-else-if="state.img_url" class="sd-image-upload__preview" :style="size_style$">
            <ElImage
                style="display: block; height: 100%;"
                fit="contain"
                v-bind="imageProps"
                :src="state.img_url"
            />

            <div v-if="showPreviewButton || showDeleteButton" class="sd-image-upload__preview-actions" @click.stop>
                <ElIcon v-if="showPreviewButton" @click="handleImagePreview">
                    <IconZoomIn />
                </ElIcon>
                <ElIcon v-if="showDeleteButton && !disabled" @click="handelImageDelete">
                    <IconDelete />
                </ElIcon>
            </div>
        </div>

        <div v-else class="sd-image-upload__placeholder" :style="[size_style$, placeholderStyle || '']">
            <slot name="placeholder">
                <ElIcon :size="placeholderIconSize">
                    <IconPlus />
                </ElIcon>
            </slot>
        </div>

        <!-- 上传图片提示 -->
        <template v-if="tip || $slots.tip" #tip>
            <slot name="tip">
                <div class="sd-image-upload__tip" :style="[tipStyle || '', { width: size_style$.width }]">
                    {{ tip }}
                </div>
            </slot>
        </template>
    </ElUpload>
</template>
