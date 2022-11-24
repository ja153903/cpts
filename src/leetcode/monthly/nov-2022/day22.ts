function numSquares(n: number): number {
  if (n <= 0) {
    return 0;
  }

  const dp = new Array<number>(n + 1).fill(Number.POSITIVE_INFINITY);
  dp[0] = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j * j <= i; j++) {
      dp[i] = Math.min(dp[i - j * j] + 1, dp[i]);
    }
  }

  return dp[n];
}

export { numSquares };
