function sumZero(n: number): number[] {
  const result = n % 2 === 0 ? [] : [0];
  const numToIterOver = n % 2 === 0 ? n / 2 : Math.floor(n / 2);

  for (let i = 1; i <= numToIterOver; i++) {
    result.push(i);
    result.push(-i);
  }

  return result;
}

export { sumZero };
