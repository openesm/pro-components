<script lang="ts">
import type { DrawerProps   } from 'element-plus'
import type { SdDrawerTypes } from './types'

import { defineComponent, reactive, computed, ref, watch, toRef } from 'vue'
import { ElDrawer, ElScrollbar, ElButton, ElIcon, ElLoadingDirective } from 'element-plus'
import { Close as IconClose  } from '@element-plus/icons-vue'
import { sdDrawerProps, sdDrawerEmits, sdDrawerOmitKeys  } from './drawer'
import { isString, isNumber, isBoolean, isFunction, omit } from 'lodash-es'
import { globalConfig } from '../../../config'

export default defineComponent({
    name        : 'SdDrawer',
    components  : { ElDrawer, ElScrollbar, ElIcon, IconClose, ElButton },
    directives  : { loading: ElLoadingDirective },
    inheritAttrs: false,
    props       : sdDrawerProps,
    emits       : sdDrawerEmits,
    setup(props, ctx) {
        const $drawer = {
            scrollTo,
            setScrollTop,
            setScrollLeft,
            getScrollbar,
            setOption,
            getOption,
            show,
            hide,
            isVisible,
            isSubmitting,
        }

        const scroll_ref = ref() // 滚动容器引用
        const state = reactive<SdDrawerTypes.WriteOptions>({
            visible              : props.modelValue,
            width                : props.width,
            loading              : props.loading,
            title                : props.title,
            background           : props.background,
            bodyLockScroll       : props.bodyLockScroll,
            showClose            : props.showClose,
            showFooter           : props.showFooter,
            submitting           : props.submitting,
            showCancelButton     : props.showCancelButton,
            disabledCancelButton : props.disabledCancelButton,
            cancelButtonText     : props.cancelButtonText,
            showConfirmButton    : props.showConfirmButton,
            disabledConfirmButton: props.disabledConfirmButton,
            confirmButtonText    : props.confirmButtonText,
        })

        // el-drawer 组件属性配置
        const drawer_props$ = computed(() => omit(props, ...sdDrawerOmitKeys) as DrawerProps)

        // 异构显示 withHeader 属性, 默认使用 showHeader 与 dialog 保持一致
        const show_header$ = computed(() => {
            return isBoolean(props.showHeader) ? props.showHeader : props.withHeader
        })

        // 异构 drawer size 属性, 默认使用 width 与 dialog 保持一致
        const drawer_width$ = computed(() => {
            return (isString(props.width) || isNumber(props.width)) ? props.width : props.size
        })

        // 显示开关
        watch(() => props.modelValue, (val) => { state.visible = val })
        watch(() => state.visible   , (val) => { ctx.emit('update:modelValue', val) })

        watch(() => props.title         , (val) => { state.title          = val }) // 弹窗标题
        watch(() => props.background    , (val) => { state.background     = val }) // 抽屉背景色
        watch(() => props.bodyLockScroll, (val) => { state.bodyLockScroll = val }) // 抽屉内容区域锁定
        watch(() => props.showClose     , (val) => { state.showClose      = val }) // 关闭按钮显示开关
        watch(() => props.showFooter    , (val) => { state.showFooter     = val }) // 底部操作区域显示开关
        watch(() => props.submitting    , (val) => { state.submitting     = val }) // 提交中状态
        watch(drawer_width$             , (val) => { state.width          = val }) // 弹窗宽度
        watch(() => props.loading       , (val) => { state.loading        = val }) // loading 开关

        // 取消按钮
        watch(() => props.showCancelButton    , (val) => { state.showCancelButton     = val })
        watch(() => props.disabledCancelButton, (val) => { state.disabledCancelButton = val })
        watch(() => props.cancelButtonText    , (val) => { state.cancelButtonText     = val })

        // 确认按钮
        watch(() => props.showConfirmButton    , (val) => { state.showConfirmButton     = val })
        watch(() => props.disabledConfirmButton, (val) => { state.disabledConfirmButton = val })
        watch(() => props.confirmButtonText    , (val) => { state.confirmButtonText     = val })


        // 是否可关闭抽屉
        const onBeforeClose = (done: (cancel?: boolean) => void) => {
            if (isFunction(props.beforeClose)) {
                props.beforeClose(done)
            } else {
                done(state.submitting)
            }
        }

        // 点击关闭按钮
        const onClickClose = () => {
            if (isFunction(props.beforeClose)) {
                props.beforeClose((cancel?: boolean) => {
                    state.visible = cancel ?? false
                })
            } else if (!state.submitting) {
                state.visible = false
            }
        }

        // 点击取消按钮
        const onClickCancel = () => {
            ctx.emit('cancel')
            state.visible = false
        }

        // 点击确认按钮
        const onClickConfirm = () => {
            ctx.emit('confirm')
        }

        function onOpen() {
            globalConfig.event?.onModalShow('dialog', props)
            ctx.emit('open')
        }

        function onClose() {
            globalConfig.event?.onModalHide('dialog', props)
            ctx.emit('close')
        }

        // --------------------------------------------------------------------------------------

        // 派发事件
        function dispatchEvent(name: string, params?: Record<string, any>) {
            ctx.emit(name as any, { ...params, $drawer })
        }

        // 滚动到一组特定坐标
        /** deprecated 后续统一使用 getScrollbar 处理 */
        function scrollTo(options: ScrollToOptions | number, yCoord?: number) {
            scroll_ref.value?.scrollTo(options, yCoord)
        }

        // 设置滚动条到顶部的距离
        /** deprecated 后续统一使用 getScrollbar 处理 */
        function setScrollTop(scrollTop: number) {
            scroll_ref.value?.setScrollTop(scrollTop)
        }

        // 设置滚动条到左边的距离
        /** deprecated 后续统一使用 getScrollbar 处理 */
        function setScrollLeft(scrollLeft: number) {
            scroll_ref.value?.setScrollLeft(scrollLeft)
        }

        // 取得滚动组件引用
        function getScrollbar() { return scroll_ref.value }

        // 显示弹窗
        function show() { state.visible = true  }

        // 隐藏弹窗
        function hide() { state.visible = false }

        // 是否正在显示中
        function isVisible() { return state.visible }

        // 是否正在提交中状态
        function isSubmitting() { return state.submitting }

        // 设置弹窗指定选项值
        function setOption(options: Partial<SdDrawerTypes.WriteOptions>) {
            if (!options) return
            Object.assign(state, options)
        }

        // 取得弹窗选项指定值，不传返回全部
        function getOption(key?: string): any {
            if (!key) return { ...state }
            if (key in state) {
                return (state as any)[key]
            } else {
                return (props as any)[key]
            }
        }

        return {
            scroll_ref,
            state,
            visible   : toRef(state, 'visible'),
            submitting: toRef(state, 'submitting'),
            drawer_props$,
            show_header$,
            onBeforeClose,
            onClickClose,
            onClickCancel,
            onClickConfirm,
            onOpen,
            onClose,
            // ---------------
            dispatchEvent,
            scrollTo,
            setScrollTop,
            setScrollLeft,
            getScrollbar,
            setOption,
            getOption,
            show,
            hide,
            isVisible,
            isSubmitting,
        }
    },
})
</script>

<template>
    <ElDrawer
        v-bind="drawer_props$"
        v-model="state.visible"
        :before-close="onBeforeClose"
        :custom-class="`sd-drawer ${ customClass }`"
        :show-close="false"
        :size="state.width"
        :with-header="false"
        @open="onOpen"
        @opened="dispatchEvent('opened')"
        @close="onClose"
        @closed="dispatchEvent('closed')"
    >
        <!-- 顶部区域 -->
        <div
            v-if="show_header$"
            class="sd-drawer__header"
            :class="{ 'has-close': state.showClose }"
            :style="headerStyle"
        >
            <slot name="title">
                <div class="sd-drawer__header-title" :style="titleStyle">
                    {{ state.title }}
                </div>
            </slot>

            <slot name="header-extra" />

            <div v-if="state.showClose" class="sd-drawer__close" @click="onClickClose">
                <ElIcon :size="closeIconSize" :color="closeIconColor">
                    <IconClose />
                </ElIcon>
            </div>
        </div>

        <slot name="header-bottom" />
        <!-- <slot name="header-extra" /> -->
        <slot name="body-before" />

        <!-- 内容区域 -->
        <div
            v-if="state.bodyLockScroll"
            v-loading="state.loading"
            class="sd-drawer__body is-lock"
            :style="[{ backgroundColor: state.background }, bodyStyle || '']"
        >
            <slot />
        </div>

        <ElScrollbar
            v-else
            ref="scroll_ref"
            v-bind="scrollbarConfig"
            v-loading="state.loading"
            :style="{ flex: 1, backgroundColor: state.background }"
            @scroll="dispatchEvent('scroll', $event)"
        >
            <div class="sd-drawer__body" :style="bodyStyle">
                <slot />
            </div>
        </ElScrollbar>

        <!-- 内容之后 -->
        <slot name="body-after" />

        <!-- 底部区域 -->
        <div v-if="state.showFooter" class="sd-drawer__footer" :style="footerStyle">
            <slot name="footer">
                <ElButton
                    v-if="state.showCancelButton"
                    :disabled="state.disabledCancelButton || state.submitting"
                    @click="onClickCancel"
                >
                    {{ state.cancelButtonText }}
                </ElButton>
                <ElButton
                    v-if="state.showConfirmButton"
                    type="primary"
                    :loading="state.submitting"
                    :disabled="state.disabledConfirmButton || state.submitting"
                    @click="onClickConfirm"
                >
                    {{ state.confirmButtonText }}
                </ElButton>
            </slot>
        </div>
    </ElDrawer>
</template>
