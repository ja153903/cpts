function permute(nums: number[]): number[][] {
  const result: number[][] = [];

  // this is another backtracking problem
  backtrack(nums, result, []);

  return result;
}

function backtrack(nums: number[], result: number[][], current: number[]) {
  if (current.length === nums.length) {
    result.push([...current]);
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (current.includes(nums[i])) {
      continue;
    }

    current.push(nums[i]);
    backtrack(nums, result, current);
    current.pop();
  }
}

export { permute };
