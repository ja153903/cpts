// https://en.wikipedia.org/wiki/Cycle_detection
function findDuplicate(nums: number[]): number {
   // it would probably be possible to use slow-fast pointers for this problem
   let slow = nums[0];
   let fast = nums[nums[0]];

   while (slow !== fast) {
      slow = nums[slow];
      fast = nums[nums[fast]];
   }

   // doing this we've found the point where they intersect
   // now we have to move up until we have similar numbers
   //
   slow = 0;

   while (slow !== fast) {
      slow = nums[slow];
      fast = nums[fast];
   }

   return slow;
}

export { findDuplicate };
