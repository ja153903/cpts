// NOTE: This greedy solution might not be the way to go about this
import { PriorityQueue } from '~/utility/priority-queue';

// TODO: Revisit with using priority queue
function furthestBuildingGreedy(
  heights: number[],
  bricks: number,
  ladders: number
): number {
  // starting at index 0, we're trying to see how far we can get
  // at each step we can do either of the following
  // 1. if heights[i] >= heights[i + 1], we just drop down to the next building
  // 2. if heights[i] < heights[i + 1], then we either use a ladder
  //    or we use a (heights[i + 1] - heights[i]) bricks
  //
  // This problem should require us to figure out how to optimally use the
  // ladders and bricks
  let reach = 0;

  let heightItr = 1;

  while (heightItr < heights.length) {
    const diff = Math.max(heights[heightItr] - heights[heightItr - 1], 0);

    if (diff === 0) {
      reach++;
    } else {
      if (ladders > 0 && diff >= bricks) {
        ladders--;
      } else if (bricks > 0 && diff <= bricks) {
        bricks -= diff;
      } else {
        if (ladders > 0) {
          ladders--;
        } else {
          break;
        }
      }

      reach++;
    }

    heightItr++;
  }

  return reach;
}

function furthestBuilding(
  heights: number[],
  bricks: number,
  ladders: number
): number {
  const pq = new PriorityQueue<number>((a, b) => a < b);

  for (let i = 0; i < heights.length - 1; i++) {
    const diff = heights[i + 1] - heights[i];

    if (diff > 0) {
      pq.insert(diff);
    }

    if (pq.size > ladders) {
      bricks -= pq.remove() as number;
    }

    if (bricks < 0) {
      return i;
    }
  }

  return heights.length - 1;
}

export { furthestBuilding, furthestBuildingGreedy };
