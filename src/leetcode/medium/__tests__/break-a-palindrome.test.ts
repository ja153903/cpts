import { breakPalindrome } from '../break-a-palindrome';

describe('breakPalindrome()', () => {
  it('should pass a sample case', () => {
    const palindrome = 'abccba';
    expect(breakPalindrome(palindrome)).toBe('aaccba');
  });

  it('should pass another sample case', () => {
    const palindrome = 'a';
    expect(breakPalindrome(palindrome)).toBe('');
  });
});
