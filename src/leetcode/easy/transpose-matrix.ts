function transpose(matrix: number[][]): number[][] {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const result: number[][] = [];
  for (let i = 0; i < cols; i++) {
    result.push(new Array<number>(rows).fill(0));
  }

  console.log(result, result.length, result[0].length);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      result[j][i] = matrix[i][j];
    }
  }

  return result;
}

export { transpose };
