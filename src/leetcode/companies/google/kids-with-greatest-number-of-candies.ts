function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const maxCandyCount = Math.max(...candies);
  return candies.map((candy) => candy + extraCandies >= maxCandyCount);
}

export { kidsWithCandies };
