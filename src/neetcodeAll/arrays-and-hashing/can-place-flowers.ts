/**
 *
 * You have a long flowerbed in which some of the plots are planted, and some are not.
 * However, flowers cannot be planted in adjacent plots.
 * Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty,
 * and an integer n, return if n new flowers can be planted in the flowerbed without violating
 * the no-adjacent-flowers rule.
 */
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  if (n === 0) {
    return true;
  }

  let count = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      const isLeftEmpty = i === 0 || (i > 0 && flowerbed[i - 1] === 0);
      const isRightEmpty =
        i === flowerbed.length - 1 ||
        (i < flowerbed.length - 1 && flowerbed[i + 1] === 0);

      if (isLeftEmpty && isRightEmpty) {
        flowerbed[i] = 1;
        count++;
      }
    }
  }

  return count >= n;
}

export { canPlaceFlowers };
