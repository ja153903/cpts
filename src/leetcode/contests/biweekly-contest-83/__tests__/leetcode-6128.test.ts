import { bestHand } from '../leetcode-6128';

describe('6128. Best Poker Hand', () => {
  it('test case 1', () => {
    const ranks = [13, 2, 3, 1, 9];
    const suits = ['a', 'a', 'a', 'a', 'a'];
    const expected = 'Flush';

    expect(bestHand(ranks, suits)).toBe(expected);
  });

  it('test case 2', () => {
    const ranks = [4, 4, 2, 4, 4];
    const suits = ['d', 'a', 'a', 'b', 'c'];
    const expected = 'Three of a Kind';

    expect(bestHand(ranks, suits)).toBe(expected);
  });
});
