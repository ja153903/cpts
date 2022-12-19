function longestConsecutive(nums: number[]): number {
   const uniqueNumbers = new Set<number>(nums);
   let result = 0;

   for (const num of nums) {
      if (!uniqueNumbers.has(num - 1)) {
         let current = num;
         let length = 0;

         while (uniqueNumbers.has(current)) {
            current++;
            length++;
         }

         result = Math.max(result, length);
      }
   }

   return result;
}

export { longestConsecutive };
