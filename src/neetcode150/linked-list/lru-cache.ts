class LRUCache {
  private capacity: number;
  private cache: Map<number, number>;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key: number): number {
    if (!this.cache.has(key)) {
      return -1;
    }

    const value = this.cache.get(key)!;

    this.update(key, value);

    return value;
  }

  private update(key: number, value: number) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
      this.cache.set(key, value);
    }
  }

  put(key: number, value: number): void {
    if (this.atCapacity && !this.cache.has(key)) {
      this.cache.delete(this.cache.keys().next().value);
    }

    this.cache.set(key, value);
    if (this.cache.has(key)) {
      this.update(key, value);
    }
  }

  get atCapacity() {
    return this.capacity === this.cache.size;
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
