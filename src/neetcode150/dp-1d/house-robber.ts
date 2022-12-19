function rob(nums: number[]): number {
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

function recursiveRob(nums: number[]): number {
   if (nums.length <= 2) {
      return Math.max(...nums);
   }

   return Math.max(
      recursiveRobHelper(nums, nums.length - 1),
      recursiveRobHelper(nums, nums.length - 2)
   );
}

function recursiveRobHelper(nums: number[], current: number): number {
   if (current === 0 || current === 1) {
      return nums[current];
   }

   return Math.max(
      recursiveRobHelper(nums, current - 1),
      nums[current] + recursiveRobHelper(nums, current - 2)
   );
}

export { rob, recursiveRob };
