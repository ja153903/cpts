function solveNQueens(n: number): string[][] {
  const result: string[][] = [];

  for (let i = 0; i < n; i++) {
    const current: string[][] = [];
    for (let j = 0; j < n; j++) {
      current.push('.'.repeat(n).split(''));
    }

    current[0][i] = 'Q';
    backtrack(n, result, current, 1);
    current[0][i] = '.';
  }

  return result;
}

function backtrack(
  n: number,
  result: string[][],
  current: string[][],
  row: number
) {
  if (row === n) {
    const subResult = current.map((cur) => cur.join(''));
    result.push([...subResult]);
    return;
  }

  for (let i = 0; i < n; i++) {
    if (isValidQueenPosition(current, row, i)) {
      current[row][i] = 'Q';
      backtrack(n, result, current, row + 1);
      current[row][i] = '.';
    }
  }
}

function isValidQueenPosition(current: string[][], row: number, col: number) {
  // since we're going down the row, we only need to look up
  for (let i = row; i >= 0; i--) {
    if (current[i][col] === 'Q') {
      return false;
    }
  }

  for (let i = col; i >= 0; i--) {
    if (current[row][i] === 'Q') {
      return false;
    }
  }

  for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
    if (current[i][j] === 'Q') {
      return false;
    }
  }

  for (let i = row, j = col; i >= 0 && j < current.length; i--, j++) {
    if (current[i][j] === 'Q') {
      return false;
    }
  }

  return true;
}

export { solveNQueens };
