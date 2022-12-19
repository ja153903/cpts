function smallerNumbersThanCurrent(nums: number[]): number[] {
  // input size is small so we can probably do this
  const result = new Array<number>(nums.length).fill(0);

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) {
        continue;
      }

      if (nums[i] > nums[j]) {
        result[i]++;
      }
    }
  }

  return result;
}

export { smallerNumbersThanCurrent };
