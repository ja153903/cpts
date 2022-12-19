import { longestPalindrome } from '../longest-palindromic-substring';

describe('Longest Palindrome', () => {
  it('should pass some test case', () => {
    expect(longestPalindrome('babad')).toBe('bab');
    expect(longestPalindrome('cbbd')).toBe('bb');
  });
});
