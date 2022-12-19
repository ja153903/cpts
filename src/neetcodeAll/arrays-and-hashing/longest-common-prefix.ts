function longestCommonPrefix(strs: string[]): string {
   let result = '';

   const minStrLength = Math.min(...strs.map((str) => str.length));

   for (let i = 0; i < minStrLength; i++) {
      const currentChar = strs[0][i];

      for (let j = 1; j < strs.length; j++) {
         if (strs[j][i] !== currentChar) {
            return result;
         }
      }

      result += currentChar;
   }

   return result;
}

export { longestCommonPrefix };
