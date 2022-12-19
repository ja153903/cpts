import { PriorityQueue } from '~/leetcode/data-structures/priority-queue';

function lastStoneWeight(stones: number[]): number {
   const pq = PriorityQueue.heapify<number>(stones, (a, b) => a > b);

   while (pq.size > 1) {
      const first = pq.remove() as number;
      const second = pq.remove() as number;

      if (first === second) {
         continue;
      }

      pq.insert(first - second);
   }

   return pq.remove() as number;
}

export { lastStoneWeight };
