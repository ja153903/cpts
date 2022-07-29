function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;

  while (left <= right) {
    const value = numbers[left] + numbers[right];

    if (value === target) {
      return [left + 1, right + 1];
    } else if (value < target) {
      left++;
    } else {
      right--;
    }
  }

  return [-1, -1];
}

export { twoSum };
