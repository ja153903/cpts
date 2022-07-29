function isAnagram(s: string, t: string): boolean {
  const counter = createCounter(s);

  for (const ch of t) {
    const count = counter.get(ch) ?? 0;

    if (count === 0) {
      return false;
    }

    counter.set(ch, count - 1);
  }

  return [...counter.values()].every((value) => value === 0);
}

function createCounter(s: string): Map<string, number> {
  const frequency: Map<string, number> = new Map();

  for (const ch of s) {
    frequency.set(ch, (frequency.get(ch) ?? 0) + 1);
  }

  return frequency;
}

export { isAnagram };
