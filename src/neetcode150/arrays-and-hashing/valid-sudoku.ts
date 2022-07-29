function isValidSudoku(board: string[][]): boolean {
  const hashes = new Set<string>();

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== '.') {
        const value = board[i][j];

        const rowHash = `Row ${i} has value ${value}`;
        const colHash = `Col ${j} has value ${value}`;
        const rowBox = Math.floor(i / 3);
        const colBox = Math.floor(j / 3);
        const boxHash = `Box[${rowBox}][${colBox}] has value ${value}`;

        const currentHashes = [rowHash, colHash, boxHash];

        if (currentHashes.some((hash) => hashes.has(hash))) {
          return false;
        }

        for (const hash of currentHashes) {
          hashes.add(hash);
        }
      }
    }
  }

  return true;
}

export { isValidSudoku };
