function isSameSet(a: Set<string>, b: Set<string>): boolean {
   return a.size === b.size && [...a].every((item) => b.has(item));
}

function similarPairs(words: string[]): number {
   let result = 0;

   const seen = new Map<string, Set<string>>();

   for (let i = 0; i < words.length; i++) {
      if (!seen.has(words[i])) {
         seen.set(words[i], new Set(words[i].split('')));
      }
      const a = seen.get(words[i])!;

      for (let j = i + 1; j < words.length; j++) {
         if (!seen.has(words[j])) {
            seen.set(words[j], new Set(words[j].split('')));
         }
         const b = seen.get(words[j])!;

         if (isSameSet(a, b)) {
            result++;
         }
      }
   }

   return result;
}

export { similarPairs };
