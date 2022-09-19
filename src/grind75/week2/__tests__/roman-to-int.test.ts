import { romanToInt } from '../roman-to-int';

describe('Roman to Integer', () => {
  it.each([
    ['III', 3],
    ['LVIII', 58],
  ])('romanToInt(%s)', (s: string, expected: number) => {
    expect(romanToInt(s)).toBe(expected);
  });
});
