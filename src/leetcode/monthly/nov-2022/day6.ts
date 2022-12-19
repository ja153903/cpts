function orderlyQueue(s: string, k: number): string {
   // if k is greater than 1, then we can reconstruct the string
   // such that we can end up generating any permutation
   // so we just sort here.
   if (k > 1) {
      const chars = s.split('').sort((a, b) => a.localeCompare(b));
      return chars.join('');
   }

   // if k is 1, then we just go through all possible states
   let minString = s;

   for (let i = 0; i < s.length; i++) {
      const pivoted = `${s.substring(i)}${s.substring(0, i)}`;
      if (pivoted < minString) {
         minString = pivoted;
      }
   }

   return minString;
}

export { orderlyQueue };
