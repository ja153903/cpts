function getSum(a: number, b: number): number {
  // Suppose that a = 2, b = 3
  // a = 10, b = 11
  // expected result => 5 which is 101
  // if we do &, a & b => 10
  // if we do ^, a ^ b => 11
  return b === 0 ? a : getSum(a ^ b, (a & b) << 1);
}

export { getSum };
