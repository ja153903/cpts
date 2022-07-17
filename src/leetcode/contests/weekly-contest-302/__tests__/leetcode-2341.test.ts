import { numberOfPairs } from '../leetcode-2341';

describe('2341. Maximum Number of Pairs in Array', () => {
  it('should pass a sample case', () => {
    const nums = [1, 3, 2, 1, 3, 2, 2];
    expect(numberOfPairs(nums)).toEqual([3, 1]);
  });
});
