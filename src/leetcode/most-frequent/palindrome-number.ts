function isPalindrome(x: number): boolean {
   if (x < 0) {
      return false;
   }

   let reversed = 0;
   let copy = x;

   while (x > 0) {
      reversed = reversed * 10 + (x % 10);
      x = Math.floor(x / 10);
   }

   return reversed === copy;
}

export { isPalindrome };
