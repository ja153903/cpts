const DIRECTIONS = [
   [1, 0],
   [-1, 0],
   [0, 1],
   [0, -1],
];

function floodFill(
   image: number[][],
   sr: number,
   sc: number,
   color: number
): number[][] {
   // start at sr, sc
   // if the color at sr sc is already the color we want to change to, then we return as it is;
   // if the color should change, then we perform BFS and update the necessary indices

   const rows = image.length;
   const cols = image[0].length;

   if (
      sr < 0 ||
      sc < 0 ||
      sr >= rows ||
      sc >= cols ||
      image[sr][sc] === color
   ) {
      return image;
   }

   const queue: [number, number][] = [];
   const original = image[sr][sc];

   queue.push([sr, sc]);

   while (queue.length) {
      const [r, c] = queue.shift() as [number, number];

      image[r][c] = color;

      for (const [dr, dc] of DIRECTIONS) {
         const nr = r + dr;
         const nc = c + dc;

         if (
            nr < 0 ||
            nc < 0 ||
            nr >= rows ||
            nc >= cols ||
            image[nr][nc] !== original
         ) {
            continue;
         }

         queue.push([nr, nc]);
      }
   }

   return image;
}

export { floodFill };
