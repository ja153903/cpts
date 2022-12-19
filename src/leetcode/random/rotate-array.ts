/**
 * Given an array, rotate the array to the right by k steps, where k is non-negative.
 *
 * Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  // we're rotating to the right. This means that
  // if a num lives at nums[i], we're going to move it to nums[i + k]
  // let's first start with a solution that takes O(n) time and space
  const afterRotations = [...nums];
  const len = nums.length;

  for (let i = 0; i < nums.length; i++) {
    afterRotations[(i + k) % len] = nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = afterRotations[i];
  }
}

export { rotate };
