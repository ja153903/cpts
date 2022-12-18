function smallestValue(n: number): number {
  let result = 0;
  let currentSum = 0;

  const visited = new Set<number>();
  visited.add(1);

  while (true) {
    visited.add(n);

    // divide by 2
    while (n % 2 === 0) {
      currentSum += 2;
      n = Math.floor(n / 2);
    }

    const upperBound = n;

    for (let i = 3; i * i <= upperBound; i++) {
      while (n % i === 0) {
        currentSum += i;
        n = Math.floor(n / i);
      }
    }

    if (n > 2) {
      currentSum += n;
    }

    if (visited.has(currentSum)) {
      return currentSum;
    }

    n = currentSum;
    currentSum = 0;
  }
}

export { smallestValue };
