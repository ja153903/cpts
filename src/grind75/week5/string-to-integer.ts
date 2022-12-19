import { isDigit } from '~/utility/string';

const LOWER_BOUND = -Math.pow(2, 31);
const UPPER_BOUND = Math.pow(2, 31) - 1;

const isNumberWithinBounds = (num: number) =>
   LOWER_BOUND <= num && num <= UPPER_BOUND;

function myAtoi(s: string): number {
   let i = 0;

   // read in the whitespaces
   while (i < s.length && s[i] === ' ') {
      i++;
   }

   const isNegative = s[i] === '-';
   if (s[i] === '-' || s[i] === '+') {
      i++;
   }

   if (i >= s.length) {
      return 0;
   }

   let result = 0;

   while (i < s.length && isDigit(s[i])) {
      result = result * 10 + parseInt(s[i]);
      i++;
   }

   if (isNumberWithinBounds(result)) {
      return isNegative ? -result : result;
   }

   return isNegative ? LOWER_BOUND : UPPER_BOUND;
}

export { myAtoi };
