//Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
//If target is not found in the array, return [-1, -1].
//You must write an algorithm with O(log n) runtime complexity.

// these are pretty crucial ways of learning how to do binary search

function searchRange(nums: number[], target: number): number[] {
   let result = [-1, -1];

   if (nums.length === 0) {
      return result;
   }

   let left = 0;
   let right = nums.length - 1;

   // this binary search makes sure that we find the leftmost item that is equal to the target
   // potentially.
   // This is done by checking for if the number in the middle is less than the target
   // then we increment the left up slowly; otherwise, we hold it on the middle value
   while (left < right) {
      const mid = left + Math.floor((right - left) / 2);
      if (nums[mid] < target) {
         left = mid + 1;
      } else {
         right = mid;
      }
   }
   if (nums[left] !== target) {
      return result;
   }

   result[0] = left;

   right = nums.length - 1;

   // similarly here, we can find the rightmost value
   // by employing a similar tactic where we check if the number in the middle
   // is greater than the target, then we bring down the rightmost side
   // otherwise we stay and move the left side to mid
   while (left < right) {
      // adding the 1 helps in making it more biased to the right
      const mid = left + Math.floor((right - left) / 2) + 1;
      if (nums[mid] > target) {
         right = mid - 1;
      } else {
         left = mid;
      }
   }

   result[1] = right;

   return result;
}

export { searchRange };
