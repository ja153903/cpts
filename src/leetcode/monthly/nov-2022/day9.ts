/**
 * The span of the stock's price today is defined as the maximum number of consecutive days
 * (starting from today and going backward) for which the stock price was less than or equal to today's price.
 *
 * prices = [100,80,60,70,60,75,85]
 * We can try to keep a monotonic stack = []
 * stockSpanner.next(100) => 1 since stack is empty
 * stockSpanner.next(80) => 1 since the top of the stack is greater than this
 * stockSpanner.next(60) => 1 since the top of the stack is greater than this
 * stockSpanner.next(70) => 2 since the top of the stack is greater than this
 * stockSpanner.next(60) => 1 since the top of the stack is greater than this
 *
 */
class StockSpanner {
  stack: [number, number][];

  constructor() {
    this.stack = [];
  }

  next(price: number): number {
    let count = 1;

    while (this.stack.length && this.stack.at(-1)![0] <= price) {
      // if the top of the stack is less than or equal to the price
      // then we should pop the stack
      const [_price, prevCount] = this.stack.pop()!;
      count += prevCount;
    }

    this.stack.push([price, count]);

    return count;
  }
}

export { StockSpanner };
