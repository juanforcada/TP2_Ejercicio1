export function combinarDosArrays(array1, array2) {
  return [...new Set([...array1, ...array2])].sort((a, b) => a - b);
}

export function combinarNArrays(arrays) {
  return [...new Set(arrays.flat())].sort((a, b) => a - b);
}
