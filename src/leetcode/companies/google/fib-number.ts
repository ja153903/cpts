function fib(n: number): number {
  let a = 0;
  let b = 1;

  if (n == 0) {
    return 0;
  }

  if (n == 1) {
    return 1;
  }

  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }

  return a;
}

export { fib };
