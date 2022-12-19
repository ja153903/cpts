import { canPlaceFlowers } from '../can-place-flowers';

describe('Can Place Flower', () => {
   it('should pass a simple test', () => {
      expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBe(true);
      expect(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2)).toBe(false);
      expect(canPlaceFlowers([0, 0, 1, 0, 0], 1)).toBe(true);
      expect(canPlaceFlowers([0, 0, 0, 0, 0], 2)).toBe(true);
   });
});
