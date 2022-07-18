import { maximumSum } from '../leetcode-2342';

describe('2342. Max Sum of a Pair With Equal Sum of Digits', () => {
  it('should pass sample case 1', () => {
    const nums = [18, 43, 36, 13, 7];
    const expected = 54;

    expect(maximumSum(nums)).toBe(expected);
  });

  it('should pass sample case 2', () => {
    const nums = [10, 12, 19, 14];
    const expected = -1;

    expect(maximumSum(nums)).toBe(expected);
  });
});
