function subArrayRanges(nums: number[]): number {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    let start = nums[i];
    let end = nums[i];

    for (let j = i; j < nums.length; j++) {
      end = Math.max(end, nums[j]);
      start = Math.min(start, nums[j]);

      sum += Math.max(end - start, 0);
    }
  }

  return sum;
}

export { subArrayRanges };
