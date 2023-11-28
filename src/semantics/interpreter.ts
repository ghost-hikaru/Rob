import { RobotVisitor, VisitorImplementation } from "./visitor.js";

export class interpreter {
    static interpretRobot(robot: RobotVisitor): void {
        let robotVisitor = new VisitorImplementation();
        robotVisitor.visitRobot(robot);
    }
}
