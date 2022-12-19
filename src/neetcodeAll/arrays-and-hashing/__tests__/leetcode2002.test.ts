import { maxProduct } from '../leetcode-2002';

describe('Max Product', () => {
   it.each([['leetcodecom', 9]])(
      'maxProduct(%s)',
      (s: string, expected: number) => {
         expect(maxProduct(s)).toBe(expected);
      }
   );
});
