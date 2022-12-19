function lengthOfLongestSubstring(s: string): number {
  // the idea with this question is to keep track of the last time we've seen a character
  // from that point or the current start point we keep track of the longest distance between
  // characters via a sliding window
  let start = 0;
  let result = 0;

  const seen = new Map<string, number>();

  for (let end = 0; end < s.length; end++) {
    if (seen.has(s[end])) {
      start = Math.max(start, seen.get(s[end])! + 1);
    }

    result = Math.max(result, end - start + 1);
    seen.set(s[end], end);
  }

  return result;
}

export { lengthOfLongestSubstring };
