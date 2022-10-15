/**
 *
 * Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
 * A subarray is a contiguous non-empty sequence of elements within an array.
 */
function subarraySum(nums: number[], k: number): number {
  // Suppose that we had the following array: [1, 1, 1] and we had k = 2
  // if we accumulate the prefix sum and count whenever we had the previous sum, we can potentially count
  // the number of times we have that sum appear
  // { 1 => 1 }
  // { 1 => 1, 2 => 1 }
  // { 1 => 1, 2 => 1, 3 => 1 }
  // we should also set 0 => 1
  // this way whenever we find runningSum - k in the map, we can count the number of times something appears
  const map = new Map<number, number>();
  map.set(0, 1);

  let result = 0;
  let runningSum = 0;

  for (const num of nums) {
    runningSum += num;
    if (map.has(runningSum - k)) {
      result += map.get(runningSum - k) ?? 0;
    }

    map.set(runningSum, (map.get(runningSum) ?? 0) + 1);
  }

  return result;
}

export { subarraySum };
