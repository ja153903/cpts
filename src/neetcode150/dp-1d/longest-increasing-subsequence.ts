// NOTE: This question is asking for us to return the length
// of the longest increasing subsequence. Note that this doesn't have to be
// a contiguous subsequence.
function lengthOfLIS(nums: number[]): number {
  const n = nums.length;
  const dp = new Array<number>(n).fill(1);

  for (let i = 1; i < n; i++) {
    // given some index i, we want to check the subsequence up to that point
    for (let j = 0; j < i; j++) {
      // we look back at previously stored values at dp[j]
      // if at any point we have some value nums[j] which is less than the current value
      // nums[i], then this means that we should check if we need to update dp[i] with dp[j] + 1
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}

export { lengthOfLIS };
