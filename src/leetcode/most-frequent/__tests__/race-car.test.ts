import { racecar, racecarbf } from '../race-car';

describe('Race Car', () => {
   it.each([
      [3, 2],
      [6, 5],
   ])('racecar(%i, %i)', (target, expected) => {
      expect(racecar(target)).toBe(expected);
   });

   it.each([
      [3, 2],
      [6, 5],
   ])('racecarbf(%i, %i)', (target, expected) => {
      expect(racecarbf(target)).toBe(expected);
   });
});
