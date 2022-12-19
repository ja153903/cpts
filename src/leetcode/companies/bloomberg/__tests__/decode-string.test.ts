import { decodeString } from '../decode-string';

describe('Decode String', () => {
  it.each([
    ['3[a]2[bc]', 'aaabcbc'],
    ['3[a2[c]]', 'accaccacc'],
    ['2[abc]3[cd]ef', 'abcabccdcdcdef'],
  ])('decodeString(%s)', (s: string, expected: string) => {
    expect(decodeString(s)).toBe(expected);
  });
});
