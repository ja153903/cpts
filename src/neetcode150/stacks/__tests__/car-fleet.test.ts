import { carFleet } from '../car-fleet';

describe('853. Car Fleet', () => {
  it('test case 1', () => {
    const target = 12;
    const position = [10, 8, 0, 5, 3];
    const speed = [2, 4, 1, 1, 3];

    expect(carFleet(target, position, speed)).toBe(3);
  });

  it('test case 2', () => {
    const target = 100;
    const position = [0, 2, 4];
    const speed = [4, 2, 1];

    expect(carFleet(target, position, speed)).toBe(1);
  });
});
