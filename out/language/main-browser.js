import { EmptyFileSystem, startLanguageServer } from 'langium';
import { BrowserMessageReader, BrowserMessageWriter, createConnection } from 'vscode-languageserver/browser.js';
import { createRobServices } from './rob-module.js';
const messageReader = new BrowserMessageReader(self);
const messageWriter = new BrowserMessageWriter(self);
const connection = createConnection(messageReader, messageWriter);
const { shared } = createRobServices(Object.assign({ connection }, EmptyFileSystem));
startLanguageServer(shared);
//# sourceMappingURL=main-browser.js.map