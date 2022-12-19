// we should sort the intervals by
// the beginning of the interval and then by the end
// suppose that we have something like: [[0,30],[5,10],[15,20]]
// if anything overlaps, then we return false
function canAttendMeetings(intervals: number[][]): boolean {
   intervals.sort((a, b) => a[0] - b[0]);

   for (let i = 1; i < intervals.length; i++) {
      const prev = intervals[i - 1];
      const curr = intervals[i];

      if (curr[0] < prev[1]) {
         return false;
      }
   }

   return true;
}

export { canAttendMeetings };
