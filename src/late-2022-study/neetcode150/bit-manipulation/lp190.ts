function reverseBits(n: number): number {
  if (n === 0) {
    return 0;
  }

  let result = 0;

  for (let i = 0; i < 32; i++) {
    result <<= 1;

    if ((n & 1) === 1) {
      result++;
    }

    n = n >>> 1;
  }

  return result >>> 0;
}

export { reverseBits };
