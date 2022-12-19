function twoSum(nums: number[], target: number): number[] {
  const seen: Map<number, number> = new Map();

  for (let i = 0; i < nums.length; i++) {
    const current = target - nums[i];

    if (seen.has(current)) {
      return [seen.get(current)!, i];
    }

    seen.set(nums[i], i);
  }

  return [];
}

export { twoSum };
