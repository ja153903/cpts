function numDecodings(s: string): number {
   // Can we talk about what a potential recursive solution should look like?
   // when we have a string like "12" we can break this up into multiple decodings: [1, 2], [12]
   // dp[i] = number of ways to decode the string up to index i
   // Suppose we have the string "12", then when we're at index 0, let's then say that there's one way to decode
   // then at index 1, we say that we have 1 way to decode it if its betwteen 1 and 9 otherwise then we have 0
   // then at index 2, we add the value from dp[i - 1]
   const dp = new Array<number>(s.length + 1).fill(0);
   dp[0] = 1;

   for (let i = 1; i <= s.length; i++) {
      if (isBetween1And9(s.substring(i - 1, i))) {
         dp[i] += dp[i - 1];
      }

      if (isBetween10And26(s.substring(i - 2, i))) {
         dp[i] += dp[i - 2];
      }
   }

   return dp[s.length];
}

function isBetween1And9(s: string): boolean {
   const asNumber = parseInt(s);

   return 1 <= asNumber && asNumber <= 9;
}

function isBetween10And26(s: string): boolean {
   const asNumber = parseInt(s);

   return 10 <= asNumber && asNumber <= 26;
}

export { numDecodings };
