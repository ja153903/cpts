function search(nums: number[], target: number): number {
   // we should find the point where we pivot
   // aka we want to find out where the minimum value in the arrays is
   // since we want to make sure that we keep O(log n) we want to do this
   // with binary search
   let left = 0;
   let right = nums.length - 1;

   while (left < right) {
      const mid = left + Math.floor((right - left) / 2);
      // [4, 5, 1, 2, 3]
      if (nums[mid] > nums[right]) {
         left = mid + 1;
      } else {
         right = mid;
      }
   }

   const pivot = left;
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
