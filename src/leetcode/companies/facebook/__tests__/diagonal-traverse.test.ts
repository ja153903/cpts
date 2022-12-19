import { findDiagonalOrder } from '../diagonal-traverse';

describe('Diagonal Traverse', () => {
  it.each([
    [
      [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      [1, 2, 4, 7, 5, 3, 6, 8, 9],
    ],
    [
      [
        [1, 2],
        [3, 4],
      ],
      [1, 2, 3, 4],
    ],
  ])('findDiagonalOrder', (mat: number[][], expected: number[]) => {
    expect(findDiagonalOrder(mat)).toEqual(expected);
  });
});
