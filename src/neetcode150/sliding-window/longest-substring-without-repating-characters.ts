function lengthOfLongestSubstring(s: string): number {
  const map: Map<string, number> = new Map();

  let lenSubStr = 0;
  let start = 0;

  for (let end = 0; end < s.length; end++) {
    // if we've seen the current character before,
    // then we should update the start node to either
    // the last time we've seen the last character
    // or keep it the same whichever is higher
    // the reason we want to do this is because if the last time
    // we've seen a character is way before and the start node
    // has advanced to be further than that initial character's position
    // then we know we should not update the start node to go back there
    if (map.has(s[end])) {
      start = Math.max(start, map.get(s[end])! + 1);
    }

    lenSubStr = Math.max(lenSubStr, end - start + 1);
    map.set(s[end], end);
  }

  return lenSubStr;
}

export { lengthOfLongestSubstring };
