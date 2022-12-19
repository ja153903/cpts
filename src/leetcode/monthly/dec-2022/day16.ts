class MyQueue {
  private readonly s1: number[];
  private s2: number[];

  constructor() {
    this.s1 = [];
    this.s2 = [];
  }

  push(x: number): void {
    this.s1.push(x);
  }

  pop(): number {
    while (this.s1.length > 0) {
      const top = this.s1.pop();
      if (top != null) {
        this.s2.push(top);
      }
    }

    const result = this.s2.pop();

    while (this.s2.length > 0) {
      const top = this.s2.pop();
      if (top != null) {
        this.s1.push(top);
      }
    }

    return result ?? -1;
  }

  peek(): number {
    return this.s1[0];
  }

  empty(): boolean {
    return this.s1.length === 0;
  }
}
