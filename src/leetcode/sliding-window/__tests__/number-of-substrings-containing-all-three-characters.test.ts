import { numberOfSubstrings } from '../number-of-substrings-containing-all-three-characters';

describe('Number of Substrings Containing All Three Characters', () => {
  it('should pass some tests', () => {
    expect(numberOfSubstrings('abcabc')).toBe(10);
    expect(numberOfSubstrings('aaacb')).toBe(3);
    expect(numberOfSubstrings('abc')).toBe(1);
  });
});
