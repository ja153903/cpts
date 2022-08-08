function countBadPairs(nums: number[]): number {
  const n = nums.length;
  const total = Math.floor((n * (n - 1)) / 2);
  let goodPairs = 0;
  const freq = new Map<number, number>();

  nums.forEach((num, index) => {
    const target = index - num;

    goodPairs += freq.get(target) ?? 0;
    freq.set(target, (freq.get(target) ?? 0) + 1);
  });

  return total - goodPairs;
}

// Note that this solution is O(n^2) time complexity
function countBadPairsBF(nums: number[]): number {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (j - i !== nums[j] - nums[i]) {
        result++;
      }
    }
  }

  return result;
}

// how can we optimize this?
// is it easier to find the number of good pairs?
// note that a pair is good if j - i === nums[j] - nums[i]
// we can further rearrange this problem such that j - nums[j] === i - nums[i]
// so we want to find pairs (i, nums[i]) and then add them up as we find them

export { countBadPairs, countBadPairsBF };
