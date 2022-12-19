function bestHand(ranks: number[], suits: string[]): string {
   const rankBySuit: Map<string, Set<number>> = new Map();
   const uniqueRanks: Set<number> = new Set(ranks);

   for (let i = 0; i < 5; i++) {
      if (rankBySuit.has(suits[i])) {
         rankBySuit.get(suits[i])?.add(ranks[i]);
      } else {
         rankBySuit.set(suits[i], new Set([ranks[i]]));
      }
   }

   const flushes = [...rankBySuit.values()].filter((set) => set.size === 5);
   if (flushes.length) {
      return 'Flush';
   }

   let maxOccurences = 0;

   for (const rank of uniqueRanks) {
      let occurences = 0;

      for (const set of rankBySuit.values()) {
         if (set.has(rank)) {
            occurences++;
         }
      }

      maxOccurences = Math.max(maxOccurences, occurences);
   }

   if (maxOccurences >= 3) {
      return 'Three of a Kind';
   }

   if (maxOccurences === 2) {
      return 'Pair';
   }

   return 'High Card';
}

export { bestHand };
