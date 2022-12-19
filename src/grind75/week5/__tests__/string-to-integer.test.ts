import { myAtoi } from '../string-to-integer';

describe('String to Integer', () => {
  test.each([
    ['42', 42],
    ['    -32, 23234', -32],
    ['          -23', -23],
    ['words and 987', 0],
    ['.1', 0],
  ])('myAtoi(%s)', (s: string, expected: number) => {
    expect(myAtoi(s)).toBe(expected);
  });
});
