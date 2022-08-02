import { PriorityQueue } from '../data-structures/priority-queue';

function kthSmallest(matrix: number[][], k: number): number {
  // one solution we can implement is to create a max heap
  // until there are only k elements left
  const maxHeap = new PriorityQueue<number>((a, b) => a > b);

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix.length; col++) {
      maxHeap.insert(matrix[row][col]);
      if (maxHeap.size > k) {
        maxHeap.remove();
      }
    }
  }

  return maxHeap.peek() ?? Number.POSITIVE_INFINITY;
}

export { kthSmallest };
