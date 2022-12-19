const MODULO = Math.pow(10, 9) + 7;

function threeSumMulti(arr: number[], target: number): number {
   let count = 0;

   // we can use a brute force approach first
   // this takes O(n^3) time so not the best solution here
   // since we get a time exceeded limit error
   // for (let i = 0; i < arr.length; i++) {
   //   for (let j = i + 1; j < arr.length; j++) {
   //     for (let k = j + 1; k < arr.length; k++) {
   //       if (arr[i] + arr[j] + arr[k] === target) {
   //         count++;
   //       }
   //     }
   //   }
   // }

   const map = new Map<number, number>();

   for (let i = 0; i < arr.length; i++) {
      // target - arr[i] checking if two values already exist otherwise this is 0
      count = (count + (map.get(target - arr[i]) ?? 0)) % MODULO;

      // for every i, we go from 0 to i updating the number of times we
      // can create the sum of two numbers
      for (let j = 0; j < i; j++) {
         const value = arr[i] + arr[j];

         map.set(value, (map.get(value) ?? 0) + 1);
      }
   }

   return count;
}

export { threeSumMulti };
