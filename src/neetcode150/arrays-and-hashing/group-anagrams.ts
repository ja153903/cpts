function groupAnagrams(strs: string[]): string[][] {
  const anagrams: Map<string, Array<string>> = new Map();

  for (const str of strs) {
    const sortedStr = str
      .split('')
      .sort((a, b) => a.localeCompare(b))
      .join('');

    if (!anagrams.has(sortedStr)) {
      anagrams.set(sortedStr, []);
    }

    anagrams.get(sortedStr)?.push(str);
  }

  return [...anagrams.values()];
}

export { groupAnagrams };
