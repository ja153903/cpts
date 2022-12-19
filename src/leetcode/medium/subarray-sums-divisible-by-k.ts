// Given an integer array nums and an integer k,
// return the number of non-empty subarrays that have a sum divisible by k.
// A subarray is a contiguous part of an array.
// NOTE: if sum(nums[0, i]) % k === sum(nums[0, j]) % k, then we know that
// sum(nums[i + 1, j]) must be divisible by k
function subarraysDivByK(nums: number[], k: number): number {
   let result = 0;
   let runningSum = 0;

   const map = new Map<number, number>();
   map.set(0, 1);

   for (let i = 0; i < nums.length; i++) {
      runningSum = (runningSum + nums[i]) % k;
      if (runningSum < 0) {
         runningSum += k;
      }

      const existingCount = map.get(runningSum) ?? 0;
      result += existingCount;

      map.set(runningSum, existingCount + 1);
   }

   return result;
}

// This is the trivial O(n^2) solution
// typically how we would try to optimize this is by
// using a sliding window algorithm or some sort of prefix sum?
function subarraysDivByKBF(nums: number[], k: number): number {
   let result = 0;

   for (let i = 0; i < nums.length; i++) {
      let sum = 0;
      for (let j = i; j < nums.length; j++) {
         sum += nums[j];

         if (sum % k === 0) {
            result++;
         }
      }
   }

   return result;
}

export { subarraysDivByK, subarraysDivByKBF };
