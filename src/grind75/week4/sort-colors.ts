/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
   // one thing we can do here is do counting sort
   const colors = new Array<number>(3).fill(0);

   for (const num of nums) {
      colors[num]++;
   }

   let i = 0;

   for (let j = 0; j < 3; j++) {
      while (colors[j] > 0) {
         nums[i] = j;
         i++;
         colors[j]--;
      }
   }
}

export { sortColors };
