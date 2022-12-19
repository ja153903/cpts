function tictactoe(moves: number[][]): string {
  if (moves.length < 5) {
    return 'Pending';
  }

  const board: string[][] = [];
  for (let i = 0; i < 3; i++) {
    board.push(new Array<string>(3).fill(''));
  }

  for (let i = 0; i < moves.length; i++) {
    const piece = i % 2 === 0 ? 'X' : 'O';
    const [row, col] = moves[i];
    board[row][col] = piece;
  }

  const winner = validateBoard(board);
  if (winner === '') {
    return moves.length === 9 ? 'Draw' : 'Pending';
  }

  return winner;
}

function validateBoard(board: string[][]): string {
  // go through the rows
  for (let i = 0; i < 3; i++) {
    let sum = 0;
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === 'X') {
        sum++;
      } else if (board[i][j] === 'O') {
        sum--;
      }
    }

    if (sum === 3 || sum === -3) {
      return sum === 3 ? 'A' : 'B';
    }
  }

  // go through the cols
  for (let i = 0; i < 3; i++) {
    let sum = 0;
    for (let j = 0; j < 3; j++) {
      if (board[j][i] === 'X') {
        sum++;
      } else if (board[j][i] === 'O') {
        sum--;
      }
    }

    if (sum === 3 || sum === -3) {
      return sum === 3 ? 'A' : 'B';
    }
  }

  // go through downward diagonal
  let diagsum = 0;
  for (let i = 0; i < 3; i++) {
    if (board[i][i] === 'X') {
      diagsum++;
    } else if (board[i][i] === 'O') {
      diagsum--;
    }
  }

  if (diagsum === 3 || diagsum === -3) {
    return diagsum === 3 ? 'A' : 'B';
  }

  let otherdiagsum = 0;
  for (let i = 0, j = 2; i < 3 && j >= 0; i++, j--) {
    if (board[j][i] === 'X') {
      otherdiagsum++;
    } else if (board[j][i] === 'O') {
      otherdiagsum--;
    }
  }

  if (otherdiagsum === 3 || otherdiagsum === -3) {
    return otherdiagsum === 3 ? 'A' : 'B';
  }

  return '';
}

export { tictactoe };
