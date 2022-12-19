import { minOperations } from '../leetcode-2344';

describe('2344. Minimum Deletions to Make Array Divisible', () => {
   it('should pass sample case 1', () => {
      const nums = [2, 3, 2, 4, 3];
      const numsDivide = [9, 6, 9, 3, 15];

      const expected = 2;

      expect(minOperations(nums, numsDivide)).toBe(expected);
   });

   it('should pass sample case 2', () => {
      const nums = [4, 3, 6];
      const numsDivide = [8, 2, 6, 10];

      const expected = -1;

      expect(minOperations(nums, numsDivide)).toBe(expected);
   });
});
