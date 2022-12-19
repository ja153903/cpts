function dailyTemperatures(temperatures: number[]): number[] {
  const result = new Array<number>(temperatures.length).fill(0);
  const stack = new Array<number>();

  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length > 0 && temperatures[stack.at(-1)!] < temperatures[i]) {
      // while the current element is greater than the top of the stack, we make sure
      // to update our result with the appropriate values
      const top = stack.pop();
      if (top != null) {
        result[top] = i - top;
      }
    }

    stack.push(i);
  }

  return result;
}

export { dailyTemperatures };
