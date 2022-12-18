function isSameSet(a: Set<string>, b: Set<string>): boolean {
  return a.size === b.size && [...a].every((item) => b.has(item));
}
function similarPairs(words: string[]): number {
  let result = 0;

  for (let i = 0; i < words.length; i++) {
    const a = new Set(words[i].split(''));

    for (let j = i + 1; j < words.length; j++) {
      const b = new Set(words[j].split(''));

      if (isSameSet(a, b)) {
        result++;
      }
    }
  }

  return result;
}

export { similarPairs };
