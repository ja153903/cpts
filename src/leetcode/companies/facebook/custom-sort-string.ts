function customSortString(order: string, s: string): string {
   // break s up into map where key is char and value is frequency
   const frequency = new Map<string, number>();

   for (const ch of s) {
      frequency.set(ch, (frequency.get(ch) ?? 0) + 1);
   }

   let result = '';

   for (const ch of order) {
      if (frequency.has(ch)) {
         let count = frequency.get(ch) ?? 0;
         while (count > 0) {
            result += ch;
            count--;
         }
         frequency.delete(ch);
      }
   }

   // if there are any left over values, then we should just prepend them
   for (const [key, value] of frequency.entries()) {
      result = key.repeat(value) + result;
   }

   return result;
}

export { customSortString };
