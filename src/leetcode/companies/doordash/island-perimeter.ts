function islandPerimeter(grid: number[][]): number {
  let result = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        let potential = 4;

        if (i < grid.length - 1 && grid[i + 1][j] === 1) {
          potential--;
        }

        if (i > 0 && grid[i - 1][j] === 1) {
          potential--;
        }

        if (j < grid[i].length - 1 && grid[i][j + 1] === 1) {
          potential--;
        }

        if (j > 0 && grid[i][j - 1] === 1) {
          potential--;
        }

        result += potential;
      }
    }
  }

  return result;
}

export { islandPerimeter };
