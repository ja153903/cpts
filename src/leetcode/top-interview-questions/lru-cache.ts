class LRUCache extends Map {
  private capacity: number;

  constructor(capacity: number) {
    super();

    this.capacity = capacity;
  }

  get(key: number) {
    if (!this.has(key)) {
      return -1;
    }

    const value = super.get(key);

    this.delete(key);
    this.set(key, value);

    return value;
  }

  put(key: number, value: number) {
    // remove the node if it already exists
    this.delete(key);

    this.set(key, value);

    if (this.size > this.capacity) {
      this.delete(this.keys().next().value);
    }
  }
}

export { LRUCache };
