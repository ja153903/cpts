import { canFinish } from '../course-schedule';

describe('Course Schedule', () => {
  it('should pass some cases', () => {
    expect(canFinish(2, [[1, 0]])).toBeTruthy();
    expect(
      canFinish(2, [
        [1, 0],
        [0, 1],
      ])
    ).toBeFalsy();
  });
});
