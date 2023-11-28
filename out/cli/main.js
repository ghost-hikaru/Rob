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
import { interpreter } from '../semantics/interpreter.js';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const packagePath = path.resolve(__dirname, '..', '..', 'package.json');
const packageContent = await fs.readFile(packagePath, 'utf-8');
export const generateAction = async (fileName, opts) => {
    const services = createRobServices(NodeFileSystem).Rob;
    const model = await extractAstNode(fileName, services);
    const generatedFilePath = generateJavaScript(model, fileName, opts.destination);
    console.log(chalk.green(`JavaScript code generated successfully: ${generatedFilePath}`));
};
export default function () {
    const program = new Command();
    program.version(JSON.parse(packageContent).version);
    const fileExtensions = RobLanguageMetaData.fileExtensions.join(', ');
    program
        .command('generate')
        .argument('<file>', `source file (possible file extensions: ${fileExtensions})`)
        .option('-d, --destination <dir>', 'destination directory of generating')
        .description('generates JavaScript code that prints "Hello, {name}!" for each greeting in a source file')
        .action(generateAction);
    program.command('print').argument('<file>', `source file (possible file extensions: ${fileExtensions})`)
        .description('prints the AST of a source file')
        .action(async (fileName) => {
        const services = createRobServices(NodeFileSystem).Rob;
        const model = await extractAstNode(fileName, services);
        interpreter.interpretRobot(model);
    });
    program.parse(process.argv);
}
//# sourceMappingURL=main.js.map