import { DocumentState, EmptyFileSystem, startLanguageServer } from 'langium';
import { BrowserMessageReader, BrowserMessageWriter, NotificationType, createConnection } from 'vscode-languageserver/browser.js';
import { createRobServices } from './rob-module.js';
import { interpreter } from '../semantics/interpreter.js';
import { weaveAcceptMethods } from '../semantics/accept-weaver.js';
const messageReader = new BrowserMessageReader(self);
const messageWriter = new BrowserMessageWriter(self);
const connection = createConnection(messageReader, messageWriter);
const { shared, Rob } = createRobServices(Object.assign({ connection }, EmptyFileSystem));
startLanguageServer(shared);
const documentChangeNotification = new NotificationType('browser/execute2');
// use the built-in AST serializer
const jsonSerializer = Rob.serializer.JsonSerializer;
// listen on fully validated documents
shared.workspace.DocumentBuilder.onBuildPhase(DocumentState.Validated, documents => {
    var _a;
    // perform this for every validated document in this build phase batch
    for (const document of documents) {
        const model = document.parseResult.value;
        let json = [];
        // only generate commands if there are no errors
        json = interpreter.interpretRobot(model);
        // inject the commands into the model
        // this is safe so long as you careful to not clobber existing properties
        // and is incredibly helpful to enrich the feedback you get from the LS per document
        model.$commands = json;
        console.log("hello");
        // send the notification for this validated document,
        // with the serialized AST + generated commands as the content
        connection.sendNotification(documentChangeNotification, {
            uri: "browser/sendStatements",
            content: jsonSerializer.serialize(model, { sourceText: true, textRegions: true }),
            diagnostics: (_a = document.diagnostics) !== null && _a !== void 0 ? _a : []
        });
    }
});
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