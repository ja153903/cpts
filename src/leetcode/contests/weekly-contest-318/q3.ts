import { PriorityQueue } from '~/utility/priority-queue';

// TODO: Figure out how to solve this problem
function totalCost(costs: number[], k: number, candidates: number): number {
   // the initial idea i had with 2 priority queues seems to be the way forward
   const pq1 = new PriorityQueue<number>((a, b) => a < b);
   const pq2 = new PriorityQueue<number>((a, b) => a < b);

   let cost = 0;
   let count = 0;
   let left = 0;
   let right = costs.length - 1;

   while (count < k) {
      while (pq1.size < candidates && left <= right) {
         pq1.insert(costs[left]);
         left++;
      }

      while (pq2.size < candidates && left <= right) {
         pq2.insert(costs[right]);
         right--;
      }

      const ltr = pq1.peek() ?? Number.POSITIVE_INFINITY;
      const rtl = pq2.peek() ?? Number.POSITIVE_INFINITY;

      if (ltr <= rtl) {
         cost += ltr;
         pq1.remove();
      } else {
         cost += rtl;
         pq2.remove();
      }

      count++;
   }

   return cost;
}

export { totalCost };
