
<script lang="ts">
import type { PropType        } from 'vue'
import type { SdProFormDefine } from './types'

import { defineComponent, h } from 'vue'
import { uniqueId           } from 'lodash-es'
import ProFormField           from './pro-form-field.vue'

export default defineComponent({
    name : 'SdProFormRender',
    props: {
        schema: { type: Array as PropType<SdProFormDefine.SchemaConfig[]> },
    },
    setup(props) {
        return () => {
            return (props.schema || []).map(config => h(ProFormField, { config, key: uniqueId('field')  }))
        }
    },
})
</script>
