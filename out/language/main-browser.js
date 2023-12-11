import { EmptyFileSystem, startLanguageServer } from 'langium';
import { BrowserMessageReader, BrowserMessageWriter, createConnection } from 'vscode-languageserver/browser.js';
import { createRobServices } from './rob-module.js';
import { weaveAcceptMethods } from '../semantics/accept-weaver.js';
const messageReader = new BrowserMessageReader(self);
const messageWriter = new BrowserMessageWriter(self);
const connection = createConnection(messageReader, messageWriter);
const { shared, Rob } = createRobServices(Object.assign({ connection }, EmptyFileSystem));
startLanguageServer(shared);
connection.onNotification('browser/execute', params => {
    console.log("received execute notification");
    console.log(params);
    //const program = params.content;
    //const parseResult = shared.workspace.LangiumDocumentFactory.fromString<RobotVisitor>(program, URI.parse("memory://Rob.document"));
    console.log("starting interpretation");
    weaveAcceptMethods(Rob);
    console.log("After the weave");
    const statements = [
        { type: 'Forward', Value: 100 },
        { type: 'Rotate', Value: 300 },
        { type: 'Forward', Value: 100 },
        { type: 'Rotate', Value: 300 },
        { type: 'Forward', Value: 100 },
        { type: 'Rotate', Value: 300 }
    ];
    //const statements2 = interpreter.interpretRobot(parseResult.parseResult.value as RobotVisitor);
    //console.log("le deux" + statements2);
    console.log(statements);
    connection.sendNotification('browser/sendStatements', statements);
});
//# sourceMappingURL=main-browser.js.map