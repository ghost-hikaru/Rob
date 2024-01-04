import { InterpreterImplementation, Statment } from "./interpreterVisitor.js";
import { RobotVisitor } from "./visitorNode.js";

export class interpreter {
    static interpretRobot(robot: RobotVisitor): Statment[] {
        let robotVisitor = new InterpreterImplementation();
        return robotVisitor.visitRobot(robot);
    }
}
