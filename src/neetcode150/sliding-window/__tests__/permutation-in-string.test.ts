import { checkInclusion } from '../permutation-in-string';

describe('Permutation in String', () => {
   it('test case 1', () => {
      const s1 = 'ab';
      const s2 = 'eidbaooo';

      expect(checkInclusion(s1, s2)).toBeTruthy();
   });

   it('test case 2', () => {
      const s1 = 'ab';
      const s2 = 'eidboaoo';

      expect(checkInclusion(s1, s2)).toBeFalsy();
   });
});
