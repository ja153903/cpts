import { threeSumMulti } from '../three-sum-with-multiplicity';

describe('Three Sum with Multiplicity', () => {
  it('should pass some cases', () => {
    const arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
    const target = 8;

    expect(threeSumMulti(arr, target)).toBe(20);
  });

  it('should pass another case', () => {
    const arr = [2, 1, 3];
    const target = 6;

    expect(threeSumMulti(arr, target)).toBe(1);
  });
});
