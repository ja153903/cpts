function longestCommonSubsequence(text1: string, text2: string): number {
   const dp: number[][] = [];
   for (let i = 0; i <= text1.length; i++) {
      dp.push(new Array<number>(text2.length + 1).fill(0));
   }

   for (let i = 1; i <= text1.length; i++) {
      for (let j = 1; j <= text2.length; j++) {
         if (text1[i - 1] === text2[j - 1]) {
            dp[i][j] = dp[i - 1][j - 1] + 1;
         } else {
            dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
         }
      }
   }

   return dp.at(-1)?.at(-1) ?? 0;
}

export { longestCommonSubsequence };
