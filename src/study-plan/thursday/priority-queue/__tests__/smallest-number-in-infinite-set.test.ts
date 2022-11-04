import { SmallestInfiniteSet } from '../smallest-number-in-infinite-set';

describe('SmallestInfiniteSet', () => {
  it('should pass a sample flow', () => {
    const set = new SmallestInfiniteSet();

    set.addBack(2);
    expect(set.popSmallest()).toBe(1);
    expect(set.popSmallest()).toBe(2);
    expect(set.popSmallest()).toBe(3);

    set.addBack(1);

    expect(set.popSmallest()).toBe(1);
    expect(set.popSmallest()).toBe(4);
    expect(set.popSmallest()).toBe(5);
  });
});
