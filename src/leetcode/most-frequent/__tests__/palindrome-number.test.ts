import { isPalindrome } from '../palindrome-number';

describe('Palindrome Number', () => {
  it('should pass basic test case', () => {
    expect(isPalindrome(-123)).toBeFalsy();
    expect(isPalindrome(123)).toBeFalsy();
    expect(isPalindrome(121)).toBeTruthy();
    expect(isPalindrome(10)).toBeFalsy();
  });
});
