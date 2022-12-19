import { findBuildings } from '../building-with-an-ocean-view';

describe('Buildings With an Ocean View', () => {
   it.each([
      [
         [4, 2, 3, 1],
         [0, 2, 3],
      ],
      [
         [4, 3, 2, 1],
         [0, 1, 2, 3],
      ],
      [[1, 3, 2, 4], [3]],
   ])('findBuildings', (heights, expected) => {
      expect(findBuildings(heights)).toEqual(expected);
   });
});
