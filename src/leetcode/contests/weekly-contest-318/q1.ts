function applyOperations(nums: number[]): number[] {
  // If nums[i] == nums[i + 1], then multiply nums[i] by 2 and set nums[i + 1] to 0. Otherwise, you skip this operation.
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] *= 2;
      nums[i + 1] = 0;
    }
  }

  let cur = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[cur] = nums[i];
      cur++;
    }
  }

  for (let i = cur; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
}

export { applyOperations };
