function combinationSum2(candidates: number[], target: number): number[][] {
   const result: number[][] = [];

   candidates.sort((a, b) => a - b);

   backtrack(candidates, target, result, [], 0);

   return result;
}

function backtrack(
   candidates: number[],
   target: number,
   result: number[][],
   path: number[],
   start: number
) {
   if (target < 0) {
      return;
   }

   if (target === 0) {
      result.push([...path]);
   }

   for (let i = start; i < candidates.length; i++) {
      // if the value is the same, then there's no need to work on this again
      if (i > start && candidates[i] === candidates[i - 1]) {
         continue;
      }

      if (target - candidates[i] >= 0) {
         path.push(candidates[i]);

         backtrack(candidates, target - candidates[i], result, path, i + 1);

         path.pop();
      }
   }
}

export { combinationSum2 };
