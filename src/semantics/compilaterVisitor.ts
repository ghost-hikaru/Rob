import { AssignationVisitor, BinaryExpressionVisitor, BlockVisitor, CM, ClockNode, ConstInt, ConstantBooleanVisitor, DeplacementVisitor, DistanceCaptor, IfNode, MM, ProcDeclarationVisitor, RepeatVisitor, RobotMLVisitor, RobotVisitor, SpeedNode, ValCallVisitor, VarDeclarationVisitor } from "./visitorNode.js";
import * as ASTInterfaces from '../language/generated/ast.js';

export class CompilaterImplementation implements RobotMLVisitor{

    program: string = "";

    visitRobot(node: RobotVisitor) {
        node.function.map(func => func.accept(this));
        return this.program;
    }
    visitProcDeclaration(node: ProcDeclarationVisitor) {
        this.program += (node.returnedType=="Number"? "integer" : node.returnedType) + " " + node.name + "() {\n";
        this.program += node.block.statements.map(statement => statement.accept(this)).join('\n') + "}\n";
    }
    visitBlock(node: BlockVisitor) {
        return node.statements.map(stat => stat.accept(this)).join('\n') + "\n";
    }
    visitIf(node: IfNode) {
        return "if(" + node.condition.accept(this) + ") {\n" + node.then.accept(this) + "\n}\n" + (node.else ? "else {\n" + node.else.accept(this) + "\n}\n" : "");
    }
    visitClock(node: ClockNode) {
        return "Clock " + node.time.accept(this) + ";\n";
    }
    visitConstInt(node: ConstInt) {
        return node.IntegerValue;
    }
    visitSpeed(node: SpeedNode) {
        return "setSpeed(" + node.value.accept(this) + " " + node.unite.accept(this) + ");\n";
    }
    visitCM(node: CM) {
        return "* 0.01";
    }
    visitMM(node: MM) {
        return "* 0.001";
    }
    visitDistanceCaptor(node: DistanceCaptor) {
        return "DistanceCaptor " + node.unite.accept(this) + "\n";
    }
    visitAssignation(node: AssignationVisitor) {
        return node.valcall?.vardeclaration?.ref?.name + " = " + node.expression.accept(this) + ";\n";
    }
    visitValCall(node: ValCallVisitor) {
        return node.vardeclaration?.ref?.name;
    }
    visitVarDeclaration(node: VarDeclarationVisitor) {
        return node.name + " = " + node.expression.accept(this) + ";\n";
    }
    visitConstantBoolean(node: ConstantBooleanVisitor) {
        return node.value;
    }
    visitDeplacement(node: DeplacementVisitor) {
        return node.$type + " " + node.mouvement + " " + node.deplacement_value.accept(this) + node.unite.accept(this) + "\n";
    }
    visitRepeat(node: RepeatVisitor) {
        return "while(" + node.condition.accept(this) + ") {\n" + node.block.accept(this) + "\n}\n";
    }
    visitBinaryExpression(node: BinaryExpressionVisitor) {
        var operator = " ";
        if(node.operator.$type == ASTInterfaces.Addition){
            operator = "+";
        }
        else if(node.operator.$type == ASTInterfaces.Soustraction){
            operator = "-";
        }
        else if(node.operator.$type == ASTInterfaces.Multiplication){
            operator = "*";
        }
        else if(node.operator.$type == ASTInterfaces.And){
            operator = "&&";
        }
        else if(node.operator.$type == ASTInterfaces.Or){
            operator = "||";
        }
        else if(node.operator.$type == ASTInterfaces.Lower){
            operator = "<";
        }
        else if(node.operator.$type == ASTInterfaces.Greater){
            operator = ">";
        }
        return node.left.accept(this) + " " + operator + " " + node.right.accept(this);
    }
}