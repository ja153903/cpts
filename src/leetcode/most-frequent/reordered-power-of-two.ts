/**
 * You are given an integer n. We reorder the digits in any
 * order (including the original order) such that the leading
 * digit is not zero.
 *
 * Return true iff we can do this such that the resulting number
 * is a power of two
 *
 * This solution should timeout because it's O(2^n)
 * TODO: Figure out what the optimal solution should be
 */
function reorderedPowerOf2(n: number): boolean {
   let reorderings = generateAllPossibleReorderings(n);
   reorderings = reorderings.filter((ch) => !ch.startsWith('0'));

   if (!reorderings.length) {
      return false;
   }

   // check if there exists any power of two.
   return reorderings
      .map((num) => parseInt(num))
      .some((num) => isPowerOfTwo(num));
}

function isPowerOfTwo(n: number): boolean {
   return Math.log2(n) % 1 === 0;
}

function generateAllPossibleReorderings(n: number): string[] {
   const result = [] as string[];

   // we can try a backtracking result
   const chars = n.toString().split('');

   backtrack(chars, [], result, new Set());

   return result;
}

function backtrack(
   chars: string[],
   current: string[],
   result: string[],
   visited: Set<number> // keep track of visited indices
) {
   if (current.length === chars.length) {
      result.push(current.join(''));
   } else {
      for (let i = 0; i < chars.length; i++) {
         if (visited.has(i)) {
            continue;
         }

         visited.add(i);
         current.push(chars[i]);
         backtrack(chars, current, result, visited);
         current.pop();
         visited.delete(i);
      }
   }
}

export { reorderedPowerOf2 };
