import {
   numberOfWeakCharactersBF,
   numberOfWeakCharacters,
} from '../number-of-weak-characters-in-game';

describe('Number of weak characters in game', () => {
   describe('Brute force', () => {
      it.each([
         [
            [
               [5, 5],
               [6, 3],
               [3, 6],
            ],
            0,
         ],
         [
            [
               [2, 2],
               [3, 3],
            ],
            1,
         ],
      ])(
         'numberOfWeakCharactersBF()',
         (properties: number[][], expected: number) => {
            expect(numberOfWeakCharactersBF(properties)).toBe(expected);
         }
      );
   });

   describe('Optimal', () => {
      it.each([
         [
            [
               [5, 5],
               [6, 3],
               [3, 6],
            ],
            0,
         ],
         [
            [
               [2, 2],
               [3, 3],
            ],
            1,
         ],
         [
            [
               [1, 1],
               [2, 1],
               [2, 2],
               [1, 2],
            ],
            1,
         ],
      ])(
         'numberOfWeakCharactersBF()',
         (properties: number[][], expected: number) => {
            expect(numberOfWeakCharacters(properties)).toBe(expected);
         }
      );
   });
});
