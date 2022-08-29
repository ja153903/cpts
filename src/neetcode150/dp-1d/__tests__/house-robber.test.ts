import { recursiveRob, rob } from '../house-robber';

describe('House Robber', () => {
  it('should test recursive helper', () => {
    expect(recursiveRob([1, 2, 3, 1])).toBe(4);
    expect(recursiveRob([2, 7, 9, 3, 1])).toBe(12);
  });

  it('should test house-robber', () => {
    expect(rob([1, 2, 3, 1])).toBe(4);
    expect(rob([2, 7, 9, 3, 1])).toBe(12);
    expect(rob([0])).toBe(0);
  });
});
