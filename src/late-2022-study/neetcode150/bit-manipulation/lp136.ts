function singleNumber(nums: number[]): number {
  // given that there's only going to be 1 duplicate number
  // we can take advantage of the XOR property
  return nums.reduce((a, b) => a ^ b);
}

export { singleNumber };
