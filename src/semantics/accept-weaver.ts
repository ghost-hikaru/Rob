import type { ValidationAcceptor, ValidationChecks } from 'langium';
import type { RobAstType } from '../language/generated/ast.js';
import * as InterfaceAST from '../language/generated/ast.js';
import * as ClassAST from './visitor.js';
import { AssignationVisitor, BlockVisitor, CM, ClockNode, ConstInt, DistanceCaptor, IfNode, MM, ProcDeclarationVisitor, SpeedNode, ValCallVisitor, VarDeclarationVisitor, VisitorImplementation } from './visitor.js';
import type { RobServices } from '../language/rob-module.js';
/**
 * Register custom validation checks.
 * TODO : Call this function in the language module.ts file (see registerValidationChecks(...);)
 */
export function weaveAcceptMethods(services: RobServices) {
    const registry = services.validation.ValidationRegistry;
    const weaver = new RoboMlAcceptWeaver;
    registry.register(weaver.checks, weaver);
}

/**
 * TODO :
 * You must implement a weaving function for each concrete concept of the language.
 * you will also need to fill the check data structure to map the weaving function to the Type of node
 */
export class RoboMlAcceptWeaver {
   weaveRobot(node : InterfaceAST.Robot, accept : ValidationAcceptor) : void{
        (<any> node).accept = (visitor: VisitorImplementation) => {return visitor.visitRobot(node as unknown as ClassAST.RobotVisitor);}
    }

    weaveProcDeclaration(node : InterfaceAST.ProcDeclaration, accept : ValidationAcceptor) : void{
        (<any> node).accept = (visitor: VisitorImplementation) => {return visitor.visitProcDeclaration(node as unknown as ProcDeclarationVisitor);}
    }

    weaveBlock(node : InterfaceAST.Block, accept : ValidationAcceptor) : void{
        (<any> node).accept = (visitor: VisitorImplementation) => {return visitor.visitBlock(node as unknown as BlockVisitor);}
    }

    weaveIf(node : InterfaceAST.If, accept : ValidationAcceptor) : void{
        (<any> node).accept = (visitor: VisitorImplementation) => {return visitor.visitIf(node as unknown as IfNode);}
    }

    weaveClock(node : InterfaceAST.Clock, accept : ValidationAcceptor) : void{
        (<any> node).accept = (visitor: VisitorImplementation) => {return visitor.visitClock(node as unknown as ClockNode);}
    }

    weaveConstantInt(node : InterfaceAST.ConstantInt, accept : ValidationAcceptor) : void{
        (<any> node).accept = (visitor: VisitorImplementation) => {return visitor.visitConstInt(node as unknown as ConstInt);}
    }

    weaveSpeed(node : InterfaceAST.Speed, accept : ValidationAcceptor) : void{
        (<any> node).accept = (visitor: VisitorImplementation) => {return visitor.visitSpeed(node as unknown as SpeedNode);}
    }

    weaveCM(node : InterfaceAST.CM, accept : ValidationAcceptor) : void{
        (<any> node).accept = (visitor: VisitorImplementation) => {return visitor.visitCM(node as unknown as CM);}
    }

    weaveMM(node : InterfaceAST.MM, accept : ValidationAcceptor) : void{
        (<any> node).accept = (visitor: VisitorImplementation) => {return visitor.visitMM(node as unknown as MM);}
    }

    weaveDistanceCaptor(node : InterfaceAST.DistanceCaptor, accept : ValidationAcceptor) : void{
        (<any> node).accept = (visitor: VisitorImplementation) => {return visitor.visitDistanceCaptor(node as unknown as DistanceCaptor);}
    }

    weaveAssignation(node : InterfaceAST.Assignation, accept : ValidationAcceptor) : void{
        (<any> node).accept = (visitor: VisitorImplementation) => {return visitor.visitAssignation(node as unknown as AssignationVisitor);}
    }

    weaveValCall(node : InterfaceAST.ValCall, accept : ValidationAcceptor) : void{
        (<any> node).accept = (visitor: VisitorImplementation) => {return visitor.visitValCall(node as unknown as ValCallVisitor);}
    }

    weaveVarDeclaration(node : InterfaceAST.VarDeclaration, accept : ValidationAcceptor) : void{
        (<any> node).accept = (visitor: VisitorImplementation) => {return visitor.visitVarDeclaration(node as unknown as VarDeclarationVisitor);}
    }
    checks: ValidationChecks<RobAstType> = {
        Robot : this.weaveRobot,
        ProcDeclaration : this.weaveProcDeclaration,
        Block : this.weaveBlock,
        If : this.weaveIf,
        Clock : this.weaveClock,
        ConstantInt : this.weaveConstantInt,
        Speed : this.weaveSpeed,
        CM : this.weaveCM,
        MM : this.weaveMM,
        DistanceCaptor : this.weaveDistanceCaptor,
        Assignation : this.weaveAssignation,
        ValCall : this.weaveValCall,
        VarDeclaration : this.weaveVarDeclaration
    };

}
