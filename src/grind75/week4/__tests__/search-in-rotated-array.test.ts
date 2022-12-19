import { search } from '../search-in-rotated-array';

describe('Search in Rotated Array', () => {
   it.each([[[4, 5, 6, 7, 0, 1, 2], 0, 4]])(
      'search()',
      (nums: number[], target: number, expected: number) => {
         expect(search(nums, target)).toBe(expected);
      }
   );
});
