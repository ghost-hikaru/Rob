import type {  ValidationAcceptor, ValidationChecks } from 'langium';
import type { ProcDeclaration, RobAstType, Robot } from './generated/ast.js';
import type { RobServices } from './rob-module.js';
/**
 * Register custom validation checks.
 */
export function registerValidationChecks(services: RobServices) {
    const registry = services.validation.ValidationRegistry;
    const validator = services.validation.RobValidator;
    const checks: ValidationChecks<RobAstType> = {
        ProcDeclaration: validator.checkFunctionName,
        Robot: validator.checkMainFunction
    };
    registry.register(checks, validator);
}

/**
 * Implementation of custom validations.
 */
export class RobValidator {
    checkFunctionName(functionDeclaration: ProcDeclaration, accept: ValidationAcceptor): void{
        if(!functionDeclaration.name){
            accept('warning', 'Function name should not be empty.', { node: functionDeclaration, property: 'name' });
        }
        const regex = /^[a-zA-Z_][a-zA-Z0-9_]*$/;
        if(!regex.test(functionDeclaration.name)){
            accept('warning', 'Function name should start with a _ or a letter. It should not contains special caracters', 
            { node: functionDeclaration, property: 'name' });
        }
    }

    checkMainFunction(functions: Robot, accept: ValidationAcceptor): void{
        if(!functions.function.find(func => func.name == "mainCode")){
            accept('warning', 'There is no mainCode function', { node: functions, property: 'function' });
        }
    }

}

