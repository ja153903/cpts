import { transpose } from '../transpose-matrix';

describe('Transpose Matrix', () => {
   it('should pass the test', () => {
      const matrix = [
         [1, 2, 3],
         [4, 5, 6],
      ];
      const result = [
         [1, 4],
         [2, 5],
         [3, 6],
      ];

      expect(transpose(matrix)).toEqual(result);
   });
});
