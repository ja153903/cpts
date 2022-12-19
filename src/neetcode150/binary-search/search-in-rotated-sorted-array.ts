function search(nums: number[], target: number): number {
   // find the index of the minimum value in the rotated sorted array
   let left = 0;
   let right = nums.length - 1;

   while (left < right) {
      const mid = left + Math.floor((right - left) / 2);

      if (nums[mid] > nums[right]) {
         left = mid + 1;
      } else {
         right = mid;
      }
   }

   const pivot = left;

   // once we have the pivot, we can solve this using binary search
   left = 0;
   right = nums.length - 1;

   while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      const realMid = (mid + pivot) % nums.length;

      if (nums[realMid] === target) {
         return realMid;
      } else if (nums[realMid] < target) {
         left = mid + 1;
      } else {
         right = mid - 1;
      }
   }

   return -1;
}

export { search };
