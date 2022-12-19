import { PriorityQueue } from '~/leetcode/data-structures/priority-queue';

// How is this O(n) you ask?
// Insertion into the priority queue is O(log k)
// So inserting k elements into the priority queue is O(k log k)
// The assumption here is that k < n. So the total run time is O (n * log k)
// and given that log k < n we can treat it as if its a constant such that
// the runtime is O(n)
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
