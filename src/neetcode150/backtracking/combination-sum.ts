function combinationSum(candidates: number[], target: number): number[][] {
   const result: number[][] = [];

   backtrack(candidates, target, result, [], 0);

   return result;
}

function backtrack(
   candidates: number[],
   target: number,
   result: number[][],
   current: number[],
   start: number
) {
   if (target === 0) {
      result.push([...current]);
      return;
   }

   for (let i = start; i < candidates.length; i++) {
      const num = candidates[i];

      if (target - num >= 0) {
         backtrack(candidates, target - num, result, current.concat(num), i);
      }
   }
}

export { combinationSum };
