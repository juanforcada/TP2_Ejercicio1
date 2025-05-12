import fs from "fs";
import { deepStrictEqual, strictEqual } from "assert";

// Importar las funciones desde los tres archivos en la carpeta utils
import {
  transformarStringEnArrayDeNumeros,
  transformarArrayDeNumerosAUnSoloString,
} from "../src/utils/StringHandler.js";
import {
  combinarDosArrays,
  combinarNArrays,
} from "../src/utils/ArrayHandler.js";

// Prueba para transformarStringEnArrayDeNumeros
deepStrictEqual(
  transformarStringEnArrayDeNumeros("123 | 456 | 789 | 1bc | 10", " | "),
  [123, 456, 789, 10]
);

// Prueba para transformarArrayDeNumerosAUnSoloString
strictEqual(
  transformarArrayDeNumerosAUnSoloString([123, 456, 789, 10], ","),
  "123,456,789,10"
);

// Prueba para combinarDosArrays
deepStrictEqual(
  combinarDosArrays([1, 5, 10], [2, 3, 8, 11]),
  [1, 2, 3, 5, 8, 10, 11]
);

// Prueba para combinarNArrays
deepStrictEqual(
  combinarNArrays([[1, 10], [2, 3, 15, 16], [4], [6, 7, 13]]),
  [1, 2, 3, 4, 6, 7, 10, 13, 15, 16]
);

console.log("Todas las pruebas pasaron exitosamente.");
