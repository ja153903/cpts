import { repeatedCharacter } from '../leetcode-2351';

describe('2351. First Letter to Appear Twice', () => {
  it('test case 1', () => {
    const s = 'abccbaacz';
    expect(repeatedCharacter(s)).toBe('c');
  });

  it('test case 2', () => {
    const s = 'abcdd';
    expect(repeatedCharacter(s)).toBe('d');
  });
});
