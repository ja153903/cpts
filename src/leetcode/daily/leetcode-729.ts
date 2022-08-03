type Interval = { start: number; end: number };

class MyCalendar {
  private intervals: Interval[];

  constructor() {
    this.intervals = [];
  }

  book(start: number, end: number): boolean {
    if (this.size === 0) {
      this.intervals.push({ start, end });
      return true;
    }

    const intervals = [...this.intervals];

    intervals.push({ start, end });

    if (this.canInsertInterval(intervals)) {
      this.intervals = intervals;
      return true;
    }

    return false;
  }

  canInsertInterval(intervals: Interval[]) {
    intervals.sort((a, b) => {
      if (a.start === b.start) {
        return a.end - b.end;
      }

      return a.start - b.start;
    });

    // once sorted, we want to know if we can merge these values
    // if we can merge values, then we know we have an overlap
    const stack: Interval[] = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
      // suppose that top of stack is [1, 2]
      // and that we're looking at [1, 3]
      const top = stack[stack.length - 1];

      // if the end of top of the stack is greater than the start
      // of the current interval
      if (top.end > intervals[i].start) {
        return false;
      }

      stack.push(intervals[i]);
    }

    return true;
  }

  get size() {
    return this.intervals.length;
  }
}

export { MyCalendar };
