import { DocumentState, EmptyFileSystem, startLanguageServer } from 'langium';
import { BrowserMessageReader, BrowserMessageWriter, Diagnostic, NotificationType, createConnection } from 'vscode-languageserver/browser.js';
import { createRobServices } from './rob-module.js';
import { RobotVisitor } from '../semantics/visitorNode.js';
import { interpreter } from '../semantics/interpreter.js';
import { Statment } from '../semantics/interpreterVisitor.js';
import { weaveAcceptMethods } from '../semantics/accept-weaver.js';
//import { URI } from 'langium';
//import { RobotVisitor } from '../semantics/visitorNode.js';
//import { interpreter } from '../semantics/interpreter.js';

declare const self: DedicatedWorkerGlobalScope;

const messageReader = new BrowserMessageReader(self);
const messageWriter = new BrowserMessageWriter(self);

const connection = createConnection(messageReader, messageWriter);

const { shared,Rob } = createRobServices({ connection, ...EmptyFileSystem });

startLanguageServer(shared);

// Send a notification with the serialized AST after every document change
type DocumentChange = { uri: string, content: string, diagnostics: Diagnostic[] };
const documentChangeNotification = new NotificationType<DocumentChange>('browser/execute2');
// use the built-in AST serializer
const jsonSerializer = Rob.serializer.JsonSerializer;
// listen on fully validated documents
shared.workspace.DocumentBuilder.onBuildPhase(DocumentState.Validated, documents => {
    // perform this for every validated document in this build phase batch
    for (const document of documents) {
        const model = document.parseResult.value as RobotVisitor;
        let json: Statment[] = [];
        
        // only generate commands if there are no errors
        json = interpreter.interpretRobot(model);
        
        // inject the commands into the model
        // this is safe so long as you careful to not clobber existing properties
        // and is incredibly helpful to enrich the feedback you get from the LS per document
        (model as unknown as {$commands: Statment[]}).$commands = json;
        console.log("hello")
        // send the notification for this validated document,
        // with the serialized AST + generated commands as the content
        connection.sendNotification(documentChangeNotification, {
            uri: "browser/sendStatements",
            content: jsonSerializer.serialize(model, { sourceText: true, textRegions: true }),
            diagnostics: document.diagnostics ?? []
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
    console.log("After the weave")
    const statements = [
        { type: 'Forward', Value: 100 },
        { type: 'Rotate', Value: (300 as Number) },
        { type: 'Forward', Value: 100 },
        { type: 'Rotate', Value: (300 as Number) },
        { type: 'Forward', Value: 100 },
        { type: 'Rotate', Value: (300 as Number) }
      ]
    //const statements2 = interpreter.interpretRobot(parseResult.parseResult.value as RobotVisitor);
    //console.log("le deux" + statements2);
    console.log(statements);
    connection.sendNotification('browser/sendStatements', statements);
});