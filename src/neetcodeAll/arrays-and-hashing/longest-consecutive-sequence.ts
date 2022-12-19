function longestConsecutive(nums: number[]): number {
   const uniqueNums = new Set<number>(nums);
   let maxSequence = 0;

   for (const num of nums) {
      if (!uniqueNums.has(num - 1)) {
         let current = num;
         let sequence = 0;
         while (uniqueNums.has(current)) {
            sequence++;
            current++;
         }

         maxSequence = Math.max(maxSequence, sequence);
      }
   }

   return maxSequence;
}

export { longestConsecutive };
