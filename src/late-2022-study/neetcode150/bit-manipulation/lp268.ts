function missingNumber(nums: number[]): number {
  // [0, n]
  const n = nums.length;

  let missing = 0;

  for (let i = 1; i <= n; i++) {
    missing ^= i ^ nums[i - 1];
  }

  return missing;
}

export { missingNumber };
