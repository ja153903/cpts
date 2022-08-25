const ROMAN_TO_NUMBER: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(s: string): number {
  let result = ROMAN_TO_NUMBER[s[s.length - 1]];

  for (let i = s.length - 2; i >= 0; i--) {
    result +=
      ROMAN_TO_NUMBER[s[i]] >= ROMAN_TO_NUMBER[s[i + 1]]
        ? ROMAN_TO_NUMBER[s[i]]
        : -ROMAN_TO_NUMBER[s[i]];
  }

  return result;
}

export { romanToInt };
