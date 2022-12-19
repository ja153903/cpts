const ROMAN_TO_INTEGER: Record<string, number> = {
   I: 1,
   V: 5,
   X: 10,
   L: 50,
   C: 100,
   D: 500,
   M: 1000,
};

/**
 * Symbol       Value
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 *
 * @param {string} s
 */
function romanToInt(s: string): number {
   let result = ROMAN_TO_INTEGER[s[s.length - 1]];

   for (let i = s.length - 2; i >= 0; i--) {
      const prev = ROMAN_TO_INTEGER[s[i + 1]];
      const curr = ROMAN_TO_INTEGER[s[i]];

      if (prev <= curr) {
         result += curr;
      } else {
         result -= curr;
      }
   }

   return result;
}

export { romanToInt };
