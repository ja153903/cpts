function findBuildings(heights: number[]): number[] {
   const result = new Array<number>();

   let maxHeightSoFar = Number.NEGATIVE_INFINITY;

   for (let i = heights.length - 1; i >= 0; i--) {
      if (heights[i] > maxHeightSoFar) {
         result.unshift(i);
         maxHeightSoFar = heights[i];
      }
   }

   return result;
}

export { findBuildings };
