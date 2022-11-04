import { PriorityQueue } from '~/leetcode/data-structures/priority-queue';

class SmallestInfiniteSet {
  unique: Set<number>;
  priorityQueue: PriorityQueue<number>;
  currentNumber: number;

  constructor() {
    this.unique = new Set();
    this.priorityQueue = new PriorityQueue((a, b) => a < b);
    this.currentNumber = 1;
  }

  popSmallest(): number {
    // if the priority queue is not empty, then
    // we can get the smallest value from the queue
    if (this.priorityQueue.size > 0) {
      const result = this.priorityQueue.remove();
      if (result !== null) {
        this.unique.delete(result);
        return result;
      }
    }

    // if the priority queue is empty, then we get the smallest
    // from the currentNumber that we've been incrementing
    const result = this.currentNumber;
    this.currentNumber++;

    return result;
  }

  addBack(num: number): void {
    if (this.unique.has(num) || num >= this.currentNumber) {
      return;
    }

    this.unique.add(num);
    this.priorityQueue.insert(num);
  }
}

export { SmallestInfiniteSet };
