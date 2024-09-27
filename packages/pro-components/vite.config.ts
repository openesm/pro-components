import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

/**
 * 打包前需要先注释 tsconfig.app.json 配置，否则生成结构会丢出一层 src，待解决问题
 * "composite": true,
 */
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        dts({
            declarationOnly: true,
            tsconfigPath   : resolve(__dirname, 'tsconfig.json'),
        }),
    ],
    build: {
        target: 'es2015',
        outDir: 'types',
        lib   : {
            entry   : 'src/index.ts',
            fileName: 'index',
            formats : ['es'],
        },
        rollupOptions: {
            external: [
                'vue',
                'vue-router'             ,
                'lodash-es'              ,
                'element-plus'           ,
                '@element-plus/icons-vue',
                'cropperjs'              ,
                'split.js'               ,
                'jsbarcode'              ,
                'qrcode'                 ,
                'vue-draggable-plus'     ,
            ],
        },
    },
})
