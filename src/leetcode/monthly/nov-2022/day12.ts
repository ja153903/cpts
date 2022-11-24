import { PriorityQueue } from '~/utility/priority-queue';

type PQType = InstanceType<typeof PriorityQueue<number>>;

class MedianFinder {
  // we can use two heaps here
  // we have one min heap
  // and one max heap
  // the min heap will hold the largest values
  // the max heap will hold the smallest values
  // the min heap of greater values will hold at most 1 more value
  // than the max heap
  private minHeapOfLargerValues: PQType;
  private maxHeapOfSmallerValues: PQType;

  constructor() {
    this.minHeapOfLargerValues = new PriorityQueue<number>((a, b) => a < b);
    this.maxHeapOfSmallerValues = new PriorityQueue<number>((a, b) => a > b);
  }

  addNum(num: number): void {
    const minHeapSize = this.minHeapOfLargerValues.size;
    const maxHeapSize = this.maxHeapOfSmallerValues.size;

    if (maxHeapSize >= minHeapSize) {
      this.maxHeapOfSmallerValues.insert(num);

      const largestSmallestValue = this.maxHeapOfSmallerValues.remove();
      if (largestSmallestValue != null) {
        this.minHeapOfLargerValues.insert(largestSmallestValue);
      }
    } else {
      this.minHeapOfLargerValues.insert(num);

      const smallestLargestValue = this.minHeapOfLargerValues.remove();
      if (smallestLargestValue) {
        this.maxHeapOfSmallerValues.insert(smallestLargestValue);
      }
    }
  }

  findMedian(): number {
    // if the heaps have the same size, then we divide by 2
    // otherwise we grab the value from the minheap of larger values
    const minHeapSize = this.minHeapOfLargerValues.size;
    const maxHeapSize = this.maxHeapOfSmallerValues.size;

    if (minHeapSize === maxHeapSize) {
      const minHeapMaxValue = this.minHeapOfLargerValues.peek();
      const maxHeapMinValue = this.maxHeapOfSmallerValues.peek();

      if (minHeapMaxValue != null && maxHeapMinValue != null) {
        return (minHeapMaxValue + maxHeapMinValue) / 2;
      }

      return -1;
    } else {
      const minHeapMaxValue = this.minHeapOfLargerValues.peek();

      return minHeapMaxValue != null ? minHeapMaxValue : -1;
    }
  }
}

export { MedianFinder };
