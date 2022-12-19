function isPalindrome(s: string): boolean {
   const chars = s
      .split('')
      .filter((ch) => {
         const charCode = ch.charCodeAt(0);
         const isLowerAlpha = 97 <= charCode && charCode <= 122;
         const isUpperAlpha = 65 <= charCode && charCode <= 90;
         const isNum = !isNaN(parseInt(ch));

         return isLowerAlpha || isUpperAlpha || isNum;
      })
      .map((ch) => ch.toLowerCase())
      .join('');

   for (let i = 0, j = chars.length - 1; i < j; i++, j--) {
      if (chars[i] !== chars[j]) {
         return false;
      }
   }

   return true;
}

export { isPalindrome };
