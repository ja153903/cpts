function isAnagram(s: string, t: string): boolean {
  const frequency = new Map<string, number>();

  for (const ch of s) {
    frequency.set(ch, (frequency.get(ch) ?? 0) + 1);
  }

  for (const ch of t) {
    if (!frequency.has(ch)) {
      return false;
    }

    const count = frequency.get(ch);
    if (!count || count === 0) {
      return false;
    }

    frequency.set(ch, count - 1);
  }

  for (const value of frequency.values()) {
    if (value !== 0) {
      return false;
    }
  }

  return true;
}

export { isAnagram };
