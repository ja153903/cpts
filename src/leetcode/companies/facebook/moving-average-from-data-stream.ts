class MovingAverage {
   nums: number[];
   sum: number;
   size: number;
   capacity: number;

   constructor(size: number) {
      this.nums = [];
      this.sum = 0;
      this.capacity = size;
      this.size = 0;
   }

   next(val: number): number {
      if (this.size === this.capacity) {
         const value = this.nums.shift() as number;
         this.sum -= value;
         this.size--;
      }

      this.sum += val;
      this.size++;
      this.nums.push(val);

      return this.sum / this.size;
   }
}

export { MovingAverage };
