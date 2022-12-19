import { maximumSubarraySum } from '../q2';

describe('maximumSubarraySum', () => {
  it('should pass some sample cases', () => {
    const arr = [1, 3, 4, 3, 4, 5];
    const k = 3;
    const expected = 12;

    expect(maximumSubarraySum(arr, k)).toBe(expected);
  });
});
