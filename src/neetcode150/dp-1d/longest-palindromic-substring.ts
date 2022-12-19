// This solution takes at most O(n^2) work which
// is why we can consider this an optimization
function longestPalindrome(s: string): string {
   let maxSize = 0;
   let left = 0;
   let right = 0;

   for (let i = 0; i < s.length; i++) {
      const { left: evenLeft, right: evenRight } = extend(s, i, i);

      if (evenRight - evenLeft + 1 > maxSize) {
         maxSize = evenRight - evenLeft + 1;
         left = evenLeft;
         right = evenRight;
      }

      const { left: oddLeft, right: oddRight } = extend(s, i, i + 1);
      if (oddRight - oddLeft + 1 > maxSize) {
         maxSize = oddRight - oddLeft + 1;
         left = oddLeft;
         right = oddRight;
      }
   }

   return s.substring(left, right + 1);
}

function extend(
   s: string,
   left: number,
   right: number
): { left: number; right: number } {
   if (s[left] !== s[right]) {
      return { left, right: left };
   }

   let minLeft = left;
   let maxRight = right;

   while (left >= 0 && right < s.length && s[left] === s[right]) {
      minLeft = left;
      maxRight = right;

      left--;
      right++;
   }

   return { left: minLeft, right: maxRight };
}

// BF solution takes O(n^3) in the worst case
// By this logic, we can try to optimize this in O(n^2)
function bruteForce(s: string): string {
   let maxLength = 0;
   let maxString = '';

   for (let i = 0; i < s.length; i++) {
      for (let j = 0; j < s.length; j++) {
         if (isPalindrome(s, i, j)) {
            if (i - j + 1 > maxLength) {
               maxLength = i - j + 1;
               maxString = s.substring(i, j + 1);
            }
         }
      }
   }

   return maxString;
}

function isPalindrome(s: string, start: number, end: number): boolean {
   for (let i = start, j = end; i < j; i++, j--) {
      if (s[i] !== s[j]) {
         return false;
      }
   }

   return true;
}

export { longestPalindrome, bruteForce };
