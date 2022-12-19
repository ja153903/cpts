// I remember there being a problem where the way to solve this
// was by taking the floor of the average of the numbers
// we should also check if the values are already all equal
//
// TODO: This is wrong. Figure out another solution
function minCost(nums: number[], cost: number[]): number {
   if (nums.length === 0 || allSame(nums)) {
      return 0;
   }

   const average = Math.floor(nums.reduce((a, b) => a + b) / nums.length);

   let minCost = 0;

   for (let i = 0; i < nums.length; i++) {
      minCost += Math.abs(average - nums[i]) * cost[i];
   }

   return minCost;
}

function allSame(nums: number[]): boolean {
   const ref = nums[0];

   for (let i = 1; i < nums.length; i++) {
      if (ref !== nums[i]) {
         return false;
      }
   }

   return true;
}

export { minCost };
