import { subArrayRanges } from '../sum-of-subarray-ranges';

describe('Sum of Subarray Ranges', () => {
  it.each([
    [[1, 2, 3], 4],
    [[1, 3, 3], 4],
    [[4, -2, -3, 4, 1], 59],
  ])('subArrayRanges() - BF', (nums: number[], expected: number) => {
    expect(subArrayRanges(nums)).toBe(expected);
  });
});
