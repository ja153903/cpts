class OrderedStream {
  private stream: string[];
  private pointer: number;

  constructor(n: number) {
    this.stream = new Array<string>(n);
    this.pointer = 0;
  }

  insert(idKey: number, value: string): string[] {
    const index = idKey - 1;
    this.stream[index] = value;

    const result = [] as string[];

    while (this.pointer < this.stream.length && this.stream[this.pointer]) {
      result.push(this.stream[this.pointer]);
      this.pointer++;
    }

    return result;
  }
}
