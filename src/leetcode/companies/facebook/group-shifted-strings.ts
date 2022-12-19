function groupStrings(strings: string[]): string[][] {
   const groups = new Map<number, string[]>();
   const result: string[][] = [];

   for (const word of strings) {
      const len = word.length;

      if (!groups.has(len)) {
         groups.set(len, []);
      }

      groups.get(len)?.push(word);
   }

   for (const group of groups.values()) {
      const subGroups = new Map<string, string[]>();

      for (let i = 0; i < group.length; i++) {
         // This was the crux of the problem
         // Finding the appropriate key solves us this problem easily
         const key = getSubGroupKey(group[i]);
         if (!subGroups.has(key)) {
            subGroups.set(key, []);
         }

         subGroups.get(key)?.push(group[i]);
      }

      for (const subGroup of subGroups.values()) {
         result.push(subGroup);
      }
   }

   return result;
}

function getSubGroupKey(word: string): string {
   const parts = word.split('').map((ch) => ch.charCodeAt(0) - 97);
   const diffs: number[] = [];

   for (let i = 1; i < parts.length; i++) {
      const diff = parts[i] - parts[i - 1];
      diffs.push(diff < 0 ? diff + 26 : diff);
   }

   return diffs.map((num) => num.toString()).join(',');
}

export { groupStrings };
