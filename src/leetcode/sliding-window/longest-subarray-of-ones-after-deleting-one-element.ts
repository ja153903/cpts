// Given a binary array nums, you should delete one element from it.
// Return the size of the longest non-empty subarray containing only 1's
// in the resulting array. Return 0 if there is no such subarray.
function longestSubarray(nums: number[]): number {
   // Input: nums = [1,1,0,1]
   // Output: 3
   // The brute force approach for this problem would be to remove a 0
   // and then compute the longest subarray containing only 1s
   // However, this solution would take O(n^2)
   // To optimize this probem, we'd likely want to drop it down to O(n) time
   // The ideal solution for this problem would be to implement a variation of
   // a sliding window algorithm.
   let runningSum = 0;
   let length = 0;

   let start = 0;

   for (let end = 0; end < nums.length; end++) {
      runningSum += nums[end];

      while (end - start + 1 > runningSum + 1) {
         runningSum -= nums[start];
         start++;
      }

      // we should only do end - start + 1 because we're removing one of the 0s
      length = Math.max(length, end - start);
   }

   return length;
}

export { longestSubarray };
