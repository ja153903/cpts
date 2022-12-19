import { part1, part2 } from '../day13';

describe('AOC 2022 - Day 13', () => {
   it('should run part1 with sample data', () => {
      expect(part1(true)).toBe(13);
   });

   it('should run part1 with real data', () => {
      expect(part1(false)).toBe(5588);
   });

   it('should run part2 with sample data', () => {
      expect(part2(true)).toBe(140);
   });

   it('should run part2 with real data', () => {
      expect(part2(false)).toBe(23958);
   });
});
