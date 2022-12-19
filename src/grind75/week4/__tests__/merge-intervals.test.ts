import { merge } from '../merge-intervals';

describe('Merge Intervals', () => {
   test.each([
      [
         [
            [1, 3],
            [2, 6],
            [8, 10],
            [15, 18],
         ],
         [
            [1, 6],
            [8, 10],
            [15, 18],
         ],
      ],
      [
         [
            [1, 4],
            [4, 5],
         ],
         [[1, 5]],
      ],
   ])('merge', (intervals: number[][], expected: number[][]) => {
      intervals.sort((a, b) => a[0] - b[0]);
      expected.sort((a, b) => a[0] - b[0]);

      expect(merge(intervals)).toEqual(expected);
   });
});
