import { AssignationVisitor, BinaryExpressionVisitor, BlockVisitor, CM, ClockNode, ConstInt, ConstantBooleanVisitor, DeplacementVisitor, DistanceCaptor, IfNode, MM, ProcDeclarationVisitor, RepeatVisitor, RobotMLVisitor, RobotVisitor, SpeedNode, ValCallVisitor, VarDeclarationVisitor } from "./visitorNode.js";
import * as ASTInterfaces from '../language/generated/ast.js';

export class InterpreterImplementation implements RobotMLVisitor{
    variableStack: Map<string, any> = new Map();
    functionStack: Map<Map<string, ASTInterfaces.Types>, any> = new Map();

    visitBinaryExpression(node: BinaryExpressionVisitor) {
        if(node.operator.$type == ASTInterfaces.Addition){
            return parseFloat(node.left.accept(this)) + parseFloat(node.right.accept(this));
        }
        else if(node.operator.$type == ASTInterfaces.Soustraction){
            return node.left.accept(this) - node.right.accept(this);
        }
        else if(node.operator.$type == ASTInterfaces.Multiplication){
            return node.left.accept(this) * node.right.accept(this);
        }
        else if(node.operator.$type == ASTInterfaces.And){
            return node.left.accept(this) && node.right.accept(this);
        }
        else if(node.operator.$type == ASTInterfaces.Or){
            return node.left.accept(this) || node.right.accept(this);
        }
        else if(node.operator.$type == ASTInterfaces.Lower){
            return node.left.accept(this) < node.right.accept(this);
        }
        else if(node.operator.$type == ASTInterfaces.Greater){
            return node.left.accept(this) > node.right.accept(this);
        }
        else {
            return "error, cannot recognize the operator"
        }
    }
    visitRepeat(node: RepeatVisitor) : void{
        // node.condition.accept(this)
        let i = 0;
        while(i < 2){
            node.block.accept(this);
            i++;
        }
    }
    visitDeplacement(node: DeplacementVisitor) {
        return [node.$type, node.deplacement_value.accept(this), node.mouvement, node.unite.accept(this)].flat();
    }
    visitConstantBoolean(node: ConstantBooleanVisitor) {
        return node.value;
    }
    visitVarDeclaration(node: VarDeclarationVisitor) {
        return this.variableStack.set(node.name, node.expression.accept(this));
    }
    visitValCall(node: ValCallVisitor) {
        const varDeclarationRef = node.vardeclaration;
        if (varDeclarationRef && varDeclarationRef.ref) {
            return this.variableStack.get(varDeclarationRef.ref.name);
        }
        return null;
    }
    visitAssignation(node: AssignationVisitor) : void {
        const variableName = node.valcall?.vardeclaration?.ref?.name;
        const expressionResult = node.expression.accept(this);
    
        if (variableName !== undefined) {
            this.variableStack.set(variableName, expressionResult);
        }
    }
    visitDistanceCaptor(node: DistanceCaptor) {
        return ("DistanceCaptor " + node.unite.accept(this));
    }
    visitCM(node: CM) {
        return 0.01;
    }
    visitMM(node: MM) {
        return 0.001;
    }
    visitSpeed(node: SpeedNode) {
        return (node.$type + " " + node.value.accept(this) + " " + node.unite.accept(this));
    }
    visitConstInt(node: ConstInt) {
        return node.IntegerValue;
    }
    visitIf(node: IfNode) : void {
        if(node.condition.accept(this)){
            node.then.accept(this);
        }
        else{
            node.else?.accept(this);
        }    
    }

    visitProcDeclaration(node: ProcDeclarationVisitor) : void {
        this.functionStack.set(new Map([[node.name, node.returnedType]]), node.block.statements.map(statement => statement.accept(this)));
    }

    visitRobot(node : RobotVisitor) : any{
        node.function.map(func => func.accept(this));
        console.log(this.functionStack);
        console.log(this.variableStack);
        return 0;
    }

    visitBlock(node : BlockVisitor) : void{
        node.statements.map(stat => stat.accept(this));
    }

    visitClock(node: ClockNode) {
        return ("Clock " + node.time.accept(this));
    }
}