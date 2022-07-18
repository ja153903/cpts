import { smallestTrimmedNumbers } from '../leetcode-2343';

describe('2343. Query Kth Smallest Trimmed Number', () => {
  it('should pass sample case 1', () => {
    const nums = ['102', '473', '251', '814'];
    const queries = [
      [1, 1],
      [2, 3],
      [4, 2],
      [1, 2],
    ];
    const expected = [2, 2, 1, 0];

    expect(smallestTrimmedNumbers(nums, queries)).toEqual(expected);
  });

  it('should pass sample case 2', () => {
    const nums = ['24', '37', '96', '04'];
    const queries = [
      [2, 1],
      [2, 2],
    ];
    const expected = [3, 0];

    expect(smallestTrimmedNumbers(nums, queries)).toEqual(expected);
  });

  it('should pass sample case 3', () => {
    const nums = [
      '22222222222222222222222222222222222222222222222225',
      '22222222222222222222222222222222222222222222222221',
      '22222222222222222222222222222222222222222222222223',
      '22222222222222222222222222222222222222222222222228',
      '22222222222222222222222222222222222222222222222226',
    ];
    const queries = [
      [1, 40],
      [3, 40],
      [2, 40],
      [5, 40],
      [4, 40],
    ];
    const expected = [1, 0, 2, 3, 4];

    expect(smallestTrimmedNumbers(nums, queries)).toEqual(expected);
  });
});
