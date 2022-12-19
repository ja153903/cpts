function findBall(grid: number[][]): number[] {
   const result = new Array<number>(grid[0].length).fill(-1);

   for (let col = 0; col < grid[0].length; col++) {
      result[col] = dfs(grid, col);
   }

   return result;
}

function dfs(grid: number[][], col: number): number {
   for (let row = 0; row < grid.length; row++) {
      const current = grid[row][col];

      let nextCol = current === 1 ? col + 1 : col - 1;
      // check if nextCol is inBounds
      if (nextCol < 0 || nextCol >= grid[0].length) {
         return -1;
      }

      // if boundary item tries to go out of bounds
      if (
         (current === 1 && col === grid[0].length - 1) ||
         (current === -1 && col === 0)
      ) {
         return -1;
      }

      // check if the next value will create a basin
      if (
         (current === 1 && grid[row][col + 1] === -1) ||
         (current === -1 && grid[row][col - 1] === 1)
      ) {
         return -1;
      }

      col = nextCol;
   }

   return col;
}

export { findBall };
