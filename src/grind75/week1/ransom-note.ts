function canConstruct(ransomNote: string, magazine: string): boolean {
  const freq = new Array<number>(26).fill(0);

  for (const ch of magazine) {
    const index = ch.charCodeAt(0) - 97;
    freq[index]++;
  }

  for (const ch of ransomNote) {
    const index = ch.charCodeAt(0) - 97;
    if (freq[index] === 0) {
      return false;
    }

    freq[index]--;
  }

  return true;
}

export { canConstruct };
