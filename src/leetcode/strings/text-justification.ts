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

    if (isWordEligibleForCurrentLine(currentLine, word, maxWidth)) {
      currentLine.push(word);
    } else {
      if (i !== words.length - 1) {
        // we should push the current line to our result array, but we should format it first
        const justified = justifyLine(currentLine, maxWidth);
        currentLine = [word];

        result.push(justified);
      } else {
        const leftJustified = leftJustifyLine(currentLine, maxWidth);
        result.push(leftJustified);
      }
    }
  }

  return result;
}

function isWordEligibleForCurrentLine(
  currentLine: string[],
  word: string,
  maxWidth: number
) {
  const currentBufferSize = currentLine.reduce(
    (acc, word) => acc + word.length,
    0
  );
  const minimumNumberOfSpaces = currentLine.length - 1;

  const minimumNewBufferSize =
    currentBufferSize + minimumNumberOfSpaces + word.length + 1;

  if (minimumNewBufferSize > maxWidth) {
    return false;
  }

  return true;
}

// TODO: Implement this function; Ideally this will be the crux of the problem
function justifyLine(currentLine: string[], maxWidth: number): string {
  return '';
}

function leftJustifyLine(currentLine: string[], maxWidth: number): string {
  const lineAsStr = currentLine.join(' ');
  const currentLineSize = lineAsStr.length;

  if (maxWidth - currentLineSize > 0) {
    return `${lineAsStr}${' '.repeat(maxWidth - currentLineSize)}`;
  }

  return lineAsStr;
}

export { fullJustify };
