function mergeSimilarItems(items1: number[][], items2: number[][]): number[][] {
   const map = new Map<number, number>();

   for (const [value, weight] of items1) {
      map.set(value, (map.get(value) ?? 0) + weight);
   }

   for (const [value, weight] of items2) {
      map.set(value, (map.get(value) ?? 0) + weight);
   }

   return [...map.entries()].sort((a, b) => a[0] - b[0]);
}

export { mergeSimilarItems };
