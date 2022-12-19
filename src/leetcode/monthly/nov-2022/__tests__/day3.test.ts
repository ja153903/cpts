import { longestPalindrome } from '../day3';

describe('longestPalindrome()', () => {
   it('should pass sample case', () => {
      const words = ['lc', 'cl', 'gg'];
      expect(longestPalindrome(words)).toBe(6);
   });

   it('should pass another sample case', () => {
      const words = ['ab', 'ty', 'yt', 'lc', 'cl', 'ab'];
      expect(longestPalindrome(words)).toBe(8);
   });

   it('should pass final sample case', () => {
      const words = ['cc', 'll', 'xx'];
      expect(longestPalindrome(words)).toBe(2);
   });
});
