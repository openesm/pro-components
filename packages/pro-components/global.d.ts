// GlobalComponents for Volar
declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        SdCard           : typeof import('@sumdoo/element-plus')['SdCard']
        SdCategoryList   : typeof import('@sumdoo/element-plus')['SdCategoryList']
        SdCheckboxGroup  : typeof import('@sumdoo/element-plus')['SdCheckboxGroup']
        SdCountTo        : typeof import('@sumdoo/element-plus')['SdCountTo']
        SdDateButtonGroup: typeof import('@sumdoo/element-plus')['SdDateButtonGroup']
        SdDatePicker     : typeof import('@sumdoo/element-plus')['SdDatePicker']
        SdDialog         : typeof import('@sumdoo/element-plus')['SdDialog']
        SdDrawer         : typeof import('@sumdoo/element-plus')['SdDrawer']
        SdIcon           : typeof import('@sumdoo/element-plus')['SdIcon']
        SdImage          : typeof import('@sumdoo/element-plus')['SdImage']
        SdInputPrice     : typeof import('@sumdoo/element-plus')['SdInputPrice']
        SdLink           : typeof import('@sumdoo/element-plus')['SdLink']
        SdPage           : typeof import('@sumdoo/element-plus')['SdPage']
        SdRadioGroup     : typeof import('@sumdoo/element-plus')['SdRadioGroup']
        SdSelect         : typeof import('@sumdoo/element-plus')['SdSelect']
        SdStatus         : typeof import('@sumdoo/element-plus')['SdStatus']
        SdTabs           : typeof import('@sumdoo/element-plus')['SdTabs']
        SdTitleBar       : typeof import('@sumdoo/element-plus')['SdTitleBar']
        SdTypeList       : typeof import('@sumdoo/element-plus')['SdTypeList']
        SdTypeTree       : typeof import('@sumdoo/element-plus')['SdTypeTree']
        SdVirtualList    : typeof import('@sumdoo/element-plus')['SdVirtualList']
        SdWeekTimeSelect : typeof import('@sumdoo/element-plus')['SdWeekTimeSelect']
    }
}

export {}
