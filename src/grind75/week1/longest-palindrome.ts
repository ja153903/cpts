// Note that a palindrome has an even count except for 1 value that might be odd
function longestPalindrome(s: string): number {
   let length = 0;

   const charsSeen = new Set<string>();

   for (const ch of s) {
      if (charsSeen.has(ch)) {
         charsSeen.delete(ch);
         length++;
      } else {
         charsSeen.add(ch);
      }
   }

   if (charsSeen.size > 0) {
      return length * 2 + 1;
   }

   return length * 2;
}

export { longestPalindrome };
