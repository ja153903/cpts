import { twoCitySchedCost } from '../two-city-scheduling';

describe('Two City Scheduling', () => {
  it.each([
    [
      [
        [10, 20],
        [30, 200],
        [400, 50],
        [30, 20],
      ],
      110,
    ],
    [
      [
        [259, 770],
        [448, 54],
        [926, 667],
        [184, 139],
        [840, 118],
        [577, 469],
      ],
      1859,
    ],
    [
      [
        [515, 563],
        [451, 713],
        [537, 709],
        [343, 819],
        [855, 779],
        [457, 60],
        [650, 359],
        [631, 42],
      ],
      3086,
    ],
  ])('twoCitySchedCost()', (costs: number[][], expected: number) => {
    expect(twoCitySchedCost(costs)).toBe(expected);
  });
});
