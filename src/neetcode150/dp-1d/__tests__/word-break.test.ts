import { wordBreak } from '../word-break';

describe('Word Break', () => {
   it('should run some truthy test cases', () => {
      expect(wordBreak('leetcode', ['leet', 'code'])).toBeTruthy();
      expect(wordBreak('applepenapple', ['apple', 'pen'])).toBeTruthy();
   });

   it('should run some falsy test cases', () => {
      expect(
         wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat'])
      ).toBeFalsy();
   });
});
