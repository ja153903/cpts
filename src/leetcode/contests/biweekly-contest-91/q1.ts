function distinctAverages(nums: number[]): number {
   // We can afford to do this since at most we'll have an array of size 1000
   nums.sort((a, b) => a - b);

   const unique = new Set<number>();

   let left = 0;
   let right = nums.length - 1;

   while (left < right) {
      const average = (nums[left] + nums[right]) / 2;
      if (!unique.has(average)) {
         unique.add(average);
      }

      left++;
      right--;
   }

   return unique.size;
}

export { distinctAverages };
