function findDisappearedNumbers(nums: number[]): number[] {
   const n = nums.length;
   const uniqueNumbers = new Set<number>(nums);
   const result: number[] = [];

   // there are numbers from 1 to n
   for (let i = 1; i <= n; i++) {
      if (!uniqueNumbers.has(i)) {
         result.push(i);
      }
   }

   return result;
}

export { findDisappearedNumbers };
