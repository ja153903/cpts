import { findBall } from '../day1';

describe('findBall()', () => {
  it('should pass a sample case', () => {
    const grid = [
      [1, 1, 1, -1, -1],
      [1, 1, 1, -1, -1],
      [-1, -1, -1, 1, 1],
      [1, 1, 1, 1, -1],
      [-1, -1, -1, -1, -1],
    ];

    expect(findBall(grid)).toEqual([1, -1, -1, -1, -1]);
  });
});
