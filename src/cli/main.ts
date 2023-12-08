import type { Robot } from '../language/generated/ast.js';
import chalk from 'chalk';
import { Command } from 'commander';
import { RobLanguageMetaData } from '../language/generated/module.js';
import { createRobServices } from '../language/rob-module.js';
import { extractAstNode } from './cli-util.js';
import { generateJavaScript } from './generator.js';
import { NodeFileSystem } from 'langium/node';
import * as url from 'node:url';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { RobotVisitor } from '../semantics/visitorNode.js';
import { interpreter } from '../semantics/interpreter.js';
import { compiler } from '../semantics/compiler.js';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const packagePath = path.resolve(__dirname, '..', '..', 'package.json');
const packageContent = await fs.readFile(packagePath, 'utf-8');

export const generateAction = async (fileName: string, opts: GenerateOptions): Promise<void> => {
    const services = createRobServices(NodeFileSystem).Rob;
    const model = await extractAstNode<Robot>(fileName, services);
    const generatedFilePath = generateJavaScript(model, fileName, opts.destination);
    console.log(chalk.green(`JavaScript code generated successfully: ${generatedFilePath}`));
};

export type GenerateOptions = {
    destination?: string;
}

export default function(): void {
    const program = new Command();

    program.version(JSON.parse(packageContent).version);

    const fileExtensions = RobLanguageMetaData.fileExtensions.join(', ');
    program
        .command('generate')
        .argument('<file>', `source file (possible file extensions: ${fileExtensions})`)
        .option('-d, --destination <dir>', 'destination directory of generating')
        .description('generates JavaScript code that prints "Hello, {name}!" for each greeting in a source file')
        .action(generateAction);

    program.command('interpret').argument('<file>', `source file (possible file extensions: ${fileExtensions})`)
    .description('interpret the code to virtually run it')
    .action(async (fileName: string) => {
        const services = createRobServices(NodeFileSystem).Rob;
        const model = await extractAstNode<RobotVisitor>(fileName, services);
        interpreter.interpretRobot(model);
    });

    program.command('compile').argument('<file>', `source file (possible file extensions: ${fileExtensions})`)
    .description('translate the code to arduino code')
    .action(async (fileName: string) => {
        const services = createRobServices(NodeFileSystem).Rob;
        const model = await extractAstNode<RobotVisitor>(fileName, services);
        compiler.compileRobot(model);
    });

    program.parse(process.argv);
}
