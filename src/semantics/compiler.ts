import { CompilaterImplementation } from "./compilaterVisitor.js";

export class compiler{
    static compileRobot(robot: any): void {
        let robotVisitor = new CompilaterImplementation();
        console.log(robotVisitor.visitRobot(robot));
    }
}