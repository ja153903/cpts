import { reverseVowels } from '../day4';

describe('reverseVowels()', () => {
   it('should pass sample case', () => {
      expect(reverseVowels('hello')).toBe('holle');
   });

   it('should pass another sample case', () => {
      expect(reverseVowels('leetcode')).toBe('leotcede');
   });
});
