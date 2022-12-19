import { leastBricks } from '../brick-wall';

describe('Least Bricks', () => {
  it('should pass some test', () => {
    const wall = [
      [1, 2, 2, 1],
      [3, 1, 2],
      [1, 3, 2],
      [2, 4],
      [3, 1, 2],
      [1, 3, 1, 1],
    ];
    expect(leastBricks(wall)).toBe(2);
  });

  it('should pass another test', () => {
    const wall = [
      [6],
      [6],
      [2, 4],
      [6],
      [1, 2, 2, 1],
      [6],
      [2, 1, 2, 1],
      [1, 5],
      [4, 1, 1],
      [1, 4, 1],
      [4, 2],
      [3, 3],
      [2, 2, 2],
      [5, 1],
      [5, 1],
      [6],
      [4, 2],
      [1, 5],
      [2, 3, 1],
      [4, 2],
      [1, 1, 4],
      [1, 3, 1, 1],
      [2, 3, 1],
      [3, 3],
      [3, 1, 1, 1],
      [3, 2, 1],
      [6],
      [3, 2, 1],
      [1, 5],
      [1, 4, 1],
    ];

    expect(leastBricks(wall)).toBe(17);
  });
});
