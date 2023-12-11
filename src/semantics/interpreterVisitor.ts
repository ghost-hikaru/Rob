import { AssignationVisitor, BinaryExpressionVisitor, BlockVisitor, CM, ClockNode, ConstInt, ConstantBooleanVisitor, DeplacementVisitor, DistanceCaptor, IfNode, MM, ProcCallVisitor, ProcDeclarationVisitor, RepeatVisitor, ReturnVisitor, RobotMLVisitor, RobotVisitor, SpeedNode, ValCallVisitor, VarDeclarationVisitor } from "./visitorNode.js";
import * as ASTInterfaces from '../language/generated/ast.js';
export class Statment{
    type : string;
    value : number;
    constructor(type : string, value : number){
        this.type = type;
        this.value = value;
    }
}
export class InterpreterImplementation implements RobotMLVisitor{
    StackList: Map<String, any>[] = [new Map<String, any>()];
    originalNode : any;
    StatmentList : Statment[] = [];

    visitReturn(node: ReturnVisitor) {
        return node.expression.accept(this);
    }

    visitProcCall(node: ProcCallVisitor) {
        const functionDeclarationRef = node.procdeclaration.ref;
        if (functionDeclarationRef) {
            const matchingFunction = this.originalNode.function.find((func: { name: string; }) => func.name === (functionDeclarationRef?.name || ""));
            if (matchingFunction) {
                if(matchingFunction.name == "print"){
                    for(let i = 0; i < node.arguments.length; i++){
                        console.log(node.arguments[i].accept(this));
                    }
                }
                else if(node.arguments.length == matchingFunction.parameters.length){
                    var contextStack = new Map<String, any>()
                    for(let i = 0; i < node.arguments.length; i++){
                        contextStack.set(matchingFunction.parameters[i].name, node.arguments[i].accept(this));
                    }
                    this.StackList.push(contextStack);
                    return matchingFunction.accept(this);
                }
            } else {
                console.error(`Aucune fonction trouvée avec le nom ${functionDeclarationRef.name}`);
            }
        }
    }

    visitBinaryExpression(node: BinaryExpressionVisitor) {
        if(node.operator.$type == ASTInterfaces.Addition){
            return parseInt(node.left.accept(this)) + parseInt(node.right.accept(this));
        }
        else if(node.operator.$type == ASTInterfaces.Soustraction){
            return parseInt(node.left.accept(this)) - parseInt(node.right.accept(this));
        }
        else if(node.operator.$type == ASTInterfaces.Multiplication){
            return parseInt(node.left.accept(this)) * parseInt(node.right.accept(this));
        }
        else if(node.operator.$type == ASTInterfaces.And){
            return node.left.accept(this) && node.right.accept(this);
        }
        else if(node.operator.$type == ASTInterfaces.Or){
            return node.left.accept(this) || node.right.accept(this);
        }
        else if(node.operator.$type == ASTInterfaces.Lower){
            return parseInt(node.left.accept(this)) < parseInt(node.right.accept(this));
        }   
        else if(node.operator.$type == ASTInterfaces.Greater){
            return parseInt(node.left.accept(this)) > parseInt(node.right.accept(this));
        }
        else if(node.operator.$type == ASTInterfaces.Equality){
            return parseInt(node.left.accept(this)) == parseInt(node.right.accept(this));
        }
        else {
            return "error, cannot recognize the operator"
        }
    }
    visitRepeat(node: RepeatVisitor) : void {
        while(node.condition.accept(this)){
            this.StackList.push(new Map<String, any>());
            node.block.accept(this);
            this.StackList.pop();
        }
    }
    visitDeplacement(node: DeplacementVisitor) {
        if (node.mouvement !== undefined) {
            this.StatmentList.push(new Statment(node.mouvement, node.deplacement_value.accept(this)));
        }
    }
    visitConstantBoolean(node: ConstantBooleanVisitor): boolean {
        return (node.value as unknown as string)=='true';
    }
    visitVarDeclaration(node: VarDeclarationVisitor) {
        this.StackList[this.StackList.length - 1].set(node.name, node.expression.accept(this));
    }
    visitValCall(node: ValCallVisitor) {
        const varDeclarationRef = node.vardeclaration;
        if (varDeclarationRef && varDeclarationRef.ref) {
            return this.seachVariable(varDeclarationRef.ref.name);
        }
        return null;
    }
    visitAssignation(node: AssignationVisitor) : void {
        const variableName = node.valcall?.vardeclaration?.ref?.name;    
        if (variableName !== undefined && node.valcall !== null) {
            const variableIndex = this.seachVariablePlace(variableName);
            if (variableIndex !== null) {
                this.StackList[variableIndex].set(variableName, node.expression.accept(this));
            }
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
        this.StackList.push(new Map<String, any>());
        if(node.condition.accept(this)){
            node.then.accept(this);
        }
        else{
            node.else?.accept(this);
        }
        this.StackList.pop();
    }

    visitProcDeclaration(node: ProcDeclarationVisitor) : void {
        return node.block.accept(this);
    }

    visitRobot(node : RobotVisitor) : any{
        this.originalNode = node;
        const mainFunction = node.function
        .filter(func => func.name === "mainCode")[0];
        mainFunction.accept(this);
        console.log("end of file");
        return this.StatmentList;
    }

    visitBlock(node: BlockVisitor): any {
        var returnedValue;
        var hasNotReturn = true;
        node.statements.map((stat) => {
            if (ASTInterfaces.isReturn(stat)) {
                returnedValue = (stat as ReturnVisitor).accept(this);
                hasNotReturn = false;
            } else if(hasNotReturn){
                stat.accept(this);
            }
        });
        return returnedValue;
    }

    visitClock(node: ClockNode) {
        this.StatmentList.push(new Statment("Clock", node.time.accept(this)));
    }

    seachVariable(name : string) : any{
        for(let i = this.StackList.length - 1; i >= 0; i--){
            if(this.StackList[i].has(name)){
                return this.StackList[i].get(name);
            }
        }
        return null;
    }

    seachVariablePlace(name : string) : number | null{
        for(let i = this.StackList.length - 1; i >= 0; i--){
            if(this.StackList[i].has(name)){
                return i;
            }
        }
        return null;
    }
}