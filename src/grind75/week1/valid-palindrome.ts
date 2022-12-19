import { isAlnum, isUpper } from '~/utility/string';

function isPalindrome(s: string): boolean {
   const alnum = s
      .split('')
      .filter((ch) => isAlnum(ch))
      .map((ch) => {
         if (isUpper(ch)) {
            return ch.toLowerCase();
         }

         return ch;
      });

   for (let i = 0, j = alnum.length - 1; i < j; i++, j--) {
      if (alnum[i] !== alnum[j]) {
         return false;
      }
   }

   return true;
}

export { isPalindrome };
