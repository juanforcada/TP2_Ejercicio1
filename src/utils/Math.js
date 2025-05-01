export function promediar(notas = []) {
  if (array.length === 0) return null;

  const suma = array.reduce((acumulador, elemento) => acumulador + elemento, 0);
  return suma / array.length;
}
