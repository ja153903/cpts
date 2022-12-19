import { validWordAbbreviation } from '../valid-word-abbreviation';

describe('Valid Word Abbreviation', () => {
   it.each([
      ['internationalization', 'i12iz4n', true],
      ['apple', 'a2e', false],
      ['a', '2', false],
   ])('validWordAbbreviation(%s, %s)', (word, abbr, expected) => {
      expect(validWordAbbreviation(word, abbr)).toBe(expected);
   });
});
