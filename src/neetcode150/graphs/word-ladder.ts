type LadderNode = { current: string; transformations: number };

function ladderLength(
  beginWord: string,
  endWord: string,
  wordList: string[]
): number {
  const wordSet = new Set<string>(wordList);
  // this is a BFS since this involves graphs and returning the shortest possible selection
  const queue: LadderNode[] = [];

  queue.push({ current: beginWord, transformations: 1 });

  if (wordSet.has(beginWord)) {
    wordSet.delete(beginWord);
  }

  while (queue.length) {
    const { current, transformations } = queue.shift() as LadderNode;

    if (current === endWord) {
      return transformations;
    }

    for (let i = 0; i < current.length; i++) {
      const pre = current.substring(0, i);
      const post = current.substring(i + 1);

      for (let j = 0; j < 26; j++) {
        const ch = String.fromCharCode(j + 97);
        const next = `${pre}${ch}${post}`;
        if (wordSet.has(next)) {
          wordSet.delete(next);
          queue.push({ current: next, transformations: transformations + 1 });
        }
      }
    }
  }

  return 0;
}

export { ladderLength };
