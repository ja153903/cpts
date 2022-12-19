import {
   minCostClimbingStairs,
   recursiveSolution,
} from '../min-cost-climbing-stairs';

describe('Min Cost Climbing Stairs', () => {
   it('should run recursive case properly', () => {
      expect(recursiveSolution([10, 15, 20])).toBe(15);
      expect(recursiveSolution([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toBe(6);
   });

   it('should run optimal case properly', () => {
      expect(minCostClimbingStairs([10, 15, 20])).toBe(15);
      expect(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toBe(
         6
      );
   });
});
