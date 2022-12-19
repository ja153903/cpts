function coinChange(coins: number[], amount: number): number {
   // for each amount we look at the possible coins
   const dp = new Array<number>(amount + 1).fill(Number.POSITIVE_INFINITY);
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
