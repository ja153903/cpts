class PriorityQueue {
  constructor(comparator) {
    this.queue = [];
    this._comparator = comparator;
  }

  parent(i) {
    return Math.floor((i - 1) / 2);
  }

  leftChild(i) {
    return 2 * i + 1;
  }

  rightChild(i) {
    return 2 * i + 2;
  }

  siftDown(i) {
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

  siftUp(i) {
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

  peek() {
    return this.queue?.[0] ?? null;
  }

  remove() {
    if (this.queue.length === 1) {
      return this.queue.pop() ?? null;
    }

    const front = this.peek();

    this.queue[0] = this.queue[this.queue.length - 1];
    this.queue.pop();

    this.siftDown(0);

    return front;
  }

  insert(value) {
    this.queue.push(value);
    if (this.queue.length > 1) {
      this.siftUp(this.queue.length - 1);
    }
  }

  get items() {
    return this.queue;
  }

  get size() {
    return this.queue.length;
  }
}

export { PriorityQueue };
