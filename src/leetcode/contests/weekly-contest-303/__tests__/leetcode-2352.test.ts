import { equalPairs } from '../leetcode-2352';

describe('2352. Equal Row and Pair Columns', () => {
   it('test case 1', () => {
      const grid = [
         [3, 2, 1],
         [1, 7, 6],
         [2, 7, 7],
      ];
      expect(equalPairs(grid)).toBe(1);
   });

   it('test case 2', () => {
      const grid = [
         [3, 1, 2, 2],
         [1, 4, 4, 5],
         [2, 4, 2, 2],
         [2, 4, 2, 2],
      ];
      expect(equalPairs(grid)).toBe(3);
   });

   it('test case 3', () => {
      const grid = [
         [11, 1],
         [1, 11],
      ];

      expect(equalPairs(grid)).toBe(2);
   });
});
