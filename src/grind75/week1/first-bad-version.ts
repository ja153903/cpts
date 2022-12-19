const solution = function (isBadVersion: (n: number) => boolean) {
  return function (n: number): number {
    let left = 1;
    let right = n;

    let firstBadVersion = -1;

    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      if (isBadVersion(mid)) {
        firstBadVersion = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return firstBadVersion;
  };
};

export { solution };
