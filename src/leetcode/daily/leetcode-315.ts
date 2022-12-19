// You are given an integer array nums and
// you have to return a new counts array.
// The counts array has the property where counts[i]
// is the number of smaller elements to the right of nums[i].
function countSmaller(nums: number[]): number[] {
   const result: number[] = new Array(nums.length).fill(0);

   if (nums.length === 1) {
      return result;
   }

   // O(n^2) solution
   // Trivial and inefficient
   // I don't quite understand how the merge sort solution
   // works for this problem. Come back to this at a later time
   for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
         if (nums[i] > nums[j]) {
            result[i]++;
         }
      }
   }

   return result;
}

export { countSmaller };
