class RandomizedSet {
  private map: Map<number, number>;
  private list: Array<number>;

  constructor() {
    this.map = new Map();
    this.list = new Array();
  }

  // This is O(1) time
  insert(val: number): boolean {
    if (!this.map.has(val)) {
      this.map.set(val, this.list.length);
      this.list.push(val);
      return true;
    }

    return false;
  }

  // This operation is O(1) time
  remove(val: number): boolean {
    if (this.map.has(val)) {
      // if the value exists, then we should find the index where this value is placed
      // we should swap the item at the final index with this value and also update that entry on the map before deleting it
      const indexOfValueToRemove = this.map.get(val) as number; // better to coerce the type here I guess
      const lastIndex = this.list.length - 1;

      [this.list[indexOfValueToRemove], this.list[lastIndex]] = [
        this.list[lastIndex],
        this.list[indexOfValueToRemove],
      ];

      this.map.set(this.list[indexOfValueToRemove], indexOfValueToRemove);
      this.map.delete(this.list[lastIndex]);

      this.list.pop();
      return true;
    }

    return false;
  }

  getRandom(): number {
    return this.list[Math.floor(Math.random() * this.list.length)];
  }
}

export { RandomizedSet };
