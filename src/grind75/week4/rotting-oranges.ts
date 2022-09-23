const DIRECTIONS = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

function orangesRotting(grid: number[][]): number {
  let freshOranges = 0;
  let minutesSpent = 0;

  const rows = grid.length;
  const cols = grid[0].length;

  const queue: [number, number][] = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // count the number of fresh oranges
      if (grid[i][j] === 1) {
        freshOranges++;
      }

      // push the rotten oranges to a queue
      if (grid[i][j] === 2) {
        queue.push([i, j]);
      }
    }
  }

  if (freshOranges === 0) {
    return 0;
  }

  while (queue.length) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const [row, col] = queue.shift() as [number, number];

      for (const [dRow, dCol] of DIRECTIONS) {
        const nRow = row + dRow;
        const nCol = col + dCol;

        if (
          nRow < 0 ||
          nCol < 0 ||
          nRow >= rows ||
          nCol >= cols ||
          grid[nRow][nCol] !== 1
        ) {
          continue;
        }

        grid[nRow][nCol] = 2;
        freshOranges--;

        queue.push([nRow, nCol]);
      }
    }

    minutesSpent++;
  }

  return freshOranges === 0 ? minutesSpent - 1 : -1;
}

export { orangesRotting };
