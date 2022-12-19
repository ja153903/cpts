// The frequency of an element is the number of times it occurs in an array.
// You are given an integer array nums and an integer k. In one operation,
// you can choose an index of nums and increment the element at that index by 1.
// Return the maximum possible frequency of an element after performing at most k operations.
function maxFrequency(nums: number[], k: number): number {
   // in one operation, we are able to choose some index and increment the element by 1
   // since we can really only increase the max frequency, what we can do is to find the largest
   // element that will allow us to increase the value within k updates.
   // Example: nums = [3,9,6], k = 2
   // Let's derive why this should be a sliding window problem
   let runningSum = 0;
   let start = 0;
   let frequency = 0;

   nums.sort((a, b) => a - b);

   for (let end = 0; end < nums.length; end++) {
      runningSum += nums[end];

      // suppose that we have [3, 6, 9], k = 2
      // when end = 0, runningSum = 3, runningSum + k = 5, 5 < 3 => false, frequency = 1
      // when end = 1, runningSum = 9, runningSum + k = 11, 11 < 12 => true, frequency = 1
      // Why is our condition runningSum + k < nums[end] * size?
      // runningSum + k represents the possible total sum of that window
      // if the possible total sum of that window is less than the current value with the same window size
      // then we should update the start of the window because it's not possible to update
      // all the elements in that window to match nums[end]
      while (runningSum + k < nums[end] * (end - start + 1)) {
         runningSum -= nums[start];
         start++;
      }

      frequency = Math.max(frequency, end - start + 1);
   }

   return frequency;
}

export { maxFrequency };
