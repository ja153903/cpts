import { makeGood } from '../day8';

describe('makeGood', () => {
  it.each([
    ['leEeetcode', 'leetcode'],
    ['abBAcC', ''],
  ])('makeGood', (s, expected) => {
    expect(makeGood(s)).toBe(expected);
  });
});
