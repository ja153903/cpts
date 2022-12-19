function spiralOrder(matrix: number[][]): number[] {
   const result: number[] = [];

   // keep track of the rowStart, rowEnd, colStart, colEnd
   const rows = matrix.length;
   const cols = matrix[0].length;

   let rowStart = 0;
   let rowEnd = rows - 1;
   let colStart = 0;
   let colEnd = cols - 1;

   while (rowStart <= rowEnd && colStart <= colEnd) {
      // go over the top row from the first column to the last column
      for (let i = colStart; i <= colEnd; i++) {
         result.push(matrix[rowStart][i]);
      }

      rowStart++;

      // go over the last column from the first row to the last row
      for (let i = rowStart; i <= rowEnd; i++) {
         result.push(matrix[i][colEnd]);
      }

      colEnd--;

      // now we should go from the last row from the last column to the first column
      if (rowStart <= rowEnd) {
         for (let i = colEnd; i >= colStart; i--) {
            result.push(matrix[rowEnd][i]);
         }

         rowEnd--;
      }

      // lastly we should go from the last row to the first row on the first column
      if (colStart <= colEnd) {
         for (let i = rowEnd; i >= rowStart; i--) {
            result.push(matrix[i][colStart]);
         }

         colStart++;
      }
   }

   return result;
}

export { spiralOrder };
