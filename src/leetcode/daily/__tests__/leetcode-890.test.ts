import { findAndReplacePattern } from '../leetcode-890';

describe('890. Find and Replace Pattern', () => {
  it('test case 1', () => {
    const words = ['abc', 'deq', 'mee', 'aqq', 'dkd', 'ccc'];
    const pattern = 'abb';

    const expected = new Set(['mee', 'aqq']);

    const result = findAndReplacePattern(words, pattern);

    expect(result.length).toBe(2);

    for (const item of result) {
      expect(expected.has(item)).toBeTruthy();
    }
  });

  it('test case 2', () => {
    const words = ['ef', 'fq', 'ao', 'at', 'lx'];
    const pattern = 'ya';

    const expected = new Set(['ef', 'fq', 'ao', 'at', 'lx']);

    const result = findAndReplacePattern(words, pattern);

    expect(result.length).toBe(5);

    for (const item of result) {
      expect(expected.has(item)).toBeTruthy();
    }
  });
});
