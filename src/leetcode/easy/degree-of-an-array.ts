function findShortestSubArray(nums: number[]): number {
   const frequency = new Map<number, number[]>();
   for (let i = 0; i < nums.length; i++) {
      if (!frequency.has(nums[i])) {
         frequency.set(nums[i], []);
      }

      frequency.get(nums[i])?.push(i);
   }

   let minLength = Number.POSITIVE_INFINITY;

   const absoluteMaxFreq = Math.max(
      ...[...frequency.values()].map((indices) => indices.length)
   );

   for (const indices of frequency.values()) {
      if (indices.length === absoluteMaxFreq) {
         minLength = Math.min(
            minLength,
            indices[indices.length - 1] - indices[0] + 1
         );
      }
   }

   return minLength;
}

export { findShortestSubArray };
