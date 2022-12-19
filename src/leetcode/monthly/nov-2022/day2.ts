// NOTE: The BFS Solution that we have here will time out
function minMutation(start: string, end: string, bank: string[]): number {
   const uniqueBank = new Set<string>(bank);

   if (!uniqueBank.has(end)) {
      return -1;
   }

   const queue: [string, number][] = [[start, 0]];

   while (queue.length > 0) {
      const front = queue.shift();
      if (front) {
         const [gene, numMutations] = front;

         if (gene === end) {
            return numMutations;
         }

         for (let i = 0; i < gene.length; i++) {
            const before = gene.substring(0, i);
            const after = gene.substring(i + 1);

            for (const ch of 'ACGT') {
               const reconstructedGene = `${before}${ch}${after}`;

               if (uniqueBank.has(reconstructedGene)) {
                  queue.push([reconstructedGene, numMutations + 1]);
                  uniqueBank.delete(reconstructedGene);
               }
            }
         }
      }
   }

   return -1;
}

export { minMutation };
