// we can break this problem up into smaller subproblems
// let dp be an array which contains the appropriate state
// dp[i] ~ determines whether the substring up to index i (not including i)
// can be segmented into one or more of the dictionary words
function wordBreak(s: string, wordDict: string[]): boolean {
  const uniqueWords = new Set<string>(wordDict);
  const dp = new Array<boolean>(s.length + 1).fill(false);

  // this is our base case
  // if the string is empty, let's say that it's true
  dp[0] = true;

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      // at index i, we should look through substrings
      // that can be formed from [j, i)
      const substring = s.substring(j, i);
      if (dp[j] && uniqueWords.has(substring)) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[s.length];
}

export { wordBreak };
