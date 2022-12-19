function maxAreaOfIsland(grid: number[][]): number {
  let result = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        const area = getArea(grid, i, j);
        result = Math.max(result, area);
      }
    }
  }

  return result;
}

function getArea(grid: number[][], i: number, j: number): number {
  if (
    i < 0 ||
    j < 0 ||
    i >= grid.length ||
    j >= grid[0].length ||
    grid[i][j] !== 1
  ) {
    return 0;
  }

  grid[i][j] = 0;

  return (
    1 +
    getArea(grid, i + 1, j) +
    getArea(grid, i - 1, j) +
    getArea(grid, i, j + 1) +
    getArea(grid, i, j - 1)
  );
}

export { maxAreaOfIsland };
