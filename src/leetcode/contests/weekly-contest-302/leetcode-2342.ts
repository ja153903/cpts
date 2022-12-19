function maximumSum(nums: number[]): number {
  const data = nums.map((num) => ({
    num,
    sum: sumOverNumber(num),
  }));

  const asMap: Map<number, number[]> = new Map();

  for (const { num, sum } of data) {
    if (asMap.has(sum)) {
      asMap.get(sum)?.push(num);
    } else {
      asMap.set(sum, [num]);
    }
  }

  let maxSum = -1;

  for (const values of asMap.values()) {
    if (values.length >= 2) {
      if (values.length > 2) {
        values.sort((a, b) => b - a);
      }

      maxSum = Math.max(maxSum, values[0] + values[1]);
    }
  }

  return maxSum;
}

function sumOverNumber(num: number): number {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }

  return sum;
}

export { maximumSum };
