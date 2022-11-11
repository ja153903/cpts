function removeDuplicates(nums: number[]): number {
  let prev = nums[0];
  let itr = 1;

  for (let i = 1; i < nums.length; i++) {
    // if they're different
    if (prev !== nums[i]) {
      nums[itr] = nums[i];
      itr++;
      prev = nums[i];
    }
  }

  return itr;
}

export { removeDuplicates };
