function averageValue(nums: number[]): number {
   const filtered = nums.filter((num) => num % 2 === 0 && num % 3 === 0);

   return filtered.length === 0
      ? 0
      : Math.floor(filtered.reduce((a, b) => a + b) / filtered.length);
}

export { averageValue };
