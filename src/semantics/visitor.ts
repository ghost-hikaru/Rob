import * as ASTInterfaces from '../language/generated/ast.js';
import { AstNode, CstNode, LangiumDocument, Reference } from 'langium';
import { Robot } from '../language/generated/ast.js';

export interface RobotMLVisitor{
    // TODO : create one visit method for each concept of the language
    //visitConcept(node : Concept) : any;
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
}

// TODO : create one concrete class for each concept
// the constructor must take all attribute of the implemented interface 

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
    statements!: BlockVisitor[] | IfNode[];
    if!: IfNode[];
    while!: ASTInterfaces.While[];
    repeat!: ASTInterfaces.Repeat[];
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
    else?: BlockVisitor | undefined;
    then!: BlockVisitor;
    condition!: ASTInterfaces.Expression;
    block!: BlockVisitor;
    elseBlock!: BlockVisitor;

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
    unite!: ASTInterfaces.Unite;
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


export class VisitorImplementation implements RobotMLVisitor{
    visitVarDeclaration(node: VarDeclarationVisitor) {
        return node.expression.accept(this);
    }
    visitValCall(node: ValCallVisitor) {
        return (node.vardeclaration as unknown as VarDeclarationVisitor).accept(this);
    }
    visitAssignation(node: AssignationVisitor) {
        return (node.expression.accept(this), node.valcall.accept(this));
    }
    visitDistanceCaptor(node: DistanceCaptor) {
        return node.unite.accept(this);
    }
    visitCM(node: CM) {
        return node.$type;
    }
    visitMM(node: MM) {
        return node.$type;
    }
    visitSpeed(node: SpeedNode) {
        return (node.value.accept(this), node.unite);
    }
    visitConstInt(node: ConstInt) {
        return node.IntegerValue;
    }
    visitIf(node: IfNode) {
       // node.condition.accept(this);
        return node.then.accept(this),node.elseBlock.accept(this);
    }

    visitProcDeclaration(node: ProcDeclarationVisitor) {
        for (let i  = 0; i < node.block.statements.length; i++) {
            node.block.accept(this);
        }
    }

    visitRobot(node : RobotVisitor) : any{
        for (let i = 0; i < node.function.length; i++) {
            node.function[i].accept(this);
        }
    }

    visitBlock(node : BlockVisitor) : any{
        for (let i = 0; i < node.statements.length; i++) {
            node.statements[i].accept(this);
        }
    }

    visitClock(node: ClockNode) {
        return node.time.accept(this);
    }
}