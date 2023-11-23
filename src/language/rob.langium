grammar Rob
import 'Terminals'
import 'robML-types'

entry Robot returns Robot:
    ('fun' functions=ProcDeclaration)*
;

Statement returns Statement:
    (Block | If | While | Repeat | Clock | Deplacement | Speed | ProcCall | VarDeclaration | Assignation) ';'
;

Expression returns Expression:
    BinaryExpression | ConstantInt | ProcCall | DistanceCaptor | ConstantBoolean | ValCall 
;

Unite returns Unite:
    MM | CM 
;

ExpressionType returns ExpressionType:
    Addition | Soustraction | Multiplication | Lower | Greater | And | Or 
;

ProcDeclaration returns ProcDeclaration:
    returnedType=Types name=EString (block=Block)? 
;

Block returns Block:
    ('{'(statements+=Statement  ( statements+=Statement  )*)? '}')?
;

EString returns string:
    STRING | ID 
;

Types returns Types:
    Types_Number | Types_Void | Types_Boolean
;
Types_Number returns Types_Number: 'Number' ;
Types_Void returns Types_Void: 'Void' ;
Types_Boolean returns Types_Boolean: 'Boolean' ;

If returns If:
    'If' '('(condition=Expression)')' '{' 'then' then=Block ('else' else=Block)? '}'  
;

While returns While:
    'While' '('(condition=Expression) ')' block=Block
;

Repeat returns Repeat:
    'Repeat' '(' (condition=Expression)')' block=Block 
;

Clock returns Clock:
    'Clock''('time=Expression')' 
;

Deplacement returns Deplacement:
    'Deplacement''('mouvement=Mouvement','deplacement_value=Expression','unite=Unite')'  
;

Speed returns Speed:
    'setSpeed' '('value=Expression','unite=Unite')'  
;

VarDeclaration returns VarDeclaration:
    ^type=Types name=EString '=' expression=Expression  
;

Assignation returns Assignation:
   valcall=ValCall '=' expression=Expression
;

BinaryExpression returns BinaryExpression:
    '('left=Expression operator=ExpressionType right=Expression')'
;

ConstantInt returns ConstantInt:
    IntegerValue=EInt
;

ProcCall returns ProcCall:
    procdeclaration=[ProcDeclaration:EString ]('(' arguments+=Expression  ("," arguments+=Expression  )* )?')'  
;

DistanceCaptor returns DistanceCaptor:
    'getDistanceFromCaptor' '(' unite=Unite ')'  
;

ConstantBoolean returns ConstantBoolean:
    (value?=EBoolean )?
;

ValCall returns ValCall:
   vardeclaration=[VarDeclaration:EString ]
;

Addition returns Addition:
    {Addition} 'Addition'  
;

Soustraction returns Soustraction:
    {Soustraction} 'Soustraction'  
;

Multiplication returns Multiplication:
    {Multiplication} 'Multiplication'  
;

Lower returns Lower:
    {Lower} 'Lower'  
;

Greater returns Greater:
    {Greater} 'Greater'  
;

And returns And:
    {And} 'And'  
;

Or returns Or:
    {Or} 'Or'  
;

EInt returns number:
    '-'? INT  
;

MM returns MM:
    {MM} 'MM'  
;

CM returns CM:
    {CM} 'CM'  
;

EBoolean returns boolean:
    'true' | 'false' 
;

Mouvement returns Mouvement:
    Mouvement_AVANT | Mouvement_ARRIERE | Mouvement_DROITE | Mouvement_GAUCHE
;
Mouvement_AVANT returns Mouvement_AVANT: 'AVANT' ;
Mouvement_ARRIERE returns Mouvement_ARRIERE: 'ARRIERE' ;
Mouvement_DROITE returns Mouvement_DROITE: 'DROITE' ;
Mouvement_GAUCHE returns Mouvement_GAUCHE: 'GAUCHE' ;

