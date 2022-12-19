import { romanToInt } from '../roman-to-integer';

describe('Roman To Int', () => {
   it('should pass a simple case', () => {
      const s = 'LVIII';
      expect(romanToInt(s)).toBe(58);
   });
});
