function dailyTemperatures(temperatures: number[]): number[] {
   // we should use a monotonic stack to solve this problem
   // the reason for this is because we're going to want the next greater element
   // we'll want to keep the indices here.
   const stack: number[] = [];
   const result = new Array<number>(temperatures.length).fill(0);

   for (let i = 0; i < temperatures.length; i++) {
      while (
         stack.length &&
         temperatures[i] > temperatures[stack[stack.length - 1]]
      ) {
         const topIndex = stack.pop()!;
         result[topIndex] = i - topIndex;
      }

      stack.push(i);
   }

   return result;
}

export { dailyTemperatures };
