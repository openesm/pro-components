
import { isString } from 'lodash-es'

class SumdooElementPlusError extends Error {
    constructor(msg: string) {
        super(msg)
        this.name = 'SumdooElementPlusError'
    }
}

export function throwError(scope: string, msg: string): never {
    throw new SumdooElementPlusError(`[${ scope }] ${ msg }`)
}

export function debugWarn(err: Error): void
export function debugWarn(scope: string, message: string): void
export function debugWarn(scope: string | Error, message?: string): void {
    if (process.env.NODE_ENV !== 'production') {
        const error: Error = isString(scope)
            ? new SumdooElementPlusError(`[${ scope }] ${ message }`)
            : scope

        console.warn(error)
    }
}
