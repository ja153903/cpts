const DIRECTION = [
   [1, 0],
   [-1, 0],
   [0, 1],
   [0, -1],
];

function updateMatrix(mat: number[][]): number[][] {
   const queue: number[][] = [];

   // if value is not 0, then make it -1
   for (let row = 0; row < mat.length; row++) {
      for (let col = 0; col < mat[0].length; col++) {
         if (mat[row][col] === 0) {
            queue.push([row, col]);
         } else {
            mat[row][col] = -1;
         }
      }
   }

   // from the points where we have 0, we start our bfs
   // if the value is not -1, then we skip it
   // otherwise we increment mat[nrow][ncol] with mat[row][col] + 1
   while (queue.length) {
      const [row, col] = queue.shift() as number[];

      // go through all 4 directions
      for (const [drow, dcol] of DIRECTION) {
         const nrow = row + drow;
         const ncol = col + dcol;

         if (
            nrow < 0 ||
            ncol < 0 ||
            nrow >= mat.length ||
            ncol >= mat[0].length ||
            mat[nrow][ncol] !== -1
         ) {
            continue;
         }

         mat[nrow][ncol] = mat[row][col] + 1;
         queue.push([nrow, ncol]);
      }
   }

   return mat;
}

export { updateMatrix };
