import { simplifyPath } from '../simplify-path';

describe('Simplify Path', () => {
  it.each([
    ['/home/', '/home'],
    ['/../', '/'],
    ['/home//foo', '/home/foo'],
  ])('simplifyPath(%s)', (path, expected) => {
    expect(simplifyPath(path)).toBe(expected);
  });
});
