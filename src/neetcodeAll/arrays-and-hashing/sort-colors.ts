/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
   const counter = new Array<number>(3).fill(0);

   for (const num of nums) {
      counter[num]++;
   }

   let j = 0;

   for (let i = 0; i < counter.length; i++) {
      let count = counter[i];

      while (count > 0) {
         nums[j] = i;
         j++;
         count--;
      }
   }
}
