function furthestBuilding(heights, bricks, ladders) {
  const pq = new PriorityQueue((a, b) => a < b);

  for (let i = 0; i < heights.length - 1; i++) {
    const diff = heights[i + 1] - heights[i];

    if (diff > 0) {
      pq.insert(diff);
    }

    if (pq.size > ladders) {
      bricks -= pq.remove();
    }

    if (bricks < 0) {
      return i;
    }
  }

  return heights.length - 1;
}

export { furthestBuilding };
