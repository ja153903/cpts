// NOTE: TLE
function minimizeArrayValue(nums: number[]): number {
   let result = 0;

   while (true) {
      let maxNum = nums[0];
      let maxIdx = 0;

      for (let i = 1; i < nums.length; i++) {
         if (maxNum < nums[i]) {
            maxNum = nums[i];
            maxIdx = i;
         }
      }

      if (maxIdx === 0) {
         return maxNum;
      }

      let noOps = true;

      for (let i = 1; i < nums.length; i++) {
         if (nums[i - 1] < nums[i]) {
            noOps = false;
            const amountToAdjust = Math.ceil((nums[i] - nums[i - 1]) / 2);
            nums[i - 1] += amountToAdjust;
            nums[i] -= amountToAdjust;

            result = Math.max(result, nums[i - 1], nums[i]);
         }
      }

      if (noOps) {
         return result;
      }
   }
}

export { minimizeArrayValue };
