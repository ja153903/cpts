function trap(height: number[]): number {
  let left = 0;
  let right = height.length - 1;

  let maxLeft = height[left];
  let maxRight = height[right];

  let result = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] > maxLeft) {
        maxLeft = height[left];
      } else {
        result += maxLeft - height[left];
      }
      left++;
    } else {
      if (height[right] > maxRight) {
        maxRight = height[right];
      } else {
        result += maxRight - height[right];
      }
      right--;
    }
  }

  return result;
}

export { trap };
