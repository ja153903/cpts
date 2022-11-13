import { findLength } from '../maximum-length-of-repeated-subarray';

describe('findLength', () => {
  it.each([
    [[1, 2, 3, 2, 1], [3, 2, 1, 4, 7], 3],
    [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], 5],
  ])('findLength', (nums1: number[], nums2: number[], expected: number) => {
    expect(findLength(nums1, nums2)).toBe(expected);
  });
});
