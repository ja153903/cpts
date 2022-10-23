function countBinarySubstrings(s: string): number {
  let result = 0;
  let prev = 0;
  let cur = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      cur++;
    } else {
      result += Math.min(prev, cur);
      prev = cur;
      cur = 1;
    }
  }

  return result + Math.min(prev, cur);
}

export { countBinarySubstrings };
