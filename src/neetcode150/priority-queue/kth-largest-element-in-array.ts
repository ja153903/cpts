import { PriorityQueue } from '~/leetcode/data-structures/priority-queue';

function findKthLargest(nums: number[], k: number): number {
  const pq = new PriorityQueue<number>((a: number, b: number) => a < b);

  for (const num of nums) {
    pq.insert(num);
    if (pq.size > k) {
      pq.remove();
    }
  }

  return pq.peek() as number;
}

export { findKthLargest };
