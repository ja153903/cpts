function findOriginalArray(changed: number[]): number[] {
  if (changed.length % 2 === 1) {
    return [];
  }

  changed.sort((a, b) => a - b);

  const frequency = new Map<number, number>();
  for (const num of changed) {
    frequency.set(num, (frequency.get(num) ?? 0) + 1);
  }

  const result: number[] = [];

  // note that entries are sorted in order
  for (const [num, count] of frequency.entries()) {
    if (count > (frequency.get(2 * num) ?? 0)) {
      return [];
    }

    if (num === 0) {
      for (let i = 0; i < count / 2; i++) {
        result.push(num);
      }
    } else {
      for (let i = 0; i < count; i++) {
        result.push(num);
        frequency.set(num * 2, frequency.get(num * 2)! - 1);
      }
    }
  }

  return result;
}

export { findOriginalArray };
