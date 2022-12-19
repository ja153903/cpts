function groupAnagrams(strs: string[]): string[][] {
   const byGroup = new Map<string, string[]>();

   for (const str of strs) {
      const s = sortString(str);
      if (!byGroup.has(s)) {
         byGroup.set(s, []);
      }

      byGroup.get(s)?.push(str);
   }

   return [...byGroup.values()];
}

function sortString(s: string): string {
   const chars = s.split('').sort((a, b) => a.localeCompare(b));
   return chars.join('');
}

export { groupAnagrams };
