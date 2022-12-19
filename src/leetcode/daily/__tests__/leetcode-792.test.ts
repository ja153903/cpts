import { numMatchingSubseq } from '../leetcode-792';

describe('792. Number of Matching Subsequences', () => {
   it('should pass the sample case', () => {
      const s = 'abcde';
      const words = ['a', 'bb', 'acd', 'ace'];

      expect(numMatchingSubseq(s, words)).toBe(3);
   });
});
