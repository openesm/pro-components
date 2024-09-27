<script lang="ts">
import type { ComponentPublicInstance, CSSProperties } from 'vue'

import { defineComponent, computed  } from 'vue'
import { ElTooltip, ElIcon, ElEmpty } from 'element-plus'
import { InfoFilled                 } from '@element-plus/icons-vue'
import { sdCardProps, sdCardEmits   } from './card'

export default defineComponent({
    name      : 'SdCard',
    components: { ElTooltip, ElIcon, ElEmpty, InfoFilled },
    props     : sdCardProps,
    emits     : sdCardEmits,
    setup(props, { slots }) {
        // 使用时无插槽时，default 不可执行。
        const childVNodes = slots.default ? slots.default() : []

        // 是否子卡片的容器
        const isContainer$ = computed(() => {
            return childVNodes.some((item) => {
                return typeof item.type === 'object' && 'name' in item.type && item.type.name === 'SdCard'
            })
        })

        // 内容区域排列方向
        const bodyFlexDirection$ = computed(() => {
            if (props.split) {
                return props.split === 'vertical' ? 'row' : 'column'
            } else {
                return props.direction
            }
        })

        function getBodyGutterStyle() {
            const styles: CSSProperties = {}
            const [rowGutter = 0, columnGutter = 0] = props.gutter ? (Array.isArray(props.gutter) ? props.gutter : [props.gutter, props.gutter]) : []

            if (rowGutter) {
                styles.marginTop    = `-${ (rowGutter / 2) }px`
                styles.marginBottom = `-${ (rowGutter / 2) }px`
            }

            if (columnGutter) {
                styles.marginLeft  = `-${ (columnGutter / 2) }px`
                styles.marginRight = `-${ (columnGutter / 2) }px`
            }

            return styles
        }

        // 获取卡片列类
        function getCardColClass(component: ComponentPublicInstance<any>, idx: number) {
            const cls: string[] = []
            if (idx < childVNodes.length - 1 && props.split) cls.push(`sd-card-col--${ props.split }`)
            if (props.split) return cls

            const colSpan = (component.props && component.props['col-span']) ?? undefined
            if (typeof colSpan !== 'string') cls.push(`sd-card-col-${ (colSpan === undefined ? 24 : colSpan) }`)

            return cls
        }

        // 获取卡片列的固定宽度
        function getCardColStyle(component: ComponentPublicInstance<any>) {
            const styles: CSSProperties = {}
            const colSpan = (component.props && component.props['col-span']) ?? undefined

            const [rowGutter = 0, columnGutter = 0] = props.gutter ? (Array.isArray(props.gutter) ? props.gutter : [props.gutter, props.gutter]) : []

            if (typeof colSpan === 'string') {
                styles.width      = colSpan
                styles.flexShrink = 0
            }

            if (rowGutter) {
                styles.paddingTop    = `${ rowGutter / 2 }px`
                styles.paddingBottom = `${ rowGutter / 2 }px`
            }

            if (columnGutter) {
                styles.paddingLeft  = `${ columnGutter / 2 }px`
                styles.paddingRight = `${ columnGutter / 2 }px`
            }

            return styles
        }

        return {
            childVNodes,
            isContainer$,
            bodyFlexDirection$,
            getBodyGutterStyle,
            getCardColClass,
            getCardColStyle,
        }
    },
})
</script>

<template>
    <div
        class="sd-card"
        :class="[
            `is-${ shadow }-shadow`,
            {
                'is-group'          : group,
                'sd-card--container': isContainer$,
                'sd-card--split'    : !!split,
                'sd-card--border'   : bordered,
                'sd-card--ghost'    : ghost,
            },
        ]"
    >
        <div
            v-if="title || $slots.header"
            class="sd-card-header" :class="[
                { 'sd-card-header--border': headerBordered },
                headerClass,
            ]"
            :style="headerStyle"
        >
            <slot v-if="$slots.header" name="header" />
            <template v-else>
                <div class="sd-card-header-title">
                    <span>{{ title }}</span>
                    <template v-if="tooltip">
                        <ElTooltip :content="tooltip" placement="top">
                            <ElIcon>
                                <InfoFilled />
                            </ElIcon>
                        </ElTooltip>
                    </template>
                </div>
                <slot name="extra">
                    {{ extra }}
                </slot>
            </template>
        </div>

        <div v-if="showEmpty" class="sd-card-empty-wrap">
            <slot v-if="$slots.empty" name="empty" />
            <ElEmpty v-else :description="emptyText">
                <slot name="empty-bottom" />
            </ElEmpty>
        </div>

        <div
            v-else
            class="sd-card-body" :class="[
                {
                    [`sd-card-body--${ bodyFlexDirection$ }`]: !!bodyFlexDirection$,
                    'sd-card-body--wrap'                     : wrap,
                    'sd-card-body--content-center'           : contentCenter,
                },
                bodyClass,
            ]"
            :style="[bodyStyle, getBodyGutterStyle()]"
        >
            <template v-if="isContainer$">
                <template v-for="(component, componentIdx) in childVNodes" :key="componentIdx">
                    <div
                        v-if="typeof component.type === 'object' && 'name' in component.type && component.type.name === 'SdCard'"
                        class="sd-card-col" :class="[getCardColClass(component, componentIdx)]"
                        :style="getCardColStyle(component)"
                    >
                        <component :is="component" />
                    </div>
                    <component :is="component" v-else />
                </template>
            </template>

            <slot v-else />
        </div>

        <div v-if="actions.length || $slots.actions" class="sd-card-actions" :class="[{ 'sd-card-actions--border': actionsBordered }]">
            <slot v-if="$slots.actions" name="actions" />
            <template v-else>
                <div
                    v-for="(item, idx) in actions"
                    :key="idx"
                    class="sd-card-actions__item"
                    @click="$emit('action', item.key)"
                >
                    <ElIcon v-if="item.icon" :size="16">
                        <component :is="item.icon" />
                    </ElIcon>
                    <span v-if="item.text">{{ item.text }}</span>
                </div>
            </template>
        </div>
    </div>
</template>
