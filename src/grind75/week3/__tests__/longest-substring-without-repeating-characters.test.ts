import { lengthOfLongestSubstring } from '../longest-substring-without-repeating-characters';

describe('Longest Substring Without Repeating Characters', () => {
  it.each([
    ['abcabcbb', 3],
    ['pwwkew', 3],
    ['bbbbb', 1],
  ])('lengthOfLongestSubstring(%s)', (s: string, expected: number) => {
    expect(lengthOfLongestSubstring(s)).toBe(expected);
  });
});
