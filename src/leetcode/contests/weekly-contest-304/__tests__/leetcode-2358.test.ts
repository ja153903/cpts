import { maximumGroups } from '../leetcode-2358';

describe('2358. Maximum Groups', () => {
  it('should pass a test case', () => {
    const grades = [10, 6, 12, 7, 3, 5];

    expect(maximumGroups(grades)).toBe(3);
  });
});
