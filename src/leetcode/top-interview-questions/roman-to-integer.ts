const ROMAN_TO_INT: Record<string, number> = {
   I: 1,
   V: 5,
   X: 10,
   L: 50,
   C: 100,
   D: 500,
   M: 1000,
};

function romanToInt(s: string): number {
   let result: number = 0;
   let prev: string = '';

   for (let i = s.length - 1; i >= 0; i--) {
      // if the previous character was empty or
      // if the value of the previous number is greater than the current number
      if (prev === '' || ROMAN_TO_INT[prev] <= ROMAN_TO_INT[s[i]]) {
         result += ROMAN_TO_INT[s[i]];
      } else {
         result -= ROMAN_TO_INT[s[i]];
      }

      prev = s[i];
   }

   return result;
}

export { romanToInt };
