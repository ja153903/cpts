// Integers in each row are sorted in ascending from left to right.
// Integers in each column are sorted in ascending from top to bottom.
function searchMatrix(matrix: number[][], target: number): boolean {
   const rows = matrix.length;
   const cols = matrix[0].length;

   // the trick here is to actually start on the top right
   // if we know that the target is smaller, we go to the left
   // if the number is greater then we go down in row
   let row = 0;
   let col = cols - 1;

   while (row < rows && col >= 0) {
      if (matrix[row][col] === target) {
         return true;
      } else if (matrix[row][col] < target) {
         row++;
      } else {
         col--;
      }
   }

   return false;
}

export { searchMatrix };
