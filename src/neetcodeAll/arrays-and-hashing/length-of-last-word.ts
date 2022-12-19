function lengthOfLastWord(s: string): number {
   let trimmed = s.trim();
   let chars = trimmed.split(' ');

   for (let i = chars.length - 1; i >= 0; i--) {
      if (chars[i].length === 0) {
         continue;
      }

      return chars[i].length;
   }

   return 0;
}

export { lengthOfLastWord };
