import { countPalindromicSubsequence } from '../leetcode-1930';

describe('countPalindromicSubsequence', () => {
  it('should pass some cases', () => {
    expect(countPalindromicSubsequence('aabca')).toBe(3);
    expect(countPalindromicSubsequence('adc')).toBe(0);
    expect(countPalindromicSubsequence('bbcbaba')).toBe(4);
  });
});
