import { numberOfPairs } from '../leetcode-2341';

describe('2341. Maximum Number of Pairs in Array', () => {
  it('should pass a sample case', () => {
    const nums = [1, 3, 2, 1, 3, 2, 2];
    expect(numberOfPairs(nums)).toEqual([3, 1]);
  });

  it('should pass another sample case', () => {
    const nums = [1, 1];
    expect(numberOfPairs(nums)).toEqual([1, 0]);
  });

  it('should pass the last sample case', () => {
    const nums = [0];
    expect(numberOfPairs(nums)).toEqual([0, 1]);
  });
});
