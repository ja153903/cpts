function exist(board: string[][], word: string): boolean {
  // we should do a dfs every time we find the word keeping track of the appropriate row and column that we've visited in the past
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (word[0] === board[i][j]) {
        // then do DFS from here
        // dfs(board, i, j, 0, visited)
        const visited = new Set<string>();
        if (dfs(board, word, i, j, 0, visited)) {
          return true;
        }
      }
    }
  }

  return false;
}

const DIRECTIONS: [number, number][] = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

function dfs(
  board: string[][],
  word: string,
  row: number,
  col: number,
  current: number,
  visited: Set<string>
): boolean {
  if (current === word.length - 1) {
    return board[row][col] === word[current];
  }

  const currentHash = `${row},${col}`;

  visited.add(currentHash);

  for (const [drow, dcol] of DIRECTIONS) {
    const nrow = row + drow;
    const ncol = col + dcol;

    const hash = `${nrow},${ncol}`;

    if (
      nrow < 0 ||
      ncol < 0 ||
      nrow >= board.length ||
      ncol >= board[0].length ||
      visited.has(hash) ||
      word[current + 1] !== board[nrow][ncol]
    ) {
      continue;
    }

    if (dfs(board, word, nrow, ncol, current + 1, visited)) {
      return true;
    }
  }

  visited.delete(currentHash);

  return false;
}

export { exist };
