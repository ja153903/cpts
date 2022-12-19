function balancedString(s: string): number {
   const frequency = new Map<string, number>();
   const n = s.length;
   let result = n;
   let start = 0;
   let k = Math.floor(n / 4);

   // Create a frequency map
   for (let i = 0; i < n; i++) {
      frequency.set(s[i], (frequency.get(s[i]) ?? 0) + 1);
   }

   // NOTE: a string is balanced if the desired character appears at least k times

   // Use sliding window
   for (let end = 0; end < n; end++) {
      // Decrease frequency when we see value
      frequency.set(s[end], frequency.get(s[end])! - 1);

      // if we're iterating and all the frequencies are at most k
      // then we should move the window forward while capturing the current
      // window size.
      while (
         start < n &&
         (frequency.get('Q') ?? 0) <= k &&
         (frequency.get('W') ?? 0) <= k &&
         (frequency.get('E') ?? 0) <= k &&
         (frequency.get('R') ?? 0) <= k
      ) {
         result = Math.min(result, end - start + 1);
         frequency.set(s[start], (frequency.get(s[start]) ?? 0) + 1);
         start++;
      }
   }

   return result;
}

export { balancedString };
