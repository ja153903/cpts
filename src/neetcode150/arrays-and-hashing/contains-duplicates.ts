function containsDuplicate(nums: number[]): boolean {
  const uniqueNumbers: Set<number> = new Set();

  for (const num of nums) {
    if (uniqueNumbers.has(num)) {
      return true;
    }

    uniqueNumbers.add(num);
  }

  return false;
}

export { containsDuplicate };
