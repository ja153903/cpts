import { findBall } from '../day1';

describe('findBall()', () => {
   it('should pass a sample case', () => {
      const grid = [
         [1, 1, 1, -1, -1],
         [1, 1, 1, -1, -1],
         [-1, -1, -1, 1, 1],
         [1, 1, 1, 1, -1],
         [-1, -1, -1, -1, -1],
      ];

      expect(findBall(grid)).toEqual([1, -1, -1, -1, -1]);
   });

   it('should pass another sample case', () => {
      const grid = [[-1]];

      expect(findBall(grid)).toEqual([-1]);
   });

   it('should pass the final sample case', () => {
      const grid = [
         [1, 1, 1, 1, 1, 1],
         [-1, -1, -1, -1, -1, -1],
         [1, 1, 1, 1, 1, 1],
         [-1, -1, -1, -1, -1, -1],
      ];

      expect(findBall(grid)).toEqual([0, 1, 2, 3, 4, -1]);
   });
});
