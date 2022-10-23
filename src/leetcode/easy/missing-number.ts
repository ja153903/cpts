function missingNumber(nums: number[]): number {
  const n = nums.length;
  const total = Math.floor((n * (n + 1)) / 2);

  return total - nums.reduce((a, b) => a + b);
}

export { missingNumber };
