function rob(nums: number[]): number {
   if (nums.length <= 1) {
      return nums?.[0] ?? 0;
   }

   return Math.max(
      robLogic(nums.slice(0, nums.length - 1)),
      robLogic(nums.slice(1))
   );
}

function robLogic(nums: number[]): number {
   if (nums.length <= 1) {
      return nums?.[0] ?? 0;
   }

   const dp = new Array<number>(nums.length).fill(0);

   dp[0] = nums[0];
   dp[1] = Math.max(nums[0], nums[1]);

   for (let i = 2; i < nums.length; i++) {
      dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
   }

   return Math.max(...dp);
}

export { rob };
