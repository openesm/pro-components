import type { App } from 'vue';
import { type DeepPartialGlobalConfig } from './config';
export * from './hooks';
export * from './directives';
export * from './services';
export * from './components';
export { getModalCount, hasVisibleModal } from './utils/modal';
declare const _default: {
    install: (app: App, config?: DeepPartialGlobalConfig) => void;
};
export default _default;
