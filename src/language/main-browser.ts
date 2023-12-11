import { EmptyFileSystem, URI, startLanguageServer } from 'langium';
import { BrowserMessageReader, BrowserMessageWriter, createConnection } from 'vscode-languageserver/browser.js';
import { createRobServices } from './rob-module.js';
import { weaveAcceptMethods } from '../semantics/accept-weaver.js';
import { RobotVisitor } from '../semantics/visitorNode.js';

declare const self: DedicatedWorkerGlobalScope;

const messageReader = new BrowserMessageReader(self);
const messageWriter = new BrowserMessageWriter(self);

const connection = createConnection(messageReader, messageWriter);

const { shared,Rob } = createRobServices({ connection, ...EmptyFileSystem });

startLanguageServer(shared);

connection.onNotification('browser/execute', params => {
    console.log("received execute notification");
    console.log(params);
    const program = params.content;
    const parseResult = shared.workspace.LangiumDocumentFactory.fromString<RobotVisitor>(program, URI.parse("memory://Rob.document"));
    console.log("starting interpretation");
    weaveAcceptMethods(Rob);
    console.log(parseResult.parseResult.value.accept);
    //const statements = interpreter.interpret(parseResult.parseResult.value as programNode);
    var statements = [
        { type: 'Forward', Value: 100 },
        { type: 'Rotate', Value: (300 as Number) },
        { type: 'Forward', Value: 100 },
        { type: 'Rotate', Value: (300 as Number) },
        { type: 'Forward', Value: 100 },
        { type: 'Rotate', Value: (300 as Number) }
      ]
    console.log(statements);
    connection.sendNotification('browser/sendStatements', statements);
});