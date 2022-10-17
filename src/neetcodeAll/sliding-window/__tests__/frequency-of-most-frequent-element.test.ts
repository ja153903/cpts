import { maxFrequency } from '../frequency-of-most-frequent-element';

describe('maxFrequency()', () => {
  it('should pass a basic case', () => {
    expect(maxFrequency([1, 2, 4], 5)).toBe(3);
  });
});
