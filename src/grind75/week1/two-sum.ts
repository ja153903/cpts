function twoSum(nums: number[], target: number): number[] {
  const seen = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const desired = target - nums[i];
    if (seen.has(desired)) {
      return [seen.get(desired)!, i];
    }

    seen.set(nums[i], i);
  }

  return [];
}

export { twoSum };
