function minEatingSpeed(piles: number[], h: number): number {
  // at any time we can choose from [1, max(piles)] of bananas to eat
  let maxPile = Math.max(...piles);
  let left = 1;
  let right = maxPile;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);

    if (canFinish(piles, mid, h)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return right;
}

function canFinish(piles: number[], k: number, h: number): boolean {
  let hoursNeeded = 0;

  for (const pile of piles) {
    hoursNeeded += Math.floor(pile / k);
    if (pile % k > 0) {
      hoursNeeded += 1;
    }
  }

  return hoursNeeded <= h;
}

export { minEatingSpeed };
