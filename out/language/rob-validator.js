/**
 * Register custom validation checks.
 */
export function registerValidationChecks(services) {
    const registry = services.validation.ValidationRegistry;
    const validator = services.validation.RobValidator;
    const checks = {
        ProcDeclaration: validator.checkFunctionName,
        Robot: validator.checkMainFunction
    };
    registry.register(checks, validator);
}
/**
 * Implementation of custom validations.
 */
export class RobValidator {
    checkFunctionName(functionDeclaration, accept) {
        if (!functionDeclaration.name) {
            accept('warning', 'Function name should not be empty.', { node: functionDeclaration, property: 'name' });
        }
        const regex = /^[a-zA-Z_][a-zA-Z0-9_]*$/;
        if (!regex.test(functionDeclaration.name)) {
            accept('warning', 'Function name should start with a _ or a letter. It should not contains special caracters', { node: functionDeclaration, property: 'name' });
        }
    }
    checkMainFunction(functions, accept) {
        if (!functions.function.find(func => func.name == "mainCode")) {
            accept('warning', 'There is no mainCode function', { node: functions, property: 'function' });
        }
    }
}
//# sourceMappingURL=rob-validator.js.map