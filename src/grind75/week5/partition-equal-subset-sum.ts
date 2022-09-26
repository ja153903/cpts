/**
 * Actually, this is a 0/1 knapsack problem, for each
 * number, we can pick it or not. Let us assume
 * dp[i][j] means whether the specific sum j
 * can be gotten from the first i numbers.
 * If we can pick such a series of numbers from
 * 0 to i whose sum is j, dp[i][j] is true
 * otherwise its false
 */
function canPartition(nums: number[]): boolean {
  // how do we begin to model this problem as a 0/1 knapsack problem?
  // we can say that dp[i][j] ~ can we get sum j with values up to index i
  let sum = nums.reduce((acc, num) => acc + num, 0);
  if (sum % 2 === 1) {
    return false;
  }

  sum /= 2;

  const n = nums.length;
  const dp = new Array<Array<boolean>>();
  for (let i = 0; i < n + 1; i++) {
    dp.push(new Array<boolean>(sum + 1).fill(false));
  }

  dp[0][0] = true;

  // when sum is 0, all vlaues up to index i can be split to
  // find the solution
  for (let i = 1; i < n + 1; i++) {
    dp[i][0] = true;
  }

  for (let i = 1; i < sum + 1; i++) {
    dp[0][i] = false;
  }

  // in this case the sum counts as the weight
  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < sum + 1; j++) {
      dp[i][j] = dp[i - 1][j];

      if (j >= nums[i - 1]) {
        dp[i][j] = dp[i][j] || dp[i - 1][j - nums[i - 1]];
      }
    }
  }

  return dp[n][sum];
}

export { canPartition };
