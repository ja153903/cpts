export function numberOfPairs(nums: number[]): number[] {
  // count frequency of each number
  // count pairs
  // count leftovers
  const freq: Map<number, number> = new Map();

  for (const num of nums) {
    freq.set(num, (freq.get(num) ?? 0) + 1);
  }

  let pairs = 0;
  let leftovers = 0;

  for (const [_, value] of freq.entries()) {
    pairs += Math.floor(value / 2);
    leftovers += value % 2;
  }

  return [pairs, leftovers];
}
