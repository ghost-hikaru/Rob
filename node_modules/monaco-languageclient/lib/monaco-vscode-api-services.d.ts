import { editor } from 'monaco-editor';
import { LogLevel } from 'vscode/services';
import { OpenEditor } from '@codingame/monaco-vscode-editor-service-override';
export type InitializeServiceConfig = {
    userServices?: editor.IEditorOverrideServices;
    debugLogging?: boolean;
    logLevel?: LogLevel;
};
export declare const wasVscodeApiInitialized: () => boolean;
export declare const initServices: (config?: InitializeServiceConfig) => Promise<void>;
export declare const useOpenEditorStub: OpenEditor;
export declare const reportServiceLoading: (services: editor.IEditorOverrideServices, debugLogging: boolean) => void;
export declare const mergeServices: (services: editor.IEditorOverrideServices, overrideServices: editor.IEditorOverrideServices) => void;
/**
 * monaco-vscode-api automatically loads the following services:
 *  - layout
 *  - environment
 *  - extension
 *  - files
 *  - quickAccess
 *
 * monaco-languageclient always adds the following services:
 *   - languages
 *   - model
 */
export declare const importAllServices: (config?: InitializeServiceConfig) => Promise<void>;
//# sourceMappingURL=monaco-vscode-api-services.d.ts.map