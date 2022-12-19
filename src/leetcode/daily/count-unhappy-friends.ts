function unhappyFriends(
  n: number,
  preferences: number[][],
  pairs: number[][]
): number {
  let result = 0;

  const pairMapper = new Map<number, number>();
  const unhappy = new Set<number>();

  for (const [u, v] of pairs) {
    pairMapper.set(u, v);
    pairMapper.set(v, u);
  }

  for (let i = 0; i < n; i++) {
    const x = i,
      y = pairMapper.get(i) as number;
    const px = preferences[x];

    for (let j = 0; j < n; j++) {
      if (j === x || j === y) {
        continue;
      }

      const u = j;
      const v = pairMapper.get(u) as number;

      const pu = preferences[u];

      if (
        !unhappy.has(u) &&
        px.indexOf(u) < px.indexOf(y) &&
        pu.indexOf(x) < pu.indexOf(v)
      ) {
        unhappy.add(u);
        result++;
      }
    }
  }

  return result;
}

export { unhappyFriends };
