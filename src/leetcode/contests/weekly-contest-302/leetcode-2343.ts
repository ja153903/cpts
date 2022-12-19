function smallestTrimmedNumbers(nums: string[], queries: number[][]): number[] {
   const result: number[] = [];
   const seen: Map<string, bigint> = new Map();

   for (const [kth, n] of queries) {
      const trimmed = nums.map((num, index) => {
         const hash = `${num},${n}`;
         if (!seen.has(hash)) {
            seen.set(hash, trim(num, n));
         }

         return {
            num: seen.get(hash)!,
            index,
         };
      });

      trimmed.sort((a, b) => {
         if (a.num === b.num) {
            return a.index - b.index;
         }

         return a.num < b.num ? -1 : 1;
      });

      result.push(trimmed[kth - 1].index);
   }

   return result;
}

function trim(s: string, n: number): bigint {
   if (n > s.length) {
      return BigInt(0);
   }

   if (n === s.length) {
      return BigInt(s);
   }

   return BigInt(s.substring(s.length - n));
}

export { smallestTrimmedNumbers };
