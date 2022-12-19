function generate(numRows: number): number[][] {
   if (numRows === 1) {
      return [[1]];
   }

   if (numRows === 2) {
      return [[1], [1, 1]];
   }

   const result = [[1], [1, 1]];

   for (let i = 2; i < numRows; i++) {
      const subResult: number[] = [];

      for (let col = 0; col <= i; col++) {
         if (col === 0 || col === i) {
            subResult.push(1);
         } else {
            subResult.push(result[i - 1][col - 1] + result[i - 1][col]);
         }
      }

      result.push(subResult);
   }

   return result;
}

export { generate };
