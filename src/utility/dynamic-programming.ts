export function zeroOneKnapsack(
   weights: number[],
   values: number[],
   capacity: number
) {
   const dp = new Array<Array<number>>(weights.length + 1);

   for (let i = 0; i < weights.length + 1; i++) {
      dp.push(new Array<number>(capacity + 1).fill(0));
   }

   for (let i = 1; i < weights.length + 1; i++) {
      for (let w = 1; w < capacity + 1; w++) {
         dp[i][w] = dp[i - 1][w];

         // if the current weight is greater than or equal to the current weight
         // then we process
         if (w >= weights[i - 1]) {
            dp[i][w] = Math.max(
               dp[i - 1][w],
               dp[i - 1][w - weights[i - 1]] + values[i - 1]
            );
         }
      }
   }

   return dp[weights.length][capacity];
}
