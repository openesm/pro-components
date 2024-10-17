<script lang="ts">
// 查询条件
import type { PropType } from 'vue'
import type { SdProFormContext, SdProFormDefine } from '../../../../pro-form'

import { SdProForm, SdProFormRender } from '../../../../pro-form'
import { ref, computed, defineComponent } from 'vue'
import { ElRow, ElCol, ElButton, ElIcon } from 'element-plus'
import { ArrowDown as IconArrowDown, ArrowUp as IconArrowUp } from '@element-plus/icons-vue'

export default defineComponent({
    name      : 'FilterForm',
    components: {
        SdProForm,
        SdProFormRender,
        IconArrowDown,
        IconArrowUp,
        ElRow,
        ElCol,
        ElButton,
        ElIcon,
    },
    props: {
        model              : { type: Object },
        schema             : { type: Array as PropType<SdProFormDefine.SchemaConfig[]>, default: () => [] },
        disabledQueryButton: { type: Boolean, default: false },
        disabledResetButton: { type: Boolean, default: false },
    },
    emits: ['reset', 'query', 'expand'],
    setup(props, ctx) {
        const form_ref = ref<SdProFormContext>()
        const expand   = ref(false)

        // 一直显示的表单控件
        const always_show_fields$ = computed(() => props.schema.slice(0, 3))

        // 显示更多的表单控件
        const more_show_fields$ = computed(() => props.schema.slice(3))

        const button_offset$ = computed(() => {
            return 24 - (always_show_fields$.value.length + 1) * 6
        })

        // 点击重置按钮
        const onReset = () => {
            form_ref.value?.resetFields()
            ctx.emit('reset')
        }

        // 点击查询按钮
        const onQuery = () => {
            ctx.emit('query', { ...props.model })
        }

        // 点击展开、收起
        const onExpand = (value: boolean) => {
            expand.value = value
            ctx.emit('expand', value)
        }

        return {
            form_ref,
            expand,
            more_show_fields$,
            button_offset$,
            onReset,
            onQuery,
            onExpand,
        }
    },
})
</script>

<template>
    <SdProForm ref="form_ref" :model="model" label-width="auto">
        <ElRow :gutter="15">
            <SdProFormRender :schema="schema" />

            <ElCol :offset="button_offset$" :span="6">
                <slot name="extra">
                    <div style="display: flex; justify-content: flex-end;">
                        <ElButton :disabled="disabledQueryButton" type="primary" @click="onQuery">
                            查询
                        </ElButton>
                        <ElButton :disabled="disabledResetButton" @click="onReset">
                            重置
                        </ElButton>
                        <template v-if="more_show_fields$.length">
                            <ElButton v-if="!expand" text @click="onExpand(true)">
                                <span style="margin-right: 5px;">展开</span>
                                <ElIcon><IconArrowDown /></ElIcon>
                            </ElButton>
                            <ElButton v-else text @click="onExpand(false)">
                                <span style="margin-right: 5px;">收起</span>
                                <ElIcon><IconArrowUp /></ElIcon>
                            </ElButton>
                        </template>
                    </div>
                </slot>
            </ElCol>
        </ElRow>
    </SdProForm>
</template>
