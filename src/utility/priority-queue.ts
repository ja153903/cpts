class PriorityQueue<T> {
   private queue: T[];
   private _comparator: (a: T, b: T) => boolean;

   // comparator is required
   constructor(comparator: (a: T, b: T) => boolean) {
      this.queue = [];
      this._comparator = comparator;
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

   siftDown(i: number) {
      if (i === this.queue.length - 1) {
         return;
      }

      let extremum = i;

      const left = this.leftChild(i);
      const right = this.rightChild(i);

      if (
         left < this.queue.length &&
         this._comparator(this.queue[left], this.queue[extremum])
      ) {
         extremum = left;
      }

      if (
         right < this.queue.length &&
         this._comparator(this.queue[right], this.queue[extremum])
      ) {
         extremum = right;
      }

      if (extremum !== i) {
         const tmp = this.queue[i];
         this.queue[i] = this.queue[extremum];
         this.queue[extremum] = tmp;

         this.siftDown(extremum);
      }
   }

   siftUp(i: number) {
      while (
         i > 0 &&
         this._comparator(this.queue[i], this.queue[this.parent(i)])
      ) {
         const parent = this.parent(i);

         const tmp = this.queue[i];
         this.queue[i] = this.queue[parent];
         this.queue[parent] = tmp;

         i = parent;
      }
   }

   peek(): T | null {
      return this.queue?.[0] ?? null;
   }

   remove(): T | null {
      if (this.queue.length === 1) {
         return this.queue.pop() ?? null;
      }

      const front = this.peek();

      this.queue[0] = this.queue[this.queue.length - 1];
      this.queue.pop();

      this.siftDown(0);

      return front;
   }

   insert(value: T) {
      this.queue.push(value);
      if (this.queue.length > 1) {
         this.siftUp(this.queue.length - 1);
      }
   }

   static heapify<T>(
      items: T[],
      comparator: (a: T, b: T) => boolean
   ): PriorityQueue<T> {
      const priorityQueue = new PriorityQueue<T>(comparator);
      for (const item of items) {
         priorityQueue.insert(item);
      }

      return priorityQueue;
   }

   get items() {
      return this.queue;
   }

   get size() {
      return this.queue.length;
   }
}

export { PriorityQueue };
