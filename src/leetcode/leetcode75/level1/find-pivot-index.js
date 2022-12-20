/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = function (nums) {
  const rs = new Array(nums.length).fill(0);
  rs[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    rs[i] = rs[i - 1] + nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    const left = i === 0 ? 0 : rs[i - 1];
    const right = i === nums.length - 1 ? 0 : rs[rs.length - 1] - rs[i];

    if (left === right) {
      return i;
    }
  }

  return -1;
};

export { pivotIndex };
