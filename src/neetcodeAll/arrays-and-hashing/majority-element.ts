function majorityElement(nums: number[]): number {
   const frequency = new Map<number, number>();

   let maxCount = 0;

   for (const num of nums) {
      const count = frequency.get(num) ?? 0;
      frequency.set(num, count + 1);

      maxCount = Math.max(maxCount, count + 1);
   }

   for (const [key, value] of frequency.entries()) {
      if (value === maxCount) {
         return key;
      }
   }

   return -1;
}

export { majorityElement };
