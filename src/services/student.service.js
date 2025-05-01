import { StudentRepository } from "../repository/student.repository.js";
import { transformarStringEnArrayDeNumeros } from "../utils/StringHandler.js";
import { promediar } from "../utils/Math.js";
import { Student } from "../model/Student.js";

export const StudentService = {
  studentGradeValidation: (userCode) => {
    const student = StudentRepository.getByUserCode(userCode);
    if (!student) return null;

    const notasString = transformarStringEnArrayDeNumeros(student.notas, "|");
    const promedioNotasStudent = promediar(notasString);
    if (!promedioNotasStudent) return null;

    return promedioNotasStudent;
  },
  createOne: (student) => {
    const dataStudent = { ...student, id: crypto.randomUUID().toString() };
    const modelStudent = new Student(dataStudent);

    StudentRepository.createOne(modelStudent);
    return modelStudent;
  },
  deleteOne: (id) => {
    const idStudent = StudentRepository.deleteById(id);

    if (!idStudent) return null;

    return idStudent;
  },
  serviceUploadGrades: (id, notas = []) => {
    const updatedGrades = StudentRepository.uploadGrades(id, notas);
    if (!updatedGrades) return null;
    return updatedGrades;
  },
};
