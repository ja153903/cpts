class MinStack {
  #stack: [number, number][];

  constructor() {
    this.#stack = [];
  }

  push(val: number): void {
    if (this.#stack.length) {
      const min = this.getMin();
      this.#stack.push([val, Math.min(min, val)]);
    } else {
      this.#stack.push([val, val]);
    }
  }

  pop(): void {
    this.#stack.pop();
  }

  top(): number {
    const top = this.#stack.at(-1);
    return top?.[0] ?? -1;
  }

  getMin(): number {
    const top = this.#stack.at(-1);
    return top?.[1] ?? -1;
  }
}

export { MinStack };
