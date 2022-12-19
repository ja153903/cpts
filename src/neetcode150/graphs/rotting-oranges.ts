const DIRECTIONS: [number, number][] = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

function orangesRotting(grid: number[][]): number {
  // keep track of how many fresh ones there are
  // keep track of the positions of rotten oranges (these will be used for BFS)
  // keep track of how many rounds are needed
  const rows = grid.length;
  const cols = grid[0].length;

  let freshOranges = 0;
  let queue: number[][] = [];

  const visited = new Set<string>();

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        freshOranges++;
      }

      if (grid[i][j] === 2) {
        queue.push([i, j]);
      }
    }
  }

  if (freshOranges === 0) {
    return 0;
  }

  let numberOfMinutes = 0;

  while (queue.length) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const [row, col] = queue.shift() as number[];
      const hash = `${row},${col}`;

      visited.add(hash);

      for (const [dRow, dCol] of DIRECTIONS) {
        const nRow = row + dRow;
        const nCol = col + dCol;

        const nextHash = `${nRow},${nCol}`;

        if (
          nRow < 0 ||
          nCol < 0 ||
          nRow >= rows ||
          nCol >= cols ||
          grid[nRow][nCol] !== 1 ||
          visited.has(nextHash)
        ) {
          continue;
        }

        grid[nRow][nCol] = 2;

        freshOranges--;

        queue.push([nRow, nCol]);
      }
    }

    numberOfMinutes++;
  }

  return freshOranges > 0 ? -1 : numberOfMinutes - 1;
}

export { orangesRotting };
