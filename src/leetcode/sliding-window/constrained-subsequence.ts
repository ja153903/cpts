// Similar to sliding window maximum?
// Return the maximum sum of a non-empty subsequence
// of that array such that every two consecutive
// integers in that subsequence are never more than k apart (in terms of indices)
function constrainedSubsetSum(nums: number[], k: number): number {
   const deque: number[] = [];

   // The intention here with modifying nums[i] is that
   // we're going to let nums[i] denote the maximum subsequence sum
   // you can get if the last element is nums[i]

   for (let i = 0; i < nums.length; i++) {
      // if there's an item in the deque, we increment the current element by that number
      nums[i] += deque.length > 0 ? deque[0] : 0;

      // if the current number in the deque is greater than the last item on the deque
      // then we should have a new max so we pop the top element
      while (deque.length && nums[i] > deque[deque.length - 1]) {
         deque.pop();
      }

      // if the current sum is greater than 0, then we should push the item to the deque
      if (nums[i] > 0) {
         deque.push(nums[i]);
      }

      // This makes sure that we remove the max values from an invalid window
      if (i >= k && deque.length && deque[0] === nums[i - k]) {
         deque.shift();
      }
   }

   return Math.max(...nums);
}

export { constrainedSubsetSum };
