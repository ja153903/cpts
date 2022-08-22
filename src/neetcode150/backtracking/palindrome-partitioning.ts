function partition(s: string): string[][] {
  const result: string[][] = [];

  backtrack(s, result, [''], 0);

  return result;
}

function backtrack(
  s: string,
  result: string[][],
  current: string[],
  start: number
) {
  if (s === current.join('')) {
    const isValidPalindrome = current.every((word) => isPalindrome(word));
    if (isValidPalindrome) {
      result.push([...current]);
    }

    return;
  }

  for (let i = start; i < s.length; i++) {
    const prev = current[current.length - 1];

    current[current.length - 1] = `${prev}${s[i]}`;

    backtrack(s, result, current, i + 1);

    current[current.length - 1] = prev;

    if (prev !== '') {
      current.push(s[i]);

      backtrack(s, result, current, i + 1);

      current.pop();
    }
  }
}

function isPalindrome(current: string): boolean {
  for (let i = 0, j = current.length - 1; i < j; i++, j--) {
    if (current[i] !== current[j]) {
      return false;
    }
  }

  return true;
}

export { partition };
