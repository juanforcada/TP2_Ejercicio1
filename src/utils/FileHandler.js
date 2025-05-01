import fs from "fs";

export function leerArchivoComoString(ruta) {
  try {
    return fs.readFileSync(ruta, "utf8");
  } catch (error) {
    console.error(`Error al leer el archivo: ${error.message}`);
    return null;
  }
}

export function escribirTextoEnArchivo(ruta, texto, flag) {
  const existe = fs.existsSync(ruta);

  if (!existe && !flag) {
    throw new Error("El archivo no existe");
  }

  fs.writeFileSync(ruta, texto, "utf8");
}
