# @sumdoo/element-plus

`@sumdoo/element-plus` 是基于 [element-plus](https://element-plus.gitee.io/zh-CN/component/button.html) 二次封装的业务组件库

## 生产依赖

- [element-plus](https://element-plus.gitee.io/zh-CN/component/button.html)
- [vxe-table](https://vxetable.cn/#/table/start/quick)

## 使用示例

- 安装

```sh
pnpm install @sumdoo/element-plus
```

- 使用

```ts
// main.ts
import SdElementPlus from '@sumdoo/element-plus'
import '@sumdoo/element-plus/src/theme-chalk/index.scss'

import App from './App.vue'
const app = createApp(App)

app.use(SdElementPlus)
app.mount('app')
```
