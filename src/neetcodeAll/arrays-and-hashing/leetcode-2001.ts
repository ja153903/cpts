function interchangeableRectangles(rectangles: number[][]): number {
   const frequencies = new Map<number, number>();
   let result = 0;

   for (const [width, height] of rectangles) {
      const ratio = width / height;
      const count = frequencies.get(ratio) ?? 0;

      if (frequencies.has(ratio)) {
         result += count;
      }

      frequencies.set(ratio, count + 1);
   }

   return result;
}

export { interchangeableRectangles };
