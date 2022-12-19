import { PriorityQueue } from '~/leetcode/data-structures/priority-queue';

class MedianFinder {
  // Note that the max heap of small numbers should have at most k elements
  private maxHeapOfSmallerNumbers: PriorityQueue<number>;
  // Note that the min heap of large numbers should have at most k + 1 elements
  private minHeapOfLargerNumbers: PriorityQueue<number>;

  constructor() {
    this.maxHeapOfSmallerNumbers = new PriorityQueue<number>((a, b) => a > b);
    this.minHeapOfLargerNumbers = new PriorityQueue<number>((a, b) => a < b);
  }

  addNum(num: number): void {
    const maxHeapSize = this.maxHeapOfSmallerNumbers.size;
    const minHeapSize = this.minHeapOfLargerNumbers.size;

    if (maxHeapSize >= minHeapSize) {
      // if at any time the size of maxHeap is greater than minHeap,
      // then we should remove the max value from the minheap
      this.maxHeapOfSmallerNumbers.insert(num);
      this.minHeapOfLargerNumbers.insert(
        this.maxHeapOfSmallerNumbers.remove() as number
      );
    } else {
      this.minHeapOfLargerNumbers.insert(num);
      this.maxHeapOfSmallerNumbers.insert(
        this.minHeapOfLargerNumbers.remove() as number
      );
    }
  }

  findMedian(): number {
    const maxHeapSize = this.maxHeapOfSmallerNumbers.size;
    const minHeapSize = this.minHeapOfLargerNumbers.size;

    if (minHeapSize > maxHeapSize) {
      return this.minHeapOfLargerNumbers.peek() as number;
    }

    const left = this.maxHeapOfSmallerNumbers.peek() as number;
    const right = this.minHeapOfLargerNumbers.peek() as number;

    return (left + right) / 2;
  }
}

export { MedianFinder };
