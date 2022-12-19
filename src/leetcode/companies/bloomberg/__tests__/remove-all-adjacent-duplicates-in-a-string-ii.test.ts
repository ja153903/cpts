import { removeDuplicates } from '../remove-all-adjacent-duplicates-in-a-string-ii';

describe('Remove Duplicates', () => {
   it.each([
      ['abcd', 2, 'abcd'],
      ['deeedbbcccbdaa', 3, 'aa'],
      ['pbbcggttciiippooaais', 2, 'ps'],
   ])('removeDuplicates(%s, %i)', (s: string, k: number, expected: string) => {
      expect(removeDuplicates(s, k)).toBe(expected);
   });
});
