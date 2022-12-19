import { intToRoman } from '../integer-to-roman';

describe('Integer to Romain', () => {
   it('should pass all cases', () => {
      expect(intToRoman(58)).toBe('LVIII');
      expect(intToRoman(1994)).toBe('MCMXCIV');
      expect(intToRoman(100)).toBe('C');
   });
});
