/**
 * You are given an integer array nums. You are initially positioned at the array's first index,
 * and each element in the array represents your maximum jump length at that position.
 *
 * Return true if you can reach the last index, or false otherwise.
 */
function canJump(nums: number[]): boolean {
  let reach = 0;
  let i = 0;

  for (; i < nums.length; i++) {
    // if the index is greater than the reach we've found
    // then we know we can't go any further
    if (i > reach) {
      return false;
    }

    reach = Math.max(reach, i + nums[i]);
  }

  return reach >= i - 1;
}

export { canJump };
