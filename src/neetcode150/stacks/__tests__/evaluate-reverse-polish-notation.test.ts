import { evalRPN } from '../evaluate-reverse-polish-notation';

describe('Evaluate Reverse Polish Notation', () => {
   it.each([
      [['2', '1', '+', '3', '*'], 9],
      [['4', '13', '5', '/', '+'], 6],
   ])('evalRPN(%p) === %i', (tokens, expected) => {
      expect(evalRPN(tokens)).toBe(expected);
   });
});
