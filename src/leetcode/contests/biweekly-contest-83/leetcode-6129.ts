function zeroFilledSubarray(nums: number[]): number {
  let result = 0;
  let dp: Record<number, number> = {};

  let i = 0;

  while (i < nums.length) {
    let current = 0;
    while (i < nums.length && nums[i] === 0) {
      current++;
      i++;
    }

    if (current in dp) {
      result += dp[current];
    } else {
      dp[current] = Math.floor((current * (current + 1)) / 2);
      result += dp[current];
    }
    i++;
  }

  return result;
}

export { zeroFilledSubarray };
