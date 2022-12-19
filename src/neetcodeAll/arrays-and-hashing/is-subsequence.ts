function isSubsequence(s: string, t: string): boolean {
   if (!s) {
      return true;
   }

   for (let i = 0; i < t.length; i++) {
      if (s[0] === t[i]) {
         const result = canFormSubsequence(s, t, i);
         if (result) {
            return true;
         }
      }
   }

   return false;
}

function canFormSubsequence(s: string, t: string, i: number): boolean {
   let j = 0;
   for (let start = i; start < t.length; start++) {
      if (s[j] === t[start]) {
         j++;
      }
   }

   return j === s.length;
}

export { isSubsequence };
