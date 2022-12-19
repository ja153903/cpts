function longestCommonPrefix(words: string[]): string {
   let result = '';

   const minLength = Math.min(...words.map((str) => str.length));

   for (let i = 0; i < minLength; i++) {
      let current = '';

      for (const word of words) {
         if (current === '') {
            current = word[i];
         } else if (current !== word[i]) {
            return result;
         }
      }

      result += current;
   }

   return result;
}

export { longestCommonPrefix };
