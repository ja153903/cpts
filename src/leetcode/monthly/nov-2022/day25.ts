const MODULO = Math.pow(10, 9) + 7;

// This problem becomes a monotonic stack problem
function sumSubarrayMins(arr: number[]): number {
   arr.unshift(0);

   const result = new Array<number>(arr.length).fill(0);
   // keep indices on the stack because easier to just reference the items
   const stack = [0];

   for (let i = 0; i < arr.length; i++) {
      // any time the top of the stack is greater than the current value
      // we pop it
      while (arr[stack[stack.length - 1]] > arr[i]) {
         stack.pop();
      }

      // the top of the stack is the index to the largest number smaller than or equal to arr[i]
      const last = stack[stack.length - 1];

      // result[i] stores how many times the item should appear in the previous subarrays
      // plus the total sum at the previous smaller number
      result[i] = result[last] + (i - last) * arr[i];

      stack.push(i);
   }

   return result.reduce((a, b) => a + b) % MODULO;
}

export { sumSubarrayMins };
