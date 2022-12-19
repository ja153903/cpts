function checkInclusion(s1: string, s2: string): boolean {
   // permutation means that we should make sure that this is a contiguous substring
   // this means that if our current window size is greater than the length of s1,
   // we should move the start pointer of the sliding window
   //
   // Algo:
   // 1. create frequency counter for s1
   // 2. we iterate over s2.
   // 3. as we iterate if we find a character that exists we decrement from frequency
   // 4. when our window reaches max length or greater, we move start pointer
   const frequency = createFrequency(s1);

   let start = 0;
   let targetLength = s1.length;

   for (let end = 0; end < s2.length; end++) {
      const endIndex = s2[end].charCodeAt(0) - 97;
      if (frequency[endIndex] > 0) {
         targetLength--;
      }

      frequency[endIndex]--;

      if (targetLength === 0) {
         return true;
      }

      const startIndex = s2[start].charCodeAt(0) - 97;

      if (end - start + 1 === s1.length) {
         if (frequency[startIndex] >= 0) {
            targetLength++;
         }

         frequency[startIndex]++;
         start++;
      }
   }

   return false;
}

function createFrequency(s: string): number[] {
   const frequency = new Array<number>(26).fill(0);

   for (const ch of s) {
      const index = ch.charCodeAt(0) - 97;
      frequency[index]++;
   }

   return frequency;
}

export { checkInclusion };
