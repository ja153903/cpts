function equalPairs(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;

  const map: Map<string, number> = new Map();

  let result = 0;

  for (let i = 0; i < cols; i++) {
    let data = [];
    for (let j = 0; j < rows; j++) {
      data.push(grid[j][i]);
    }

    const key = data.join(',');

    map.set(key, (map.get(key) ?? 0) + 1);
  }

  for (let i = 0; i < rows; i++) {
    const data = grid[i].join(',');

    if (map.has(data)) {
      result += map.get(data)!;
    }
  }

  return result;
}

export { equalPairs };
