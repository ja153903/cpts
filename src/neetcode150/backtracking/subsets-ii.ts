// Given an integer array nums that may contain dups, return
// all possible subsets
// the solution set must not contain duplicate subsets
function subsetsWithDup(nums: number[]): number[][] {
  const result: number[][] = [];

  nums.sort((a, b) => a - b);

  backtrack(nums, result, [], new Set<string>(), 0);

  return result;
}

function backtrack(
  nums: number[],
  result: number[][],
  current: number[],
  contains: Set<string>,
  start: number
) {
  const path = getPath(current);

  if (!contains.has(path)) {
    contains.add(path);
    result.push([...current]);
  }

  for (let i = start; i < nums.length; i++) {
    current.push(nums[i]);

    backtrack(nums, result, current, contains, i + 1);

    current.pop();
  }
}

function getPath(current: number[]): string {
  return current.map((num) => num.toString()).join('') || 'null';
}

export { subsetsWithDup };
