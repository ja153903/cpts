type Tuple = { value: number; min: number };

class MinStack {
  private stack: Tuple[];

  constructor() {
    this.stack = [];
  }

  push(val: number): void {
    if (this.isEmpty) {
      this.stack.push({ value: val, min: val });
      return;
    }

    const node = { value: val, min: Math.min(this.getMin(), val) };
    this.stack.push(node);
  }

  pop(): void {
    this.stack.pop();
  }

  top(): number {
    if (this.isEmpty) {
      return -1;
    }

    return this._top.value;
  }

  getMin(): number {
    if (this.isEmpty) {
      return -1;
    }

    return this._top.min;
  }

  get size() {
    return this.stack.length;
  }

  get _top() {
    return this.stack[this.size - 1];
  }

  get isEmpty() {
    return this.stack.length === 0;
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
