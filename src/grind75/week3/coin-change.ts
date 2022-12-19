// You are given an integer array coins representing coins of different denominations
// and an integer amount representing a total amount of money.
// Return the fewest number of coins that you need to make up that amount.
// If that amount of money cannot be made up by any combination of the coins, return -1.
// You may assume that you have an infinite number of each kind of coin.
//
// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
function coinChange(coins: number[], amount: number): number {
   // for this problem, we're going to want to start with defining what our state transition should be
   // in this case dp[i] ~ should be the minimum number of coins needed to achieve amount i
   // so in this case our space complexity with using a DP array should be O(amount)
   const dp = new Array<number>(amount + 1).fill(Number.POSITIVE_INFINITY);

   // if the amount is 0, then we know that it should be 0
   dp[0] = 0;

   for (let i = 1; i <= amount; i++) {
      for (const coin of coins) {
         if (i - coin >= 0) {
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
         }
      }
   }

   return dp[amount] === Number.POSITIVE_INFINITY ? -1 : dp[amount];
}

export { coinChange };
