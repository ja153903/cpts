function sortedSquares(nums: number[]): number[] {
  // this problem is basically a two pointer problem because the numbers are sorted
  let left = 0;
  let right = nums.length - 1;

  const result = new Array<number>(nums.length).fill(0);

  for (let i = nums.length - 1; i >= 0; i--) {
    const leftSquared = nums[left] * nums[left];
    const rightSquared = nums[right] * nums[right];

    if (leftSquared > rightSquared) {
      result[i] = leftSquared;
      left++;
    } else {
      result[i] = rightSquared;
      right--;
    }
  }

  return result;
}

export { sortedSquares };
