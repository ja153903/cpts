// When you pay the cost, you can either climb one or two steps,
// return the minimum cost to get to the top step
// we can start from the step with index 0 or the step with index 1

// When solving DP problems, make sure to come up with the recursive solution first
function minCostClimbingStairs(cost: number[]): number {
  const dp = new Array<number>(cost.length).fill(0);
  dp[0] = cost[0];
  dp[1] = cost[1];

  for (let i = 2; i < cost.length; i++) {
    dp[i] = cost[i] + Math.min(dp[i - 2], dp[i - 1]);
  }

  return Math.min(dp[cost.length - 1], dp[cost.length - 2]);
}

function recursiveSolution(cost: number[]): number {
  if (cost.length <= 2) {
    return Math.min(...cost);
  }

  return Math.min(
    recursiveSolutionHelper(cost, cost.length - 1),
    recursiveSolutionHelper(cost, cost.length - 2)
  );
}

function recursiveSolutionHelper(cost: number[], current: number): number {
  if (current <= 1) {
    return cost[current];
  }
  // at every point, we either go down one or two
  return (
    cost[current] +
    Math.min(
      recursiveSolutionHelper(cost, current - 1),
      recursiveSolutionHelper(cost, current - 2)
    )
  );
}

export { minCostClimbingStairs, recursiveSolution };
