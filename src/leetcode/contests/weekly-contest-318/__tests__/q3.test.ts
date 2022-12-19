import { totalCost } from '../q3';

describe('totalCost', () => {
  it('should pass sample case', () => {
    const costs = [17, 12, 10, 2, 7, 2, 11, 20, 8];
    const k = 3;
    const candidates = 4;

    expect(totalCost(costs, k, candidates)).toBe(11);
  });

  it('should pass another sample case', () => {
    const costs = [1, 2, 4, 1];
    const k = 3;
    const candidates = 3;

    expect(totalCost(costs, k, candidates)).toBe(4);
  });

  it('should pass the final sample case', () => {
    const costs = [
      31, 25, 72, 79, 74, 65, 84, 91, 18, 59, 27, 9, 81, 33, 17, 58,
    ];
    const k = 11;
    const candidates = 2;
    expect(totalCost(costs, k, candidates)).toBe(423);
  });

  it('should pass another final sample case', () => {
    const costs = [
      50, 80, 34, 9, 86, 20, 67, 94, 65, 82, 40, 79, 74, 92, 84, 37, 19, 16, 85,
      20, 79, 25, 89, 55, 67, 84, 3, 79, 38, 16, 44, 2, 54, 58,
    ];
    const k = 7;
    const candidates = 12;
    expect(totalCost(costs, k, candidates)).toBe(95);
  });
});
