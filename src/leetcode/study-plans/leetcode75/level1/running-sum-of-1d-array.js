/**
 * Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
 * Return the running sum of nums.
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = function (nums) {
  const result = new Array(nums.length).fill(0);
  result[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    result[i] = result[i - 1] + nums[i];
  }

  return result;
};

export { runningSum };
