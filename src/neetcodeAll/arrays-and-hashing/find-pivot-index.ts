function pivotIndex(nums: number[]): number {
  const sum = nums.reduce((acc, num) => acc + num, 0);
  let runningSum = 0;

  for (let i = 0; i < nums.length; i++) {
    const left = runningSum;
    const right = sum - left - nums[i];

    if (left === right) {
      return i;
    }

    runningSum += nums[i];
  }

  return -1;
}

export { pivotIndex };
