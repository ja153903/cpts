/**
 * The variance of a string is defined as the largest difference between the number of occurrences of any 2 characters present in the string.
 * Note the two characters may or may not be the same.
 *
 * Given a string s consisting of lowercase English letters only, return the largest variance possible among all substrings of s.
 *
 * A substring is a contiguous sequence of characters within a string.
 */
function largestVariance(s: string): number {
   // a hint I got here was to apply some variation of Kadane's algorithm
   // how would we apply kadane here?
   // we can keep increasing the size of the substring we're working with
   return -1;
}

// This problem in the worst case will take O(n^2 lg n)
// a pure optimization may take O(n^2)
function largestVarianceBruteForce(s: string): number {
   let variance = 0;

   // go through every possible substring
   for (let i = 0; i < s.length; i++) {
      const map = new Map<string, number>();

      for (let j = i; j < s.length; j++) {
         map.set(s[j], (map.get(s[j]) ?? 0) + 1);
         variance = Math.max(variance, getVariance([...map.values()]));
      }
   }

   return variance;
}

function getVariance(values: number[]): number {
   if (values.length < 2) {
      return 0;
   }

   values.sort((a, b) => a - b);

   return values[values.length - 1] - values[0];
}

export { largestVariance, largestVarianceBruteForce };
