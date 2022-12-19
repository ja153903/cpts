class Solution {
  private w: number[];

  constructor(w: number[]) {
    this.w = w;

    for (let i = 1; i < this.w.length; i++) {
      this.w[i] += this.w[i - 1];
    }
  }

  // The logic here is to create a distribution from the weights we're given
  pickIndex(): number {
    // Randomly generate a number from [0, sum]
    const index = Math.floor(Math.random() * this.w[this.w.length - 1]) + 1;

    let left = 0;
    let right = this.w.length - 1;

    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);

      if (this.w[mid] === index) {
        return mid;
      } else if (this.w[mid] < index) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return left;
  }
}

export { Solution };
