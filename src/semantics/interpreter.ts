import { InterpreterImplementation } from "./interpreterVisitor.js";
import { RobotVisitor } from "./visitorNode.js";

export class interpreter {
    static interpretRobot(robot: RobotVisitor): void {
        let robotVisitor = new InterpreterImplementation();
        console.log(robotVisitor.visitRobot(robot));
    }
}
