function minimumOperations(nums: number[]): number {
   let total = nums.reduce((a, b) => a + b, 0);
   let ops = 0;

   while (total > 0) {
      const min = Math.min(...nums.filter((num) => num > 0));
      for (let i = 0; i < nums.length; i++) {
         if (nums[i] > 0) {
            nums[i] -= min;
            total -= min;
         }
      }

      ops++;
   }

   return ops;
}

export { minimumOperations };
