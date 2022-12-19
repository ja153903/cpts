import { numDecodings } from '../decode-ways';

describe('Decode Ways', () => {
  it('should pass test cases', () => {
    expect(numDecodings('12')).toBe(2);
    expect(numDecodings('226')).toBe(3);
    expect(numDecodings('06')).toBe(0);
  });
});
