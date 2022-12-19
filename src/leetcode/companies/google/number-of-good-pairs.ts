function numIdenticalPairs(nums: number[]): number {
   // Given an array of integers nums, return the number of good pairs.
   // A pair (i, j) is called good if nums[i] == nums[j] and i < j.
   // NOTE: The input size is rather small so what we can do here is
   // just do a O(n^2) pass
   let numPairs = 0;

   for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
         if (nums[i] === nums[j]) {
            numPairs++;
         }
      }
   }

   return numPairs;
}

export { numIdenticalPairs };
