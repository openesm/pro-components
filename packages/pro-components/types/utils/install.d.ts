import { AppContext, Plugin, Component } from 'vue';

type SFCWithInstall<T> = T & Plugin;
type SFCInstallWithContext<T> = SFCWithInstall<T> & {
    _context: AppContext | null;
};
export declare const withInstall: <T extends Component, E extends Record<string, any>>(main: T, extra?: E | undefined) => SFCWithInstall<T> & E;
export declare const withInstallFunction: <T>(fn: T, name: string) => SFCInstallWithContext<T>;
export declare const withNoopInstall: <T>(component: T) => SFCWithInstall<T>;
export {};
