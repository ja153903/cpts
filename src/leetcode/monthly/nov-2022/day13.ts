function reverseWords(s: string): string {
  const trimmed = s.trim();

  const words: string[] = [];
  let current: string[] = [];

  for (let i = 0; i < trimmed.length; i++) {
    if (trimmed[i] !== ' ') {
      current.push(trimmed[i]);
    } else {
      if (current.length > 0) {
        words.push(current.join(''));
        current = [];
      }
    }
  }

  if (current.length > 0) {
    words.push(current.join(''));
  }

  return words.reverse().join(' ');
}

export { reverseWords };
