import { createDefaultModule, createDefaultSharedModule, inject } from 'langium';
import { RobGeneratedModule, RobGeneratedSharedModule } from './generated/module.js';
import { RobValidator, registerValidationChecks } from './rob-validator.js';
/**
 * Dependency injection module that overrides Langium default services and contributes the
 * declared custom services. The Langium defaults can be partially specified to override only
 * selected services, while the custom services must be fully specified.
 */
export const RobModule = {
    validation: {
        RobValidator: () => new RobValidator()
    }
};
/**
 * Create the full set of services required by Langium.
 *
 * First inject the shared services by merging two modules:
 *  - Langium default shared services
 *  - Services generated by langium-cli
 *
 * Then inject the language-specific services by merging three modules:
 *  - Langium default language-specific services
 *  - Services generated by langium-cli
 *  - Services specified in this file
 *
 * @param context Optional module context with the LSP connection
 * @returns An object wrapping the shared services and the language-specific services
 */
export function createRobServices(context) {
    const shared = inject(createDefaultSharedModule(context), RobGeneratedSharedModule);
    const Rob = inject(createDefaultModule({ shared }), RobGeneratedModule, RobModule);
    shared.ServiceRegistry.register(Rob);
    registerValidationChecks(Rob);
    return { shared, Rob };
}
//# sourceMappingURL=rob-module.js.map