import { minimumOperations } from '../leetcode-2357';

describe('2357. Minimum Operations to make Zero', () => {
  it('should pass a test case', () => {
    const nums = [1, 5, 0, 3, 5];
    const expected = 3;

    expect(minimumOperations(nums)).toBe(expected);
  });
});
