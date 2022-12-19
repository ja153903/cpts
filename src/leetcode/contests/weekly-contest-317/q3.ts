function makeIntegerBeautiful(n: number, target: number): number {
   return 0;
}

function isBeautiful(n: number, target: number): boolean {
   let sum = 0;

   while (n > 0) {
      sum += n % 10;
      n = Math.floor(n / 10);
   }

   return sum <= target;
}

export { makeIntegerBeautiful };
