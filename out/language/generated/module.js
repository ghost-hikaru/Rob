/******************************************************************************
 * This file was generated by langium-cli 2.1.0.
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/
import { RobAstReflection } from './ast.js';
import { RobGrammar } from './grammar.js';
export const RobLanguageMetaData = {
    languageId: 'rob',
    fileExtensions: ['.rob'],
    caseInsensitive: false
};
export const RobGeneratedSharedModule = {
    AstReflection: () => new RobAstReflection()
};
export const RobGeneratedModule = {
    Grammar: () => RobGrammar(),
    LanguageMetaData: () => RobLanguageMetaData,
    parser: {}
};
//# sourceMappingURL=module.js.map