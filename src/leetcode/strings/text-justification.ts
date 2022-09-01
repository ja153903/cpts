function fullJustify(words: string[], maxWidth: number): string[] {
  const result = new Array<string>();

  // Each line should have maxWidth characters
  // Pad spaces if needed to reach maxWidth
  // Extra spaces between words should be distributed as evenly as possible.
  // If the number of spaces on a line does not divide evenly between words,
  // the empty slots on the left will be assigned more spaces than the slots on the right.
  // For the last line of text, it should be left-justified, and no extra space is inserted between words.

  let currentLine = new Array<string>();

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    const currentBufferSize = getCurrentBufferSize(currentLine);

    if (
      isWordEligibleForCurrentLine(
        currentLine,
        word,
        maxWidth,
        currentBufferSize
      )
    ) {
      currentLine.push(word);
    } else {
      // we should push the current line to our result array, but we should format it first
      const justified = justifyLine(currentLine, maxWidth, currentBufferSize);
      currentLine = [word];

      result.push(justified);
    }
  }

  if (currentLine.length) {
    result.push(leftJustifyLine(currentLine, maxWidth));
  }

  return result;
}

function isWordEligibleForCurrentLine(
  currentLine: string[],
  word: string,
  maxWidth: number,
  currentBufferSize: number
) {
  const minimumNumberOfSpaces = currentLine.length - 1;

  const minimumNewBufferSize =
    currentBufferSize + minimumNumberOfSpaces + word.length + 1;

  if (minimumNewBufferSize > maxWidth) {
    return false;
  }

  return true;
}

function justifyLine(
  currentLine: string[],
  maxWidth: number,
  currentBufferSize: number
): string {
  // when we're trying to justify a line, we should figure out if we can have an even
  // number of spaces between each word.
  // Suppose the current line is [jaime, is, valorant] and maxWidth = 50
  // then the maxWidth - currentBufferSize is the number of spaces we need
  let justified = '';
  const numSpaces = maxWidth - currentBufferSize;
  const numWords = currentLine.length;

  if (numWords === 1) {
    return `${currentLine[0]}${' '.repeat(numSpaces)}`;
  }

  const spacesBetween = Math.floor(numSpaces / (numWords - 1));
  let remainingSpaces = numSpaces % (numWords - 1);

  // we should distribute the remaining spaces among the number of words

  const spacesToAdd = ' '.repeat(spacesBetween);

  for (let i = 0; i < numWords; i++) {
    if (remainingSpaces > 0) {
      justified += `${currentLine[i]}${spacesToAdd}${' '}`;
      remainingSpaces--;
    } else if (i === numWords - 1) {
      justified += currentLine[i];
    } else {
      justified += `${currentLine[i]}${spacesToAdd}`;
    }
  }

  return justified;
}

function leftJustifyLine(currentLine: string[], maxWidth: number): string {
  const lineAsStr = currentLine.join(' ');
  const currentLineSize = lineAsStr.length;

  if (maxWidth - currentLineSize > 0) {
    return `${lineAsStr}${' '.repeat(maxWidth - currentLineSize)}`;
  }

  return lineAsStr;
}

function getCurrentBufferSize(currentLine: string[]): number {
  return currentLine.reduce((acc, word) => acc + word.length, 0);
}

export { fullJustify };
