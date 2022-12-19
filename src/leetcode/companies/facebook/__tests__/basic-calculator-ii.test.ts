import { calculate } from '../basic-calculator-ii';

describe('Basic Calculator II', () => {
   it.each([
      ['3+2*2', 7],
      ['3/2', 1],
      ['3+5 / 2', 5],
      ['42', 42],
      ['1-1+1', 1],
      ['1+1-1', 1],
      ['1*2-3/4+5*6-7*8+9/10', -24],
   ])('calculate(%s)', (s, expected) => {
      expect(calculate(s)).toBe(expected);
   });
});
