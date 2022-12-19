import { maxSlidingWindow } from '../sliding-window-maximum';

describe('Sliding window Maximum', () => {
  it('should pass some basic tests', () => {
    expect(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)).toEqual([
      3, 3, 5, 5, 6, 7,
    ]);

    expect(maxSlidingWindow([1], 1)).toEqual([1]);
  });
});
