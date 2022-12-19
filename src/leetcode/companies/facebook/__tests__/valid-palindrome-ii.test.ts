import { validPalindrome } from '../valid-palindrome-ii';

describe('Valid Palindrome II', () => {
   it.each([['eeccccbebaeeabebccceea', false]])(
      'validPalindrome(%s)',
      (s, expected) => {
         expect(validPalindrome(s)).toBe(expected);
      }
   );
});
