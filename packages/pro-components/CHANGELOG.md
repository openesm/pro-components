## v0.0.2（24.10.09）
- [components]：重命名 Dialog 组件事件回调参数 $proDialog 为 $dialog
- [components]：重命名 Drawer 组件事件回调参数 $proDrawer 为 $drawer

## v0.0.1（24.09.10）

> 使用 ElementPlus 导出的 ScrollInstall 类型，会导致使用的组件无法打包类型成功
> 通过 Omit 去除部分组件配置选项的，需要重新指定其类型，否则会导致使用的组件无法打包类型成功
> 组件不能导出以 $xxx 开头的作用域参数，因此模板中的作用域参数，需要通过 h 函数重写

- [components]: 移除 Card 组件的默认导出，及实例类型导出
- [components]：移除 CategoryList 组件的默认导出，及实例类型导出
- [components]：整理 CheckboxGroup 组件属性 options、prop 类型声明，去除实例类型导出
- [components]：移除 Container 组件的默认导出，及实例类型导出
- [components]：移除 DatePicker 组件的默认导出，及实例类型导出
- [components]：移除 VirtualList 组件的默认导出，及实例类型导出
- [components]：移除 Image 组件的默认导出，及实例类型导出
- [components]：移除 Waterflow 组件的默认导出，及实例类型导出
- [components]：移除 TypeList 组件的默认导出，及实例类型导出
- [components]：移除 TypeTree 组件的默认导出，及实例类型导出
- [components]：移除 Select 组件的默认导出，及实例类型导出
- [components]：移除 InputPrice 组件的默认导出，及实例类型导出
- [components]：移除 Tabs 组件的默认导出，及实例类型导出
- [components]：移除 TitleBar 组件的默认导出，及实例类型导出
- [components]：移除 Status 组件的默认导出，及实例类型导出
- [components]：移除 Exception 组件的默认导出，及实例类型导出
- [components]：移除 RadioGroup 组件的默认导出，及实例类型导出
- [components]：移除 WeekTimeSelect 组件的默认导出，及实例类型导出
- [components]：优化 Dialog 组件
    - 支持事件回调参数 $proDialog
    - 支持部分参数本地化，可通过 setOption 直接修改
    - 移除组件的默认导出，及实例类型导出
- [components]：优化 Drawer 组件
    - 支持事件回调参数 $proDrawer
    - 支持部分参数本地化，可通过 setOption 直接修改
    - 移除组件的默认导出，及实例类型导出
- [config]: config 文件 增加具名导出 globalConfig
- [service]: 整理目录结构


》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》
空值配置
2.7.0
​
支持的组件
Cascader 级联选择器
DatePicker 日期选择器
Select 选择器
SelectV2 选择器
TimePicker 时间选择器
TimeSelect 时间选择
TreeSelect 树形选择
设置 empty-values 来配置组件的默认空值。 默认值是 ['', null, undefined]。 如果认为空字符串不是一个空值，可以设置成 [undefined, null]。

设置 value-on-clear 以设置清空选项的值。 组件默认值是 undefined。 在日期组件中是 null。 如果想设置成 undefined，请使用 () => undefined。
