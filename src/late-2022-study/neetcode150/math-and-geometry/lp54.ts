function spiralOrder(matrix: number[][]): number[] {
  const result: number[] = [];

  let rowStart = 0;
  let rowEnd = matrix.length - 1;
  let colStart = 0;
  let colEnd = matrix[0].length - 1;

  while (rowStart <= rowEnd && colStart <= colEnd) {
    // go across the first row's columns
    for (let col = colStart; col <= colEnd; col++) {
      result.push(matrix[rowStart][col]);
    }

    // increment rowStart since we won't be coming back to that row
    rowStart++;

    // go down the last rows of the last column
    for (let row = rowStart; row <= rowEnd; row++) {
      result.push(matrix[row][colEnd]);
    }

    colEnd--;

    if (rowStart <= rowEnd) {
      // on the last row, we're going to want to go from the last column to first  column
      for (let col = colEnd; col >= colStart; col--) {
        result.push(matrix[rowEnd][col]);
      }

      rowEnd--;
    }

    if (colStart <= colEnd) {
      for (let row = rowEnd; row >= rowStart; row--) {
        result.push(matrix[row][colStart]);
      }

      colStart++;
    }
  }

  return result;
}

export { spiralOrder };
