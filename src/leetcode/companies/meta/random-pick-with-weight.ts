class Solution {
  private dist: number[];

  constructor(weights: number[]) {
    this.dist = new Array<number>(weights.length).fill(0);
    this.dist[0] = weights[0];

    for (let i = 1; i < weights.length; i++) {
      this.dist[i] = this.dist[i - 1] + weights[i];
    }
  }

  pickIndex(): number {
    const p = Math.floor(Math.random() * this.dist[this.dist.length - 1]) + 1;

    let left = 0;
    let right = this.dist.length - 1;

    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);

      if (this.dist[mid] === p) {
        return mid;
      } else if (this.dist[mid] < p) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return left;
  }
}

export { Solution };
