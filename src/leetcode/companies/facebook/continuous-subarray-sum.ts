function checkSubarraySum(nums: number[], k: number): boolean {
   let runningSum = 0;
   const seen = new Map<number, number>();
   seen.set(0, -1);

   for (let i = 0; i < nums.length; i++) {
      runningSum += nums[i];

      if (k !== 0) {
         runningSum %= k;
      }

      const lastSeen = seen.get(runningSum);
      if (lastSeen != null) {
         if (i - lastSeen >= 2) {
            return true;
         }
      } else {
         seen.set(runningSum, i);
      }
   }

   console.log(seen);

   return false;
}

function checkSubarraySumBruteForce(nums: number[], k: number): boolean {
   for (let i = 0; i < nums.length; i++) {
      let currentSum = 0;
      for (let j = i; j < nums.length; j++) {
         currentSum += nums[j];

         if (j - i >= 2 && currentSum % k === 0) {
            return true;
         }
      }
   }

   return false;
}

export { checkSubarraySum, checkSubarraySumBruteForce };
