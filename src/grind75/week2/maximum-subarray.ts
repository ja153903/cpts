function maxSubArray(nums: number[]): number {
  let maxSoFar = nums[0];
  let globalMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    maxSoFar = Math.max(maxSoFar + nums[i], nums[i]);
    globalMax = Math.max(globalMax, maxSoFar);
  }

  return globalMax;
}

export { maxSubArray };
