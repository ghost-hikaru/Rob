grammar Rob
import 'Terminals'
import 'robML-types'

entry Robot returns Robot:
    ('fun' functions=ProcDeclaration)*
;

Statement returns Statement:
    Block | If | While | Repeat | Clock | Deplacement | Speed | VarDeclaration | Assignation 
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
    'ProcDeclaration' name=EString  '{' 'returnedType' returnedType=Types  ('block' block=Block  )? '}'  
;

Block returns Block:
    {Block} 'Block' '{' ('statements' '{' statements+=Statement  ("," statements+=Statement  )* '}' )? '}'  
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
    'If' '{' ('condition' condition=Expression  )? ('else' else=Block  )? 'then' then=Block  '}'  
;

While returns While:
    'While' '{' ('condition' condition=Expression  )? 'block' block=Block  '}'  
;

Repeat returns Repeat:
    'Repeat' '{' ('condition' condition=Expression  )? 'block' block=Block  '}'  
;

Clock returns Clock:
    'Clock' '{' 'time' time=Expression  '}'  
;

Deplacement returns Deplacement:
    'Deplacement' '{' ('mouvement' mouvement=Mouvement  )? 'deplacement_value' deplacement_value=Expression  'unite' unite=Unite  '}'  
;

Speed returns Speed:
    'Speed' '{' 'value' value=Expression  'unite' unite=Unite  '}'  
;

VarDeclaration returns VarDeclaration:
    'VarDeclaration' name=EString  '{' 'type' ^type=Types  'expression' expression=Expression  '}'  
;

Assignation returns Assignation:
    'Assignation' '{' 'valcall' valcall=ValCall  'expression' expression=Expression  '}'  
;

BinaryExpression returns BinaryExpression:
    'BinaryExpression' '{' 'left' left=Expression  'right' right=Expression  'operator' operator=ExpressionType  '}'  
;

ConstantInt returns ConstantInt:
    {ConstantInt} 'ConstantInt' '{' ('IntegerValue' IntegerValue=EInt  )? '}'  
;

ProcCall returns ProcCall:
    {ProcCall} 'ProcCall' '{' ('procdeclaration' procdeclaration=[ProcDeclaration:EString ] )? ('arguments' '{' arguments+=Expression  ("," arguments+=Expression  )* '}' )? '}'  
;

DistanceCaptor returns DistanceCaptor:
    'DistanceCaptor' '{' 'unite' unite=Unite  '}'  
;

ConstantBoolean returns ConstantBoolean:
    {ConstantBoolean} (value?='value' )? 'ConstantBoolean'  
;

ValCall returns ValCall:
    {ValCall} 'ValCall' '{' ('vardeclaration' vardeclaration=[VarDeclaration:EString ] )? '}'  
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

