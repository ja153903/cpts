import { real, sample } from './data/day14';

type Coordinates = number[][];

function findExtremes(coordinates: Coordinates[]): {
   xMin: number;
   yMin: number;
   xMax: number;
   yMax: number;
} {
   let xMin = Number.POSITIVE_INFINITY;
   let yMin = Number.POSITIVE_INFINITY;
   let xMax = Number.NEGATIVE_INFINITY;
   let yMax = Number.NEGATIVE_INFINITY;

   for (const coords of coordinates) {
      for (const [x, y] of coords) {
         xMin = Math.min(xMin, x);
         xMax = Math.max(xMax, x);

         yMin = Math.min(yMin, y);
         yMax = Math.max(yMax, y);
      }
   }

   return {
      xMin,
      xMax,
      yMin,
      yMax,
   };
}

function parseData(
   isSample: boolean,
   isPart2: boolean = false
): {
   grid: string[][];
   xMin: number;
   yMin: number;
   xMax: number;
   yMax: number;
} {
   const data = isSample ? sample : real;
   const paths = data
      .split('\n')
      .map((path) =>
         path
            .split(' -> ')
            .map((coordinates) =>
               coordinates.split(',').map((coordinate) => parseInt(coordinate))
            )
      );

   const { yMax, xMax, yMin, xMin } = findExtremes(paths);

   const rows = isPart2 ? yMax + 2 : yMax + 1;
   const cols = isPart2 ? 2 * xMax + 1 : xMax + 1;

   let grid = new Array<Array<string>>(rows);

   for (let i = 0; i < rows; i++) {
      grid[i] = new Array<string>(cols).fill('.');
   }

   grid = fillGrid(grid, paths);

   return {
      grid,
      xMin,
      yMin,
      xMax,
      yMax,
   };
}

function fillGrid(grid: string[][], paths: Coordinates[]) {
   for (const path of paths) {
      for (let i = 1; i < path.length; i++) {
         const u = path[i - 1];
         const v = path[i];

         const [uCol, uRow] = u;
         const [vCol, vRow] = v;

         const hasSameCol = uCol === vCol;

         if (hasSameCol) {
            let [start, end] = [uRow, vRow];
            if (start > end) {
               [start, end] = [end, start];
            }

            for (let i = start; i <= end; i++) {
               grid[i][uCol] = '#';
            }
         } else {
            let [start, end] = [uCol, vCol];
            if (start > end) {
               [start, end] = [end, start];
            }

            for (let i = start; i <= end; i++) {
               grid[uRow][i] = '#';
            }
         }
      }
   }

   return grid;
}

function part1(isSample: boolean = false): number {
   const { grid, yMax, xMax } = parseData(isSample);

   let settledSand = 0;

   while (true) {
      let row = 0;
      let col = 500;
      let canSandSettle = false;

      while (row < yMax) {
         const nextRow = row + 1;
         const nextColOnLeft = col - 1;
         const nextColOnRight = col + 1;

         if (grid[nextRow][col] === '.') {
            row++;
         } else if (
            nextColOnLeft >= 0 &&
            grid[nextRow][nextColOnLeft] === '.'
         ) {
            row++;
            col--;
         } else if (
            nextColOnRight < xMax + 1 &&
            grid[nextRow][nextColOnRight] === '.'
         ) {
            row++;
            col++;
         } else {
            grid[row][col] = 'o';
            canSandSettle = true;
            break;
         }
      }

      if (canSandSettle) {
         settledSand++;
      } else {
         return settledSand;
      }
   }
}

function part2(isSample: boolean = false): number {
   const { grid, xMax } = parseData(isSample, true);

   let settledSand = 0;

   while (true) {
      let row = 0;
      let col = 500;

      while (row < grid.length) {
         const nextRow = row + 1;
         const nextColOnLeft = col - 1;
         const nextColOnRight = col + 1;

         if (nextRow < grid.length && grid[nextRow][col] === '.') {
            row++;
         } else if (
            nextRow < grid.length &&
            nextColOnLeft >= 0 &&
            grid[nextRow][nextColOnLeft] === '.'
         ) {
            row++;
            col--;
         } else if (
            nextRow < grid.length &&
            nextColOnRight < 2 * xMax + 1 &&
            grid[nextRow][nextColOnRight] === '.'
         ) {
            row++;
            col++;
         } else {
            grid[row][col] = 'o';
            break;
         }
      }

      if (grid[0][500] === 'o') {
         return settledSand + 1;
      } else {
         settledSand++;
      }
   }
}

export { part1, part2 };
