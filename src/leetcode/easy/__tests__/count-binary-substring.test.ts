import { countBinarySubstrings } from '../count-binary-substrings';

describe('countBinarySubstring()', () => {
  it('should pass a basic test', () => {
    expect(countBinarySubstrings('00110011')).toBe(6);
    expect(countBinarySubstrings('10101')).toBe(4);
  });
});
