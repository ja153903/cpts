type Metadata = { website: string; timestamp: number };

function mostVisitedPattern(
   usernames: string[],
   timestamps: number[],
   websites: string[]
): string[] {
   // we can first try solving this using a brute force method
   // for each user we can group the sites they've visited
   // and store those

   const trackingByUsername = new Map<string, Metadata[]>();

   for (let i = 0; i < usernames.length; i++) {
      if (!trackingByUsername.has(usernames[i])) {
         trackingByUsername.set(usernames[i], []);
      }

      trackingByUsername
         .get(usernames[i])
         ?.push({ website: websites[i], timestamp: timestamps[i] });
   }

   for (const metadata of trackingByUsername.values()) {
      metadata.sort((a, b) => a.timestamp - b.timestamp);
   }

   // now that they're all sorted we can create a frequency counter of all
   // sequences of length 3

   const frequency = new Map<string, number>();

   for (const metadata of trackingByUsername.values()) {
      if (metadata.length < 3) {
         continue;
      }

      const visited = new Set<string>();

      for (let i = 0; i < metadata.length; i++) {
         for (let j = i + 1; j < metadata.length; j++) {
            for (let k = j + 1; k < metadata.length; k++) {
               const hash = [i, j, k]
                  .map((index) => metadata[index].website)
                  .join(',');

               if (!visited.has(hash)) {
                  visited.add(hash);
                  frequency.set(hash, (frequency.get(hash) ?? 0) + 1);
               }
            }
         }
      }
   }

   const maxFrequency = Math.max(...frequency.values());
   const candidates = [];

   for (const [key, value] of frequency.entries()) {
      if (value === maxFrequency) {
         candidates.push(key);
      }
   }

   candidates.sort();

   return candidates[0].split(',');
}

export { mostVisitedPattern };
