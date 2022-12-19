import { minMutation } from '../day2';

describe('minMutation', () => {
   it('should pass sample case', () => {
      const start = 'AACCGGTT';
      const end = 'AACCGGTA';
      const bank = ['AACCGGTA'];

      expect(minMutation(start, end, bank)).toBe(1);
   });

   it('should pass another sample case', () => {
      const start = 'AACCGGTT';
      const end = 'AAACGGTA';
      const bank = ['AACCGGTA', 'AACCGCTA', 'AAACGGTA'];

      expect(minMutation(start, end, bank)).toBe(2);
   });

   it('should pass the final sample case', () => {
      const start = 'AAAAACCC';
      const end = 'AACCCCCC';
      const bank = ['AAAACCCC', 'AAACCCCC', 'AACCCCCC'];

      expect(minMutation(start, end, bank)).toBe(3);
   });
});
