import { Leaderboard } from '../design-a-leaderboard';

describe('Design A Leaderboard', () => {
   it('should pass a flow', () => {
      const leaderboard = new Leaderboard();

      leaderboard.addScore(1, 73);
      leaderboard.addScore(2, 56);
      leaderboard.addScore(3, 39);
      leaderboard.addScore(4, 51);
      leaderboard.addScore(5, 4);

      expect(leaderboard.top(1)).toBe(73);

      leaderboard.reset(1);
      leaderboard.reset(2);

      leaderboard.addScore(2, 51);

      expect(leaderboard.top(3)).toBe(141);
   });
});
