function merge(intervals: number[][]): number[][] {
   if (intervals.length === 0) {
      return [];
   }

   const result: number[][] = [];

   intervals.sort((a, b) => a[0] - b[0]);
   result.push(intervals[0]);

   for (let i = 1; i < intervals.length; i++) {
      const top = result.at(-1) as number[];
      const current = intervals[i];
      // suppose that we're comparing [0, 4] and [2, 3]
      // if top[1] >= current[0] then we have to consider merging
      if (top[1] >= current[0]) {
         top[1] = Math.max(top[1], current[1]);
      } else {
         result.push(current);
      }
   }

   return result;
}

export { merge };
