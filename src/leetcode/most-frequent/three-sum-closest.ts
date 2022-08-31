function threeSumClosest(nums: number[], target: number): number {
  let closestSum = nums[0] + nums[1] + nums[nums.length - 1];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];

      if (sum > target) {
        k--;
      } else {
        j++;
      }

      if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
        closestSum = sum;
      }
    }
  }

  return closestSum;
}

export { threeSumClosest };
