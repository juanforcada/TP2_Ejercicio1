import {
  leerArchivoComoString,
  escribirTextoEnArchivo,
} from "../utils/FileHandler.js";
import { combinarDosArrays } from "../utils/ArrayHandler.js";
import { config } from "../config/config.js";

export const StudentRepository = {
  getByUserCode: (userCode) => {
    const students = StudentRepository.getAll();
    if (!students) return null;

    try {
      const student = students.find(
        (estudiante) => estudiante.userCode === userCode
      );
      return student || null;
    } catch (e) {
      console.log(e.message);
      return null;
    }
  },

  createOne: (student) => {
    if (!student) return null;

    const students = StudentRepository.getAll() || [];
    students.push(student);

    escribirTextoEnArchivo(
      config.DB_PATH,
      JSON.stringify(students, null, 2),
      true
    );

    return student;
  },

  deleteById: (id) => {
    const students = StudentRepository.getAll();
    if (!students) return null;

    const student = students.find((estudiante) => estudiante.id === id);
    if (!student) return null;

    const studentResponse = students.filter((e) => e.id !== id);

    escribirTextoEnArchivo(
      config.DB_PATH,
      JSON.stringify(studentResponse, null, 2),
      true
    );

    return id;
  },

  uploadGrades: (id, notas) => {
    const students = StudentRepository.getAll();
    if (!students) return null;

    const student = students.find((estudiante) => estudiante.id === id);
    if (!student) return null;

    const oldGrades = Array.isArray(student.notas) ? student.notas : [];
    const newGrades = combinarDosArrays(oldGrades, notas);
    escribirTextoEnArchivo(
      config.DB_PATH,
      JSON.stringify(students, null, 2),
      true
    );
    return transformarArrayDeNumerosAUnSoloString(notasActualizadas, "|");
  },

  getAll: () => {
    const archivo = leerArchivoComoString(config.DB_PATH);
    if (!archivo) return null;
    return JSON.parse(archivo);
  },
};
