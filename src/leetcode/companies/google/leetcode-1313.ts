function decompressRLElist(nums: number[]): number[] {
   // for every two elements we get [freq, val]
   // generate array based on the frequency of values
   const result: number[] = [];

   for (let i = 0; i < nums.length; i += 2) {
      let freq = nums[i];
      const val = nums[i + 1];

      while (freq > 0) {
         result.push(val);
         freq--;
      }
   }

   return result;
}

export { decompressRLElist };
