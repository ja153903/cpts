import { zeroFilledSubarray } from '../leetcode-6129';

describe('6129. Number of Zero-filled subarrays', () => {
   it('test case 1', () => {
      const nums = [1, 3, 0, 0, 2, 0, 0, 4];
      expect(zeroFilledSubarray(nums)).toBe(6);
   });
});
