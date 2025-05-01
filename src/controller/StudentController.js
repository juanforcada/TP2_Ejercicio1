import { StudentService } from "../services/student.service.js";

export const StudentController = {
  studentGradeValidation: (req, res) => {
    const { userCode } = req.params;
    const promedioStudent = StudentService.studentGradeValidation(userCode);
    if (!promedioStudent) {
      res.status(404).json({
        payload: null,
        message: "No grades available",
        ok: false,
      });
      return;
    }
    res.status(200).json({
      payload: `El promedio del estudiante fue de ${promedioStudent}`,
      message: "Success",
      ok: true,
    });
    return;
  },
  createOne: async (req, res) => {
    const { student } = req.body;
    try {
      const studentResponse = StudentService.createOne(student);
      res.status(200).json({
        payload: { ...studentResponse, userCode: "*******" },
        message: "Success",
        ok: true,
      });
    } catch (e) {
      res.status(404).json({
        payload: null,
        message: "No Student",
        ok: false,
      });
    }
  },
  deleteOne: (req, res) => {
    const { id } = req.params;
    const idStudent = StudentService.deleteOne(id);
    if (!idStudent) {
      res.status(404).json({
        payload: null,
        message: "No se pudo borrar el estudiante",
        ok: false,
      });
    }
    res.status(200).json({
      payload: { idStudent },
      message: "Success",
      ok: true,
    });
  },
  uploadGrades: (req, res) => {
    const { id, notas = [] } = req.body;
    if (!notas || notas.length === 0) {
      return res.status(400).json({
        message: "Notas no puede estar vacío",
        ok: false,
      });
    }
    const updatedGrades = StudentService.serviceUploadGrades(id, notas);
    if (!updatedGrades) {
      res.status(404).json({
        payload: null,
        message: "No se pudo actualizar las notas",
        ok: false,
      });
      return;
    }
    res.status(200).json({
      payload: updatedGrades,
      message: "Success",
      ok: true,
    });
  },
};
