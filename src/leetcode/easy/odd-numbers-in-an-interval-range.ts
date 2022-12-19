function countOdds(low: number, high: number): number {
   let result = 0;
   for (let i = low; i <= high; i++) {
      if (i % 2 === 1) {
         result++;
      }
   }
   return result;
}

export { countOdds };
