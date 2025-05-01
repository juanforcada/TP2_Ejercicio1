export function promediar(notas = []) {
  if (notas.length === 0) return null;

  const suma = notas.reduce((acumulador, elemento) => acumulador + elemento, 0);
  return suma / notas.length;
}
