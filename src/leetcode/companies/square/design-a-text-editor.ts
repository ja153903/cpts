// This solution works but we have a time limit exceeded error
// Probably have to optimize our deletion?
class TextEditor {
   #cursor: number;
   #stream: string[];

   constructor() {
      this.#cursor = 0;
      this.#stream = [];
   }

   addText(text: string): void {
      // items are added to the right of the cursor
      this.#stream.splice(this.#cursor, 0, ...text.split(''));
      this.#cursor += text.length;
   }

   deleteText(k: number): number {
      const numToDelete = Math.min(k, this.#cursor);

      this.#stream.splice(this.#cursor - numToDelete, numToDelete);
      this.#cursor -= numToDelete;

      return numToDelete;
   }

   cursorLeft(k: number): string {
      const movesToTheLeft = Math.min(this.#cursor, k);
      this.#cursor -= movesToTheLeft;

      // return the last 10 elements or whatever is left
      if (this.#cursor === 0) {
         return '';
      }

      const start = Math.min(10, this.#cursor);

      return this.#stream.slice(this.#cursor - start, this.#cursor).join('');
   }

   cursorRight(k: number): string {
      const movesToTheRight = Math.min(this.#stream.length - this.#cursor, k);
      this.#cursor += movesToTheRight;

      if (this.#cursor === 0) {
         return '';
      }

      const start = Math.min(10, this.#cursor);

      return this.#stream.slice(this.#cursor - start, this.#cursor).join('');
   }

   get stream(): string {
      return this.#stream.join('');
   }
}

export { TextEditor };
