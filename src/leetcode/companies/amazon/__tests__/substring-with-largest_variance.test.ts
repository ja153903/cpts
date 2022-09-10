import {
  largestVarianceBruteForce,
  largestVariance,
} from '../substring-with-largest-variance';

describe('Largest Variance Brute Force', () => {
  describe('Brute Force Solution', () => {
    it.each([
      ['aababbb', 3],
      ['abcde', 0],
    ])('largestVarianceBruteForce(%s)', (s: string, expected: number) => {
      expect(largestVarianceBruteForce(s)).toBe(expected);
    });
  });

  describe('Optimal Solution', () => {
    it.each([
      ['aababbb', 3],
      ['abcde', 0],
    ])('largestVariance(%s)', (s: string, expected: number) => {
      expect(largestVariance(s)).toBe(expected);
    });
  });
});
