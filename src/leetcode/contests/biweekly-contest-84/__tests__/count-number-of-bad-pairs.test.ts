import { countBadPairsBF, countBadPairs } from '../count-number-of-bad-pairs';

describe('countBadPairsBF', () => {
  it('should pass the basic test case', () => {
    const nums = [4, 1, 3, 3];
    const expected = 5;

    expect(countBadPairsBF(nums)).toBe(expected);
  });

  it('should pass another basic test case', () => {
    const nums = [1, 2, 3, 4, 5];
    const expected = 0;

    expect(countBadPairsBF(nums)).toBe(expected);
  });
});

describe('countBadPairs', () => {
  it('should pass the basic test case', () => {
    const nums = [4, 1, 3, 3];
    const expected = 5;

    expect(countBadPairs(nums)).toBe(expected);
  });

  it('should pass another basic test case', () => {
    const nums = [1, 2, 3, 4, 5];
    const expected = 0;

    expect(countBadPairs(nums)).toBe(expected);
  });
});
