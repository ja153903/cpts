import { part1, part2 } from '../day14';

describe('AOC Day 14', () => {
  it('should run part1 with sample data', () => {
    expect(part1(true)).toBe(24);
  });

  it('should run part1 with real data', () => {
    expect(part1(false)).toBe(888);
  });

  it('should run part2 with sample data', () => {
    expect(part2(true)).toBe(93);
  });

  it('should run part2 with real data', () => {
    expect(part2(false)).toBe(26461);
  });
});
