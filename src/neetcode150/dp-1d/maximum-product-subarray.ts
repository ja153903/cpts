function maxProduct(nums: number[]): number {
  // This problem uses a modified version of Kadane's Algorithm
  // where we also keep track of the min_so_far
  let minSoFar = nums[0];
  let maxSoFar = nums[0];
  let currentMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const currentMin = minSoFar;

    minSoFar = Math.min(minSoFar * nums[i], maxSoFar * nums[i], nums[i]);
    maxSoFar = Math.max(currentMin * nums[i], maxSoFar * nums[i], nums[i]);

    currentMax = Math.max(currentMax, maxSoFar);
  }

  return currentMax;
}

export { maxProduct };
