/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
  // we should find all islands that bleed from the borders
  // we should then mark them with a new character perhaps '$'
  // then we can do a DFS once again and flip the remaining islands to O
  // then at the end we clean up the $ back to X
  const rows = board.length;
  const cols = board[0].length;

  for (let i = 0; i < rows; i++) {
    if (board[i][0] === 'O') {
      dfs(board, i, 0, 'O', '$');
    }

    if (board[i][cols - 1] === 'O') {
      dfs(board, i, cols - 1, 'O', '$');
    }
  }

  for (let i = 0; i < cols; i++) {
    if (board[0][i] === 'O') {
      dfs(board, 0, i, 'O', '$');
    }

    if (board[rows - 1][i] === 'O') {
      dfs(board, rows - 1, i, 'O', '$');
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === 'O') {
        dfs(board, i, j, 'O', 'X');
      }
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === '$') {
        board[i][j] = 'O';
      }
    }
  }
}

const DIRECTIONS: [number, number][] = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

function dfs(
  board: string[][],
  row: number,
  col: number,
  toReplace: string,
  replacement: string
) {
  const rows = board.length;
  const cols = board[0].length;

  if (
    row < 0 ||
    col < 0 ||
    row >= rows ||
    col >= cols ||
    board[row][col] !== toReplace
  ) {
    return;
  }

  board[row][col] = replacement;

  for (const [dRow, dCol] of DIRECTIONS) {
    dfs(board, row + dRow, col + dCol, toReplace, replacement);
  }
}

export { solve };
