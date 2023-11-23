
type Types = Types_Number | Types_Void | Types_Boolean;
type Types_Number = 'Number';
type Types_Void = 'Void';
type Types_Boolean = 'Boolean';

type Mouvement = Mouvement_AVANT | Mouvement_ARRIERE | Mouvement_DROITE | Mouvement_GAUCHE;
type Mouvement_AVANT = 'AVANT';
type Mouvement_ARRIERE = 'ARRIERE';
type Mouvement_DROITE = 'DROITE';
type Mouvement_GAUCHE = 'GAUCHE';

interface Robot {
	functions: ProcDeclaration
}

interface ProcDeclaration {
	block?: Block
	name: string
	returnedType: Types
}

interface Block extends Statement {
	statements: Statement[]
}

interface Statement {
}

interface Expression {
}

interface Unite {
}

interface ExpressionType {
}

interface If extends ControlStructure {
	else?: Block
	then: Block
}

interface ControlStructure extends Statement {
	condition?: Expression
}

interface While extends ControlStructure {
	block: Block
}

interface Repeat extends ControlStructure {
	block: Block
}

interface Clock extends CustomAction {
	time: Expression
}

interface CustomAction extends Statement {
}

interface Deplacement extends CustomAction {
	deplacement_value: Expression
	mouvement?: Mouvement
	unite: Unite
}

interface Speed extends CustomAction {
	value: Expression
	unite: Unite
}

interface VarDeclaration extends Statement {
	name: string
	^type: Types
	expression: Expression
}

interface Assignation extends Statement {
	valcall: ValCall
	expression: Expression
}

interface ValCall extends Expression {
	vardeclaration?: @VarDeclaration
}

interface BinaryExpression extends Expression {
	left: Expression
	right: Expression
	operator: ExpressionType
}

interface ConstantInt extends Expression {
	IntegerValue?: number
}

interface ProcCall extends Expression {
	arguments: Expression[]
	procdeclaration?: @ProcDeclaration
}

interface DistanceCaptor extends Sensor {
}

interface Sensor extends Expression {
	unite: Unite
}

interface ConstantBoolean extends Expression {
	value: boolean
}

interface Addition extends ExpressionType {
}

interface Soustraction extends ExpressionType {
}

interface Multiplication extends ExpressionType {
}

interface Lower extends ExpressionType {
}

interface Greater extends ExpressionType {
}

interface And extends ExpressionType {
}

interface Or extends ExpressionType {
}

interface MM extends Unite {
}

interface CM extends Unite {
}

