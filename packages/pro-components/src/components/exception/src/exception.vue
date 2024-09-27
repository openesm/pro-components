<script lang="ts">
import type { SdExceptionTypes } from './types'
import { defineComponent, computed } from 'vue'
import { ElResult } from 'element-plus'
import { sdExceptionProps } from './exception'

import NetErrorImg from './assets/net-error.svg'
import Page403Img  from './assets/page-403.svg'
import Page404Img  from './assets/page-404.svg'
import Page500Img  from './assets/page-500.svg'

const exception: Record<string, SdExceptionTypes.ExcePtionItem> = {
    '403': {
        icon    : Page403Img,
        title   : '403',
        subTitle: '抱歉，您无权访问此页面',
    },
    '404': {
        icon    : Page404Img,
        title   : '页面不存在',
        subTitle: '抱歉，您访问的页面不存在',
    },
    '500': {
        icon    : Page500Img,
        title   : '500',
        subTitle: '抱歉，服务器报告错误',
    },
    'network-error': {
        icon    : NetErrorImg,
        title   : '网络错误',
        size    : 300,
        subTitle: '抱歉，您的网络链接已断开，请检查您的网络！',
    },
}

export default defineComponent({
    name      : 'SdException',
    components: { ElResult },
    props     : sdExceptionProps,
    setup(props) {
        const resultOpts$ = computed(() => exception[`${ props.status }` || '404'])
        return { resultOpts$ }
    },
})
</script>

<template>
    <div class="sd-exception">
        <ElResult v-if="resultOpts$" :title="title || resultOpts$.title" :sub-title="subTitle || resultOpts$.subTitle">
            <template v-if="resultOpts$.icon" #icon>
                <img :src="resultOpts$.icon">
            </template>
        </ElResult>
    </div>
</template>
