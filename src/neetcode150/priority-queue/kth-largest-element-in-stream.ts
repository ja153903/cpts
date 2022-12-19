import { PriorityQueue } from '~/leetcode/data-structures/priority-queue';

class KthLargest {
   private priorityQueue: PriorityQueue<number>;
   private k: number;

   // to keep the kth largest, we need a min heap with k elements
   constructor(k: number, nums: number[]) {
      this.priorityQueue = new PriorityQueue((a: number, b: number) => a < b);
      this.k = k;

      nums.forEach((num) => {
         this.priorityQueue.insert(num);
         if (this.priorityQueue.size > k) {
            this.priorityQueue.remove();
         }
      });
   }

   add(val: number): number {
      this.priorityQueue.insert(val);
      if (this.priorityQueue.size > this.k) {
         this.priorityQueue.remove();
      }

      return this.priorityQueue.peek() as number;
   }
}

export { KthLargest };
