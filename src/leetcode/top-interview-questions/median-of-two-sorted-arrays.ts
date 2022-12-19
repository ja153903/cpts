// TODO: Solve this problem using an optimal solution and not the O(m + n) solution
function findMedianSortedArrays(a: number[], b: number[]): number {
   // how do we find the median of two sorted arrays using binary search?
   // Suppose that we have two sorted arrays: [1, 2, 3] and [1, 3, 4]
   // in this case what's the median? [1, 1, 2, 3, 3, 4] => 2.5

   return -1;
}

// This solution runs in O(m + n) time
function bruteForce(a: number[], b: number[]): number {
   // merge
   const merged: number[] = [];
   let i = 0;
   let j = 0;

   while (i < a.length && j < b.length) {
      if (a[i] < b[j]) {
         merged.push(a[i]);
         i++;
      } else {
         merged.push(b[j]);
         j++;
      }
   }

   while (i < a.length) {
      merged.push(a[i]);
      i++;
   }

   while (j < b.length) {
      merged.push(b[j]);
      j++;
   }

   const mid = Math.floor(merged.length / 2);

   // compute median
   return merged.length % 2 === 1
      ? merged[mid]
      : (merged[mid] + merged[mid - 1]) / 2;
}

export { findMedianSortedArrays, bruteForce };
