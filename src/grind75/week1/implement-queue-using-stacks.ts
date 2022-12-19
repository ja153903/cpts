class MyQueue {
   #stack1: number[];
   #stack2: number[];

   constructor() {
      this.#stack1 = [];
      this.#stack2 = [];
   }

   push(x: number): void {
      // move everything in stack1 into stack2
      while (this.#stack1.length) {
         this.#stack2.push(this.#stack1.pop() as number);
      }

      this.#stack2.push(x);

      while (this.#stack2.length) {
         this.#stack1.push(this.#stack2.pop() as number);
      }
   }

   pop(): number {
      if (this.#stack1.length) {
         return this.#stack1.pop() as number;
      }

      return -1;
   }

   peek(): number {
      return this.#stack1[this.#stack1.length - 1];
   }

   empty(): boolean {
      return this.#stack1.length === 0;
   }
}

export { MyQueue };
