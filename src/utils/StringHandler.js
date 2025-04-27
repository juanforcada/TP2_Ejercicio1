export function transformarStringEnArrayDeNumeros(texto, separador) {
  return texto
    .split(separador)
    .map((num) => Number(num))
    .filter((num) => !isNaN(num));
}

export function transformarArrayDeNumerosAUnSoloString(array, separador) {
  return array.join(separador);
}
