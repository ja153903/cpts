function twoCitySchedCost(costs: number[][]): number {
  const cityA: number[][] = [];
  const cityB: number[][] = [];

  for (const [aCost, bCost] of costs) {
    if (aCost < bCost) {
      cityA.push([aCost, bCost]);
    } else {
      cityB.push([aCost, bCost]);
    }
  }

  // we should have to sort the arrays based on the absolute difference
  // between the two costs
  cityA.sort((a, b) => Math.abs(b[0] - b[1]) - Math.abs(a[0] - a[1]));
  cityB.sort((a, b) => Math.abs(b[0] - b[1]) - Math.abs(a[0] - a[1]));

  // once we sort the arrays, we should figure out which one has less
  if (cityA.length < cityB.length) {
    while (cityA.length !== cityB.length) {
      cityA.push(cityB.pop() as number[]);
    }
  } else {
    while (cityA.length !== cityB.length) {
      cityB.push(cityA.pop() as number[]);
    }
  }

  return (
    cityA.reduce((acc, cost) => acc + cost[0], 0) +
    cityB.reduce((acc, cost) => acc + cost[1], 0)
  );
}

export { twoCitySchedCost };
