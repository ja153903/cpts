function majorityElement(nums: number[]): number {
   const freq = new Map<number, number>();

   for (const num of nums) {
      freq.set(num, (freq.get(num) ?? 0) + 1);
   }

   const MAJORITY = Math.floor(nums.length / 2);

   for (const [key, count] of freq.entries()) {
      if (count >= MAJORITY) {
         return key;
      }
   }

   // realistically, this should never happen
   return -1;
}

export { majorityElement };
