/**
 * Given two strings s and p, return an array of all the start indices of p's anagrams in s.
 * You may return the answer in any order.
 *
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 */
function findAnagrams(s: string, p: string): number[] {
   const frequency = new Map<string, number>();
   for (const ch of p) {
      frequency.set(ch, (frequency.get(ch) ?? 0) + 1);
   }

   const result: number[] = [];

   // target will be the number of unique keys
   // note that we can't just use the length as the target here
   // because suppose that the target length is 3 where p = "abc", but we find a target length of 3 where the string contains bbb
   // a typical algorithm might find this to be a valid solution because we check the existence of the key in the map
   // but not necessarily checking the appropriate frequency.
   let target = frequency.size;
   let start = 0,
      end = 0;

   while (end < s.length) {
      // if the character exists, then decrease target and the current frequency
      if (frequency.has(s[end])) {
         frequency.set(s[end], frequency.get(s[end])! - 1);
         if (frequency.get(s[end])! === 0) {
            target--;
         }
      }

      while (target === 0) {
         if (frequency.has(s[start])) {
            frequency.set(s[start], frequency.get(s[start])! + 1);
            if (frequency.get(s[start])! > 0) {
               target++;
            }
         }

         if (end - start + 1 === p.length) {
            result.push(start);
         }

         start++;
      }

      end++;
   }

   return result;
}

export { findAnagrams };
