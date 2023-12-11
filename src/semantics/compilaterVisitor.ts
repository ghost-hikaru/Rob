import { AssignationVisitor, BinaryExpressionVisitor, BlockVisitor, CM, ClockNode, ConstInt, ConstantBooleanVisitor, DeplacementVisitor, DistanceCaptor, IfNode, MM, ProcCallVisitor, ProcDeclarationVisitor, RepeatVisitor, ReturnVisitor, RobotMLVisitor, RobotVisitor, SpeedNode, ValCallVisitor, VarDeclarationVisitor } from "./visitorNode.js";
import * as ASTInterfaces from '../language/generated/ast.js';
import * as fs from 'fs';

export class CompilaterImplementation implements RobotMLVisitor{
    pathToFile = "src/semantics/defaultArduino.ino";
    pathToWrite = "src/semantics/outputArduino.ino";
    program: string = "\n\n";

    visitRobot(node: RobotVisitor) {
        node.function.map(func => this.program += func.accept(this));
        fs.readFile(this.pathToFile, 'utf8', (err, data) => {
            if (err) {
              console.error(`Erreur de lecture du fichier : ${err}`);
              return;
            }
          
            const newData = data + this.program;
          
            // Réécrire le fichier avec le nouveau contenu
            fs.writeFile(this.pathToWrite, newData, 'utf8', (err) => {
              if (err) {
                console.error(`Erreur d'écriture du fichier : ${err}`);
                return;
              }
              console.log('Code ajouté avec succès !');
            });
          });
        return this.program;
    }
    visitProcDeclaration(node: ProcDeclarationVisitor) {
        return (node.returnedType === "Number" ? "int" : (node.returnedType === "Boolean" ? "bool" : "void")) + " " + node.name + "(" + node.parameters.map(param => (param.type=="Number"? "int" : (param.type=="Boolean"? "bool" : param.type)) + " " + param.name).join(', ') + ") {\n"
        + node.block.statements.map(statement => statement.accept(this)).join('\n') + "}\n";
    }
    visitBlock(node: BlockVisitor) {
        return node.statements.map(stat => stat.accept(this)).join('\n') + "\n";
    }
    visitIf(node: IfNode) {
        return "if(" + node.condition.accept(this) + ") {\n" + node.then.accept(this) + "\n}\n" + (node.else ? "else {\n" + node.else.accept(this) + "\n}\n" : "");
    }
    visitClock(node: ClockNode) {
        return "rotate(" + node.time.accept(this) + ");\n";
    }
    visitConstInt(node: ConstInt) {
        return node.IntegerValue;
    }
    visitSpeed(node: SpeedNode) {
        return "setSpeed(" + node.value.accept(this) + "*" + node.unite.accept(this) + ");\n";
    }
    visitCM(node: CM) {
        return "* 0.01";
    }
    visitMM(node: MM) {
        return "* 0.001";
    }
    visitDistanceCaptor(node: DistanceCaptor) {
        return "distanceCaptor(" + node.unite.accept(this) + ")\n";
    }
    visitAssignation(node: AssignationVisitor) {
        return node.valcall?.vardeclaration?.ref?.name + " = " + node.expression.accept(this) +";";
    }
    visitValCall(node: ValCallVisitor) {
        return node.vardeclaration?.ref?.name;
    }
    visitVarDeclaration(node: VarDeclarationVisitor) {
        return (node.type === "Number" ? "int" : (node.type === "Boolean" ? "bool" : "void")) + " " + node.name + " = " + node.expression.accept(this)+";";
    }
    visitConstantBoolean(node: ConstantBooleanVisitor) {
        return node.value;
    }
    visitDeplacement(node: DeplacementVisitor) {
        return "deplacement(" + node.mouvement + "," + node.deplacement_value.accept(this) + "*" + node.unite.accept(this) + ");\n";
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
        else if(node.operator.$type == ASTInterfaces.Equality){
            operator = "==";
        }
        const leftExpression = node.left.accept(this).replace(/;/g, '');
        const rightExpression = node.right.accept(this).replace(/;/g, '');
        return leftExpression + " " + operator + " " + rightExpression;
    }
    visitProcCall(node: ProcCallVisitor) {
        return node.procdeclaration.ref?.name + "(" + node.arguments.map(arg => arg.accept(this)).join(', ') + ");"
    }
    visitReturn(node: ReturnVisitor) {
        return "return " + node.expression.accept(this) + ";\n";
    }
}