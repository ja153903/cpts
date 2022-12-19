const INF = 2147483647;
const DIRECTIONS: [number, number][] = [
   [1, 0],
   [-1, 0],
   [0, 1],
   [0, -1],
];

/**
 Do not return anything, modify rooms in-place instead.
 */
function wallsAndGates(rooms: number[][]): void {
   const rows = rooms.length;
   const cols = rooms[0].length;

   const queue: [number, number][] = [];

   for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
         if (rooms[i][j] === 0) {
            queue.push([i, j]);
         }
      }
   }

   while (queue.length) {
      const [row, col] = queue.shift() as [number, number];

      for (const [dRow, dCol] of DIRECTIONS) {
         const nRow = row + dRow;
         const nCol = col + dCol;

         if (
            nRow < 0 ||
            nCol < 0 ||
            nRow >= rows ||
            nCol >= cols ||
            rooms[nRow][nCol] !== INF
         ) {
            continue;
         }

         rooms[nRow][nCol] = rooms[row][col] + 1;

         queue.push([nRow, nCol]);
      }
   }
}

export { wallsAndGates };
