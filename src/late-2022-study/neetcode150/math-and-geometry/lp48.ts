/**
Do not return anything, modify matrix in-place instead.
*/
function rotate(matrix: number[][]): void {
  for (let i = 0, j = matrix.length - 1; i < j; i++, j--) {
    [matrix[i], matrix[j]] = [matrix[j], matrix[i]];
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[i].length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
}

export { rotate };
