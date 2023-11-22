import type {  ValidationChecks } from 'langium';
import type { RobAstType } from './generated/ast.js';
import type { RobServices } from './rob-module.js';

/**
 * Register custom validation checks.
 */
export function registerValidationChecks(services: RobServices) {
    const registry = services.validation.ValidationRegistry;
    const validator = services.validation.RobValidator;
    const checks: ValidationChecks<RobAstType> = {
        //Person: validator.checkPersonStartsWithCapital
    };
    registry.register(checks, validator);
}

/**
 * Implementation of custom validations.
 */
export class RobValidator {

    /*checkPersonStartsWithCapital(person: Robot, accept: ValidationAcceptor): void {
        if (person.name) {
            const firstChar = person.name.substring(0, 1);
            if (firstChar.toUpperCase() !== firstChar) {
                accept('warning', 'Person name should start with a capital.', { node: person, property: 'name' });
            }
        }
    }*/

}
