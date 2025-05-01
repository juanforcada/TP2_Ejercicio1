import { Router } from "express";
import { StudentController } from "../controller/StudentController.js";

const studentRouter = Router();

studentRouter.get(
  "/student-validar-notas/:userCode",
  StudentController.studentGradeValidation
);
studentRouter.post("/student", StudentController.createOne);
studentRouter.delete("/student/:id", StudentController.deleteOne);
studentRouter.put("/upload-grades", StudentController.uploadGrades);
studentRouter.get("/promedio-total", StudentController.getPromedioTotal);

export { studentRouter };
