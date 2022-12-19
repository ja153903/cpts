class MinHeapNode {
   priority: number;
   value: number;

   constructor(priority: number, value: number) {
      this.priority = priority;
      this.value = value;
   }
}

class MinHeap {
   heap: MinHeapNode[];

   constructor(array: MinHeapNode[] = []) {
      this.heap = this.buildHeap(array);
   }

   buildHeap(array: MinHeapNode[]) {
      this.heap = [];

      for (const item of array) {
         this.insert(item);
      }

      return this.heap;
   }

   siftDown(i: number) {
      if (i === this.heap.length - 1) {
         return;
      }

      let smallest = i;

      const left = this.leftChild(i);
      const right = this.rightChild(i);

      if (
         left < this.heap.length &&
         this.heap[left].priority < this.heap[smallest].priority
      ) {
         smallest = left;
      }

      if (
         right < this.heap.length &&
         this.heap[right].priority < this.heap[smallest].priority
      ) {
         smallest = right;
      }

      if (smallest !== i) {
         const tmp = this.heap[i];
         this.heap[i] = this.heap[smallest];
         this.heap[smallest] = tmp;

         this.siftDown(smallest);
      }
   }

   siftUp(i: number) {
      while (
         i > 0 &&
         this.heap[this.parent(i)].priority > this.heap[i].priority
      ) {
         const parent = this.parent(i);

         const tmp = this.heap[i];
         this.heap[i] = this.heap[parent];
         this.heap[parent] = tmp;

         i = parent;
      }
   }

   peek(): MinHeapNode | null {
      if (this.heap.length) {
         return this.heap[0];
      }

      return null;
   }

   remove() {
      if (this.heap.length === 1) {
         return this.heap.pop();
      }

      const min = this.peek();

      this.heap[0] = this.heap[this.heap.length - 1];
      this.heap.pop();

      this.siftDown(0);

      return min;
   }

   insert(value: MinHeapNode) {
      this.heap.push(value);
      if (this.heap.length > 1) {
         this.siftUp(this.heap.length - 1);
      }
   }

   parent(i: number): number {
      return Math.floor((i - 1) / 2);
   }

   leftChild(i: number): number {
      return 2 * i + 1;
   }

   rightChild(i: number): number {
      return 2 * i + 2;
   }
}

class NumberContainers {
   private container: Map<number, number>;
   private minHeapMap: Map<number, MinHeap>;

   constructor() {
      this.container = new Map();
      this.minHeapMap = new Map();
   }

   change(index: number, number: number): void {
      this.container.set(index, number);
      if (!this.minHeapMap.has(number)) {
         this.minHeapMap.set(number, new MinHeap());
      }

      this.minHeapMap.get(number)?.insert(new MinHeapNode(index, number));
   }

   find(number: number): number {
      const heap = this.minHeapMap.get(number) ?? null;
      if (!heap) {
         return -1;
      }

      while (heap.heap.length) {
         const { priority, value } = heap.peek()!;
         if (
            this.container.has(priority) &&
            this.container.get(priority) === value
         ) {
            return priority;
         }

         heap.remove();
      }

      return -1;
   }
}

export default NumberContainers;
