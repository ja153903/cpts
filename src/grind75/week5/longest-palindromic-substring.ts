function longestPalindrome(s: string): string {
  let maxStart = 0;
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    const { start: oddStart, length: oddLength } = extendPalindrome(s, i, i);
    const { start: evenStart, length: evenLength } = extendPalindrome(
      s,
      i,
      i + 1
    );

    if (oddLength > maxLength) {
      maxStart = oddStart;
      maxLength = oddLength;
    }

    if (evenLength > maxLength) {
      maxStart = evenStart;
      maxLength = evenLength;
    }
  }

  return s.substring(maxStart, maxStart + maxLength);
}

function extendPalindrome(
  s: string,
  left: number,
  right: number
): { start: number; length: number } {
  let start = 0;
  let end = 0;
  let length = 0;

  while (left >= 0 && right < s.length && s[left] === s[right]) {
    start = left;
    end = right;

    length = end - start + 1;

    left--;
    right++;
  }

  return { start, length };
}

export { longestPalindrome };
