function minWindow(s: string, t: string): string {
   const frequency = createFrequency(t);

   let start = 0;

   let minWindowLength = Number.POSITIVE_INFINITY;
   let minWindowStart = 0;

   let target = t.length;

   for (let end = 0; end < s.length; end++) {
      const endPointer = s[end].charCodeAt(0);

      if (frequency[endPointer] > 0) {
         target--;
      }

      frequency[endPointer]--;

      while (target === 0) {
         const startPointer = s[start].charCodeAt(0);

         const windowSize = end - start + 1;

         if (windowSize < minWindowLength) {
            minWindowLength = windowSize;
            minWindowStart = start;
         }

         if (frequency[startPointer] >= 0) {
            target++;
         }

         frequency[startPointer]++;
         start++;
      }
   }

   if (minWindowLength === Number.POSITIVE_INFINITY) {
      return '';
   }

   return s.substring(minWindowStart, minWindowStart + minWindowLength);
}

function createFrequency(s: string): number[] {
   // we can create a bigger array here since we're not just accounting
   // for lowercase, but we're also considering uppercase values
   const frequency = new Array<number>(128).fill(0);

   for (const ch of s) {
      const index = ch.charCodeAt(0);
      frequency[index]++;
   }

   return frequency;
}

export { minWindow };
