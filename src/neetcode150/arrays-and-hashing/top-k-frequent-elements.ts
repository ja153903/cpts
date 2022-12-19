function topKFrequent(nums: number[], k: number): number[] {
   const frequency = createCounter(nums);

   const items = [...frequency.keys()].sort(
      (a, b) => frequency.get(b)! - frequency.get(a)!
   );

   return items.splice(0, k);
}

function createCounter(nums: number[]): Map<number, number> {
   const frequency = new Map<number, number>();

   for (const num of nums) {
      frequency.set(num, (frequency.get(num) ?? 0) + 1);
   }

   return frequency;
}

export { topKFrequent };
