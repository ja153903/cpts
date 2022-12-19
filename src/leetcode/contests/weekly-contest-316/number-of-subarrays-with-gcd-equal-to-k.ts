function subarrayGCD(nums: number[], k: number): number {
   let result = 0;

   for (let i = 0; i < nums.length; i++) {
      for (let j = i; j < nums.length; j++) {
         if (getGcd(nums.slice(i, j + 1)) === k) {
            result++;
         }
      }
   }

   return result;
}

function getGcd(nums: number[]): number {
   return nums.reduce((a, b) => gcd(a, b));
}

function gcd(a: number, b: number): number {
   if (a === 0) {
      return b;
   }

   return gcd(b % a, a);
}

export { subarrayGCD };
