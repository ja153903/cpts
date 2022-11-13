import { furthestBuilding } from '../furthest-building-you-can-reach';

describe('furthest-building-you-can-reach', () => {
  it.each([
    // [[4, 2, 7, 6, 9, 14, 12], 5, 1, 4],
    [[4, 12, 2, 7, 3, 18, 20, 3, 19], 10, 2, 7],
    // [[1, 5, 1, 2, 3, 4, 10000], 4, 1, 5],
  ])('furthestBuilding()', (heights, bricks, ladders, expected) => {
    expect(furthestBuilding(heights, bricks, ladders)).toBe(expected);
  });
});
