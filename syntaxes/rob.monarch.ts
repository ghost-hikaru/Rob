// Monarch syntax highlighting for the rob language.
export default {
    keywords: [
        'ARRIERE','AVANT','Addition','And','Assignation','BinaryExpression','Block','Boolean','CM','Clock','ConstantBoolean','ConstantInt','DROITE','Deplacement','DistanceCaptor','GAUCHE','Greater','If','IntegerValue','Lower','MM','Multiplication','Number','Or','ProcCall','ProcDeclaration','Repeat','Soustraction','Speed','ValCall','VarDeclaration','Void','While','arguments','block','condition','deplacement_value','else','expression','fun','left','mouvement','operator','procdeclaration','returnedType','right','statements','then','time','type','unite','valcall','value','vardeclaration'
    ],
    operators: [
        ',','-'
    ],
    symbols: /,|-|\{|\}/,

    tokenizer: {
        initial: [
            { regex: /(\^?(([a-z]|[A-Z])|_)((([a-z]|[A-Z])|_)|[0-9])*)/, action: { cases: { '@keywords': {"token":"keyword"}, '@default': {"token":"string"} }} },
            { regex: /[0-9]+/, action: {"token":"number"} },
            { regex: /(("((\\([\s\S]))|((?!(\\|"))[\s\S]*?))*")|('((\\([\s\S]))|((?!(\\|'))[\s\S]*?))*'))/, action: {"token":"string"} },
            { include: '@whitespace' },
            { regex: /@symbols/, action: { cases: { '@operators': {"token":"operator"}, '@default': {"token":""} }} },
        ],
        whitespace: [
            { regex: /\/\*/, action: {"token":"comment","next":"@comment"} },
            { regex: /(\/\/((?!(\n|\r))[\s\S]*?)(\r?\n)?)/, action: {"token":"comment"} },
            { regex: /((( |	)|\r)|\n)+/, action: {"token":"white"} },
            { regex: /([\s\S])/, action: {"token":"white"} },
        ],
        comment: [
            { regex: /[^/\*]+/, action: {"token":"comment"} },
            { regex: /\*\//, action: {"token":"comment","next":"@pop"} },
            { regex: /[/\*]/, action: {"token":"comment"} },
        ],
    }
};
