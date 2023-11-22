/**
 * Register custom validation checks.
 */
export function registerValidationChecks(services) {
    const registry = services.validation.ValidationRegistry;
    const validator = services.validation.RobValidator;
    const checks = {
    //Person: validator.checkPersonStartsWithCapital
    };
    registry.register(checks, validator);
}
/**
 * Implementation of custom validations.
 */
export class RobValidator {
}
//# sourceMappingURL=rob-validator.js.map