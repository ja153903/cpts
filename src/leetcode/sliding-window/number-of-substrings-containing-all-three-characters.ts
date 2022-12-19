// Brute Force Solution would be to
// go through every possible substring
// and check if we have one of the three
// This solution costs O(n^2)
// The obvious optimization would be to use a sliding window
// but the window size is unbounded
function numberOfSubstrings(s: string): number {
   let result = 0;
   let start = 0;
   let count = 0;

   const freq = [0, 0, 0];

   for (let j = 0; j < s.length; j++) {
      freq[s[j].charCodeAt(0) - 97]++;

      // 'abcabc'
      // j = 0, [1, 0, 0], result = 0
      // j = 1, [1, 1, 0], result = 0
      // j = 2, [1, 1, 1] => [0, 1, 1], i = 1, result = 1
      // j = 3, [1, 1, 1] => [1, 0, 1], i = 2, result = 3
      // j = 4, [1, 1, 1] => [1, 1, 0], i = 3, result = 6
      // j = 5, [1, 1, 1] => [0, 1, 1], i = 4, result = 10
      while (freq.every((value) => value > 0)) {
         freq[s[start].charCodeAt(0) - 97]--;
         start += 1;
         // increment the count every time we find a possible substring
         count += 1;
      }

      // we add the previous count to the result
      // we keep adding how large this count gets
      // so that we can add every possible substring
      result += count;
   }

   return result;
}

export { numberOfSubstrings };
