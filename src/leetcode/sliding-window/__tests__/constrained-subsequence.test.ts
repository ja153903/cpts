import { constrainedSubsetSum } from '../constrained-subsequence';

describe('constrainedSubsetSum', () => {
   it('should pass a case', () => {
      expect(constrainedSubsetSum([10, 2, -10, 5, 20], 2)).toBe(37);
   });
});
