function searchMatrix(matrix: number[][], target: number): boolean {
  // start from the top right
  // if the current value is greater than the target then we move to the left
  // if the current value is less than the target, then we go down a row
  let rows = matrix.length;
  let cols = matrix[0].length;

  let row = 0;
  let col = cols - 1;

  while (row < rows && col >= 0) {
    if (matrix[row][col] === target) {
      return true;
    }

    if (matrix[row][col] < target) {
      row++;
    } else {
      col--;
    }
  }

  return false;
}

export { searchMatrix };
