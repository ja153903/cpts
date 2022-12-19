// Given two integer arrays nums1 and nums2,
// return the maximum length of a subarray that appears in both arrays.
function findLength(nums1: number[], nums2: number[]): number {
   // NOTES
   //
   // * This problem seems like a 2D DP problem where we would have
   // to keep track of one array on the rows and the other array on
   // the columns
   //
   // * The DP matrix should have nums1.length + 1 rows and nums2.length + 2 cols
   // the top row and the first column should be initialized to 0
   //
   // * in terms of our state transition, we should say that
   // if nums1[i - 1] === nums2[j - 1], then we know that we should add 1
   //
   // if nums1[i -1] === nums2[j - 1], then we should make sure to check the previous
   // diagonal if we need to add its value.
   //
   // keep track of max length externally
   const dp = new Array<Array<number>>();
   const rows = nums1.length + 1;
   const cols = nums2.length + 1;

   let maxLength = 0;

   for (let i = 0; i < rows; i++) {
      dp.push(new Array<number>(cols).fill(0));
   }

   for (let i = 1; i < rows; i++) {
      for (let j = 1; j < cols; j++) {
         if (nums1[i - 1] === nums2[j - 1]) {
            dp[i][j] = dp[i - 1][j - 1] + 1;
            maxLength = Math.max(maxLength, dp[i][j]);
         }
      }
   }

   return maxLength;
}

export { findLength };
