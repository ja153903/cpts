import { minSwaps } from '../leetcode-1963';

describe('minSwaps', () => {
  it('should pass some tests', () => {
    expect(minSwaps('][][')).toBe(1);
    expect(minSwaps(']]][[[')).toBe(2);
    expect(minSwaps('[]')).toBe(0);
    expect(minSwaps('][[]][')).toBe(1);
    expect(minSwaps('][[]][][[][]')).toBe(1);
  });
});
