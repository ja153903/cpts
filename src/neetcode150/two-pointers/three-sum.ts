function threeSum(nums: number[]): number[][] {
   if (nums.length < 3) {
      return [];
   }

   const result: number[][] = [];

   nums.sort((a, b) => a - b);

   for (let i = 0; i < nums.length - 2; i++) {
      if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
         let j = i + 1;
         let k = nums.length - 1;

         while (j < k) {
            const current = nums[j] + nums[k];
            const target = -nums[i];

            if (current === target) {
               result.push([nums[i], nums[j], nums[k]]);

               while (j < k && nums[j] === nums[j + 1]) {
                  j++;
               }

               while (j < k && nums[k] === nums[k - 1]) {
                  k--;
               }

               j++;
               k--;
            } else if (current < target) {
               j++;
            } else {
               k--;
            }
         }
      }
   }

   return result;
}

export { threeSum };
