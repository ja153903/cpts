function isValidSudoku(board: string[][]): boolean {
  const hashes = new Set<string>();

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== '.') {
        const rowHash = `Row ${i} has value ${board[i][j]}`;
        const colHash = `Col ${j} has value ${board[i][j]}`;
        const boxHash = `Box ${Math.floor(i / 3)},${Math.floor(
          j / 3
        )} has value ${board[i][j]}`;

        if (hashes.has(rowHash) || hashes.has(colHash) || hashes.has(boxHash)) {
          return false;
        }

        hashes.add(rowHash);
        hashes.add(colHash);
        hashes.add(boxHash);
      }
    }
  }

  return true;
}

export { isValidSudoku };
