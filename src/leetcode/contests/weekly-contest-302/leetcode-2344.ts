function minOperations(nums: number[], numsDivide: number[]): number {
  const uniqueNumsDivide: number[] = [...new Set(numsDivide)];
  const frequency: Map<number, number> = new Map();
  for (const num of nums) {
    frequency.set(num, (frequency.get(num) ?? 0) + 1);
  }

  let minOps = 0;

  // get the keys in sorted order
  const keys = [...frequency.keys()].sort((a, b) => a - b);

  for (const key of keys) {
    if (!shouldDivideAllElements(uniqueNumsDivide, key)) {
      minOps += frequency.get(key)!;
    } else {
      return minOps;
    }
  }

  return -1;
}

function shouldDivideAllElements(numsDivide: number[], num: number): boolean {
  return numsDivide.every((numDivide) => numDivide % num === 0);
}

export { minOperations };
