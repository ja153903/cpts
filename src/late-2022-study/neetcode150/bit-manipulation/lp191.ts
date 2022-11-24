function hammingWeight(n: number): number {
  let count = 0;

  while (n > 0) {
    n &= n - 1;
    count++;
  }

  return count;
}

function alternateHammingWeight(n: number): number {
  let count = 0;

  while (n > 0) {
    if (n & 1) {
      count++;
    }

    n = n >>> 1;
  }

  return count;
}

export { hammingWeight, alternateHammingWeight };
