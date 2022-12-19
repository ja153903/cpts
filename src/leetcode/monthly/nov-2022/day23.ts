function isValidSudoku(board: string[][]): boolean {
  const seen = new Set<string>();

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== '.') {
        const rowHash = `Row ${i} has value ${board[i][j]}`;
        const colHash = `Col ${j} has value ${board[i][j]}`;
        const boxHash = `Box (${Math.floor(i / 3)}, ${Math.floor(
          j / 3
        )}) has value ${board[i][j]}`;

        const hashes = [rowHash, colHash, boxHash];

        if (hashes.some((hash) => seen.has(hash))) {
          return false;
        }

        hashes.forEach((hash) => {
          seen.add(hash);
        });
      }
    }
  }

  return true;
}

export { isValidSudoku };
