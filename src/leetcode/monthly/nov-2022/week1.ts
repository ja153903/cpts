function smallestCommonElement(mat: number[][]): number {
   // we know everything is sorted here
   // we can just have a pointer to every row in the matrix
   // worst case is that this algorithms runs in O(n^2)

   let found = false;
   const itr = new Array<number>(mat.length).fill(0);

   while (!found) {
      let currentMin = mat[0][itr[0]];
      let isAllSame = true;

      for (let row = 1; row < mat.length; row++) {
         if (currentMin !== mat[row][itr[row]]) {
            isAllSame = false;
         }

         currentMin = Math.min(currentMin, mat[row][itr[row]]);
      }

      if (isAllSame) {
         return currentMin;
      }

      for (let row = 0; row < mat.length; row++) {
         if (mat[row][itr[row]] === currentMin) {
            itr[row]++;
            if (itr[row] >= mat[0].length) {
               return -1;
            }
         }
      }
   }

   return -1;
}

export { smallestCommonElement };
