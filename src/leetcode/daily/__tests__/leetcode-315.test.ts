import { countSmaller } from '../leetcode-315';

describe('315. Count of Smaller Numbers after Self', () => {
  it('should pass sample case', () => {
    const nums = [5, 2, 6, 1];
    const expected = [2, 1, 1, 0];

    expect(countSmaller(nums)).toEqual(expected);
  });

  it('should pass sample case 2', () => {
    const nums = [-1];
    const expected = [0];

    expect(countSmaller(nums)).toEqual(expected);
  });

  it('should pass sample case 3', () => {
    const nums = [-1, -1];
    const expected = [0, 0];

    expect(countSmaller(nums)).toEqual(expected);
  });
});
