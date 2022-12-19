// we don't actually care about the values
// what we can do is to assign 1 value to 1 group, 2 to another, etc..
// this will end up satisfying the conditions we are working with
function maximumGroups(grades: number[]): number {
  let n = grades.length;
  let groups = 0;

  while (n >= groups + 1) {
    groups++;
    n -= groups;
  }

  return groups;
}

export { maximumGroups };
