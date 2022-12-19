// ideally here we would just start a DFS marking the value with some mask
// then undoing that mask once we're done iterating over it
function exist(board: string[][], word: string): boolean {
   for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
         if (word[0] === board[i][j]) {
            if (dfs(board, word, i, j, 0)) {
               return true;
            }
         }
      }
   }

   return false;
}

function dfs(
   board: string[][],
   word: string,
   row: number,
   col: number,
   index: number
): boolean {
   // we're done with the iteration if we're on the last index
   if (index === word.length) {
      return true;
   }

   if (
      row < 0 ||
      col < 0 ||
      row >= board.length ||
      col >= board[0].length ||
      word[index] !== board[row][col]
   ) {
      return false;
   }

   const originalChar = board[row][col];
   board[row][col] = '';

   const result =
      dfs(board, word, row + 1, col, index + 1) ||
      dfs(board, word, row - 1, col, index + 1) ||
      dfs(board, word, row, col + 1, index + 1) ||
      dfs(board, word, row, col - 1, index + 1);

   board[row][col] = originalChar;

   return result;
}

export { exist };
