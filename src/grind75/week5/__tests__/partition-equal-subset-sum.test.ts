import { canPartition } from '../partition-equal-subset-sum';

describe('Partition Equal Subset Sum', () => {
  it.each([
    [[1, 5, 11, 5], true],
    [[1, 2, 3, 5], false],
    [[2, 2, 1, 1], true],
  ])('canPartition', (nums: number[], expected: boolean) => {
    expect(canPartition(nums)).toBe(expected);
  });
});
