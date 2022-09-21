function threeSum(nums: number[]): number[][] {
  if (nums.length < 3) {
    return [];
  }

  nums.sort((a, b) => a - b);

  const result: number[][] = [];
  const n = nums.length;

  for (let i = 0; i < n - 2; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      let j = i + 1;
      let k = n - 1;

      while (j < k) {
        const current = [i, j, k].reduce((acc, index) => acc + nums[index], 0);
        if (current === 0) {
          result.push([nums[i], nums[j], nums[k]]);

          while (j < k && nums[j] === nums[j + 1]) {
            j++;
          }

          while (j < k && nums[k] === nums[k - 1]) {
            k--;
          }

          j++;
          k--;
        } else if (current < 0) {
          j++;
        } else {
          k--;
        }
      }
    }
  }

  return result;
}

export { threeSum };
