function numMatchingSubseq(s: string, words: string[]): number {
  const matchingSubSeqs: Set<string> = new Set();
  const nonMatchingSubSeqs: Set<string> = new Set();

  let result = 0;

  for (const word of words) {
    if (nonMatchingSubSeqs.has(word)) {
      continue;
    } else if (matchingSubSeqs.has(word)) {
      result++;
    } else {
      const doesItMatch = isSubsequence(s, word);
      if (doesItMatch) {
        matchingSubSeqs.add(word);
        result++;
      } else {
        nonMatchingSubSeqs.add(word);
      }
    }
  }

  return result;
}

function isSubsequence(s: string, t: string): boolean {
  if (t.length > s.length) {
    return false;
  }

  if (t.length === s.length) {
    return s === t;
  }

  // we should figure out if t is a subsequence in s
  let i = 0;
  let j = 0;

  while (j < t.length && i < s.length) {
    if (s[i] === t[j]) {
      j++;
    }

    i++;
  }

  return j === t.length;
}

export { numMatchingSubseq };
