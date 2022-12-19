import { minRemoveToMakeValid } from '../minimum-to-remove-valid-parenthesis';

describe('Minimum remove to make valid', () => {
   it.each([
      [
         'lee(t(c)o)de)',
         new Set(['lee(t(co)de)', 'lee(t(c)ode)', 'lee(t(c)o)de']),
      ],
   ])('minRemoveToMakeValid(%s)', (s, expectedValues) => {
      const result = minRemoveToMakeValid(s);

      expect(expectedValues.has(result)).toBeTruthy();
   });
});
