function insert(intervals: number[][], newInterval: number[]): number[][] {
  if (newInterval.length === 0) {
    return intervals;
  }

  if (intervals.length === 0) {
    return [newInterval];
  }

  const mergedIntervals: number[][] = [];

  // find the appropriate place to insert the item
  // this could be before, after, or somewhere in the middle
  // then merge the intervals together

  // we know that from the beginning, these intervals are going to be non-overlapping
  for (let i = 0; i < intervals.length; i++) {
    // [[1, 5]], newInterval = [0, 0] or newInterval = [0, 1]
    if (i === 0 && intervals[i][0] >= newInterval[1]) {
      // then we should insert this before
      intervals.unshift(newInterval);
      break;
    } else if (
      i === intervals.length - 1 &&
      intervals[i][1] <= newInterval[0]
    ) {
      intervals.push(newInterval);
      break;
    } else if (intervals[i][1] >= newInterval[0]) {
      intervals.splice(i, 0, newInterval);
      break;
    }
  }

  mergedIntervals.push(intervals[0]);

  for (let i = 1; i < intervals.length; i++) {
    const top = mergedIntervals[mergedIntervals.length - 1];
    if (top[1] >= intervals[i][0]) {
      top[0] = Math.min(top[0], intervals[i][0]);
      top[1] = Math.max(top[1], intervals[i][1]);
    } else {
      mergedIntervals.push(intervals[i]);
    }
  }

  return mergedIntervals;
}

export { insert };
