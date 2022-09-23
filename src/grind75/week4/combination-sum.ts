function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = [];

  candidates.sort((a, b) => a - b);

  backtrack(candidates, target, result, [], 0);

  return result;
}

function backtrack(
  candidates: number[],
  target: number,
  result: number[][],
  current: number[],
  start: number
) {
  if (target === 0) {
    result.push([...current]);
  } else {
    for (let i = start; i < candidates.length; i++) {
      const candidate = candidates[i];

      if (target - candidate >= 0) {
        current.push(candidate);
        backtrack(candidates, target - candidate, result, current, i);
        current.pop();
      }
    }
  }
}

export { combinationSum };
