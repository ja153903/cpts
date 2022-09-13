class RandomizedSet {
  private indexByValue: Map<number, number>;
  private items: number[];

  constructor() {
    this.indexByValue = new Map();
    this.items = [];
  }

  insert(val: number): boolean {
    if (!this.indexByValue.has(val)) {
      this.indexByValue.set(val, this.items.length);
      this.items.push(val);

      return true;
    }

    return false;
  }

  remove(val: number): boolean {
    if (this.indexByValue.has(val)) {
      // swap with last item
      const last = this.items.length - 1;
      const curr = this.indexByValue.get(val)!;

      [this.items[last], this.items[curr]] = [
        this.items[curr],
        this.items[last],
      ];

      this.indexByValue.set(this.items[curr], curr);
      this.indexByValue.delete(this.items[last]);

      this.items.pop();

      return true;
    }

    return false;
  }

  getRandom(): number {
    return this.items[Math.floor(Math.random() * this.items.length)];
  }
}
