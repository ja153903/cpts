function exist(board: string[][], word: string): boolean {
   // this is a DFS problem where we have to look for the starting point of the word and do a DFS from that point
   // each time though we should temporarily mark the node as an empty string or something unusable and then
   // change it back during the cleanup step

   for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
         if (board[i][j] === word[0]) {
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
   idx: number
): boolean {
   if (
      row < 0 ||
      col < 0 ||
      row >= board.length ||
      col >= board[0].length ||
      board[row][col] === ''
   ) {
      return false;
   }

   // check if we're at the end
   if (idx === word.length - 1) {
      return board[row][col] === word[idx];
   }

   if (board[row][col] !== word[idx]) {
      return false;
   }

   const temp = board[row][col];
   board[row][col] = '';

   const result =
      dfs(board, word, row + 1, col, idx + 1) ||
      dfs(board, word, row - 1, col, idx + 1) ||
      dfs(board, word, row, col + 1, idx + 1) ||
      dfs(board, word, row, col - 1, idx + 1);

   board[row][col] = temp;

   return result;
}

export { exist };
