function subsets(nums: number[]): number[][] {
   const result: number[][] = [];

   backtrack(nums, result, [], 0);

   return result;
}

function backtrack(
   nums: number[],
   result: number[][],
   current: number[],
   start: number
) {
   result.push([...current]);

   for (let i = start; i < nums.length; i++) {
      backtrack(nums, result, current.concat(nums[i]), i + 1);
   }
}

export { subsets };
