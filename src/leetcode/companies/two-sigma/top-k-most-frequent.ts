import { PriorityQueue } from '~/leetcode/data-structures/priority-queue';

type QueueNode = { word: string; frequency: number };

function topKFrequent(words: string[], k: number): string[] {
   const pq = new PriorityQueue<QueueNode>((a, b) => {
      if (a.frequency === b.frequency) {
         return a.word > b.word;
      }

      return a.frequency < b.frequency;
   });
   const frequency = new Map<string, number>();

   for (const word of words) {
      frequency.set(word, (frequency.get(word) ?? 0) + 1);
   }

   for (const [word, freq] of frequency.entries()) {
      pq.insert({ word, frequency: freq });
      if (pq.size > k) {
         pq.remove();
      }
   }

   const result = [] as string[];

   while (pq.size > 0) {
      const { word } = pq.remove() as QueueNode;
      result.unshift(word);
   }

   return result;
}

export { topKFrequent };
