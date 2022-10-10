function uniqueOccurrences(arr: number[]): boolean {
  const frequency = new Map<number, number>();
  for (const num of arr) {
    frequency.set(num, (frequency.get(num) ?? 0) + 1);
  }

  const values = [...frequency.values()];
  const asSet = new Set<number>(values);

  return values.length === asSet.size;
}

export { uniqueOccurrences };
