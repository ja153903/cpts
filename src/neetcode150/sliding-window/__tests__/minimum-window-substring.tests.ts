import { minWindow } from '../minimum-window-substring';

describe('Minimum Window Substring', () => {
   it.each([
      ['ADOBECODEBANC', 'ABC', 'BANC'],
      ['ab', 'A', ''],
   ])('minWindow(%s, %s) === %s', (s, t, expected) => {
      expect(minWindow(s, t)).toBe(expected);
   });
});
