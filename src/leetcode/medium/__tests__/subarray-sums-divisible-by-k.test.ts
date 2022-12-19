import {
  subarraysDivByK,
  subarraysDivByKBF,
} from '../subarray-sums-divisible-by-k';

describe('subarraysDivByK()', () => {
  it('should pass a sample case', () => {
    const nums = [4, 5, 0, -2, -3, 1];
    const k = 5;

    expect(subarraysDivByKBF(nums, k)).toBe(7);
    expect(subarraysDivByK(nums, k)).toBe(7);
  });

  it('should pass another sample case', () => {
    const nums = [5];
    const k = 9;

    expect(subarraysDivByKBF(nums, k)).toBe(0);
    expect(subarraysDivByK(nums, k)).toBe(-1);
  });
});
