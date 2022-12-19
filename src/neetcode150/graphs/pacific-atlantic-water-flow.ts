function pacificAtlantic(heights: number[][]): number[][] {
   // the idea here is to find points that are shared
   // we need to create two queues and do BFS
   // then get the intersection of points
   const rows = heights.length;
   const cols = heights[0].length;

   const pacificQueue: number[][] = [];
   const atlanticQueue: number[][] = [];

   const pacificResult: number[][] = [];
   const atlanticResult: number[][] = [];

   const pacificVisited = new Set<string>();
   const atlanticVisited = new Set<string>();

   // top row and first column belong to pacific queue
   // bottom row and last column belong to atlantic queue

   for (let col = 0; col < cols; col++) {
      pacificResult.push([0, col]);
      atlanticResult.push([rows - 1, col]);

      pacificQueue.push([0, col]);
      atlanticQueue.push([rows - 1, col]);
   }

   for (let row = 0; row < rows; row++) {
      pacificResult.push([row, 0]);
      atlanticResult.push([row, cols - 1]);

      pacificQueue.push([row, 0]);
      atlanticQueue.push([row, cols - 1]);
   }

   bfs(heights, pacificResult, pacificQueue, pacificVisited);
   bfs(heights, atlanticResult, atlanticQueue, atlanticVisited);

   const intersection: number[][] = [];
   const hashes = new Set<string>(
      pacificResult.map((result) => `${result[0]},${result[1]}`)
   );
   const resultHashes = new Set<string>();

   for (const atlantic of atlanticResult) {
      const atlanticHash = `${atlantic[0]},${atlantic[1]}`;

      if (hashes.has(atlanticHash) && !resultHashes.has(atlanticHash)) {
         resultHashes.add(atlanticHash);
         intersection.push(atlantic);
      }
   }

   return intersection;
}

const DIRECTIONS: [number, number][] = [
   [1, 0],
   [-1, 0],
   [0, 1],
   [0, -1],
];

function bfs(
   heights: number[][],
   result: number[][],
   queue: number[][],
   visited: Set<string>
) {
   const rows = heights.length;
   const cols = heights[0].length;

   while (queue.length) {
      const [row, col] = queue.shift() as number[];

      const currentHash = `${row},${col}`;

      visited.add(currentHash);

      for (const [dRow, dCol] of DIRECTIONS) {
         const nRow = row + dRow;
         const nCol = col + dCol;

         const nextHash = `${nRow},${nCol}`;

         if (
            nRow < 0 ||
            nCol < 0 ||
            nRow >= rows ||
            nCol >= cols ||
            visited.has(nextHash) ||
            heights[nRow][nCol] < heights[row][col]
         ) {
            continue;
         }

         result.push([nRow, nCol]);
         queue.push([nRow, nCol]);
      }
   }
}

export { pacificAtlantic };
