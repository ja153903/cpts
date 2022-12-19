import { trap } from '../trapping-rain-water';

describe('Trapping Rainwater', () => {
  it('should pass some tests', () => {
    const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
    expect(trap(height)).toBe(6);
  });
});
