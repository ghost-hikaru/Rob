import * as ASTInterfaces from '../language/generated/ast.js';
import { AstNode, CstNode, LangiumDocument, Reference } from 'langium';
import { Robot } from '../language/generated/ast.js';

export interface RobotMLVisitor{
    visitRobot(node : RobotVisitor) : any
    visitProcDeclaration(node : ProcDeclarationVisitor) : any
    visitBlock(node : BlockVisitor) : any
    visitIf(node : IfNode) : any
    visitClock(node : ClockNode) : any
    visitConstInt(node : ConstInt) : any
    visitSpeed(node : SpeedNode) : any
    visitCM(node : CM) : any
    visitMM(node : MM) : any
    visitDistanceCaptor(node : DistanceCaptor) : any
    visitAssignation(node : AssignationVisitor) : any
    visitValCall(node : ValCallVisitor) : any
    visitVarDeclaration(node : VarDeclarationVisitor) : any
    visitConstantBoolean(node : ConstantBooleanVisitor) : any
    visitDeplacement(node : DeplacementVisitor) : any
    visitRepeat(node : RepeatVisitor) : any
    visitBinaryExpression(node : BinaryExpressionVisitor) : any
}

export class RobotVisitor implements ASTInterfaces.Robot {
    constructor(
        public $type: 'Robot'
    ){}
    function!: ProcDeclarationVisitor[];
    $container?: AstNode | undefined;
    $containerProperty?: string | undefined;
    $containerIndex?: number | undefined;
    $cstNode?: CstNode | undefined;
    $document?: LangiumDocument<AstNode> | undefined;
    accept (visitor: RobotMLVisitor) : any {
        return visitor.visitRobot(this);
    }
}

export class ProcDeclarationVisitor implements ASTInterfaces.ProcDeclaration {
    constructor(
        public $type: 'ProcDeclaration',
        public $container: Robot
    ){}
    name!: string;
    returnedType!: ASTInterfaces.Types;
    block!: BlockVisitor;

    $containerProperty?: string | undefined;
    $containerIndex?: number | undefined;
    $cstNode?: CstNode | undefined;
    $document?: LangiumDocument<AstNode> | undefined;

    accept(visitor: RobotMLVisitor) : any {
        return visitor.visitProcDeclaration(this);
    }
}

export class BlockVisitor implements ASTInterfaces.Block {
    constructor(
        public $type: 'Block',
        public $container: ProcDeclarationVisitor
    ){}
    statements!: BlockVisitor[] | IfNode[] | AssignationVisitor[] | DeplacementVisitor[] | RepeatVisitor[] | VarDeclarationVisitor[] | SpeedNode[];
    $containerProperty?: string | undefined;
    $containerIndex?: number | undefined;
    $cstNode?: CstNode | undefined;
    $document?: LangiumDocument<AstNode> | undefined;

    accept(visitor: RobotMLVisitor) : any {
        return visitor.visitBlock(this);
    }
}

export class IfNode implements ASTInterfaces.If {
    constructor(
        public $type: 'If',
        public $container: BlockVisitor
    ){}
    else?: BlockVisitor;
    then!: BlockVisitor;
    condition!: ConstantBooleanVisitor;
    $containerProperty?: string | undefined;
    $containerIndex?: number | undefined;
    $cstNode?: CstNode | undefined;
    $document?: LangiumDocument<AstNode> | undefined;

    accept(visitor: RobotMLVisitor) : any {
        return visitor.visitIf(this);
    }
}

export class ClockNode implements ASTInterfaces.Clock {
    constructor(
        public $type: 'Clock',
        public $container: BlockVisitor
    ){}
    time!: ConstInt;
    $containerProperty?: string | undefined;
    $containerIndex?: number | undefined;
    $cstNode?: CstNode | undefined;
    $document?: LangiumDocument<AstNode> | undefined;

    accept(visitor: RobotMLVisitor) : any {
        return visitor.visitClock(this);
    }
}

export class ConstInt implements ASTInterfaces.ConstantInt {
    constructor(
        public $type: 'ConstantInt'
    ){}
    IntegerValue!: number;
    $containerProperty?: string | undefined;
    $containerIndex?: number | undefined;
    $cstNode?: CstNode | undefined;
    $document?: LangiumDocument<AstNode> | undefined;

    accept(visitor: RobotMLVisitor) : any {
        return visitor.visitConstInt(this);
    }
}

export class SpeedNode implements ASTInterfaces.Speed {
    constructor(
        public $type: 'Speed'
    ){}
    unite!: CM | MM;
    value!: ConstInt | DistanceCaptor;
    $containerProperty?: string | undefined;
    $containerIndex?: number | undefined;
    $cstNode?: CstNode | undefined;
    $document?: LangiumDocument<AstNode> | undefined;

    accept(visitor: RobotMLVisitor) : any {
        return visitor.visitSpeed(this);
    }
}

export class CM implements ASTInterfaces.CM {
    constructor(
        public $type: 'CM'
    ){}
    $containerProperty?: string | undefined;
    $containerIndex?: number | undefined;
    $cstNode?: CstNode | undefined;
    $document?: LangiumDocument<AstNode> | undefined;

    accept(visitor: RobotMLVisitor) : any {
        return visitor.visitCM(this);
    }
}

export class MM implements ASTInterfaces.MM {
    constructor(
        public $type: 'MM'
    ){}
    $containerProperty?: string | undefined;
    $containerIndex?: number | undefined;
    $cstNode?: CstNode | undefined;
    $document?: LangiumDocument<AstNode> | undefined;

    accept(visitor: RobotMLVisitor) : any {
        return visitor.visitMM(this);
    }
}

export class DistanceCaptor implements ASTInterfaces.DistanceCaptor{
    constructor(
        public $type: 'DistanceCaptor'
    ){}
    unite!: CM | MM;;
    $container?: AstNode | undefined;
    $containerProperty?: string | undefined;
    $containerIndex?: number | undefined;
    $cstNode?: CstNode | undefined;
    $document?: LangiumDocument<AstNode> | undefined;
    accept(visitor: RobotMLVisitor): any {
        visitor.visitDistanceCaptor(this);
    }
}

export class AssignationVisitor implements ASTInterfaces.Assignation{
    constructor(
        public $type: 'Assignation'
    ){}
    expression!: ConstInt | DistanceCaptor;
    valcall!: ValCallVisitor;
    $container?: AstNode | undefined;
    $containerProperty?: string | undefined;
    $containerIndex?: number | undefined;
    $cstNode?: CstNode | undefined;
    $document?: LangiumDocument<AstNode> | undefined;
    accept(visitor: RobotMLVisitor): any {
        visitor.visitAssignation(this);
    }
}

export class ValCallVisitor implements ASTInterfaces.ValCall{
    constructor(
        public $type: 'ValCall',
        public $container: AssignationVisitor
    ){}
    vardeclaration!: Reference<VarDeclarationVisitor>;
    $containerProperty?: string | undefined;
    $containerIndex?: number | undefined;
    $cstNode?: CstNode | undefined;
    $document?: LangiumDocument<AstNode> | undefined;
    accept(visitor: RobotMLVisitor): any {
        visitor.visitValCall(this);
    }
}

export class VarDeclarationVisitor implements ASTInterfaces.VarDeclaration{
    constructor(
        public $type: 'VarDeclaration'
    ){}
    expression!: ConstInt | DistanceCaptor;
    name!: string;
    type!: ASTInterfaces.Types;
    $container?: AstNode | undefined;
    $containerProperty?: string | undefined;
    $containerIndex?: number | undefined;
    $cstNode?: CstNode | undefined;
    $document?: LangiumDocument<AstNode> | undefined;
    accept(visitor: RobotMLVisitor): any {
        visitor.visitVarDeclaration(this);
    }
}

export class ConstantBooleanVisitor implements ASTInterfaces.ConstantBoolean{
    constructor(
        public $type: 'ConstantBoolean'
    ){}
    value!: boolean;
    $container?: AstNode | undefined;
    $containerProperty?: string | undefined;
    $containerIndex?: number | undefined;
    $cstNode?: CstNode | undefined;
    $document?: LangiumDocument<AstNode> | undefined;
    accept(visitor: RobotMLVisitor): any {
        visitor.visitConstantBoolean(this);
    }
}

export class DeplacementVisitor implements ASTInterfaces.Deplacement{
    constructor(
        public $type: 'Deplacement'
    ){}
    deplacement_value!: ConstInt | DistanceCaptor;
    mouvement!: ASTInterfaces.Mouvement | undefined;
    unite!: CM | MM;
    $container?: AstNode | undefined;
    $containerProperty?: string | undefined;
    $containerIndex?: number | undefined;
    $cstNode?: CstNode | undefined;
    $document?: LangiumDocument<AstNode> | undefined;
    accept(visitor: RobotMLVisitor): any {
        visitor.visitDeplacement(this);
    }
}

export class RepeatVisitor implements ASTInterfaces.Repeat{
    constructor(
        public $type: 'Repeat'
    ){}
    block!: BlockVisitor;
    condition!: ConstantBooleanVisitor;
    $container?: AstNode | undefined;
    $containerProperty?: string | undefined;
    $containerIndex?: number | undefined;
    $cstNode?: CstNode | undefined;
    $document?: LangiumDocument<AstNode> | undefined;
    accept(visitor: RobotMLVisitor): any {
        visitor.visitRepeat(this);
    }
}

export class BinaryExpressionVisitor implements ASTInterfaces.BinaryExpression{
    constructor(
        public $type: 'BinaryExpression'
    ){}
    left!: ConstInt | DistanceCaptor;
    right!: ConstInt | DistanceCaptor;
    operator!: ASTInterfaces.ExpressionType;
    $container?: AstNode | undefined;
    $containerProperty?: string | undefined;
    $containerIndex?: number | undefined;
    accept(visitor: RobotMLVisitor): any {
        visitor.visitBinaryExpression(this);
    }
}