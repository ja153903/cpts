function flipAndInvertImage(image: number[][]): number[][] {
   return image.map((row) => {
      row.reverse();
      return row.map((col) => (col === 1 ? 0 : 1));
   });
}

export { flipAndInvertImage };
