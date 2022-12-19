function findAndReplacePattern(words: string[], pattern: string): string[] {
   return words.filter((word) => isBijection(word, pattern));
}

function isBijection(word: string, pattern: string): boolean {
   const aToB: Map<string, string> = new Map();
   const bToA: Map<string, string> = new Map();

   for (let i = 0; i < word.length; i++) {
      const a: string = word[i];
      const b: string = pattern[i];

      if (aToB.has(a) && aToB.get(a) !== b) {
         return false;
      }

      if (bToA.has(b) && bToA.get(b) !== a) {
         return false;
      }

      aToB.set(a, b);
      bToA.set(b, a);
   }

   return true;
}

export { findAndReplacePattern, isBijection };
