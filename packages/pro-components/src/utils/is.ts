const toString = Object.prototype.toString

export function type(val: unknown, type: string): boolean {
    return toString.call(val) === `[object ${ type }]`
}

export const isString = (val: unknown): val is string => {
    return type(val, 'String')
}

export function isNumber(val: unknown): val is number {
    return type(val, 'Number')
}

export function isBoolean(val: unknown): val is boolean {
    return type(val, 'Boolean')
}

export function isUndefined(val: unknown): val is undefined {
    return type(val, 'Undefined')
}

export function isRegExp(val: unknown): val is RegExp {
    return type(val, 'isRegExp')
}

export function isFunction(val: unknown): val is Function {
    return typeof val === 'function'
}

export function isObject(val: unknown): val is Record<any, any> {
    return val !== null && type(val, 'Object')
}

export function isArray(val: unknown): val is Array<any> {
    return Array.isArray(val)
}

const HTML_TAGS = 'html,body,base,head,link,meta,style,title,address,article,aside,footer,'
    + 'header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,'
    + 'figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,'
    + 'data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,'
    + 'time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,'
    + 'canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,'
    + 'th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,'
    + 'option,output,progress,select,textarea,details,dialog,menu,'
    + 'summary,template,blockquote,iframe,tfoot'

export const isHTMLTag = makeMap(HTML_TAGS)

function makeMap(str: string, expectsLowerCase?: boolean) {
    const map = Object.create(null)
    const list = str.split(',')
    for (let i = 0; i < list.length; i++) {
        map[list[i]!] = true
    }
    return expectsLowerCase ? (val: string) => !!map[val.toLowerCase()] : (val: string) => !!map[val]
}
