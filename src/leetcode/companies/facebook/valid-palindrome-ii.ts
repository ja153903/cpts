function validPalindrome(s: string): boolean {
   // if we choose to delete a character will we get a palindrome?
   let left = 0;
   let right = s.length - 1;

   while (left <= right) {
      if (s[left] === s[right]) {
         left++;
         right--;
      } else {
         return (
            isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1)
         );
      }
   }

   return true;
}

function isPalindrome(s: string, start: number, end: number): boolean {
   if (start >= s.length || end < 0) {
      return false;
   }

   let left = start;
   let right = end;

   while (left < right) {
      if (s[left] !== s[right]) {
         return false;
      }

      left++;
      right--;
   }

   return true;
}

export { validPalindrome };
