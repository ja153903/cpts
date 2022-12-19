function replaceElements(arr: number[]): number[] {
  const result = new Array<number>(arr.length).fill(-1);

  let maxSoFar = arr[arr.length - 1];

  for (let i = arr.length - 2; i >= 0; i--) {
    result[i] = maxSoFar;
    maxSoFar = Math.max(maxSoFar, arr[i]);
  }

  return result;
}

export { replaceElements };
