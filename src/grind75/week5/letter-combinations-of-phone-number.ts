const DIGIT_TO_PHONE_LETTER = new Map<string, string>([
  ['2', 'abc'],
  ['3', 'def'],
  ['4', 'ghi'],
  ['5', 'jkl'],
  ['6', 'mno'],
  ['7', 'pqrs'],
  ['8', 'tuv'],
  ['9', 'wxyz'],
]);

function letterCombinations(digits: string): string[] {
  if (!digits.length) {
    return [];
  }

  const result: string[] = [];
  result.push('');

  for (const digit of digits) {
    const chars = DIGIT_TO_PHONE_LETTER.get(digit) as string;
    const size = result.length;

    for (let i = 0; i < size; i++) {
      const front = result.shift() as string;
      for (const char of chars) {
        result.push(`${front}${char}`);
      }
    }
  }

  return result;
}

export { letterCombinations };
