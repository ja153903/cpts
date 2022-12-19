import { coinChange } from '../coin-change';

describe('Coin Change', () => {
   it('should pass some cases', () => {
      const coins = [1, 2, 5];
      const amount = 11;

      expect(coinChange(coins, amount)).toBe(3);
   });

   it('should pass some cases 2', () => {
      const coins = [2];
      const amount = 3;

      expect(coinChange(coins, amount)).toBe(-1);
   });

   it('should pass some cases 3', () => {
      const coins = [1];
      const amount = 0;

      expect(coinChange(coins, amount)).toBe(0);
   });
});
