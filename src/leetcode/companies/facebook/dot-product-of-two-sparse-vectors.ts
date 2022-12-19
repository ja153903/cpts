class SparseVector {
   nonZeroItems: Map<number, number>;

   constructor(nums: number[]) {
      this.nonZeroItems = new Map();

      for (let i = 0; i < nums.length; i++) {
         if (nums[i] !== 0) {
            this.nonZeroItems.set(i, nums[i]);
         }
      }
   }

   // Return the dotProduct of two sparse vectors
   dotProduct(vec: SparseVector): number {
      let result = 0;

      for (const [key, value] of this.nonZeroItems.entries()) {
         if (vec.nonZeroItems.has(key)) {
            result += value * vec.nonZeroItems.get(key)!;
         }
      }

      return result;
   }
}

export { SparseVector };
