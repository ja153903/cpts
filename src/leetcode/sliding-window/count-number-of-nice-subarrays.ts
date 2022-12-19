function numberOfSubarrays(nums: number[], k: number): number {
   // nums = [1, 1, 2, 1, 1], k = 3
   let result = 0;
   let start = 0;
   let count = 0;

   for (let end = 0; end < nums.length; end++) {
      // if the number is odd, decrease k and set count to 0
      // why do we set count to 0?
      // if we find another odd number, then we have to reset the count
      // because there will be more than k odd numbers if we find a new one
      if (nums[end] % 2 === 1) {
         k--;
         count = 0;
      }

      // if k === 0, then we should increment k
      // if the start is odd
      // we also increment start and the count
      while (k === 0) {
         if (nums[start] % 2 === 1) {
            k++;
         }
         start++;
         // increase the number of subarrays
         count++;
      }

      // we keep adding the current count here
      result += count;
   }

   return result;
}

export { numberOfSubarrays };
