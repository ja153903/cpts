import { kthSmallest } from '../leetcode-378';

describe('Kth Smallest in Matrix', () => {
  it('test case 1', () => {
    const matrix = [
      [1, 5, 9],
      [10, 11, 13],
      [12, 13, 15],
    ];
    const k = 8;

    expect(kthSmallest(matrix, k)).toBe(13);
  });
});
