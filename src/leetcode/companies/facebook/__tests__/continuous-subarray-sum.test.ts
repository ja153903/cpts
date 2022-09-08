import {
  checkSubarraySumBruteForce,
  checkSubarraySum,
} from '../continuous-subarray-sum';

describe('Continuous Subarray Sum', () => {
  describe('Brute Force', () => {
    it('should pass simple cases', () => {
      let nums = [23, 2, 4, 6, 7];
      let k = 6;

      expect(checkSubarraySumBruteForce(nums, k)).toBeTruthy();
    });
  });

  describe('Optimal', () => {
    it('should pass some tests', () => {
      // let nums = [23, 2, 4, 6, 7];
      // let k = 6;

      // expect(checkSubarraySum(nums, k)).toBeTruthy();

      let nums = [1, 2, 3];
      let k = 5;

      expect(checkSubarraySum(nums, k)).toBeTruthy();
    });
  });
});
