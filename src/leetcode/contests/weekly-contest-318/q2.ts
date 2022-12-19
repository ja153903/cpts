// NOTE: TLE should optimize somehow
function maximumSubarraySumBF(nums: number[], k: number): number {
  let maxSubarraySum = 0;

  for (let i = 0; i <= nums.length - k; i++) {
    const seen = new Set<number>();
    let runningSum = 0;
    let shouldConsider = true;

    for (let j = i; j < i + k; j++) {
      if (seen.has(nums[j])) {
        shouldConsider = false;
        break;
      }

      seen.add(nums[j]);
      runningSum += nums[j];
    }

    if (shouldConsider) {
      maxSubarraySum = Math.max(maxSubarraySum, runningSum);
    }
  }

  return maxSubarraySum;
}

// NOTE: The ideal solution here is to use a hashmap and sliding window
function maximumSubarraySum(nums: number[], k: number): number {
  const mp = new Map<number, number>();
  let result = 0;
  let sum = 0;
  let i = 0;

  while (i < nums.length && i < k) {
    mp.set(nums[i], (mp.get(nums[i]) ?? 0) + 1);
    sum += nums[i];
    i++;
  }

  if (mp.size === k) {
    result = sum;
  }

  while (i < nums.length) {
    mp.set(nums[i], (mp.get(nums[i]) ?? 0) + 1);
    mp.set(nums[i - k], (mp.get(nums[i - k]) ?? 1) - 1);

    if (mp.get(nums[i - k])! === 0) {
      mp.delete(nums[i - k]);
    }

    sum += nums[i];
    sum -= nums[i - k];

    if (mp.size === k) {
      result = Math.max(result, sum);
    }

    i++;
  }

  return result;
}

export { maximumSubarraySum, maximumSubarraySumBF };
