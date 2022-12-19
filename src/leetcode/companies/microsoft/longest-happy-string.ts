function longestDiverseString(a: number, b: number, c: number): string {
  const frequencies: [string, number][] = [
    ['a', a],
    ['b', b],
    ['c', c],
  ];

  const result: string[] = [];

  while (true) {
    frequencies.sort((a, b) => b[1] - a[1]);
    const i = result.length;
    let char;

    // if we've already used the most frequent value,
    // in the last two indices, then we should
    // use the second most frequent value
    if (
      result.length > 1 &&
      result[i - 1] === result[i - 2] &&
      result[i - 1] === frequencies[0][0]
    ) {
      char = frequencies[1];
    } else {
      char = frequencies[0];
    }

    // if the count is 0, then we're done
    if (char[1] === 0) {
      break;
    }

    // otherwise add the character to the result
    result.push(char[0]);
    char[1]--;
  }

  return result.join('');
}

export { longestDiverseString };
