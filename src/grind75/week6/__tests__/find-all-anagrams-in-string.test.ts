import { findAnagrams } from '../find-all-anagrams-in-string';

describe('Find All Anagrams in String', () => {
   it.each([
      ['cbaebabacd', 'abc', [0, 6]],
      ['abab', 'ab', [0, 1, 2]],
   ])('findAnagrams()', (s: string, p: string, expected: number[]) => {
      expect(findAnagrams(s, p)).toEqual(expected);
   });
});
