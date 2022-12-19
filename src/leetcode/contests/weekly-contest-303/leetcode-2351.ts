function repeatedCharacter(s: string): string {
   const unique: Set<string> = new Set();

   for (const ch of s) {
      if (unique.has(ch)) {
         return ch;
      }

      unique.add(ch);
   }

   return '';
}

export { repeatedCharacter };
