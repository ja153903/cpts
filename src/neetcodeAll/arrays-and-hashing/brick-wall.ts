function leastBricks(wall: number[][]): number {
  // for each row, we're going to want to figure out the running sum
  // and how often that running sum will occur
  const frequency = new Map<number, number>();

  for (const row of wall) {
    let runningSum = 0;

    for (let i = 0; i < row.length - 1; i++) {
      runningSum += row[i];
      frequency.set(runningSum, (frequency.get(runningSum) ?? 0) + 1);
    }
  }

  const values = [...frequency.values()];
  const maxFrequency = values.length > 0 ? Math.max(...values) : 0;

  return wall.length - maxFrequency;
}

export { leastBricks };
