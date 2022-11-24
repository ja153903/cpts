function countBits(n: number): number[] {
  // this is a DP problem
  // where dp[i] ~ should denote the number of bits at index i
  // dp[i] = dp[i >> 1] + (i & 1) ~ note that we're only going to add 1 if the last bit is set
  const dp = new Array<number>(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    dp[i] = dp[i >> 1] + (i & 1);
  }

  return dp;
}

export { countBits };
