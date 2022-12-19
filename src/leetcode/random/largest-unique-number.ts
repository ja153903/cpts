function largestUniqueNumber(nums: number[]): number {
   const frequency = new Map<number, number>();
   for (const num of nums) {
      frequency.set(num, (frequency.get(num) ?? 0) + 1);
   }

   let maxValue = -1;

   for (const [key, value] of frequency.entries()) {
      if (value === 1) {
         maxValue = Math.max(maxValue, key);
      }
   }

   return maxValue;
}

export { largestUniqueNumber };
