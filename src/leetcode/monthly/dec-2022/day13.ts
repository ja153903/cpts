function minFallingPathSum(matrix: number[][]): number {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const dp: number[][] = [];

  for (let i = 0; i < rows; i++) {
    dp.push(new Array<number>(cols).fill(Number.POSITIVE_INFINITY));
  }

  for (let i = 0; i < cols; i++) {
    dp[0][i] = matrix[0][i];
  }

  for (let i = 1; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      dp[i][j] = Math.min(dp[i][j], dp[i - 1][j] + matrix[i][j]);

      // look in the row above
      if (j > 0) {
        dp[i][j] = Math.min(dp[i][j], dp[i - 1][j - 1] + matrix[i][j]);
      }

      if (j < cols - 1) {
        dp[i][j] = Math.min(dp[i][j], dp[i - 1][j + 1] + matrix[i][j]);
      }
    }
  }

  return Math.min(...dp[rows - 1]);
}

export { minFallingPathSum };
