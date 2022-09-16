function majorityElement(nums: number[]): number {
  const freq = new Map<number, number>();

  for (const num of nums) {
    freq.set(num, (freq.get(num) ?? 0) + 1);
  }

  let majorityCount = 0;
  let majorityKey = -1;

  for (const [key, count] of freq.entries()) {
    if (count > majorityCount) {
      majorityCount = count;
      majorityKey = key;
    }
  }

  return majorityKey;
}

export { majorityElement };
