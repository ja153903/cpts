function longestPalindrome(words: string[]): number {
   // use map to keep track of words we've seen along with the count
   // if the inverse exists in the map, then we add them to our result
   let result = 0;
   const seen = new Map<string, number>();

   for (const word of words) {
      const inverse = `${word[1]}${word[0]}`;
      const inverseCount = seen.get(inverse) ?? 0;

      if (inverseCount === 0) {
         if (!seen.has(word)) {
            seen.set(word, 1);
         } else {
            seen.set(word, (seen.get(word) ?? 0) + 1);
         }
      } else {
         result += 4;
         seen.set(inverse, inverseCount - 1);
         if (inverseCount - 1 === 0) {
            seen.delete(inverse);
         }
      }
   }

   // check for any key that contains repeated value
   for (const key of seen.keys()) {
      const inverse = `${key[1]}${key[0]}`;
      if (key === inverse) {
         result += 2;
         break;
      }
   }

   return result;
}

export { longestPalindrome };
