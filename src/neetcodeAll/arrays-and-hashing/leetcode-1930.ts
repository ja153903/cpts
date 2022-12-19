function countPalindromicSubsequence(s: string): number {
   let result = 0;
   const indicesByChar = new Map<string, number[]>();

   for (let i = 0; i < s.length; i++) {
      if (!indicesByChar.has(s[i])) {
         indicesByChar.set(s[i], []);
      }

      indicesByChar.get(s[i])?.push(i);
   }

   for (const [_char, indices] of indicesByChar.entries()) {
      const first = indices[0];
      const last = indices[indices.length - 1];

      if (first < last) {
         result += new Set<string>(s.substring(first + 1, last).split('')).size;
      }
   }

   return result;
}

export { countPalindromicSubsequence };
